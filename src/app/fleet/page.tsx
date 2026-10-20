import type { Metadata } from 'next';
import { FleetConsole } from '@/components/ui/FleetConsole';

export const metadata: Metadata = { title: 'Fleet' };

export default function FleetPage() {
  return <FleetConsole />;
}
