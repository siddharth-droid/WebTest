import type { Metadata } from 'next';
import { AuroraApp } from '@/components/aurora/AuroraApp';

export const metadata: Metadata = {
  title: 'Aurora forecast',
  description: 'Live Kp index, 3-day geomagnetic forecast and aurora probability for your location, from NOAA.',
};

export default function AuroraPage() {
  return <AuroraApp />;
}
