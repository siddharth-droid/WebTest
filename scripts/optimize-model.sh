#!/usr/bin/env bash
# Prepare a NASA (or any) glTF model for the web.
#
#   ./scripts/optimize-model.sh "path/to/Landsat 8.glb" public/models/landsat8.glb
#
# --palette/--join are disabled on purpose: they merge materials, and the app
# upgrades each material by name (see src/lib/materials.ts).
set -euo pipefail
in="${1:?input .glb}"
out="${2:?output .glb}"
npx --yes @gltf-transform/cli@4.2.1 optimize "$in" "$out" \
  --compress meshopt \
  --texture-compress false \
  --palette false \
  --join false \
  --simplify-error 0.0005
npx --yes @gltf-transform/cli@4.2.1 inspect "$out" | head -40
