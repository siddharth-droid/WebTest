// Scale baked AO (vertex colour COLOR_0) toward white: ao' = 1 - strength × (1 - ao).
// Full-strength AO turns layered parts nearly black; 0.5–0.7 reads as real contact shadow.
//   node scripts/models/ao-strength.mjs in.glb out.glb [strength]
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const [src, dst, s = '0.6'] = process.argv.slice(2);
const strength = Number(s);
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(src);
const el = [];
for (const mesh of doc.getRoot().listMeshes()) {
  for (const prim of mesh.listPrimitives()) {
    const color = prim.getAttribute('COLOR_0');
    if (!color) continue;
    for (let i = 0; i < color.getCount(); i++) {
      color.getElement(i, el);
      for (let c = 0; c < 3; c++) el[c] = 1 - strength * (1 - el[c]);
      color.setElement(i, el);
    }
  }
}
await io.write(dst, doc);
console.log(`AO strength ${strength} →`, dst);
