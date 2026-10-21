"""
Pre-rendered landing sequence: the ISS over Earth, one continuous camera move
that the page scrubs through as you scroll (like Apple's product pages). The
browser only ever draws a picture, so it is smooth on any device.

Run with Blender's Python (Blender 4.2+ or `pip install bpy`):

    python scripts/landing/render.py OUT_DIR [--frames 0,45,90] [--scale 50] [--samples 32]

Inputs (relative to the repo root):
    public/textures/earth/*-8k.jpg   CI-built NASA textures (see fetch-earth-textures.mjs)
    public/textures/earth_bump_roughness_clouds_4096.jpg   ocean mask in G
    ISS model (glTF, joined parts; see scripts/blender/optimize_iss.py) via --iss
    constellation positions via --constellation (scripts/landing/constellation.mjs)

Writes OUT_DIR/f_###.png and OUT_DIR/track.json (label and focus positions per frame).

Scene units are kilometres, with the station at the origin (precision is best
there): it flies along +Y with +Z away from Earth. Instead of moving the
station, the planet and the Sun turn beneath it about a pivot at Earth's centre.
"""

import argparse
import json
import math
import os
import sys

import bpy
import bmesh
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Euler, Matrix, Quaternion, Vector

p = argparse.ArgumentParser()
p.add_argument('out')
p.add_argument('--iss', required=True)
p.add_argument('--constellation', required=True)
p.add_argument('--textures', default='public/textures')
p.add_argument('--frames', default='all')
p.add_argument('--scale', type=int, default=100)
p.add_argument('--samples', type=int, default=32)
p.add_argument('--width', type=int, default=1600)
p.add_argument('--height', type=int, default=900)
args = p.parse_args(sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:])

R = 6371.0
ALT = 420.0
C = Vector((0, 0, -(R + ALT)))  # Earth's centre
ISS_SPAN = 0.109  # km
SEG = 45  # frames per chapter
LAST = SEG * 4

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

# ------------------------------------------------------------------ render settings
scene.render.engine = 'CYCLES'
scene.cycles.device = 'CPU'
scene.cycles.samples = args.samples
scene.cycles.use_denoising = True
scene.cycles.max_bounces = 4
scene.cycles.transparent_max_bounces = 8
scene.render.resolution_x = args.width
scene.render.resolution_y = args.height
scene.render.resolution_percentage = args.scale
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_depth = '8'
scene.view_settings.view_transform = 'AgX'
try:
    scene.view_settings.look = 'AgX - Medium High Contrast'
except TypeError:
    pass


def node(nt, kind, **inputs):
    n = nt.nodes.new(kind)
    for k, v in inputs.items():
        n.inputs[k].default_value = v
    return n


def image(nt, path, color=True):
    n = nt.nodes.new('ShaderNodeTexImage')
    n.image = bpy.data.images.load(os.path.abspath(path))
    n.image.colorspace_settings.name = 'sRGB' if color else 'Non-Color'
    n.interpolation = 'Cubic'
    return n


def link(nt, a, b):
    nt.links.new(a, b)


