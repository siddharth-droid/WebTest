"""
Hard-surface finishing pass for NASA satellite models, run in Blender.

1. Smooth by angle, so curved parts shade smoothly and hard edges stay hard.
2. A narrow bevel on hard edges. Real hardware is never knife-sharp; the
   rounded edge catches a sliver of light, which is most of what makes a
   model read as a photographed object rather than CG.
3. Weighted normals, so large flat panels stay flat next to the bevels.
4. Ray-traced ambient occlusion baked into vertex colours (Cycles).
5. Optional Cycles preview render for review.

    python scripts/blender/enhance.py in.glb out.glb [--preview out.png] [--bevel 0.0012]
    (or: blender -b -P scripts/blender/enhance.py -- in.glb out.glb ...)
"""
import argparse
import math
import sys
import time

import bpy
from mathutils import Vector

argv = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else sys.argv[1:]
ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("dst")
ap.add_argument("--preview", default=None)
ap.add_argument("--bevel", type=float, default=0.0012, help="bevel width as a fraction of model size")
ap.add_argument("--ao-reach", type=float, default=0.025)
ap.add_argument("--samples", type=int, default=64)
args = ap.parse_args(argv)

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=args.src)
scene = bpy.context.scene
meshes = [o for o in scene.objects if o.type == "MESH"]
if not meshes:
    sys.exit(f"no meshes in {args.src}")


def bounds(objs):
    pts = [o.matrix_world @ Vector(c) for o in objs for c in o.bound_box]
    lo = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    hi = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    return lo, hi


lo, hi = bounds(meshes)
size = max(hi - lo)
before = sum(len(o.data.vertices) for o in meshes)

for o in meshes:
    bpy.ops.object.select_all(action="DESELECT")
    o.select_set(True)
    bpy.context.view_layer.objects.active = o
    # Merge coincident vertices so bevels don't tear along split seams
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.mesh.remove_doubles(threshold=size * 1e-5)
    bpy.ops.object.mode_set(mode="OBJECT")
    bpy.ops.object.shade_smooth_by_angle(angle=math.radians(35))

    # Width is in object space; convert from world size
    scale = max(o.matrix_world.to_scale())
    bevel = o.modifiers.new("Bevel", "BEVEL")
    bevel.width = size * args.bevel / max(scale, 1e-9)
    bevel.segments = 2
    bevel.limit_method = "ANGLE"
    bevel.angle_limit = math.radians(40)
    bevel.harden_normals = True
    bevel.miter_outer = "MITER_ARC"
    weighted = o.modifiers.new("WeightedNormal", "WEIGHTED_NORMAL")
    weighted.keep_sharp = True
    weighted.weight = 50
    for m in list(o.modifiers):
        bpy.ops.object.modifier_apply(modifier=m.name)

after = sum(len(o.data.vertices) for o in meshes)
print(f"bevel: {before} → {after} vertices")

# --- AO bake into vertex colours
world = bpy.data.worlds.new("bake")
scene.world = world
world.light_settings.distance = size * args.ao_reach
scene.render.engine = "CYCLES"
scene.cycles.device = "CPU"
scene.cycles.samples = args.samples
for o in meshes:
    me = o.data
    attr = me.color_attributes.get("AO") or me.color_attributes.new(name="AO", type="BYTE_COLOR", domain="CORNER")
    me.color_attributes.active_color = attr
    me.color_attributes.render_color_index = me.color_attributes.find("AO")
bpy.ops.object.select_all(action="DESELECT")
for o in meshes:
    o.select_set(True)
bpy.context.view_layer.objects.active = meshes[0]
t = time.time()
bpy.ops.object.bake(type="AO", target="VERTEX_COLORS")
print(f"baked AO in {time.time() - t:.1f}s")

bpy.ops.export_scene.gltf(
    filepath=args.dst,
    export_format="GLB",
    export_vertex_color="ACTIVE",
    export_all_vertex_colors=False,
    export_draco_mesh_compression_enable=False,
    export_apply=True,
)
print("wrote", args.dst)

# --- Optional preview: hard sun, blue earthshine, black space
if args.preview:
    world.use_nodes = True
    bg = world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (0.004, 0.008, 0.02, 1)
    bg.inputs[1].default_value = 1.0
    sun = bpy.data.objects.new("Sun", bpy.data.lights.new("Sun", "SUN"))
    sun.data.energy = 6
    sun.data.angle = math.radians(0.53)
    sun.rotation_euler = (math.radians(50), math.radians(10), math.radians(35))
    scene.collection.objects.link(sun)
    fill = bpy.data.objects.new("Earthshine", bpy.data.lights.new("Earthshine", "SUN"))
    fill.data.energy = 0.6
    fill.data.color = (0.45, 0.62, 1.0)
    fill.rotation_euler = (math.radians(200), 0, 0)
    scene.collection.objects.link(fill)

    center = (lo + hi) / 2
    cam = bpy.data.objects.new("Cam", bpy.data.cameras.new("Cam"))
    cam.data.lens = 50
    scene.collection.objects.link(cam)
    cam.location = center + Vector((size * 1.1, -size * 1.5, size * 0.7))
    cam.rotation_euler = (center - cam.location).to_track_quat("-Z", "Y").to_euler()
    scene.camera = cam

    # Show the AO in the preview by multiplying it into each material's base colour
    for mat in bpy.data.materials:
        if not mat.use_nodes:
            continue
        nt = mat.node_tree
        bsdf = next((n for n in nt.nodes if n.type == "BSDF_PRINCIPLED"), None)
        if bsdf is None:
            continue
        attr = nt.nodes.new("ShaderNodeVertexColor")
        attr.layer_name = "AO"
        mix = nt.nodes.new("ShaderNodeMix")
        mix.data_type = "RGBA"
        mix.blend_type = "MULTIPLY"
        mix.inputs[0].default_value = 0.85
        src = bsdf.inputs["Base Color"]
        if src.links:
            nt.links.new(src.links[0].from_socket, mix.inputs[6])
        else:
            mix.inputs[6].default_value = src.default_value
        nt.links.new(attr.outputs["Color"], mix.inputs[7])
        nt.links.new(mix.outputs[2], src)
        bsdf.inputs["Metallic"].default_value = max(bsdf.inputs["Metallic"].default_value, 0.4)
        bsdf.inputs["Roughness"].default_value = min(bsdf.inputs["Roughness"].default_value, 0.45)

    scene.render.resolution_x = 1280
    scene.render.resolution_y = 800
    scene.cycles.samples = 48
    scene.view_settings.view_transform = "AgX"
    scene.render.filepath = args.preview
    t = time.time()
    bpy.ops.render.render(write_still=True)
    print(f"preview rendered in {time.time() - t:.1f}s → {args.preview}")
