import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/ui/SiteHeader';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Orbita: every satellite, live', template: '%s · Orbita' },
  description:
    'Track every satellite in real time, see when the ISS passes over you, follow rocket launches, aurora forecasts and live Earth events. Built on open data.',
};

export const viewport: Viewport = {
  themeColor: '#02040a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
