"use client";

import React from "react";

export function Layout10() {
  return (
    <section className="bg-background-primary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-hoser-gold">
              Unternehmen
            </p>
            <h1 className="mb-5 font-heading text-5xl font-bold leading-tight tracking-tight text-text-primary md:text-7xl lg:text-8xl">
              Drei Jahrzehnte bayerisches Handwerk
            </h1>
            <p className="mb-8 font-body text-base text-text-secondary md:text-lg">
              Wir bauen Häuser, die Bestand haben. Jedes Projekt wird mit derselben
              Sorgfalt behandelt – ob Neubau oder Sanierung eines historischen
              Gebäudes. Unser Wort ist unser Versprechen.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="border-l-2 border-hoser-gold pl-5">
                <h6 className="mb-2 font-heading text-base font-bold text-text-primary md:text-lg">
                  Warum uns vertrauen
                </h6>
                <p className="font-body text-sm text-text-secondary">
                  Über 800 Häuser in Bayern. Unsere Kunden wissen: Wir liefern.
                </p>
              </div>
              <div className="border-l-2 border-hoser-gold pl-5">
                <h6 className="mb-2 font-heading text-base font-bold text-text-primary md:text-lg">
                  Wie wir arbeiten
                </h6>
                <p className="font-body text-sm text-text-secondary">
                  Transparente Zeitpläne, Festpreise und regelmäßige Updates von Anfang bis Ende.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/leistungen"
                className="inline-flex items-center border border-border-primary px-7 py-3 font-body text-sm font-semibold tracking-wide text-text-primary transition-colors duration-200 hover:border-text-primary"
              >
                Leistungen entdecken
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-hoser-gold"
              >
                Kontakt aufnehmen
                <span className="text-hoser-gold">→</span>
              </a>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/craftsmen-stone-facade.jpg"
              className="w-full object-cover transition-transform duration-700 hover:scale-105"
              alt="Handwerker bei der Fassadenarbeit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
