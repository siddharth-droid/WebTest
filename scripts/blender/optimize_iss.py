"""
Prepare NASA's high-detail ISS for real-time use.

The source has hundreds of separate parts; each one is a GPU draw call (and
another for every shadow pass). This script:

  1. decimates dense parts (edge collapse keeps UV and normal seams intact),
  2. joins each solar wing (array + iROSA overlay + details) into one object
     named "wing-<truss>-<array>" so the app can still turn it to face the Sun,
  3. joins everything else into a single object; on export it splits only by
     material, so ~555 draw calls become a few dozen,
  4. bakes ray-traced ambient occlusion into vertex colours (Cycles).

    python scripts/blender/optimize_iss.py in.glb out.glb --ratio 0.07
"""
import argparse
import re
import sys
import time

import bpy

argv = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else sys.argv[1:]
ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("dst")
ap.add_argument("--ratio", type=float, default=0.07)
ap.add_argument("--min-faces", type=int, default=300)
ap.add_argument("--ao-reach", type=float, default=0.02)
ap.add_argument("--samples", type=int, default=32)
args = ap.parse_args(argv)


def wing_key(name):
    for pat in (r"^([PS]\d)_Array_(\d[AB])", r"^([PS]\d)_(\d[AB])_Array", r"^IROSA.*?([PS]\d)(\d[AB])"):
        m = re.match(pat, name)
        if m:
            return f"{m.group(1)}-{m.group(2)}"
    return None


bpy.ops.wm.read_factory_settings(use_empty=True)
t = time.time()
bpy.ops.import_scene.gltf(filepath=args.src)
print(f"imported in {time.time() - t:.0f}s")
scene = bpy.context.scene

# Apply all transforms so joining keeps everything in place
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.parent_clear(type="CLEAR_KEEP_TRANSFORM")
meshes = [o for o in scene.objects if o.type == "MESH"]
for o in meshes:
    if o.data.users > 1:
        o.data = o.data.copy()
bpy.ops.object.select_all(action="DESELECT")
for o in meshes:
    o.select_set(True)
bpy.context.view_layer.objects.active = meshes[0]
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

before = sum(len(o.data.polygons) for o in meshes)
for o in meshes:
    if len(o.data.polygons) < args.min_faces:
        continue
    m = o.modifiers.new("Decimate", "DECIMATE")
    m.decimate_type = "COLLAPSE"
    m.ratio = args.ratio
    with bpy.context.temp_override(object=o, active_object=o):
        bpy.ops.object.modifier_apply(modifier=m.name)
after = sum(len(o.data.polygons) for o in meshes)
print(f"decimate: {before} → {after} faces")


def join(objs, name):
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    if len(objs) > 1:
        bpy.ops.object.join()
    objs[0].name = name
    objs[0].data.name = name
    return objs[0]


groups = {}
rest = []
for o in meshes:
    k = wing_key(o.name)
    (groups.setdefault(k, []) if k else rest).append(o)
for k, objs in groups.items():
    join(objs, f"wing-{k}")
station = join(rest, "station")
objs = [o for o in scene.objects if o.type == "MESH"]
print(f"joined into {len(objs)} objects: {sorted(o.name for o in objs)}")

# AO bake into vertex colours
world = bpy.data.worlds.new("bake")
scene.world = world
size = max(max(o.dimensions) for o in objs)
world.light_settings.distance = size * args.ao_reach
scene.render.engine = "CYCLES"
scene.cycles.device = "CPU"
scene.cycles.samples = args.samples
for o in objs:
    me = o.data
    attr = me.color_attributes.get("AO") or me.color_attributes.new(name="AO", type="BYTE_COLOR", domain="CORNER")
    me.color_attributes.active_color = attr
    me.color_attributes.render_color_index = me.color_attributes.find("AO")
bpy.ops.object.select_all(action="DESELECT")
for o in objs:
    o.select_set(True)
bpy.context.view_layer.objects.active = objs[0]
t = time.time()
bpy.ops.object.bake(type="AO", target="VERTEX_COLORS")
print(f"baked AO in {time.time() - t:.0f}s")

bpy.ops.export_scene.gltf(
    filepath=args.dst,
    export_format="GLB",
    export_vertex_color="ACTIVE",
    export_all_vertex_colors=False,
    export_draco_mesh_compression_enable=False,
    export_apply=True,
)
print("wrote", args.dst)
