"use client";

import React, { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Brauerei Schweiger",
    category: "Neubau & Sanierung",
    desc: "Umbau und Erweiterung der Gaststätte Brauhaus in Markt Schwaben",
    location: "Markt Schwaben",
    img: "/images/bild-schweiger.jpg",
    detail: "Im Zuge der Modernisierung wurde die traditionsreiche Gaststätte Brauhaus Schweiger in Markt Schwaben umgebaut und umfassend erweitert. Hoser Bauunternehmen übernahm sämtliche Hochbauarbeiten – von der Planung und Statik bis zur schlüsselfertigen Übergabe. Besonderes Augenmerk lag auf der Erhaltung des charakteristischen Erscheinungsbilds bei gleichzeitig moderner Funktionalität.",
    images: ["/images/bild-s1.jpg", "/images/bild-s2.jpg", "/images/bild-s3.jpg", "/images/bild-s4.jpg"],
  },
  {
    id: "02",
    title: "Wohnanlage München / Trudering",
    category: "Wohnbau",
    desc: "Neubau einer Wohnanlage mit 97 Wohneinheiten und Tiefgarage",
    location: "München-Trudering",
    img: "/images/bild-trudering.jpg",
    detail: "In München-Trudering errichtete Hoser Bauunternehmen eine moderne Wohnanlage mit 97 Wohneinheiten und einer zweigeschossigen Tiefgarage. Das Projekt umfasste alle Gewerke des Rohbaus sowie die vollständige Erschließung des Grundstücks. Strenge Terminplanung und Festpreisgarantie sicherten den reibungslosen Ablauf dieses Großprojekts.",
    images: ["/images/bild-w1.jpg", "/images/bild-w2.jpg", "/images/bild-w3.jpg"],
  },
  {
    id: "03",
    title: "Raiffeisen Bank",
    category: "Gewerbebau",
    desc: "Neubau der Raiffeisen Geschäftsstelle Anzing",
    location: "Anzing",
    img: "/images/bild-bank.jpg",
    detail: "Für die Raiffeisenbank realisierte Hoser Bauunternehmen den Neubau der Geschäftsstelle in Anzing. Das repräsentative Bankgebäude vereint moderne Architektur mit hohen Anforderungen an Sicherheit und Barrierefreiheit. Alle Arbeiten wurden termingerecht und im vereinbarten Kostenrahmen abgeschlossen.",
    images: ["/images/bild-r1.jpg", "/images/bild-r2.jpg", "/images/bild-r3.jpg"],
  },
  {
    id: "04",
    title: "Firma Seidenader",
    category: "Industriebau",
    desc: "Neubau einer Produktionshalle mit Bürogebäude und Außenanlage",
    location: "Markt Schwaben",
    img: "/images/bild-seidenader.jpg",
    detail: "Für die Firma Seidenader entstand in Markt Schwaben eine neue Produktionshalle mit angeschlossenem Bürogebäude und vollständig gestalteter Außenanlage. Hoser Bauunternehmen koordinierte alle Gewerke und sorgte für eine reibungslose Integration von Produktions- und Verwaltungsbereich. Besondere Anforderungen an Tragwerk und Hallenstatik wurden präzise umgesetzt.",
    images: ["/images/bild-f1.jpg", "/images/bild-f2.jpg", "/images/bild-f3.jpg", "/images/bild-f4.jpg"],
  },
  {
    id: "05",
    title: "Friedhof Riem",
    category: "Ingenieurbau",
    desc: "Neubau einer Aussegnungshalle mit Lärmschutzwand und Besuchersteg in Sichtbeton",
    location: "München-Riem",
    img: "/images/bild-riem.jpg",
    detail: "Am Friedhof München-Riem entstand eine neue Aussegnungshalle in Sichtbetonbauweise – ergänzt durch eine Lärmschutzwand zur angrenzenden Autobahn sowie einem Besuchersteg. Das Projekt stellte höchste Anforderungen an Schalungsqualität und Betonoberfläche. Hoser Bauunternehmen realisierte das architektonisch anspruchsvolle Bauwerk mit der geforderten Präzision.",
    images: ["/images/bild-a1.jpg", "/images/bild-a2.jpg", "/images/bild-a3.jpg", "/images/bild-a4.jpg"],
  },
  {
    id: "06",
    title: "Villa Herdweg",
    category: "Wohnbau",
    desc: "Neubau eines Einfamilienhauses mit Einliegerwohnung und Garagen",
    location: "Ottenhofen / Herdweg",
    img: "/images/bild-villa.jpg",
    detail: "In Ottenhofen realisierte Hoser Bauunternehmen eine repräsentative Villa mit Einliegerwohnung und Doppelgarage. Hochwertige Materialien, sorgfältige Detailplanung und eine enge Abstimmung mit dem Bauherrn prägten dieses Projekt. Das Ergebnis ist ein modernes Eigenheim, das Komfort, Eleganz und Funktionalität vereint.",
    images: ["/images/bild-v1.jpg", "/images/bild-v2.jpg", "/images/bild-v3.jpg", "/images/bild-v4.jpg"],
  },
];

