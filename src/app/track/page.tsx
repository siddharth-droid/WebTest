import type { Metadata } from 'next';
import { TrackApp } from '@/components/track/TrackApp';

export const metadata: Metadata = {
  title: 'Live satellite tracker',
  description: 'Every tracked satellite in real time, with pass predictions for your location.',
};

export default function TrackPage() {
  return <TrackApp />;
}
