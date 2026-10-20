#!/usr/bin/env bash
# Full model pipeline: NASA glTF → Blender AO bake → web-optimised .glb
#
#   ./scripts/prepare-models.sh "path/to/Landsat 8.glb" landsat8
#
# Needs Blender 4.2+ on PATH as `blender`, or BLENDER_PY pointing at a Python
# with the `bpy` wheel installed (pip install bpy).
set -euo pipefail
src="${1:?input .glb}"
name="${2:?output name}"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

node scripts/models/undraco.mjs "$src" "$tmp/raw.glb"
if [[ -n "${BLENDER_PY:-}" ]]; then
  "$BLENDER_PY" scripts/blender/bake_ao.py "$tmp/raw.glb" "$tmp/baked.glb" 64 0.025
else
  blender -b -P scripts/blender/bake_ao.py -- "$tmp/raw.glb" "$tmp/baked.glb" 64 0.025
fi
node scripts/models/ao-strength.mjs "$tmp/baked.glb" "$tmp/ao.glb" 0.6
# --palette/--join off: the app upgrades materials by name (src/lib/materials.ts)
npx gltf-transform optimize "$tmp/ao.glb" "public/models/$name.glb" \
  --compress meshopt --texture-compress webp --palette false --join false --simplify-error 0.0005
ls -la "public/models/$name.glb"
