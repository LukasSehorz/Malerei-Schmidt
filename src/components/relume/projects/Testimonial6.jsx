"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const testimonials = [
  {
    quote: "Jedes Detail wurde sorgfältig umgesetzt, ohne Abstriche – und das Haus war pünktlich fertig, genau wie versprochen.",
    name: "Klaus Müller",
    role: "Bauherr, München",
    img: "/images/hero-aerial-construction.jpg",
  },
  {
    quote: "Wir waren skeptisch wegen der Sanierungskosten – aber die Festpreisgarantie hat uns vom ersten Tag an Sicherheit gegeben.",
    name: "Maria Hoffmann",
    role: "Eigentümerin, Augsburg",
    img: "/images/craftsmen-stone-facade.jpg",
  },
  {
    quote: "Regionales Know-how, professionelle Ausführung und ein Team, das wirklich zuhört.",
    name: "Thomas Weber",
    role: "Bauherr, Ingolstadt",
    img: "/images/villa-twilight.jpg",
  },
];

export function Testimonial6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        {/* Heading */}
        <div className="mb-14 md:mb-18">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
            Kundenstimmen
          </p>
          <h2
            className="font-heading font-bold leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Was unsere Kunden sagen
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-8 backdrop-blur-md transition-all duration-500 hover:border-hoser-gold/40"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {/* Decorative quote mark */}
              <span
                className="absolute right-6 top-4 font-heading font-bold leading-none text-hoser-gold/10 transition-all duration-500 group-hover:text-hoser-gold/20"
                style={{ fontSize: "8rem" }}
              >
                "
              </span>

              {/* Stars */}
              <div className="mb-6 flex gap-1 text-hoser-gold">
                {[...Array(5)].map((_, i) => (
                  <BiSolidStar key={i} className="size-4" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 mb-8 font-body text-base font-medium leading-relaxed text-white/90 md:text-lg">
                {t.quote}
              </blockquote>

              {/* Divider */}
              <div className="mb-6 h-px w-full bg-white/10" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="size-12 rounded-full object-cover ring-2 ring-hoser-gold/30"
                />
                <div>
                  <p className="font-body text-sm font-semibold text-white">{t.name}</p>
                  <p className="font-body text-xs text-white/50">{t.role}</p>
                </div>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-hoser-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