# ------------------------------------------------------------------ world: black space with stars
world = bpy.data.worlds.new('Space')
scene.world = world
world.use_nodes = True
wt = world.node_tree
wt.nodes.clear()
coord = wt.nodes.new('ShaderNodeTexCoord')
vor = node(wt, 'ShaderNodeTexVoronoi', Scale=900.0, Randomness=1.0)
vor.voronoi_dimensions = '3D'
link(wt, coord.outputs['Generated'], vor.inputs['Vector'])
star = node(wt, 'ShaderNodeMapRange', **{'From Min': 0.0, 'From Max': 0.035, 'To Min': 1.0, 'To Max': 0.0})
link(wt, vor.outputs['Distance'], star.inputs['Value'])
gate = node(wt, 'ShaderNodeMath')
gate.operation = 'POWER'
gate.inputs[1].default_value = 24.0
link(wt, star.outputs['Result'], gate.inputs[0])
sep = wt.nodes.new('ShaderNodeSeparateColor')
link(wt, vor.outputs['Color'], sep.inputs['Color'])
bright = node(wt, 'ShaderNodeMath')
bright.operation = 'MULTIPLY'
link(wt, gate.outputs[0], bright.inputs[0])
link(wt, sep.outputs['Red'], bright.inputs[1])
keep = node(wt, 'ShaderNodeMath')
keep.operation = 'GREATER_THAN'
keep.inputs[1].default_value = 0.6
link(wt, sep.outputs['Green'], keep.inputs[0])
lum = node(wt, 'ShaderNodeMath')
lum.operation = 'MULTIPLY'
link(wt, bright.outputs[0], lum.inputs[0])
link(wt, keep.outputs[0], lum.inputs[1])
bg = wt.nodes.new('ShaderNodeBackground')
bg.inputs['Color'].default_value = (0.9, 0.93, 1.0, 1)
strength = node(wt, 'ShaderNodeMath')
strength.operation = 'MULTIPLY'
strength.inputs[1].default_value = 0.6
link(wt, lum.outputs[0], strength.inputs[0])
link(wt, strength.outputs[0], bg.inputs['Strength'])
out = wt.nodes.new('ShaderNodeOutputWorld')
link(wt, bg.outputs[0], out.inputs['Surface'])

# ------------------------------------------------------------------ pivot: Earth and Sun turn together
pivot = bpy.data.objects.new('Pivot', None)
pivot.location = C
scene.collection.objects.link(pivot)

# Earth's own orientation inside the pivot: tilt so the ground track runs at the ISS's
# 51.6° inclination, and spin to choose what lies beneath the opening shot
EARTH_ROT = Euler((0.0, math.radians(38.4), math.radians(float(os.environ.get('SPIN', 180)))), 'ZYX')

# Sun direction in pivot space: the opening shot is in daylight (Sun 37° up) and the
# station reaches Earth's shadow, with the Sun on the limb, around frame 90
SUN = Vector((0.35, -0.937 * math.sin(0.876), 0.937 * math.cos(0.876))).normalized()

sun = bpy.data.objects.new('Sun', bpy.data.lights.new('Sun', 'SUN'))
sun.data.energy = 5.0
sun.data.angle = math.radians(0.53)
sun.data.color = (1.0, 0.97, 0.92)
sun.parent = pivot
sun.rotation_euler = SUN.to_track_quat('Z', 'Y').to_euler()
scene.collection.objects.link(sun)

# Sun lamps are invisible to the camera, so the visible disc is an emissive sphere
# far along the same direction, sized to the Sun's real 0.53° (glare is added later)
def sun_disc():
    disc = sphere('SunDisc', 150000 * math.tan(math.radians(0.265)), 48, 24)
    disc.parent = pivot
    disc.location = SUN * 150000
    disc.visible_shadow = False
    m = bpy.data.materials.new('SunDisc')
    m.use_nodes = True
    t = m.node_tree
    t.nodes.clear()
    e = t.nodes.new('ShaderNodeEmission')
    e.inputs['Color'].default_value = (1.0, 0.93, 0.82, 1)
    e.inputs['Strength'].default_value = 400.0
    o = t.nodes.new('ShaderNodeOutputMaterial')
    t.links.new(e.outputs[0], o.inputs['Surface'])
    disc.data.materials.append(m)


def sphere(name, radius, segments=256, rings=128):
    bm = bmesh.new()
    bm.loops.layers.uv.new('UVMap')  # calc_uvs only fills an existing layer
    bmesh.ops.create_uvsphere(bm, u_segments=segments, v_segments=rings, radius=radius, calc_uvs=True)
    for f in bm.faces:
        f.smooth = True
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    scene.collection.objects.link(ob)
    return ob


tex = args.textures
manifest = json.load(open(os.path.join(tex, 'earth/manifest.json')))
DAY = os.path.join(tex, f"earth/{manifest['day']}-8k.jpg")
NIGHT = os.path.join(tex, 'earth/night-8k.jpg')
CLOUDS = os.path.join(tex, 'earth/clouds-8k.jpg')
BRC = os.path.join(tex, 'earth_bump_roughness_clouds_4096.jpg')

