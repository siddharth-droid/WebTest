import type { Metadata } from 'next';
import { LaunchesApp } from '@/components/launches/LaunchesApp';

export const metadata: Metadata = {
  title: 'Launch schedule',
  description: 'Upcoming rocket launches worldwide with live countdowns and webcast links.',
};

export default function LaunchesPage() {
  return <LaunchesApp />;
}
