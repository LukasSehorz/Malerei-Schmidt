"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "Wie garantieren Sie einen Festpreis?",
    a: "Wir legen den Preis fest, bevor der Bau beginnt. Jede Position, jedes Material, jede Arbeitsleistung ist schriftlich dokumentiert und vereinbart.",
  },
  {
    q: "Was passiert, wenn etwas Unerwartetes eintritt?",
    a: "Wir planen Puffer ein und kommunizieren sofort, wenn sich etwas ändert. Sie werden nie von unerwarteten Kosten überrascht.",
  },
  {
    q: "Wie halten Sie Ihre Termine?",
    a: "Wir arbeiten in Phasen mit klaren Meilensteinen. Unsere Bilanz: 98% pünktliche Fertigstellung bei 847 abgeschlossenen Projekten.",
  },
  {
    q: "Sind Sie wirklich lokal in Bayern tätig?",
    a: "Seit zwanzig Jahren. Wir kennen die Genehmigungsverfahren, das Klima, die Vorschriften und die lokalen Behörden.",
  },
  {
    q: "Welche Regionen betreuen Sie?",
    a: "Ganz Bayern – von München über Augsburg bis Nürnberg und überall dazwischen.",
  },
  {
    q: "Kann ich Ihre Zertifizierungen einsehen?",
    a: "Ja. Wir sind von den führenden bayerischen Bauverbänden zertifiziert und zeigen diese Auszeichnungen stolz auf unserer Seite.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border-primary">
      <button
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-heading text-base font-bold text-text-primary md:text-lg">{q}</span>
        <span
          className={`mt-1 shrink-0 text-hoser-gold text-lg font-light leading-none transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 font-body text-sm text-text-secondary md:text-base">{a}</p>
      )}
    </div>
  );
}

export function Faq14() {
  return (
    <section className="bg-background-secondary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-xl text-center md:mb-18 lg:mb-20">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-hoser-gold">
            FAQ
          </p>
          <h2 className="mb-4 font-heading text-5xl font-bold leading-tight tracking-tight text-text-primary md:text-7xl lg:text-8xl">
            Häufige Fragen
          </h2>
          <p className="font-body text-base text-text-secondary md:text-lg">
            Antworten auf das, was beim Bauen in Bayern am meisten zählt.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-12 text-center md:mt-18">
          <h3 className="mb-3 font-heading text-2xl font-bold text-text-primary md:text-3xl">
            Noch Fragen?
          </h3>
          <p className="mb-6 font-body text-base text-text-secondary">
            Wir sind für Sie da. Keine Frage ist zu klein.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center border border-border-primary px-8 py-3 font-body text-sm font-semibold tracking-wide text-text-primary transition-colors duration-200 hover:border-text-primary hover:text-hoser-gold"
          >
            Fragen Sie uns
          </a>
        </div>
      </div>
    </section>
  );
}
