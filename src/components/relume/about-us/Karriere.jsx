"use client";

import React, { useState } from "react";

const jobs = [
  {
    title: "Maurer",
    type: "Vollzeit",
    location: "Raum München / Ebersberg / Erding",
    desc: "Maurerarbeiten auf unseren Baustellen im Großraum München. Du arbeitest an abwechslungsreichen Projekten – vom Wohnungsbau bis zur Gewerbehalle.",
    anforderungen: [
      "Abgeschlossene Ausbildung als Maurer",
      "Erfahrung im Roh- und Mauerwerksbau",
      "Teamfähigkeit und Zuverlässigkeit",
      "Führerschein Klasse B von Vorteil",
    ],
    bieten: [
      "Übertarifliche Entlohnung",
      "Moderne Arbeitsmittel und Schutzausrüstung",
      "Langfristige Anstellung in einem stabilen Unternehmen",
      "Kollegiales, eingespieltes Team",
    ],
  },
  {
    title: "Schalungszimmerer",
    type: "Vollzeit",
    location: "Raum München / Ebersberg / Erding",
    desc: "Planung und Ausführung von Schalungsarbeiten für Beton- und Stahlbetonbau auf anspruchsvollen Bauprojekten in Bayern.",
    anforderungen: [
      "Ausbildung als Zimmerer, Schalungsbauer oder vergleichbar",
      "Erfahrung mit Systemschalungen (z. B. PERI, Doka)",
      "Lesen von Schalungsplänen",
      "Körperliche Belastbarkeit",
    ],
    bieten: [
      "Attraktive Vergütung über Tarif",
      "Modernster Schalungspark (PERI-Systeme)",
      "Spannende Großprojekte in der Region",
      "Weiterbildungsmöglichkeiten",
    ],
  },
  {
    title: "Beton- & Stahlbetonbauer",
    type: "Vollzeit",
    location: "Raum München / Ebersberg / Erding",
    desc: "Betonarbeiten und Bewehrung auf anspruchsvollen Bauprojekten in Bayern – von Fundamenten bis hin zu komplexen Stahlbetonkonstruktionen.",
    anforderungen: [
      "Abgeschlossene Ausbildung als Beton- und Stahlbetonbauer",
      "Erfahrung in der Bewehrungsmontage",
      "Qualitätsbewusstsein und Genauigkeit",
      "Teamarbeit auf Großbaustellen",
    ],
    bieten: [
      "Übertarifliche Bezahlung",
      "Abwechslungsreiche Projekte – kein Einerlei",
      "Eigener, gepflegter Maschinenpark",
      "Familienfreundliches Arbeitsklima",
    ],
  },
  {
    title: "Kanalbauer",
    type: "Vollzeit",
    location: "Raum München / Ebersberg / Erding",
    desc: "Tiefbau, Kanal- und Wasserleitungsarbeiten für Kommunen und private Auftraggeber im Großraum München.",
    anforderungen: [
      "Ausbildung als Kanalbauer oder Tiefbauer",
      "Erfahrung im Kanal- und Leitungsbau",
      "Kenntnisse der einschlägigen DIN-Normen",
      "Führerschein Klasse B erforderlich, C/CE von Vorteil",
    ],
    bieten: [
      "Tarifgerechte, überdurchschnittliche Vergütung",
      "Kommunale und private Großprojekte",
      "Sicherer Arbeitsplatz mit langer Projektkontinuität",
      "Moderne Tiefbaugeräte und Verbausysteme",
    ],
  },
  {
    title: "Kranführer",
    type: "Vollzeit",
    location: "Raum München / Ebersberg / Erding",
    desc: "Bedienung und Wartung von Turmdreh- und Mobilkränen auf unseren Baustellen. Verantwortungsvolle Tätigkeit im Herzen des Baugeschehens.",
    anforderungen: [
      "Kranführerschein (Turmdrehkran und/oder Mobilkran)",
      "Erfahrung im Baukraneinsatz",
      "Zuverlässigkeit und Verantwortungsbewusstsein",
      "Bereitschaft zur regelmäßigen Fortbildung",
    ],
    bieten: [
      "Übertarifliche Vergütung",
      "Moderner Kranpark (Liebherr)",
      "Eigenverantwortliches Arbeiten",
      "Lange Projektlaufzeiten – kein ständiger Wechsel",
    ],
  },
  {
    title: "Baggerfahrer",
    type: "Vollzeit",
    location: "Raum München / Ebersberg / Erding",
    desc: "Erdarbeiten, Aushub und Geländegestaltung mit modernen Baggern und Erdbaumaschinen auf unseren Baustellen.",
    anforderungen: [
      "Erfahrung als Baggerfahrer / Maschinenführer",
      "Führerschein Klasse B, CE von Vorteil",
      "Sorgfältiger Umgang mit Maschinen",
      "Flexibilität und Einsatzbereitschaft",
    ],
    bieten: [
      "Attraktive Entlohnung",
      "Neuwertige Maschinen (Komatsu/Liebherr)",
      "Abwechslungsreiche Einsätze im Raum München",
      "Teamorientiertes Umfeld",
    ],
  },
  {
    title: "Schlosser / Landmaschinenmechaniker",
    type: "Vollzeit",
    location: "Werkstatt in Markt Schwaben",
    desc: "Instandhaltung und Reparatur unseres umfangreichen Maschinenparks und Fuhrparks – eine abwechslungsreiche Werkstatttätigkeit mit Eigenverantwortung.",
    anforderungen: [
      "Ausbildung als Schlosser, KFZ-Mechatroniker, Landmaschinenmechaniker oder ähnlich",
      "Erfahrung in der Diagnose und Reparatur von Baumaschinen",
      "Selbstständiges Arbeiten",
      "Führerschein Klasse B",
    ],
    bieten: [
      "Gut ausgestattete Werkstatt in Markt Schwaben",
      "Abwechslungsreiche Aufgaben an verschiedenen Maschinentypen",
      "Übertarifliche Bezahlung",
      "Direkter Kontakt zur Geschäftsführung",
    ],
  },
];

