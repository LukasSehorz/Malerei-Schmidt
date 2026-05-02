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
    bgImage: "/images/craftsmen-stone-facade.jpg"
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
    bgImage: "/images/team-blueprints.jpg"
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
    bgImage: "/images/munich-residential.jpg"
  },
];

export function Layout237() {
  return (
    <section className="relative overflow-hidden bg-background-primary py-20 md:py-32">

      {/* Subtle Radial Glow behind the text */}
      <div className="absolute left-1/2 top-0 h-[800px] w-[1000px] -translate-x-1/2 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,150,46,0.15) 0%, rgba(8,17,31,0) 70%)" }} />

      {/* Architektur-Gitter with fade out at bottom */}
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage: "linear-gradient(to bottom, black 10%, transparent 80%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 80%)"
      }} />

      {/* Körnung / Noise */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-phil">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-phil)" />
      </svg>

      {/* Inhalt */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Elegant Intro Text Block */}
        <div className="container relative flex flex-col items-center px-[5%] mb-8 w-full max-w-3xl text-center">
          
          {/* Eyebrow Pill */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-hoser-gold/20 bg-hoser-gold/5 px-5 py-2 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-hoser-gold animate-pulse" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-hoser-gold">
              Unsere Philosophie
            </span>
            <span className="size-1.5 rounded-full bg-hoser-gold animate-pulse" />
          </div>

          <h2 className="mb-8 font-heading font-bold leading-[1.05] tracking-tight text-white" style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)" }}>
            Wie wir denken.<br />
            <span className="font-serif italic font-light text-white/80">Wie wir bauen.</span>
          </h2>
          
          <p className="font-body text-lg text-white/70 md:text-xl leading-relaxed max-w-2xl font-light">
            Unsere Werte entstammen drei Generationen Erfahrung. Sie stehen nicht auf Papier –
            sie bestimmen jeden <strong className="font-medium text-white">Handschlag</strong>, jeden <strong className="font-medium text-white">Entscheid</strong>, jedes <strong className="font-medium text-white">Projekt</strong>.
          </p>

          {/* Vertical Connecting Line to boxes */}
          <div className="mt-12 h-24 w-px bg-gradient-to-b from-hoser-gold/50 to-transparent" />
        </div>

        {/* Full-width Stacked Features */}
        <div className="flex w-full flex-col gap-6 md:gap-10 px-3 md:px-6">
          {features.map((f, i) => {
            const isEven = i % 2 === 0;
            const numberString = `0${i + 1}`;
            
            return (
              <div 
                key={f.title} 
                className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 group min-h-[55vh] md:min-h-[65vh]"
              >
                {/* Background Image with Reveal Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-[1.5s] ease-out scale-105 blur-[6px] opacity-60 group-hover:blur-[2px] group-hover:scale-110 group-hover:opacity-90"
                  style={{ backgroundImage: `url(${f.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-background-primary opacity-50" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />

                {/* Content Container (Alternating Left/Right) */}
                <div className={`relative z-10 w-full max-w-7xl mx-auto px-[5%] py-16 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                  
                  {/* Glassmorphism Card */}
                  <div className="relative flex flex-col items-start text-left w-full max-w-xl p-8 md:p-12 rounded-xl backdrop-blur-xl bg-[#08111F]/50 border border-white/10 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#08111F]/40 group-hover:border-white/20">
                    
                    {/* Ghost Number in Background */}
                    <div className="absolute -top-6 -right-4 font-heading font-bold text-white/5 select-none pointer-events-none" style={{ fontSize: "clamp(8rem, 15vw, 12rem)", lineHeight: 1 }}>
                      {numberString}
                    </div>

                    <div className="relative z-10">
                      <div className="mb-8 flex size-14 items-center justify-center border border-white/20 text-hoser-gold bg-black/40 backdrop-blur-sm rounded-full">
                        {f.icon}
                      </div>
                      
                      <div className="mb-4 flex items-center gap-4">
                        <span className="h-px w-8 bg-hoser-gold" />
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-hoser-gold">
                          Prinzip {numberString}
                        </span>
                      </div>

                      <h3 className="mb-5 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl leading-[1.1]">
                        {f.title}
                      </h3>
                      
                      <p className="font-body text-lg text-white/80 leading-relaxed font-light">
                        {f.body}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 px-[5%]">
          <a
            href="/leistungen"
            className="inline-flex items-center border border-hoser-gold bg-hoser-gold px-8 py-4 font-body text-sm font-semibold tracking-[0.1em] text-white uppercase transition-all duration-300 hover:bg-transparent hover:text-hoser-gold"
          >
            Leistungen entdecken
          </a>
          <a
            href="/ueber-uns"
            className="inline-flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors duration-200 hover:text-white"
          >
            Unsere Geschichte
            <span className="text-hoser-gold text-lg leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