sun_disc()
earth = sphere('Earth', R)
earth.parent = pivot
earth.rotation_euler = EARTH_ROT
# The Sun in the Earth's own frame, for the night-side mask
sun_local = (EARTH_ROT.to_matrix().inverted() @ SUN).normalized()


def night_mask(nt, lo, hi):
    """1 on the night side, 0 in daylight, from the object-space normal."""
    tc = nt.nodes.new('ShaderNodeTexCoord')
    norm = nt.nodes.new('ShaderNodeVectorMath')
    norm.operation = 'NORMALIZE'
    link(nt, tc.outputs['Object'], norm.inputs[0])
    dot = nt.nodes.new('ShaderNodeVectorMath')
    dot.operation = 'DOT_PRODUCT'
    dot.inputs[1].default_value = sun_local
    link(nt, norm.outputs[0], dot.inputs[0])
    m = node(nt, 'ShaderNodeMapRange', **{'From Min': lo, 'From Max': hi, 'To Min': 1.0, 'To Max': 0.0})
    link(nt, dot.outputs['Value'], m.inputs['Value'])
    return m.outputs['Result'], dot.outputs['Value']


mat = bpy.data.materials.new('Earth')
mat.use_nodes = True
nt = mat.node_tree
bsdf = nt.nodes['Principled BSDF']
day = image(nt, DAY)
link(nt, day.outputs['Color'], bsdf.inputs['Base Color'])
brc = image(nt, BRC, color=False)
sep = nt.nodes.new('ShaderNodeSeparateColor')
link(nt, brc.outputs['Color'], sep.inputs['Color'])
water = node(nt, 'ShaderNodeMapRange', **{'From Min': 0.25, 'From Max': 0.6, 'To Min': 0.28, 'To Max': 0.9})
link(nt, sep.outputs['Green'], water.inputs['Value'])
link(nt, water.outputs['Result'], bsdf.inputs['Roughness'])
bump = node(nt, 'ShaderNodeBump', Strength=0.25, Distance=2.0)
link(nt, sep.outputs['Red'], bump.inputs['Height'])
link(nt, bump.outputs['Normal'], bsdf.inputs['Normal'])
night = image(nt, NIGHT)
mask, _ = night_mask(nt, -0.12, 0.04)
lights = nt.nodes.new('ShaderNodeMix')
lights.data_type = 'RGBA'
lights.blend_type = 'MULTIPLY'
lights.inputs['Factor'].default_value = 1.0
link(nt, night.outputs['Color'], lights.inputs['A'])
lights.inputs['B'].default_value = (1.0, 0.7, 0.4, 1)
link(nt, lights.outputs['Result'], bsdf.inputs['Emission Color'])
glow = nt.nodes.new('ShaderNodeMath')
glow.operation = 'MULTIPLY'
glow.inputs[1].default_value = 2.5
link(nt, mask, glow.inputs[0])
link(nt, glow.outputs[0], bsdf.inputs['Emission Strength'])
earth.data.materials.append(mat)

clouds = sphere('Clouds', R + 7.0)
clouds.parent = earth
cm = bpy.data.materials.new('Clouds')
cm.use_nodes = True
ct = cm.node_tree
cb = ct.nodes['Principled BSDF']
cb.inputs['Base Color'].default_value = (0.95, 0.96, 0.98, 1)
cb.inputs['Roughness'].default_value = 1.0
ci = image(ct, CLOUDS, color=False)
# The source map carries a grey haze almost everywhere; keep only real cloud decks
ramp = node(ct, 'ShaderNodeMapRange', **{'From Min': 0.6, 'From Max': 0.97, 'To Min': 0.0, 'To Max': 1.0})
link(ct, ci.outputs['Color'], ramp.inputs['Value'])
thin = ct.nodes.new('ShaderNodeMath')
thin.operation = 'POWER'
thin.inputs[1].default_value = 1.4
link(ct, ramp.outputs['Result'], thin.inputs[0])
link(ct, thin.outputs[0], cb.inputs['Alpha'])
clouds.data.materials.append(cm)

