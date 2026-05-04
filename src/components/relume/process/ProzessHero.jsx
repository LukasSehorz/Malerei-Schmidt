"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "../../../utils/gsap";

export function ProzessHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".prozess-hero-bg", { scale: 1.06, duration: 2.8, ease: "power1.out" });
      gsap.from(".prozess-hero-line", { scaleX: 0, transformOrigin: "left center", duration: 0.8, delay: 0.3, ease: "power3.out" });
      gsap.from(".prozess-hero-eyebrow", { y: "120%", duration: 0.65, delay: 0.55, ease: "power3.out" });
      gsap.from(".prozess-hero-title span", { y: "110%", stagger: 0.12, duration: 1.0, delay: 0.75, ease: "power3.out" });
      gsap.from(".prozess-hero-sub", { y: 24, opacity: 0, duration: 0.8, delay: 1.4, ease: "power2.out" });
      gsap.from(".prozess-hero-scroll", { opacity: 0, x: -16, duration: 0.6, delay: 1.9, ease: "power2.out" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background image */}
      <img
        src="/images/bild1.png"
        alt="Hoser Bauunternehmen – Prozess"
        className="prozess-hero-bg absolute inset-0 h-full w-full object-cover object-center"
        style={{ willChange: "transform" }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(4,10,22,0.96) 0%, rgba(4,10,22,0.82) 40%, rgba(4,10,22,0.3) 75%, rgba(4,10,22,0.05) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-[6%] pt-28 pb-24 md:pt-32 lg:pt-36 md:max-w-[55%] lg:max-w-[50%]">
        <div className="mb-8 flex items-center gap-4">
          <span className="prozess-hero-line h-px w-10 flex-shrink-0 bg-hoser-gold" />
          <div style={{ overflow: "hidden" }}>
            <p className="prozess-hero-eyebrow font-body text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Unser Weg · Von der Idee bis zur Übergabe
            </p>
          </div>
        </div>

        <h1
          className="prozess-hero-title mb-8 font-heading font-bold tracking-tight text-white"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 6rem)", lineHeight: 1.04 }}
        >
          {["Ihr Projekt.", "Unser Prozess."].map((line, i) => (
            <span key={i} className="block" style={{ overflow: "hidden", paddingBottom: "0.08em" }}>
              <span className="block">{line}</span>
            </span>
          ))}
        </h1>

        <p className="prozess-hero-sub max-w-[400px] font-body text-base leading-relaxed text-white/55 md:text-lg">
          Fünf klar definierte Schritte. Festpreise, Termintreue und volle
          Transparenz – von der ersten Beratung bis zur Schlüsselübergabe.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="prozess-hero-scroll absolute bottom-8 left-[6%] z-10 hidden lg:flex items-center gap-3">
        <span className="h-px w-8 bg-white/20 block" />
        <span className="font-body text-xs uppercase tracking-[0.2em] text-white/30">Scroll</span>
      </div>
    </section>
  );
}
