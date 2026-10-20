/**
 * Event colours reuse the validated categorical hues (see lib/sat/groups.ts):
 * at most three hues plus grey, so every pair stays distinguishable.
 */
const EVENT_COLORS: Record<string, string> = {
  Wildfires: '#d95926',
  'Severe Storms': '#3987e5',
  'Sea and Lake Ice': '#199e70',
};

export const eventColor = (category: string) => EVENT_COLORS[category] ?? '#8a8f98';
