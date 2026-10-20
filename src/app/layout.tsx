import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/ui/SiteHeader';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Orbita: Orbital Intelligence', template: '%s · Orbita' },
  description: 'A constellation of compute satellites that process data in orbit and deliver answers, not raw imagery.',
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