export function Portfolio15() {
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const toggle = (i) => setExpanded(expanded === i ? null : i);

  return (
    <section id="projekte" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
            Referenzprojekte
          </p>
          <h2
            className="font-heading font-bold leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Abgeschlossene Projekte in Bayern
          </h2>
        </div>

        {/* Project list */}
        <div>
          {projects.map((p, i) => (
            <div key={p.id} className="border-t border-white/10">

              {/* Row */}
              <div
                className="group relative overflow-hidden transition-all duration-500"
                style={{ background: hovered === i ? "rgba(255,255,255,0.05)" : "transparent" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Gold left border */}
                <div
                  className="absolute left-0 top-0 w-[3px] bg-hoser-gold transition-all duration-500"
                  style={{ height: hovered === i ? "100%" : "0%" }}
                />

                <div className="grid grid-cols-1 gap-6 py-8 pl-6 md:grid-cols-[60px_1fr_1fr_220px] md:items-center md:py-10 lg:py-12">
                  {/* Number */}
                  <span
                    className="font-heading text-4xl font-bold transition-colors duration-300 md:text-5xl"
                    style={{ color: hovered === i ? "#C9A84C" : "rgba(255,255,255,0.15)" }}
                  >
                    {p.id}
                  </span>

                  {/* Title + Category */}
                  <div>
                    <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-hoser-gold">
                      {p.category}
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                      {p.title}
                    </h3>
                  </div>

                  {/* Description + Location */}
                  <div>
                    <p className="font-body text-sm leading-relaxed text-white/75">
                      {p.desc}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-px w-4 bg-hoser-gold/50" />
                      <p className="font-body text-xs uppercase tracking-[0.2em] text-white/50">
                        {p.location}
                      </p>
                    </div>
                  </div>

                  {/* Image + Button */}
                  <div className="flex flex-col gap-3">
                    <div className="overflow-hidden rounded-sm md:h-28">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-full"
                      />
                    </div>
                    <button
                      onClick={() => toggle(i)}
                      className="flex items-center justify-between border border-white/20 px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-white/80 transition-all duration-300 hover:border-hoser-gold hover:text-hoser-gold"
                    >
                      <span>{expanded === i ? "Schließen" : "Mehr erfahren"}</span>
                      <span
                        className="ml-3 text-hoser-gold transition-transform duration-300"
                        style={{ transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        +
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Expand panel */}
              <div
                className="overflow-hidden transition-all duration-700"
                style={{ maxHeight: expanded === i ? "800px" : "0px" }}
              >
                <div className="border-t border-white/10 bg-black/30 px-6 py-10 backdrop-blur-sm md:pl-[calc(60px+1.5rem)]">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Info text */}
                    <div>
                      <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-hoser-gold">
                        Projektbeschreibung
                      </p>
                      <p className="font-body text-base leading-relaxed text-white/80">
                        {p.detail}
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="h-px w-6 bg-hoser-gold/60" />
                        <span className="font-body text-xs uppercase tracking-[0.2em] text-hoser-gold/70">
                          {p.category} · {p.location}
                        </span>
                      </div>
                    </div>

                    {/* Image grid */}
                    <div
                      className="grid gap-2"
                      style={{ gridTemplateColumns: `repeat(${Math.min(p.images.length, 2)}, 1fr)` }}
                    >
                      {p.images.map((img, j) => (
                        <div key={j} className="overflow-hidden rounded-sm aspect-[4/3]">
                          <img
                            src={img}
                            alt={`${p.title} ${j + 1}`}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
}
