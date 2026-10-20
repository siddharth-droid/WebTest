import type { Metadata } from 'next';
import { EarthApp } from '@/components/earth/EarthApp';

export const metadata: Metadata = {
  title: 'Earth events',
  description: 'Active wildfires, storms, volcanoes and ice events tracked by NASA, on a live map.',
};

export default function EarthPage() {
  return <EarthApp />;
}
