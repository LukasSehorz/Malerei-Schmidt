"use client";

import React from "react";

const stats = [
  { value: "547", label: "Abgeschlossene\nProjekte" },
  { value: "98%", label: "Pünktliche\nFertigstellung" },
  { value: "96%", label: "Im\nBudgetrahmen" },
  { value: "70+", label: "Jahre\nin Bayern" },
];

export function Stats20() {
  return (
    <section className="py-16 md:py-24 lg:py-28">

      {/* Heading */}
      <div className="container px-[5%] mb-16">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
          Zahlen & Fakten
        </p>
        <h2
          className="font-heading font-bold leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
        >
          Ergebnisse, die für sich sprechen
        </h2>
        <p className="mt-4 max-w-xl font-body text-base text-white/60">
          Über 70 Jahre Bauen in Bayern. Hunderte von Gebäuden. Ein Ruf.
        </p>
      </div>

      {/* Full-width stats strip */}
      <div className="border-y border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group px-10 py-12 transition-colors duration-300 hover:bg-white/5 ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <p
                className="font-heading font-bold leading-none text-white transition-colors duration-300 group-hover:text-hoser-gold"
                style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
              >
                {s.value}
              </p>
              <div className="mt-4 h-px w-8 bg-hoser-gold/50 transition-all duration-300 group-hover:w-16 group-hover:bg-hoser-gold" />
              <p className="mt-3 whitespace-pre-line font-body text-sm leading-relaxed text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container px-[5%] mt-10">
        <a
          href="#projekte"
          className="inline-flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-hoser-gold"
        >
          Projekte entdecken <span className="text-hoser-gold">→</span>
        </a>
      </div>

    </section>
  );
}