# Atmosphere: a thin emissive shell, brightest at the limb, blue by day and amber at the terminator
atmo = sphere('Atmosphere', R + 60.0, 192, 96)
atmo.parent = earth
am = bpy.data.materials.new('Atmosphere')
am.use_nodes = True
at = am.node_tree
at.nodes.clear()
lw = node(at, 'ShaderNodeLayerWeight', Blend=0.5)
rim = at.nodes.new('ShaderNodeMath')
rim.operation = 'POWER'
rim.inputs[1].default_value = 7.0
link(at, lw.outputs['Facing'], rim.inputs[0])
_, sun_dot = night_mask(at, 0, 1)
lit = node(at, 'ShaderNodeMapRange', **{'From Min': -0.25, 'From Max': 0.2, 'To Min': 0.0, 'To Max': 1.0})
link(at, sun_dot, lit.inputs['Value'])
tint = node(at, 'ShaderNodeMapRange', **{'From Min': -0.1, 'From Max': 0.25, 'To Min': 0.0, 'To Max': 1.0})
link(at, sun_dot, tint.inputs['Value'])
col = at.nodes.new('ShaderNodeMix')
col.data_type = 'RGBA'
col.inputs['A'].default_value = (1.0, 0.42, 0.15, 1)
col.inputs['B'].default_value = (0.1, 0.32, 1.0, 1)
link(at, tint.outputs['Result'], col.inputs['Factor'])
amount = at.nodes.new('ShaderNodeMath')
amount.operation = 'MULTIPLY'
link(at, rim.outputs[0], amount.inputs[0])
link(at, lit.outputs['Result'], amount.inputs[1])
power = at.nodes.new('ShaderNodeMath')
power.operation = 'MULTIPLY'
power.inputs[1].default_value = 2.2
link(at, amount.outputs[0], power.inputs[0])
em = at.nodes.new('ShaderNodeEmission')
link(at, col.outputs['Result'], em.inputs['Color'])
link(at, power.outputs[0], em.inputs['Strength'])
tr = at.nodes.new('ShaderNodeBsdfTransparent')
add = at.nodes.new('ShaderNodeAddShader')
link(at, em.outputs[0], add.inputs[0])
link(at, tr.outputs[0], add.inputs[1])
ao = at.nodes.new('ShaderNodeOutputMaterial')
link(at, add.outputs[0], ao.inputs['Surface'])
atmo.data.materials.append(am)
atmo.visible_shadow = False

# ------------------------------------------------------------------ constellation: every tracked object
con = json.load(open(args.constellation))
ico = bmesh.new()
bmesh.ops.create_icosphere(ico, subdivisions=1, radius=17.0)
ico_v = [v.co.copy() for v in ico.verts]
ico_f = [[v.index for v in f.verts] for f in ico.faces]
ico.free()
satellites = []
for gi, group in enumerate(con['groups']):
    verts, faces = [], []
    for x, y, z in group['points']:
        base = len(verts)
        c = Vector((x, y, z))
        verts.extend(c + v for v in ico_v)
        faces.extend([base + i for i in f] for f in ico_f)
    me = bpy.data.meshes.new(f'Sats{gi}')
    me.from_pydata(verts, [], faces)
    ob = bpy.data.objects.new(f'Sats{gi}', me)
    ob.parent = pivot
    ob.visible_shadow = False
    sm = bpy.data.materials.new(f'Sats{gi}')
    sm.use_nodes = True
    st = sm.node_tree
    st.nodes.clear()
    e = st.nodes.new('ShaderNodeEmission')
    h = group['color'].lstrip('#')
    srgb = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    e.inputs['Color'].default_value = (*[c ** 2.2 for c in srgb], 1)
    e.inputs['Strength'].default_value = 6.0
    o = st.nodes.new('ShaderNodeOutputMaterial')
    st.links.new(e.outputs[0], o.inputs['Surface'])
    me.materials.append(sm)
    scene.collection.objects.link(ob)
    satellites.append(ob)

