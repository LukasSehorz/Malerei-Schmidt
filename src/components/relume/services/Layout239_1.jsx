"use client";

import React from "react";
import liebherrLogo from "../../../assets/logos/liebherr.svg";
import zeppelinLogo from "../../../assets/logos/zeppelin.svg";
import hiltiLogo from "../../../assets/logos/hilti.svg";
import heidelbergLogo from "../../../assets/logos/heidelberg.svg";

const certifications = [
  { label: "ISO 9001", sub: "Qualitätsmanagement" },
  { label: "SCC**", sub: "Arbeitssicherheit" },
  { label: "VOB", sub: "Vergabe & Vertragsordnung" },
  { label: "DGNB", sub: "Nachhaltiges Bauen" },
];

const partners = [
  { label: "PERI", logo: null },
  { label: "Liebherr", logo: liebherrLogo },
  { label: "Zeppelin", logo: zeppelinLogo },
  { label: "Hilti", logo: hiltiLogo },
  { label: "Knauf", logo: null },
  { label: "Heidelberg Materials", logo: heidelbergLogo },
];

const track = [...partners, ...partners];

export function Layout239_1() {
  return (
    <section className="bg-[#f0f0ef] py-16 md:py-24 lg:py-28">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <div className="container px-[5%] mb-12 md:mb-16">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold">
          Zertifikate & Partner
        </p>
        <h2
          className="font-heading font-bold leading-tight tracking-tight text-[#0a1020]"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
        >
          Qualität, die man nachweisen kann.
        </h2>
      </div>

      {/* Certifications dark strip — full width */}
      <div className="mb-16" style={{ borderTop: "2px solid #C9A84C" }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ background: "linear-gradient(135deg, #0d1a2e 0%, #111827 60%, #0a1020 100%)" }}
        >
          {certifications.map((c, i) => (
            <div
              key={c.label}
              className={`group relative flex flex-col justify-between py-8 px-8 transition-colors duration-300 hover:bg-white/[0.03] ${
                i < certifications.length - 1 ? "border-r border-white/8" : ""
              }`}
            >
              {/* Top: category */}
              <span className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-hoser-gold/70">
                Zertifiziert
              </span>
              {/* Center: cert name */}
              <span className="font-heading text-2xl font-bold text-white md:text-3xl">
                {c.label}
              </span>
              {/* Bottom: description */}
              <span className="mt-3 font-body text-xs text-white/40 tracking-wide">
                {c.sub}
              </span>
              {/* Gold bottom accent on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-hoser-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Partner label */}
      <div className="container px-[5%] mb-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#0a1020]/40">
          Partner & Lieferanten
        </p>
      </div>

      {/* Partner marquee — full width */}
      <div className="overflow-hidden border-y border-[#0a1020]/8">
        <div className="marquee-track py-6">
          {track.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-14"
              style={{ minWidth: "180px", height: "64px" }}
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.label}
                  style={{ maxHeight: "36px", width: "auto", maxWidth: "140px", display: "block" }}
                />
              ) : (
                <span className="font-heading text-lg font-bold text-[#0a1020]/30">
                  {p.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
