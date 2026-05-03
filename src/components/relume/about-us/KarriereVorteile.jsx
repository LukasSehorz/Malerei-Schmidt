"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "../../../utils/gsap";

const splitWords = (el, text) => {
  el.innerHTML = "";
  return text.split(" ").map((word, i, arr) => {
    const wrap = document.createElement("span");
    wrap.style.display = "inline-block";
    wrap.style.overflow = "hidden";
    wrap.style.paddingBottom = "0.08em";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.style.willChange = "transform";
    inner.textContent = word + (i < arr.length - 1 ? " " : "");
    wrap.appendChild(inner);
    el.appendChild(wrap);
    return inner;
  });
};

const vorteile = [
  {
    num: "01",
    title: "Fairer Lohn",
    desc: "Übertarifliche Bezahlung und pünktliche Gehaltszahlungen – verlässlich, transparent und leistungsgerecht.",
  },
  {
    num: "02",
    title: "Modernster Maschinenpark",
    desc: "Neueste Maschinen und Geräte für effizientes und sicheres Arbeiten. Wir investieren kontinuierlich in Technik.",
  },
  {
    num: "03",
    title: "Eigene Ausbildung",
    desc: "Wir bilden selbst aus und fördern gezielt – vom Lehrling über den Facharbeiter bis zum Polier und Meister.",
  },
  {
    num: "04",
    title: "Familiäres Team",
    desc: "70 Jahre Familienunternehmen. Flache Hierarchien, direkte Kommunikation, Respekt und Zusammenhalt.",
  },
  {
    num: "05",
    title: "Sicherer Arbeitsplatz",
    desc: "Konstante Auftragslage durch starkes regionales Netzwerk – über 500 abgeschlossene Projekte seit 1952.",
  },
  {
    num: "06",
    title: "Weiterbildung & Entwicklung",
    desc: "Interne und externe Schulungen für alle Mitarbeiter. Wir investieren in deine fachliche Weiterentwicklung.",
  },
];

export function KarriereVorteile() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const ctaRef     = useRef(null);
  const ghostRef   = useRef(null);
  const cellsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.set(eyebrowRef.current, { y: 22, opacity: 0 });
      const headingWords = headingRef.current
        ? splitWords(headingRef.current, "Warum bei uns arbeiten?")
        : [];
      gsap.set(headingWords, { yPercent: 110 });
      gsap.set(subRef.current, { y: 18, opacity: 0 });
      gsap.set(ctaRef.current, { y: 18, opacity: 0 });

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
        .to(subRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.4)" }, "-=0.4");

      // Ghost "HOSER" parallax
      if (ghostRef.current) {
        gsap.to(ghostRef.current, {
          x: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Per-cell entrance: gold number scale + content lift + bottom line wipe
      cellsRef.current.filter(Boolean).forEach((cell, idx) => {
        const num   = cell.querySelector("[data-vt-num]");
        const title = cell.querySelector("[data-vt-title]");
        const desc  = cell.querySelector("[data-vt-desc]");
        const line  = cell.querySelector("[data-vt-line]");

        gsap.set(cell,  { y: 36, opacity: 0 });
        gsap.set(num,   { scale: 0.5, opacity: 0, transformOrigin: "left center" });
        gsap.set(title, { y: 14, opacity: 0 });
        gsap.set(desc,  { y: 14, opacity: 0 });
        gsap.set(line,  { scaleX: 0, transformOrigin: "left center" });

        gsap.timeline({
          scrollTrigger: {
            trigger: cell,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          delay: (idx % 3) * 0.08,
          defaults: { force3D: true },
        })
          .to(cell,  { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" })
          .to(num,   { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.6)" }, "-=0.55")
          .to(title, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, "-=0.45")
          .to(desc,  { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, "-=0.4")
          .to(line,  { scaleX: 1, duration: 0.7, ease: "expo.inOut" }, "-=0.4");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="jobs"
      className="overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d1a2e 0%, #111827 60%, #0a1020 100%)" }}
    >
      {/* Top: image background behind heading */}
      <div
        className="relative px-[5%] py-16 md:py-24 lg:py-28"
        style={{
          backgroundImage: "url('/images/bild14.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Overlay: transparent in the middle so image shows, dark at edges */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,16,32,0.55) 0%, rgba(10,16,32,0.30) 40%, rgba(13,21,32,0.70) 75%, rgba(13,21,32,1) 100%)",
          }}
        />

        {/* Decorative background text */}
        <div
          ref={ghostRef}
          className="pointer-events-none absolute right-[-2%] top-[50%] -translate-y-1/2 select-none font-heading font-bold leading-none text-white/[0.06]"
          style={{ fontSize: "clamp(6rem, 18vw, 20rem)" }}
          aria-hidden="true"
        >
          HOSER
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p ref={eyebrowRef} className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
                Karriere bei Hoser
              </p>
              <h2
                ref={headingRef}
                className="font-heading font-bold leading-tight tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              >
                Warum bei uns arbeiten?
              </h2>
            </div>
            <div className="md:text-right">
              <p ref={subRef} className="font-body text-base leading-relaxed text-white/70 max-w-md md:ml-auto">
                Als gewachsenes Familienunternehmen bieten wir mehr als nur einen Job –
                einen Arbeitsplatz, der sich lohnt. Langfristig, sicher und fair.
              </p>
              <a
                ref={ctaRef}
                href="#stellenangebote"
                className="mt-6 inline-flex items-center gap-2 border border-[#C9A84C]/50 px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-[#C9A84C] transition-all duration-200 hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C]"
              >
                Alle Stellen ansehen →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits grid */}
      <div className="px-[5%] pb-16 md:pb-24 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {vorteile.map((v, idx) => (
              <div
                key={v.num}
                ref={(el) => (cellsRef.current[idx] = el)}
                className="group relative bg-[#0d1520] p-8 md:p-10 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <span data-vt-num className="mb-6 block font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A84C]/60">
                  {v.num}
                </span>
                <h3 data-vt-title className="mb-3 font-heading text-lg font-bold text-white md:text-xl transition-colors duration-300 group-hover:text-[#C9A84C]">
                  {v.title}
                </h3>
                <p data-vt-desc className="font-body text-sm leading-relaxed text-white/45">
                  {v.desc}
                </p>
                <div data-vt-line className="absolute bottom-0 left-0 h-[2px] w-full bg-[#C9A84C]/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
