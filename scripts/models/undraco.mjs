// Decode Draco-compressed glTF so Blender builds without the Draco bridge can import it.
//   node scripts/models/undraco.mjs in.glb out.glb
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import draco3d from 'draco3dgltf';

const [src, dst] = process.argv.slice(2);
const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule() });
const doc = await io.read(src);
for (const ext of doc.getRoot().listExtensionsUsed()) {
  if (ext.extensionName === 'KHR_draco_mesh_compression') ext.dispose();
}
await io.write(dst, doc);
console.log('decoded', dst);
