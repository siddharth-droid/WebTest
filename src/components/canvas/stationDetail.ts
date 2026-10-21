import * as THREE from 'three';

/**
 * Sun-tracking solar wings for NASA's ISS model.
 *
 * On the real station each wing turns about its own mast (the "beta gimbal")
 * to face the Sun. Each wing (with its iROSA overlay) is gathered under a
 * pivot at the wing's centre, and that pivot turns about the wing's long axis.
 */
export interface Wing {
  pivot: THREE.Object3D;
  /** Rotation axis (the mast) and the wing's face normal, in model space. */
  axis: THREE.Vector3;
  normal: THREE.Vector3;
  angle: number;
}

/**
 * "wing-P4-2A" (joined in Blender by scripts/blender/optimize_iss.py), or the
 * source model's loose parts "P4_Array_2A", "P6_2B_Array", "IROSA_Deployed_P44A" → "P4-2A" etc.
 */
function wingKey(name: string) {
  let m = name.match(/^wing-([PS]\d-\d[AB])(_\d+)?$/);
  if (m) return m[1];
  m = name.match(/^([PS]\d)_Array_(\d[AB])/) ?? name.match(/^([PS]\d)_(\d[AB])_Array/);
  if (m) return `${m[1]}-${m[2]}`;
  m = name.match(/^IROSA.*?([PS]\d)(\d[AB])/);
  if (m) return `${m[1]}-${m[2]}`;
  m = name.match(/^([PS]\d)_Array_(\d[AB])_Details/) ?? name.match(/^([PS]\d)_(\d[AB])_Array_Details/);
  return m ? `${m[1]}-${m[2]}` : null;
}

const AXES = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)];

export function buildWings(model: THREE.Object3D): Wing[] {
  model.updateMatrixWorld(true);
  const groups = new Map<string, THREE.Object3D[]>();
  const mains = new Map<string, THREE.Object3D>();
  model.traverse((o) => {
    const key = wingKey(o.name);
    // A multi-material part loads as a group of meshes; move the group as one
    if (!key || (o.parent && wingKey(o.parent.name) === key)) return;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(o);
    // The bare array mesh defines the wing's geometry and axes
    if (/_Array(_\d[AB])?$/.test(o.name) || /_Array_\d[AB]$/.test(o.name)) mains.set(key, o);
  });

  const wings: Wing[] = [];
  for (const [key, parts] of groups) {
    const main = mains.get(key) ?? parts[0];
    const box = new THREE.Box3().setFromObject(main);
    if (box.isEmpty()) continue;
    const size = box.getSize(new THREE.Vector3());
    const dims = [size.x, size.y, size.z];
    const longest = dims.indexOf(Math.max(...dims));
    const thinnest = dims.indexOf(Math.min(...dims));
    if (longest === thinnest) continue;

    const pivot = new THREE.Object3D();
    pivot.name = `wing-${key}`;
    box.getCenter(pivot.position);
    model.add(pivot);
    pivot.updateMatrixWorld(true);
    // attach() keeps each part exactly where it was while re-parenting
    for (const p of parts) if (p !== pivot && !p.children.includes(pivot)) pivot.attach(p);

    wings.push({ pivot, axis: AXES[longest].clone(), normal: AXES[thinnest].clone(), angle: 0 });
  }
  return wings;
}

const _sun = new THREE.Vector3();
const _proj = new THREE.Vector3();
const _cross = new THREE.Vector3();
const _inv = new THREE.Matrix4();

/** Turn each wing toward the Sun (world direction), easing so it never snaps. */
export function updateWings(wings: Wing[], model: THREE.Object3D, sunWorld: THREE.Vector3, dt: number) {
  if (wings.length === 0) return;
  _inv.copy(model.matrixWorld).invert();
  _sun.copy(sunWorld).transformDirection(_inv);
  for (const w of wings) {
    _proj.copy(_sun).addScaledVector(w.axis, -_sun.dot(w.axis));
    if (_proj.lengthSq() < 1e-6) continue;
    _proj.normalize();
    let target = Math.atan2(_cross.crossVectors(w.normal, _proj).dot(w.axis), w.normal.dot(_proj));
    // Both faces carry cells in the model; take the shorter turn
    if (target > Math.PI / 2) target -= Math.PI;
    if (target < -Math.PI / 2) target += Math.PI;
    w.angle = THREE.MathUtils.damp(w.angle, target, 1.5, dt);
    w.pivot.quaternion.setFromAxisAngle(w.axis, w.angle);
  }
}
