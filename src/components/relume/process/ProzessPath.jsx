"use client";

import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Erstgespräch",
    bullets: [
      "Kostenlose Erstberatung",
      "Wünsche & Anforderungen klären",
      "Unverbindliche Einschätzung",
    ],
  },
  {
    num: "02",
    title: "Besichtigung & Angebot",
    bullets: [
      "Vor-Ort Besichtigung",
      "Detailliertes, transparentes Angebot",
      "Farbberatung & Konzept",
    ],
  },
  {
    num: "03",
    title: "Planung & Vorbereitung",
    bullets: [
      "Materialauswahl in Profiqualität",
      "Terminplanung & Abstimmung",
      "Unterlagenschutz & Vorbereitung",
    ],
  },
  {
    num: "04",
    title: "Fachgerechte Ausführung",
    bullets: [
      "Eigenleistung durch Sascha Schmidt",
      "Laufende Qualitätskontrolle",
      "Saubere und pünktliche Arbeit",
    ],
  },
  {
    num: "05",
    title: "Abnahme & Übergabe",
    bullets: [
      "Gemeinsame Abnahme vor Ort",
      "Mängelbeseitigung garantiert",
      "Ihre Zufriedenheit steht an erster Stelle",
    ],
  },
];

export function ProzessPath() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container max-w-2xl mx-auto">
        <div className="divide-y divide-[rgba(184,147,90,0.12)]">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center py-14 md:py-16">
              {/* Number */}
              <span
                className="mb-4 font-heading font-bold tabular-nums"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "rgba(184,147,90,0.20)", lineHeight: 1 }}
              >
                {step.num}
              </span>

              {/* Title */}
              <h3
                className="mb-5 font-heading font-bold text-[#141414]"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)" }}
              >
                {step.title}
              </h3>

              {/* Divider */}
              <div className="mb-5 h-px w-10" style={{ backgroundColor: "#B8935A" }} />

              {/* Bullets */}
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="font-body text-sm leading-relaxed text-[#141414]/55">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
