"use client";

import React from "react";

const milestones = [
  {
    year: "1952",
    title: "Die Gründung",
    desc: "Michael Hoser gründet das Unternehmen als kleinen Maurerbetrieb mit drei Mitarbeitern in Markt Schwaben. Handwerk, Verlässlichkeit und Qualität sind von Anfang an die Grundwerte.",
    detail: "Was als bescheidener Familienbetrieb begann, legte den Grundstein für eine über siebzigjährige Erfolgsgeschichte im bayerischen Bauhandwerk.",
  },
  {
    year: "1970er",
    title: "Zweite Generation",
    desc: "Die Söhne Dieter und Manfred Hoser übernehmen den Betrieb und bauen ihn konsequent aus. Das Team wächst auf rund 30 Mitarbeiter.",
    detail: "Das Leistungsspektrum erweitert sich auf Hoch-, Tief- und Kanalbau. Die Eigenständigkeit durch eigenes Fachpersonal wird zum Markenzeichen.",
  },
  {
    year: "1990er",
    title: "Wachstum & Modernisierung",
    desc: "Investitionen in einen umfangreichen Maschinenpark und die Ausbildung eigener Fachkräfte sichern Unabhängigkeit und Qualität auf höchstem Niveau.",
    detail: "Hoser entwickelt sich zu einem der führenden Bauunternehmen im Großraum München – mit über 60 festangestellten Mitarbeitern.",
  },
  {
    year: "2010er",
    title: "Dritte Generation",
    desc: "Claudia Hoser und Josef Lippacher übernehmen die Geschäftsführung. Sie führen das Familienunternehmen mit modernen Strukturen in die Zukunft.",
    detail: "Der Anspruch bleibt derselbe: Qualität, Termintreue und Festpreisgarantie. Neue digitale Prozesse ergänzen das bewährte Handwerk.",
  },
  {
    year: "Heute",
    title: "70+ Jahre Baukultur",
    desc: "Über 70 Jahre nach der Gründung steht Hoser Bauunternehmen für bayerisches Handwerk auf höchstem Niveau. Über 500 abgeschlossene Projekte sprechen für sich.",
    detail: "Mit eigenem Fachpersonal, modernem Maschinenpark und einem starken regionalen Netzwerk bauen wir an der Zukunft des Großraums München.",
  },
];

export function Geschichte() {
  return (
    <section className="bg-[#f0f0ef] px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="container">

        {/* Heading block */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
              Seit 1952
            </p>
            <h2
              className="font-heading font-bold leading-tight tracking-tight text-[#0a1020]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Unsere Geschichte
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-[#0a1020]/55 md:text-right">
            Drei Generationen. Eine Familie.<br />Ein Anspruch: Bauen, das hält.
          </p>
        </div>

        {/* Timeline rows */}
        <div>
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className="group relative grid grid-cols-1 md:grid-cols-[220px_1px_1fr] md:gap-x-10 gap-y-4 py-10 md:py-12 border-b border-[#0a1020]/10 last:border-0 transition-all duration-300"
            >
              {/* Year column */}
              <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-0 pt-1">
                <span
                  className="font-heading font-bold leading-none text-[#0a1020]/[0.06] select-none transition-colors duration-500 group-hover:text-hoser-gold/15"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}
                >
                  {m.year}
                </span>
                <span className="md:mt-3 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-hoser-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block relative">
                <div className="absolute inset-0 mx-auto w-px bg-[#0a1020]/10 transition-colors duration-500 group-hover:bg-hoser-gold/50" />
              </div>

              {/* Content */}
              <div className="md:pl-2">
                {/* Gold left accent (mobile) */}
                <div className="md:hidden mb-4 h-px w-10 bg-hoser-gold" />

                <h3 className="mb-3 font-heading text-2xl font-bold text-[#0a1020] md:text-3xl transition-colors duration-300 group-hover:text-hoser-gold">
                  {m.title}
                </h3>
                <p className="mb-3 font-body text-base leading-relaxed text-[#0a1020]/65 max-w-2xl">
                  {m.desc}
                </p>
                <p className="font-body text-sm leading-relaxed text-[#0a1020]/40 max-w-xl">
                  {m.detail}
                </p>

                {/* Gold bottom accent line on hover */}
                <div className="mt-6 h-px w-0 bg-hoser-gold transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
