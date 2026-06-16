"use client";

import React from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";

export function Contact14() {
  return (
    <section className="px-[5%] pt-10 pb-16 md:pt-14 md:pb-24" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container">

        {/* Top row: text left, map right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 mb-14 md:mb-20">

          {/* Left: heading + description */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#B8935A]">
              Kontakt
            </p>
            <h2
              className="mb-5 font-heading font-bold leading-tight tracking-tight text-[#141414]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Sprechen Sie mit uns.
            </h2>
            <p className="font-body text-base leading-relaxed text-[#141414]/60 md:text-lg">
              Wir sind Ihr direkter Ansprechpartner für alle Fragen rund um Malerei und Bautenschutz –
              von der ersten Beratung bis zum perfekten Ergebnis.
            </p>
          </div>

          {/* Right: Stilisierte Karte */}
          <div className="overflow-hidden rounded-sm" style={{ minHeight: 280, background: "#F0EDE8" }}>
            <svg
              viewBox="0 0 600 380"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "100%", minHeight: 280, display: "block" }}
              aria-label="Standort Mühldorf am Inn, Bayern"
            >
              {/* Background */}
              <rect width="600" height="380" fill="#EDE8DF" />

              {/* Subtle grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(184,147,90,0.10)" strokeWidth="0.5"/>
                </pattern>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#B8935A" floodOpacity="0.35"/>
                </filter>
              </defs>
              <rect width="600" height="380" fill="url(#grid)" />

              {/* Inn river */}
              <path d="M 0 230 Q 80 210 160 225 Q 240 240 320 220 Q 400 200 480 215 Q 540 225 600 210"
                fill="none" stroke="#A8C4D0" strokeWidth="6" strokeLinecap="round" opacity="0.7"/>
              <path d="M 0 234 Q 80 214 160 229 Q 240 244 320 224 Q 400 204 480 219 Q 540 229 600 214"
                fill="none" stroke="#BDD4DC" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>

              {/* Roads */}
              <path d="M 0 180 Q 150 175 300 185 Q 450 195 600 180"
                fill="none" stroke="#D4C9B8" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 300 0 Q 295 100 300 185 Q 305 270 310 380"
                fill="none" stroke="#D4C9B8" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 0 300 Q 100 290 200 295 Q 250 297 300 185"
                fill="none" stroke="#D4C9B8" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
              <path d="M 600 320 Q 450 310 380 270 Q 340 240 300 185"
                fill="none" stroke="#D4C9B8" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>

              {/* Surrounding cities – small dots + labels */}
              {/* München */}
              <circle cx="130" cy="120" r="4" fill="#C4B8A8"/>
              <text x="142" y="124" fontFamily="Syne, sans-serif" fontSize="11" fill="#8C7A6B" letterSpacing="0.05em">München</text>

              {/* Salzburg */}
              <circle cx="490" cy="155" r="4" fill="#C4B8A8"/>
              <text x="500" y="159" fontFamily="Syne, sans-serif" fontSize="11" fill="#8C7A6B" letterSpacing="0.05em">Salzburg</text>

              {/* Rosenheim */}
              <circle cx="200" cy="290" r="3.5" fill="#C4B8A8"/>
              <text x="210" y="294" fontFamily="Syne, sans-serif" fontSize="10" fill="#8C7A6B" letterSpacing="0.04em">Rosenheim</text>

              {/* Landshut */}
              <circle cx="100" cy="260" r="3.5" fill="#C4B8A8"/>
              <text x="110" y="264" fontFamily="Syne, sans-serif" fontSize="10" fill="#8C7A6B" letterSpacing="0.04em">Landshut</text>

              {/* Traunstein */}
              <circle cx="430" cy="290" r="3.5" fill="#C4B8A8"/>
              <text x="440" y="294" fontFamily="Syne, sans-serif" fontSize="10" fill="#8C7A6B" letterSpacing="0.04em">Traunstein</text>

              {/* Altötting */}
              <circle cx="430" cy="195" r="3.5" fill="#C4B8A8"/>
              <text x="440" y="199" fontFamily="Syne, sans-serif" fontSize="10" fill="#8C7A6B" letterSpacing="0.04em">Altötting</text>

              {/* Mühldorf am Inn – pin */}
              {/* Glow */}
              <circle cx="300" cy="185" r="22" fill="#B8935A" opacity="0.12"/>
              <circle cx="300" cy="185" r="14" fill="#B8935A" opacity="0.18"/>
              {/* Pin body */}
              <path d="M300 145 C286 145 275 156 275 170 C275 188 300 210 300 210 C300 210 325 188 325 170 C325 156 314 145 300 145Z"
                fill="#B8935A" filter="url(#shadow)"/>
              {/* Pin inner circle */}
              <circle cx="300" cy="170" r="7" fill="white"/>
              {/* Label */}
              <rect x="222" y="216" width="156" height="28" rx="3" fill="white" opacity="0.92"/>
              <text x="300" y="235" fontFamily="Syne, sans-serif" fontSize="12" fontWeight="700"
                fill="#141414" textAnchor="middle" letterSpacing="0.08em">Mühldorf am Inn</text>

              {/* Bayern label top right */}
              <text x="555" y="30" fontFamily="Syne, sans-serif" fontSize="10" fill="#B8935A"
                textAnchor="end" letterSpacing="0.2em" opacity="0.6">BAYERN</text>
            </svg>
          </div>
        </div>

        {/* Bottom row: contact info */}
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-16">
          <div>
            <div className="mb-3 text-[#B8935A] md:mb-4">
              <BiPhone className="size-6" />
            </div>
            <h3 className="mb-1 font-heading text-base font-bold text-[#141414]">
              Telefon
            </h3>
            <a
              className="font-body text-base font-semibold text-[#141414] transition-colors duration-200 hover:text-[#B8935A]"
              href="tel:+4915207827485"
            >
              01520 7827485
            </a>
          </div>

          <div>
            <div className="mb-3 text-[#B8935A] md:mb-4">
              <BiEnvelope className="size-6" />
            </div>
            <h3 className="mb-1 font-heading text-base font-bold text-[#141414]">
              E-Mail
            </h3>
            <a
              className="font-body text-base font-semibold text-[#141414] transition-colors duration-200 hover:text-[#B8935A]"
              href="mailto:schmidtsascha-bau@web.de"
            >
              schmidtsascha-bau@web.de
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
