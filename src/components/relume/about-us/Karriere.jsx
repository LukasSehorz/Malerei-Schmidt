"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "../../../utils/gsap";

const splitWords = (el, text) => {
  el.innerHTML = "";
  return text.split(" ").map((word, i, arr) => {
    const wrap = document.createElement("span");
    wrap.style.display = "inline-block";
    wrap.style.overflow = "hidden";
    wrap.style.paddingBottom = "0.08em";
    if (i < arr.length - 1) wrap.style.marginRight = "0.28em";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.style.willChange = "transform";
    inner.textContent = word;
    wrap.appendChild(inner);
    el.appendChild(wrap);
    return inner;
  });
};

const jobs = [
  {
    title: "Maurer (m/w/d)",
    type: "Vollzeit",
    location: "Berglern · Region Erding",
    desc: "Erstellung von Wänden, Mauern und Decken im Hochbau. Mitwirken bei Wohn- und Geschäftshäusern, Hallen, Ställen, Kellern und Bodenplatten.",
    anforderungen: [
      "Abgeschlossene Ausbildung als Maurer",
      "Erfahrung in Schalungsarbeiten, Betonieren und Verputzen",
      "Teamfähigkeit und Zuverlässigkeit",
      "Führerschein Klasse B von Vorteil",
    ],
    bieten: [
      "Überdurchschnittliche Bezahlung",
      "Arbeitskleidung & Sozialleistungen",
      "Junges, motiviertes Team mit Spaß an der Arbeit",
      "Volle Auftragsbücher – keine Angst vor Kurzarbeit",
    ],
  },
  {
    title: "Kranfahrer (m/w/d)",
    type: "Vollzeit",
    location: "Berglern · Region Erding",
    desc: "Sichere und präzise Steuerung unserer Krane sowie Unterstützung des Teams bei Hebe- und Transportarbeiten auf unseren Baustellen.",
    anforderungen: [
      "Kranführerschein (und idealerweise Erfahrung am Haken)",
      "Verantwortungsbewusstsein und Teamgeist",
      "Lust, mit moderner Technik zu arbeiten",
      "Zuverlässigkeit und Sorgfalt",
    ],
    bieten: [
      "Sicherer Arbeitsplatz in einem starken Team",
      "Faire Bezahlung",
      "Moderne Maschinen & Ausstattung",
      "Abwechslungsreiche Projekte in der Region",
    ],
  },
  {
    title: "Bauhelfer (m/w/d)",
    type: "Vollzeit",
    location: "Berglern · Region Erding",
    desc: "Unterstützen bei verschiedenen Bauarbeiten und Auf-/Abbauarbeiten. Du packst gern mit an und willst Teil eines starken Teams sein.",
    anforderungen: [
      "Handwerkliches Geschick & Lust auf körperliche Arbeit",
      "Zuverlässigkeit und Teamgeist",
      "Erfahrung auf dem Bau? Super – aber kein Muss",
      "Führerschein Klasse B wäre von Vorteil",
    ],
    bieten: [
      "Sicherer Job in einem motivierten Team",
      "Faire Bezahlung",
      "Abwechslungsreiche Aufgaben auf spannenden Projekten",
      "Direkte Zusammenarbeit mit erfahrenen Kollegen",
    ],
  },
];

