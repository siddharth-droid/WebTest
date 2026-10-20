import { json2satrec, type OMMJsonObject, type SatRec } from 'satellite.js';

/** Shape of public/data/satellites.json, written by scripts/fetch-data.mjs. */
export interface SatelliteFile {
  source: string;
  fetchedAt: string;
  fields: string[];
  categories: string[];
  rows: (string | number | null)[][];
}

export interface SatelliteRecord {
  /** Index into the catalog arrays and GPU buffers. */
  index: number;
  norad: number;
  name: string;
  /** International designator, e.g. 1998-067A: launch year, launch number, piece. */
  intlId: string;
  category: string;
  categoryIndex: number;
  /** In CelesTrak's "brightest" list, i.e. easy to see with the naked eye. */
  visual: boolean;
  epoch: string;
  inclination: number;
  meanMotion: number;
  eccentricity: number;
  omm: OMMJsonObject;
}

export interface Catalog {
  fetchedAt: string;
  source: string;
  categories: string[];
  sats: SatelliteRecord[];
  byNorad: Map<number, SatelliteRecord>;
}

export function parseCatalog(file: SatelliteFile): Catalog {
  const at = (name: string) => file.fields.indexOf(name);
  const iName = at('OBJECT_NAME'), iId = at('OBJECT_ID'), iNorad = at('NORAD_CAT_ID'), iEpoch = at('EPOCH');
  const iInc = at('INCLINATION'), iMm = at('MEAN_MOTION'), iEcc = at('ECCENTRICITY');
  const iCat = at('CATEGORY'), iVis = at('VISUAL');
  const ommFields = file.fields.filter((f) => f !== 'CATEGORY' && f !== 'VISUAL');

  const sats = file.rows.map((row, index) => {
    const omm = Object.fromEntries(ommFields.map((f) => [f, row[file.fields.indexOf(f)]])) as unknown as OMMJsonObject;
    return {
      index,
      norad: Number(row[iNorad]),
      name: String(row[iName]),
      intlId: String(row[iId] ?? ''),
      category: file.categories[Number(row[iCat])] ?? 'Other',
      categoryIndex: Number(row[iCat]) || 0,
      visual: row[iVis] === 1,
      epoch: String(row[iEpoch]),
      inclination: Number(row[iInc]),
      meanMotion: Number(row[iMm]),
      eccentricity: Number(row[iEcc]),
      omm,
    };
  });
  return {
    fetchedAt: file.fetchedAt,
    source: file.source,
    categories: file.categories,
    sats,
    byNorad: new Map(sats.map((s) => [s.norad, s])),
  };
}

const satrecs = new Map<number, SatRec>();
/** SGP4 state for one satellite, built on first use. */
export function satrecFor(sat: SatelliteRecord): SatRec {
  let rec = satrecs.get(sat.norad);
  if (!rec) {
    rec = json2satrec(sat.omm);
    satrecs.set(sat.norad, rec);
  }
  return rec;
}

/** Orbital period in minutes from mean motion (revolutions per day). */
export const periodMinutes = (sat: SatelliteRecord) => 1440 / sat.meanMotion;

/** Apogee/perigee altitudes (km) from mean motion and eccentricity. */
export function apsides(sat: SatelliteRecord) {
  const MU = 398600.4418;
  const n = (sat.meanMotion * 2 * Math.PI) / 86400; // rad/s
  const a = Math.cbrt(MU / (n * n));
  return { apogee: a * (1 + sat.eccentricity) - 6378.137, perigee: a * (1 - sat.eccentricity) - 6378.137 };
}

export const ORBIT_CLASS = (sat: SatelliteRecord) => {
  const { apogee, perigee } = apsides(sat);
  if (sat.eccentricity > 0.25) return 'HEO';
  if (perigee > 34000 && apogee < 37500) return 'GEO';
  if (apogee < 2000) return 'LEO';
  return 'MEO';
};

/** Launch year from the international designator (1998-067A → 1998). */
export const launchYear = (sat: SatelliteRecord) => {
  const y = Number(sat.intlId.slice(0, 4));
  return Number.isFinite(y) && y > 1950 ? y : null;
};