export function Karriere() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      id="stellenangebote"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1020 0%, #111827 100%)" }}
    >
      <div className="container">

        {/* Heading */}
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
              Stellenangebote
            </p>
            <h2
              className="font-heading font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Offene Stellen
            </h2>
          </div>
          <div>
            <p className="font-body text-base leading-relaxed text-white/50">
              Wir suchen laufend qualifizierte Fachkräfte, Vorarbeiter und Poliere.
              Alle Stellen sind unbefristet und mit sofortigem Einstieg möglich.
            </p>
          </div>
        </div>

        {/* Job list */}
        <div className="mb-14">
          {jobs.map((job, i) => (
            <div key={job.title} className="border-t border-white/8">
              <button
                className="group flex w-full items-center justify-between py-6 text-left transition-colors duration-200"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <div className="flex items-center gap-6">
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-hoser-gold/50 w-8 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white transition-colors duration-200 group-hover:text-hoser-gold md:text-2xl">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-body text-xs text-white/35 uppercase tracking-widest">
                        {job.type}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="font-body text-xs text-white/35 uppercase tracking-widest">
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-hoser-gold text-xl transition-all duration-300 group-hover:border-hoser-gold/60"
                  style={{ transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>

              {/* Expand panel */}
              <div
                className="overflow-hidden transition-all duration-500"
                style={{ maxHeight: openIdx === i ? "600px" : "0px" }}
              >
                <div className="pb-10 pl-[calc(0.5rem+32px)] pr-4 md:pr-12">
                  <p className="mb-8 font-body text-base leading-relaxed text-white/60 max-w-2xl">
                    {job.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Anforderungen */}
                    <div>
                      <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-hoser-gold">
                        Was du mitbringst
                      </p>
                      <ul className="space-y-2">
                        {job.anforderungen.map((a) => (
                          <li key={a} className="flex items-start gap-3 font-body text-sm text-white/55">
                            <span className="mt-[6px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-hoser-gold/70" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Was wir bieten */}
                    <div>
                      <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-hoser-gold">
                        Was wir bieten
                      </p>
                      <ul className="space-y-2">
                        {job.bieten.map((b) => (
                          <li key={b} className="flex items-start gap-3 font-body text-sm text-white/55">
                            <span className="mt-[6px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-hoser-gold/70" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="mailto:jobs@hoser-bauunternehmung.de"
                    className="inline-flex items-center gap-2 bg-hoser-gold px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity duration-200 hover:opacity-85"
                  >
                    Jetzt bewerben →
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/8" />
        </div>

        {/* Contact box */}
        <div className="border border-white/10 px-8 py-10 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-hoser-gold">
                Initiativbewerbung & Kontakt
              </p>
              <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                Kein passendes Angebot?
              </h3>
              <p className="mt-3 font-body text-sm text-white/50 leading-relaxed">
                Wir freuen uns jederzeit über Initiativbewerbungen qualifizierter Handwerker.
                Schriftlich an:<br />
                <span className="text-white/70">Hoser Bauunternehmung GmbH · Adalbert-Stifter-Weg 29 · 85570 Markt Schwaben</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:jobs@hoser-bauunternehmung.de"
                className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 font-body text-sm text-white transition-all duration-200 hover:border-hoser-gold hover:text-hoser-gold"
              >
                <span className="text-hoser-gold text-base">✉</span>
                jobs@hoser-bauunternehmung.de
              </a>
              <a
                href="tel:+498121471100"
                className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 font-body text-sm text-white transition-all duration-200 hover:border-hoser-gold hover:text-hoser-gold"
              >
                <span className="text-hoser-gold text-base">☎</span>
                08121 / 47 11 0
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
