"use client";

import React from "react";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 12V28H12V20H20V28H28V12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Handwerk als Berufung",
    body: "Wir bauen nicht, um fertig zu werden. Wir bauen, weil wir überzeugt sind, dass gutes Handwerk Bestand hat – über Generationen hinaus.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16L13 21L24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Ehrlichkeit",
    body: "Ein fester Preis. Ein klarer Zeitplan. Keine Überraschungen. Das sind für uns keine Extras – das ist der Mindeststandard.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24C4 24 8 18 16 18C24 18 28 24 28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Verwurzelt in Bayern",
    body: "Markt Schwaben ist unsere Heimat. Unsere Kunden sind unsere Nachbarn. Ihr Vertrauen ist das wertvollste, was wir besitzen.",
  },
];

export function Layout237() {
  return (
    <section className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28" style={{ background: "linear-gradient(160deg, #0D2347 0%, #071428 60%, #040D1C 100%)" }}>

      {/* Architektur-Gitter */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "52px 52px",
      }} />

      {/* Körnung / Noise */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Inhalt */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-xl text-center md:mb-18 lg:mb-20">
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-hoser-gold">
              Unsere Philosophie
            </p>
            <h2 className="mb-5 font-heading font-bold leading-tight tracking-tight text-white" style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
              Wie wir denken.<br />Wie wir bauen.
            </h2>
            <p className="font-body text-base text-white/75 md:text-lg">
              Unsere Werte entstammen drei Generationen Erfahrung. Sie stehen nicht auf Papier –
              sie bestimmen jeden Handschlag, jeden Entscheid, jedes Projekt.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {features.map((f) => (
              <div key={f.title} className="flex w-full flex-col items-center text-center group">
                <div className="mb-6 flex size-16 items-center justify-center border border-white/20 text-hoser-gold transition-all duration-300 group-hover:bg-hoser-gold group-hover:text-white group-hover:border-hoser-gold">
                  {f.icon}
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {f.title}
                </h3>
                <p className="font-body text-base text-white/80">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 md:mt-16">
            <a
              href="/leistungen"
              className="inline-flex items-center border border-white/30 px-7 py-3 font-body text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:border-white"
            >
              Leistungen entdecken
            </a>
            <a
              href="/ueber-uns"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-hoser-gold"
            >
              Über uns
              <span className="text-hoser-gold">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