# ------------------------------------------------------------------ the station
bpy.ops.import_scene.gltf(filepath=os.path.abspath(args.iss))
scenery = {'Earth', 'Clouds', 'Atmosphere', 'SunDisc'}
parts = [o for o in scene.objects if o.type == 'MESH' and o.name not in scenery and not o.name.startswith('Sats')]
lo = Vector((1e9,) * 3)
hi = Vector((-1e9,) * 3)
for o in parts:
    for corner in o.bound_box:
        w = o.matrix_world @ Vector(corner)
        lo = Vector(map(min, lo, w))
        hi = Vector(map(max, hi, w))
centre = (lo + hi) / 2
k = ISS_SPAN / max(hi - lo)
station = bpy.data.objects.new('Station', None)
scene.collection.objects.link(station)
for o in parts:
    if o.parent is None:
        mw = o.matrix_world.copy()
        o.parent = station
        o.matrix_world = Matrix.Translation(-centre) @ mw
station.scale = (k, k, k)
# A slight yaw so the opening shot sees the modules, not just the truss end-on
station.rotation_euler = (0, 0, math.radians(-12))
bpy.context.view_layer.update()

# Label anchors: centroids of the parts each label points at (by material name)
def anchor(pattern, along=None):
    import re
    pts = []
    for o in parts:
        mats = [m.name if m else '' for m in o.data.materials]
        mw = o.matrix_world
        for poly in o.data.polygons:
            if re.search(pattern, mats[poly.material_index] if poly.material_index < len(mats) else ''):
                pts.append(mw @ o.data.vertices[poly.vertices[0]].co)
    if not pts:
        return Vector((0, 0, 0))
    if along is None:
        return sum(pts, Vector()) / len(pts)
    a = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    b = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    d = b - a
    axis = max(range(3), key=lambda i: d[i])
    mid = (a + b) / 2
    mid[axis] = a[axis] + d[axis] * along
    return mid


ANCHORS = {'a': anchor(r'^IROSA', 0.1), 'b': anchor(r'^Node\.Cupola'), 'c': anchor(r'^JEM_PM$')}

# ------------------------------------------------------------------ camera and motion
cam = bpy.data.objects.new('Camera', bpy.data.cameras.new('Camera'))
cam.data.lens = 35
cam.data.sensor_width = 36
cam.data.clip_start = 0.002
cam.data.clip_end = 200000
scene.collection.objects.link(cam)
scene.camera = cam

# Orbit progress (radians the planet turns beneath the station) at each chapter
THETA = [0.0, 0.18, 1.02, 1.12, 1.18]


def sun_world(theta):
    return (Matrix.Rotation(theta, 3, 'X') @ SUN).normalized()


def look(pos, target):
    return (target - pos).normalized().to_track_quat('-Z', 'Y')


# Chapter poses: camera position, look target, lens shift (moves the subject beside the copy)
def far_pose(theta, angle, dist, lift):
    d = sun_world(theta)
    d = (Matrix.Rotation(angle, 3, 'Z') @ d)
    d = (d + Vector((0, 0, lift))).normalized()
    return C + d * dist, C.copy()


s2 = sun_world(THETA[2])
# High enough that the station sits on the glowing limb (19° below level), just right of the Sun
SUNSET_CAM = Vector((-0.06, 0.34, 0.12))
POSES = [
    # 01 hero: trailing the station, Earth's limb across the frame
    # (looking ~15° down: the horizon sits in the lower third, the station at mid-height)
    (Vector((-0.3, -0.32, 0.12)), Vector((0.0, 0.0, 0.0)), -0.2),
    # 02 the station: close, from the side
    (Vector((0.26, -0.15, 0.07)), Vector((0.0, 0.01, 0.0)), -0.2),
    # 03 sunset: in front of the station looking back at the Sun on the limb
    # (aimed between the station and the Sun, which sits a few degrees above the limb)
    (SUNSET_CAM, SUNSET_CAM + ((-SUNSET_CAM).normalized() + s2).normalized(), 0.18),
    # 04 everything: the whole planet in its shell of satellites
    (*far_pose(THETA[3], 0.55, 26000, 0.35), 0.2),
    # 05 explore
    (*far_pose(THETA[4], 0.9, 21000, 0.5), -0.24),
]


