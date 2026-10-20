'use client';

import { useEffect, useState } from 'react';
import { searchPlaces, useObserver, type Place } from '@/lib/observer';

const fmt = (v: number, pos: string, neg: string) => `${Math.abs(v).toFixed(2)}° ${v >= 0 ? pos : neg}`;

/** Shows the saved location, or lets the viewer set one by GPS or city search. */
export function LocationControl({ compact = false }: { compact?: boolean }) {
  const { observer, setObserver, locate, locating, error } = useObserver();
  const [editing, setEditing] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Place[]>([]);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const ctrl = new AbortController();
    const id = setTimeout(() => {
      searchPlaces(query.trim(), ctrl.signal)
        .then((r) => {
          setResults(r);
          setSearchError(r.length ? null : 'No places found');
        })
        .catch((e: Error) => e.name !== 'AbortError' && setSearchError('City search is unavailable right now'));
    }, 250);
    return () => {
      clearTimeout(id);
      ctrl.abort();
    };
  }, [query]);

  if (observer && !editing) {
    return (
      <div className="location">
        <div>
          <div className="location-label">{observer.label ?? 'Saved location'}</div>
          {!compact && (
            <div className="mono location-coords tabular">
              {fmt(observer.lat, 'N', 'S')} · {fmt(observer.lon, 'E', 'W')}
            </div>
          )}
        </div>
        <button className="mono link-button" onClick={() => setEditing(true)}>
          Change
        </button>
      </div>
    );
  }

  return (
    <div className="location location-edit">
      <button className="button mono" onClick={() => (locate(), setEditing(false))} disabled={locating}>
        {locating ? 'Locating…' : 'Use my location'}
      </button>
      <span className="mono location-or">or</span>
      <div className="place-search">
        <input
          className="search"
          placeholder="Search a city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search a city"
        />
        {results.length > 0 && (
          <ul className="place-results" role="listbox">
            {results.map((p) => (
              <li key={`${p.lat},${p.lon}`}>
                <button
                  role="option"
                  aria-selected={false}
                  onClick={() => {
                    setObserver({ lat: p.lat, lon: p.lon, label: p.name });
                    setEditing(false);
                    setQuery('');
                  }}
                >
                  <span>{p.name}</span>
                  <span className="mono">{p.detail}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {(error || searchError) && <p className="mono form-error">{error ?? searchError}</p>}
      {observer && (
        <button className="mono link-button" onClick={() => setEditing(false)}>
          Cancel
        </button>
      )}
    </div>
  );
}
