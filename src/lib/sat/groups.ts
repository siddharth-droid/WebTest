/**
 * Satellites are coloured by four broad groups rather than all ten
 * categories: in a dense point cloud every colour sits next to every other,
 * and only three hues plus neutral grey stay distinguishable for colour-blind
 * viewers on this background (validated, all pairs, ΔE ≥ 9). The finer
 * categories are still available as filters.
 */
export interface ColorGroup {
  id: string;
  label: string;
  color: string;
  categories: string[];
}

export const COLOR_GROUPS: ColorGroup[] = [
  { id: 'broadband', label: 'Broadband constellations', color: '#3987e5', categories: ['Starlink', 'OneWeb', 'Kuiper'] },
  { id: 'crewed', label: 'Space stations', color: '#d95926', categories: ['Stations'] },
  {
    id: 'civil',
    label: 'Navigation, weather & science',
    color: '#199e70',
    categories: ['Navigation', 'Weather', 'Earth imaging', 'Science'],
  },
  { id: 'other', label: 'Communications & other', color: '#8a8f98', categories: ['Communications', 'Other'] },
];

export const groupOf = (category: string) =>
  COLOR_GROUPS.find((g) => g.categories.includes(category)) ?? COLOR_GROUPS[COLOR_GROUPS.length - 1];

/** Order categories appear in the filter list. */
export const CATEGORY_ORDER = [
  'Stations',
  'Starlink',
  'OneWeb',
  'Kuiper',
  'Navigation',
  'Weather',
  'Earth imaging',
  'Science',
  'Communications',
  'Other',
];

/** Satellites worth surfacing before anyone searches. */
export const NOTABLE: { norad: number; note: string }[] = [
  { norad: 25544, note: 'International Space Station' },
  { norad: 48274, note: 'Tiangong, China’s space station' },
  { norad: 20580, note: 'Hubble Space Telescope' },
  { norad: 39084, note: 'Landsat 8, Earth imaging' },
  { norad: 49260, note: 'Landsat 9, Earth imaging' },
  { norad: 43013, note: 'NOAA-20, polar weather' },
  { norad: 60133, note: 'GOES-19, geostationary weather' },
  { norad: 27424, note: 'Aqua, Earth science' },
  { norad: 25994, note: 'Terra, Earth science' },
  { norad: 33591, note: 'NOAA-19, polar weather' },
];
