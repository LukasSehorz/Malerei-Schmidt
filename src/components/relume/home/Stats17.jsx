"use client";

import React from "react";

const stats = [
  { value: "547", label: "Abgeschlossene Projekte" },
  { value: "98%", label: "Pünktliche Fertigstellung" },
  { value: "96%", label: "Im Budgetrahmen" },
  { value: "70+", label: "Jahre in Bayern" },
];

export function Stats17() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/villa-twilight.jpg"
          alt="Bayerische Villa im Abendlicht"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-hoser-gold md:mb-4">
              Unsere Zahlen
            </p>
            <h2 className="mb-5 font-heading text-5xl font-bold leading-tight tracking-tight text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              Ergebnisse,<br />die für sich sprechen
            </h2>
            <p className="font-body text-base text-text-alternative/75 md:text-lg">
              Über 70 Jahre Bauen in Bayern. Hunderte von Gebäuden. Ein Ruf.
            </p>
            <div className="mt-8">
              <a
                href="/projekte"
                className="inline-flex items-center gap-3 border border-text-alternative/30 px-7 py-3 font-body text-sm font-semibold tracking-wide text-text-alternative transition-all duration-200 hover:border-hoser-gold hover:text-hoser-gold"
              >
                Projekte entdecken
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-2 md:gap-x-12 md:gap-y-12">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-hoser-gold pl-6">
                <p className="mb-2 font-heading text-5xl font-bold leading-tight text-text-alternative md:text-6xl lg:text-7xl">
                  {stat.value}
                </p>
                <p className="font-body text-sm font-medium text-text-alternative/70 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