def ease(t):
    return t * t * (3 - 2 * t)


def geo(a, b, t):
    """Geometric interpolation, for distances that span orders of magnitude."""
    return a * (b / a) ** t


def orbit(p0, p1, t, about):
    """Move between two camera positions around a point, keeping distance smooth."""
    d0, d1 = p0 - about, p1 - about
    return about + d0.normalized().slerp(d1.normalized(), t) * (d0.length + (d1.length - d0.length) * t)


def turn(a, b, t):
    """Blend look directions (not target points), so the subject never swings out of frame."""
    return a.normalized().slerp(b.normalized(), t)


ISS = Vector((0, 0, 0))
RISE_TO = 3000.0  # km from the station at the end of the first half of the pull-back


def pose_at(f):
    i = min(int(f // SEG), 3)
    u = (f - i * SEG) / SEG
    t = ease(u)
    (p0, t0, s0), (p1, t1, s1) = POSES[i], POSES[i + 1]
    theta = THETA[i] + (THETA[i + 1] - THETA[i]) * u
    shift = s0 + (s1 - s0) * t
    if i < 2:
        # Close work: circle the station
        pos = orbit(p0, p1, t, ISS)
        target = pos + turn(t0 - p0, t1 - p1, t)
    elif i == 2:
        # Pull-back. First rise away from the station, up and back, while it shrinks...
        rise = (p0.normalized() + Vector((0, 0, 1.2))).normalized()
        if t < 0.5:
            k = t / 0.5
            pos = ISS + p0.normalized().slerp(rise, ease(k)) * geo(p0.length, RISE_TO, k)
            dist = pos.length
            w = min(1.0, max(0.0, (math.log(dist) - math.log(2)) / (math.log(RISE_TO * 0.8) - math.log(2))))
            target = pos + turn(t0 - p0, C - pos, ease(w))
        else:
            # ...then arc round the planet to the sunlit side
            k = ease((t - 0.5) / 0.5)
            a, b = ISS + rise * RISE_TO - C, p1 - C
            pos = C + a.normalized().slerp(b.normalized(), k) * geo(a.length, b.length, k)
            target = C.copy()
    else:
        pos = orbit(p0, p1, t, C)
        target = C.copy()
    return pos, target, shift, theta


for name in filter(None, os.environ.get('HIDE', '').split(',')):
    bpy.data.objects[name].hide_render = True

frames = range(0, LAST + 1) if args.frames == 'all' else [int(x) for x in args.frames.split(',')]
os.makedirs(args.out, exist_ok=True)
track = {'frames': LAST + 1, 'width': args.width, 'height': args.height, 'labels': {k: [] for k in ANCHORS}, 'focus': []}

for f in range(0, LAST + 1):
    pos, target, shift, theta = pose_at(f)
    cam.location = pos
    cam.rotation_mode = 'QUATERNION'
    cam.rotation_quaternion = look(pos, target)
    cam.data.shift_x = shift
    pivot.rotation_euler = (theta, 0, 0)
    for s in satellites:
        s.hide_render = (pos - C).length < 12000
    bpy.context.view_layer.update()

    # Where the labels and the subject land on screen (0–1, origin top-left)
    for k, a in ANCHORS.items():
        v = world_to_camera_view(scene, cam, a)
        track['labels'][k].append([round(v.x, 4), round(1 - v.y, 4)] if v.z > 0 else None)
    subject = Vector((0, 0, 0)).lerp(C, min(1.0, max(0.0, (pos.length - 2) / 4000)))
    v = world_to_camera_view(scene, cam, subject)
    track['focus'].append([round(min(max(v.x, 0), 1), 4), round(min(max(1 - v.y, 0), 1), 4)])

    if f in frames:
        scene.render.filepath = os.path.join(args.out, f'f_{f:03d}.png')
        bpy.ops.render.render(write_still=True)
        print('rendered', f, flush=True)

json.dump(track, open(os.path.join(args.out, 'track.json'), 'w'))
print('done')
