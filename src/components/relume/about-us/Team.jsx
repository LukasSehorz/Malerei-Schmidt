"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "../../../utils/gsap";

const team = [
  { name: "Sascha Schmidt", role: "Inhaber & Meister" },
  { name: "Maler-Geselle",  role: "Innen & Außenanstrich" },
  { name: "Maler-Geselle",  role: "Airless & Spachtelarbeiten" },
  { name: "Fachkraft",      role: "Bautenschutz & Schimmelsanierung" },
  { name: "Auszubildender", role: "Maler & Lackierer" },
];

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

export function Team() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(eyebrowRef.current, { y: 22, opacity: 0 });
      const headingWords = headingRef.current
        ? splitWords(headingRef.current, "Unser Team")
        : [];
      gsap.set(headingWords, { yPercent: 110 });
      gsap.set(subRef.current, { y: 18, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        defaults: { force3D: true },
      })
        .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .to(headingWords, { yPercent: 0, duration: 1.0, ease: "expo.out", stagger: 0.07 }, "-=0.35")
        .to(subRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5");

      // Per-card entrance
      cardsRef.current.filter(Boolean).forEach((card, idx) => {
        const name  = card.querySelector("[data-team-name]");
        const role  = card.querySelector("[data-team-role]");

        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            once: true,
          },
          delay: idx * 0.08,
          defaults: { force3D: true },
        })
          .from(name,  { y: 14, opacity: 0, duration: 0.5, ease: "power3.out" })
          .from(role,  { y: 14, opacity: 0, duration: 0.45, ease: "power3.out" }, "-=0.35");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container">

        {/* Heading */}
        <div className="mb-14 md:mb-18">
          <p ref={eyebrowRef} className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#B8935A]">
            Menschen bei Schmidt Maler
          </p>
          <h2
            ref={headingRef}
            className="font-heading font-bold leading-tight tracking-tight text-[#141414]"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Unser Team
          </h2>
          <p ref={subRef} className="mt-4 max-w-xl font-body text-base text-[#141414]/60">
            Eigenes, ausgebildetes Fachpersonal – kein Rückgriff auf Fremdunternehmen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {team.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group flex flex-col items-center text-center py-6 px-4 rounded-2xl transition-colors duration-300"
              style={{ border: "1px solid rgba(184,147,90,0.12)" }}
            >
              {/* Info */}
              <h3 data-team-name className="font-heading text-sm font-bold text-[#141414] md:text-base">
                {member.name}
              </h3>
              <p data-team-role className="mt-1 font-body text-xs" style={{ color: "rgba(184,147,90,0.8)" }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
