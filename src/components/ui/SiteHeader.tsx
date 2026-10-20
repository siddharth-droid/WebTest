'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/', label: 'Overview' },
  { href: '/track/', label: 'Track' },
  { href: '/launches/', label: 'Launches' },
  { href: '/aurora/', label: 'Aurora' },
  { href: '/earth/', label: 'Earth' },
];

function UtcClock() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date().toISOString().slice(11, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="site-clock mono tabular">{now ? `${now} UTC` : ' '}</span>;
}

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Orbita home">
        ORBITA
      </Link>
      <nav className="site-nav mono" aria-label="Primary">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '') ? 'page' : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>
      <UtcClock />
    </header>
  );
}
