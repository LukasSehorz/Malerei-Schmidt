"use client";

import React from "react";

const team = [
  {
    name: "Claudia Hoser",
    title: "Dipl. Ingenieurin (FH)",
    role: "Geschäftsführerin",
    image: "/images/claudia-hoser.jpg",
    email: "claudia.hoser@hoser-bauunternehmung.de",
  },
  {
    name: "Josef Lippacher",
    title: "Dipl. Ingenieur (FH)",
    role: "Geschäftsführer",
    image: "/images/josef-lippacher.jpg",
    email: "josef.lippacher@hoser-bauunternehmung.de",
  },
];

export function TeamSection() {
  return (
    <section className="bg-background-primary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* Heading */}
        <div className="mb-14 grid grid-cols-1 gap-8 md:mb-18 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
              Geschäftsführung
            </p>
            <h2
              className="font-heading font-bold leading-[1.05] tracking-tight text-text-primary"
              style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
            >
              Die dritte Generation.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-body text-base leading-relaxed text-text-secondary md:text-lg">
              Was Michael Hoser 1952 als Maurerbetrieb begann, führen Claudia Hoser
              und Josef Lippacher heute als eingespielte Geschäftsführung weiter.
              Beide sind ausgebildete Ingenieure und stehen persönlich für jedes
              Projekt ein – von der Planung bis zur Schlüsselübergabe.
            </p>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {team.map((person) => (
            <div key={person.name} className="group relative overflow-hidden">

              {/* Photo */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-alternative/90 via-transparent to-transparent" />

                {/* Info overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-3 h-px w-8 bg-hoser-gold" />
                  <p className="mb-0.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-hoser-gold">
                    {person.title} · {person.role}
                  </p>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {person.name}
                  </h3>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-3 inline-block font-body text-xs text-white/40 transition-colors duration-200 hover:text-hoser-gold"
                  >
                    {person.email}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
