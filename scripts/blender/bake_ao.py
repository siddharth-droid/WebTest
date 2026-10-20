"""
Bake ambient occlusion into vertex colours with Blender Cycles.

Real spacecraft have deep crevices between instruments, struts and panels.
Ray-traced AO darkens those contact areas once, offline, so the web renderer
gets that depth for free. three.js multiplies vertex colours into the base
colour (see Satellite.tsx).

    blender -b -P scripts/blender/bake_ao.py -- in.glb out.glb [samples] [reach]
    # or, with the bpy wheel:  python scripts/blender/bake_ao.py in.glb out.glb
"""
import sys
import time

import bpy

args = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else sys.argv[1:]
src, dst = args[0], args[1]
samples = int(args[2]) if len(args) > 2 else 48
# AO ray length as a fraction of the model's largest dimension
reach = float(args[3]) if len(args) > 3 else 0.025

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)

scene = bpy.context.scene
meshes = [o for o in scene.objects if o.type == "MESH"]
if not meshes:
    sys.exit(f"no meshes in {src}")

# AO reach: a few percent of the model's size, so it catches local crevices
# rather than darkening whole faces that merely face another part.
size = max(max(o.dimensions) for o in meshes)
world = bpy.data.worlds.new("bake")
scene.world = world
world.light_settings.distance = size * reach

scene.render.engine = "CYCLES"
scene.cycles.device = "CPU"
scene.cycles.samples = samples
scene.render.bake.use_selected_to_active = False

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
print(f"baked AO on {len(meshes)} meshes, {sum(len(o.data.vertices) for o in meshes)} vertices in {time.time() - t:.1f}s")

bpy.ops.export_scene.gltf(
    filepath=dst,
    export_format="GLB",
    export_vertex_color="ACTIVE",
    export_all_vertex_colors=False,
    export_draco_mesh_compression_enable=False,
    export_apply=True,
)
print("wrote", dst)