export function Karriere() {
  const [openIdx, setOpenIdx] = useState(null);

  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const cardsRef   = useRef([]);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.set(eyebrowRef.current, { y: 22, opacity: 0 });
      const headingWords = headingRef.current
        ? splitWords(headingRef.current, "Offene Stellen")
        : [];
      gsap.set(headingWords, { yPercent: 110 });
      gsap.set(subRef.current, { y: 18, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { force3D: true },
      })
        .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .to(headingWords, { yPercent: 0, duration: 1.0, ease: "expo.out", stagger: 0.07 }, "-=0.35")
        .to(subRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5");

      // Per-card cascade entrance
      cardsRef.current.filter(Boolean).forEach((card, idx) => {
        gsap.set(card, { y: 40, opacity: 0 });
        gsap.to(card, {
          y: 0, opacity: 1, duration: 0.8, ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
          delay: (idx % 2) * 0.08,
        });
      });

      // Contact box reveal
      if (contactRef.current) {
        gsap.set(contactRef.current, { y: 40, opacity: 0 });
        gsap.to(contactRef.current, {
          y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stellenangebote"
      className="overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0E2A6B 0%, #07194A 100%)" }}
    >
      {/* Heading with image background */}
      <div
        className="relative px-[5%] py-16 md:py-24 lg:py-28"
        style={{
          backgroundImage: "url('/images/karriere-team-vogelperspektive.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(14,42,107,0.55) 0%, rgba(14,42,107,0.30) 40%, rgba(14,42,107,0.78) 75%, rgba(7,25,74,1) 100%)",
          }}
        />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p ref={eyebrowRef} className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                Stellenangebote
              </p>
              <h2
                ref={headingRef}
                className="font-heading font-bold leading-tight tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              >
                Offene Stellen
              </h2>
            </div>
            <div>
              <p ref={subRef} className="font-body text-base leading-relaxed text-white/65">
                Wir suchen laufend qualifizierte Fachkräfte, Vorarbeiter und Poliere.
                Alle Stellen sind unbefristet und mit sofortigem Einstieg möglich.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Job list + contact */}
      <div className="px-[5%] pb-16 md:pb-24 lg:pb-28">
        <div className="container">

        {/* Job cards grid */}
        <div className="mb-14 mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
          {jobs.map((job, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={job.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative cursor-pointer"
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <div
                  className="relative overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)",
                    border: "1px solid",
                    borderColor: isOpen ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.08)",
                    borderLeft: `3px solid ${isOpen ? "#FFFFFF" : "rgba(255,255,255,0.12)"}`,
                  }}
                >
                  {/* Ghost number */}
                  <span
                    className="pointer-events-none absolute right-5 top-4 select-none font-heading font-bold leading-none text-white"
                    style={{ fontSize: "5rem", opacity: 0.04 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Card header — always visible */}
                  <div className="p-7 pb-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                        {job.type}
                      </span>
                      <span className="text-white/15">·</span>
                      <span className="font-body text-[10px] uppercase tracking-wider text-white/30">
                        {job.location}
                      </span>
                    </div>

                    <h3
                      className="mb-4 font-heading font-bold text-white transition-colors duration-200 group-hover:text-white"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                    >
                      {job.title}
                    </h3>

                    <div className="flex items-center justify-between gap-4">
                      <p className="font-body text-xs text-white/35 leading-relaxed line-clamp-1 max-w-[260px]">
                        {job.desc.split(".")[0]}.
                      </p>
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white text-lg transition-all duration-300 group-hover:border-white/70"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                      >
                        +
                      </div>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div
                    className="overflow-hidden"
                    style={{ maxHeight: isOpen ? "500px" : "0px", transition: "max-height 0.5s ease" }}
                  >
                    <div className="px-7 pb-7 pt-1 border-t border-white/8">
                      <p className="mb-6 mt-4 font-body text-sm leading-relaxed text-white/55">
                        {job.desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                            Was du mitbringst
                          </p>
                          <ul className="space-y-2">
                            {job.anforderungen.map((a) => (
                              <li key={a} className="flex items-start gap-2.5 font-body text-xs text-white/50">
                                <span className="mt-[5px] flex-shrink-0 w-[4px] h-[4px] rounded-full bg-white/60" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                            Was wir bieten
                          </p>
                          <ul className="space-y-2">
                            {job.bieten.map((b) => (
                              <li key={b} className="flex items-start gap-2.5 font-body text-xs text-white/50">
                                <span className="mt-[5px] flex-shrink-0 w-[4px] h-[4px] rounded-full bg-white/60" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a
                        href="mailto:schmid-bau@gmx.net"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-white px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.12em] text-hoser-gold transition-opacity hover:opacity-90"
                      >
                        Jetzt bewerben →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact box */}
        <div ref={contactRef} className="border border-white/10 px-8 py-10 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-white">
                Initiativbewerbung & Kontakt
              </p>
              <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                Kein passendes Angebot?
              </h3>
              <p className="mt-3 font-body text-sm text-white/50 leading-relaxed">
                Wir freuen uns jederzeit über Initiativbewerbungen qualifizierter Handwerker.
                Schriftlich an:<br />
                <span className="text-white/70">Schmid-Bau GmbH · Kreuzstraße 19 · 85459 Berglern</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:schmid-bau@gmx.net"
                className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 font-body text-sm text-white transition-all duration-200 hover:border-white hover:bg-white/5"
              >
                <span className="text-white text-base">✉</span>
                schmid-bau@gmx.net
              </a>
              <a
                href="tel:+491707795316"
                className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 font-body text-sm text-white transition-all duration-200 hover:border-white hover:bg-white/5"
              >
                <span className="text-white text-base">☎</span>
                0170 / 779 5316
              </a>
            </div>
          </div>
        </div>

        </div>{/* end container */}
      </div>{/* end bottom section */}
    </section>
  );
}
