import type { Orbit } from './orbit';

export type SatelliteClass = 'COMPUTE' | 'RELAY' | 'IMAGING';
export type SatelliteStatus = 'NOMINAL' | 'DEGRADED' | 'SAFE MODE';

export interface FleetSatellite {
  id: string;
  name: string;
  plane: string;
  cls: SatelliteClass;
  status: SatelliteStatus;
  orbit: Orbit;
  /** Deterministic per-satellite variation for telemetry. */
  seed: number;
}

/**
 * A Walker-delta constellation: P orbital planes, evenly spaced in RAAN,
 * S satellites per plane, with a phase offset between neighbouring planes so
 * coverage is uniform. This is the same pattern Starlink and OneWeb use.
 */
const PLANES = [
  { id: 'A', inclinationDeg: 53, altitudeKm: 550, cls: 'COMPUTE' },
  { id: 'B', inclinationDeg: 53, altitudeKm: 550, cls: 'COMPUTE' },
  { id: 'C', inclinationDeg: 53, altitudeKm: 550, cls: 'COMPUTE' },
  { id: 'D', inclinationDeg: 97.6, altitudeKm: 705, cls: 'IMAGING' },
  { id: 'E', inclinationDeg: 97.6, altitudeKm: 705, cls: 'IMAGING' },
  { id: 'F', inclinationDeg: 30, altitudeKm: 1200, cls: 'RELAY' },
] as const;

const PER_PLANE = 5;
const PHASE_OFFSET_DEG = 360 / (PLANES.length * PER_PLANE);

const exceptions: Record<string, SatelliteStatus> = {
  'B-3': 'DEGRADED',
  'E-2': 'SAFE MODE',
  'F-4': 'DEGRADED',
};

export const FLEET: FleetSatellite[] = PLANES.flatMap((plane, p) =>
  Array.from({ length: PER_PLANE }, (_, s) => {
    const id = `${plane.id}-${s + 1}`;
    return {
      id,
      name: `ORB-${plane.id}${String(s + 1).padStart(2, '0')}`,
      plane: plane.id,
      cls: plane.cls,
      status: exceptions[id] ?? 'NOMINAL',
      orbit: {
        altitudeKm: plane.altitudeKm,
        inclinationDeg: plane.inclinationDeg,
        raanDeg: (p * 360) / PLANES.length,
        phaseDeg: (s * 360) / PER_PLANE + p * PHASE_OFFSET_DEG,
      },
      seed: p * PER_PLANE + s,
    };
  }),
);

export const PLANE_IDS = PLANES.map((p) => p.id);
