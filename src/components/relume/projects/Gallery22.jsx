"use client";

import React, { useState } from "react";

const photos = [
  {
    src: "/images/hero-aerial-construction.jpg",
    caption: "Luftaufnahme einer aktiven Baustelle – präzise Koordination aller Gewerke von Beginn an.",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/bild10.jpg",
    caption: "Rohbauarbeiten mit eigenem Fachpersonal – keine Werklohnfirmen, volle Kontrolle.",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/bild11.jpg",
    caption: "Sichtbetonbau auf höchstem Niveau – präzise Schalung und makellose Oberflächen.",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/bild12.jpg",
    caption: "Tiefbau und Erschließung – millimetergenaue Arbeit tief im Erdreich.",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/bild13.jpg",
    caption: "Fertigstellung und Übergabe – pünktlich, im Budgetrahmen, mit Festpreisgarantie.",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery22() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
            Einblicke
          </p>
          <h2
            className="font-heading font-bold leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Einblicke vor Ort
          </h2>
          <p className="mt-4 font-body text-base text-white/60">
            Jedes Projekt erzählt von bayerischer Präzision und Verlässlichkeit.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 280px)",
          }}
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer ${p.span}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={p.src}
                alt={p.caption}
                className="h-full w-full object-cover transition-transform duration-700"
                style={{ transform: hovered === i ? "scale(1.06)" : "scale(1)" }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-400"
                style={{
                  background: hovered === i
                    ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)",
                }}
              >
                {/* Gold line + caption */}
                <div
                  className="transition-all duration-500"
                  style={{
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <div className="mb-3 h-[2px] w-8 bg-hoser-gold" />
                  <p className="font-body text-sm leading-relaxed text-white/90 md:text-base">
                    {p.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
