"""
Reduce a very dense model for the web with Blender's Decimate (edge collapse),
which handles UV and normal seams far better than glTF simplifiers.

    python scripts/blender/decimate.py in.glb out.glb --ratio 0.12 [--min-faces 400]

Small parts (bolts, handrails) are left alone below --min-faces, since
collapsing them destroys their silhouette for almost no saving.
"""
import argparse
import sys
import time

import bpy

argv = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else sys.argv[1:]
ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("dst")
ap.add_argument("--ratio", type=float, default=0.12)
ap.add_argument("--min-faces", type=int, default=400)
args = ap.parse_args(argv)

bpy.ops.wm.read_factory_settings(use_empty=True)
t = time.time()
bpy.ops.import_scene.gltf(filepath=args.src)
print(f"imported in {time.time() - t:.0f}s")

meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
before = sum(len(o.data.polygons) for o in meshes)
seen = set()
for o in meshes:
    # Instanced parts share mesh data: decimate each mesh once
    if o.data.name in seen or len(o.data.polygons) < args.min_faces:
        continue
    seen.add(o.data.name)
    m = o.modifiers.new("Decimate", "DECIMATE")
    m.decimate_type = "COLLAPSE"
    m.ratio = args.ratio
    m.use_collapse_triangulate = True
    bpy.context.view_layer.objects.active = o
    try:
        with bpy.context.temp_override(object=o, active_object=o):
            bpy.ops.object.modifier_apply(modifier=m.name)
    except RuntimeError:
        # Shared mesh data: apply via a single-user copy
        o.data = o.data.copy()
        with bpy.context.temp_override(object=o, active_object=o):
            bpy.ops.object.modifier_apply(modifier=m.name)
after = sum(len(o.data.polygons) for o in meshes)
print(f"faces {before} → {after}")

bpy.ops.export_scene.gltf(filepath=args.dst, export_format="GLB", export_draco_mesh_compression_enable=False, export_apply=True)
print("wrote", args.dst)
