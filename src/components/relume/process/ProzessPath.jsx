"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../../utils/gsap";
import { MessageSquare, Ruler, ClipboardCheck, Building2, KeyRound } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Erstgespräch",
    Icon: MessageSquare,
    above: false,
    bullets: [
      "Kostenlose Erstberatung vor Ort",
      "Projektziele & Budget definieren",
      "Erste Machbarkeitseinschätzung",
    ],
  },
  {
    num: "02",
    title: "Planung & Angebot",
    Icon: Ruler,
    above: true,
    bullets: [
      "Detaillierte Bauplanung & Grundriss",
      "Verbindliches Festpreisangebot",
      "Vertragsabschluss",
    ],
  },
  {
    num: "03",
    title: "Baugenehmigung",
    Icon: ClipboardCheck,
    above: false,
    bullets: [
      "Einholung aller Genehmigungen",
      "Baustelle einrichten",
      "Materialbestellung & Terminplanung",
    ],
  },
  {
    num: "04",
    title: "Bauausführung",
    Icon: Building2,
    above: true,
    bullets: [
      "Rohbau durch eigenes Fachpersonal",
      "Laufende Qualitätskontrolle",
      "Wöchentliche Statusberichte",
    ],
  },
  {
    num: "05",
    title: "Schlüsselübergabe",
    Icon: KeyRound,
    above: false,
    bullets: [
      "Abnahme & Mängelprotokoll",
      "Vollständige Dokumentation",
      "Übergabe & persönliche Einweisung",
    ],
  },
];

// SVG viewBox 0 0 5000 600
// Nodes at x: 500, 1500, 2500, 3500, 4500
// y: center=300, top=150, bottom=450
const NODES = [
  { x: 500,  y: 300 },
  { x: 1500, y: 150 },
  { x: 2500, y: 450 },
  { x: 3500, y: 150 },
  { x: 4500, y: 300 },
];

const PATH_D =
  "M 500,300 C 820,300 1180,150 1500,150 " +
  "C 1820,150 2180,450 2500,450 " +
  "C 2820,450 3180,150 3500,150 " +
  "C 3820,150 4180,300 4500,300";

export function ProzessPath() {
  const sectionRef = useRef(null);
  const stripRef   = useRef(null);
  const pathRef    = useRef(null);
  const dotRefs    = useRef([]);
  const cardRefs   = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const strip   = stripRef.current;
    const path    = pathRef.current;
    if (!section || !strip || !path) return;

    const ctx = gsap.context(() => {
      // Timing constants (timeline units)
      const HOLD  = 1.5;  // pause at each node
      const MOVE  = 2.5;  // travel between nodes
      const TOTAL = STEPS.length * HOLD + (STEPS.length - 1) * MOVE; // 17.5
      const VW    = window.innerWidth;

      // ── Horizontal scroll with per-node pause ─────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
      STEPS.forEach((_, i) => {
        const xPx = -i * VW;
        if (i === 0) {
          tl.to(strip, { x: xPx, duration: HOLD, ease: "none" });
        } else {
          tl.to(strip, { x: xPx, duration: MOVE, ease: "power2.inOut" });
          tl.to(strip, { x: xPx, duration: HOLD, ease: "none" });
        }
      });

      // ── Path draw ──────────────────────────────────────────────────────
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // ── Step animations ────────────────────────────────────────────────
      // startPct: % of section height when hold for node i begins.
      // Section 600vh, sticky travel 500vh → scroll/section = 500/600.
      STEPS.forEach((step, i) => {
        const tlPos   = i === 0 ? 0 : i * (HOLD + MOVE);
        const startPct = (tlPos / TOTAL) * (500 / 600) * 100;

        gsap.fromTo(
          dotRefs.current[i],
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1,
            duration: 0.55, ease: "back.out(2.5)",
            scrollTrigger: {
              trigger: section,
              start: `top+=${startPct}% top`,
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          cardRefs.current[i],
          { opacity: 0, y: step.above ? 22 : -22 },
          {
            opacity: 1, y: 0,
            duration: 0.75, ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: `top+=${startPct + 1}% top`,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // ── Layout helpers ───────────────────────────────────────────────────────
  // SVG: 500vw × 44vh, vertically centered → top = (100vh-44vh)/2 = 28vh
  const SVG_H_VH = 44;
  const SVG_TOP_VH = (100 - SVG_H_VH) / 2;

  const nodeYVh = (i) => SVG_TOP_VH + (NODES[i].y / 600) * SVG_H_VH;
  // node y in vh from strip top:
  // Node 1 (y=300): 28 + (300/600)*44 = 28+22 = 50vh
  // Node 2 (y=150): 28 + (150/600)*44 = 28+11 = 39vh
  // Node 3 (y=450): 28 + (450/600)*44 = 28+33 = 61vh
  // Node 4 (y=150): 39vh
  // Node 5 (y=300): 50vh

  return (
    <section
      ref={sectionRef}
      style={{ height: "600vh", position: "relative" }}
    >
      <div
        style={{
          position: "sticky", top: 0,
          height: "100vh", overflow: "hidden",
          background: "#06101E",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Section label */}
        <div style={{
          position: "absolute", top: 36, left: "5%", zIndex: 10,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ display: "block", height: 1, width: 32, background: "#C8962E" }} />
          <span style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.68rem", fontWeight: 600,
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#C8962E",
          }}>
            Der Hoser-Prozess
          </span>
        </div>

        {/* Horizontal strip */}
        <div
          ref={stripRef}
          style={{
            position: "absolute", top: 0, left: 0,
            width: "500vw", height: "100vh",
            willChange: "transform",
          }}
        >
          {/* ── SVG path ─────────────────────────────────────────────── */}
          <svg
            viewBox="0 0 5000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: `${SVG_TOP_VH}vh`,
              width: "500vw",
              height: `${SVG_H_VH}vh`,
              zIndex: 1,
            }}
          >
            {/* dim background path */}
            <path
              d={PATH_D}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* animated foreground path */}
            <path
              ref={pathRef}
              d={PATH_D}
              stroke="rgba(255,255,255,0.70)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Node dots */}
            {NODES.map((node, i) => (
              <g
                key={i}
                ref={(el) => (dotRefs.current[i] = el)}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              >
                {/* outer glow ring */}
                <circle cx={node.x} cy={node.y} r="22" fill="rgba(200,150,46,0.12)" />
                {/* main circle */}
                <circle cx={node.x} cy={node.y} r="13" fill="#06101E" stroke="rgba(255,255,255,0.65)" strokeWidth="2" />
                {/* gold center dot */}
                <circle cx={node.x} cy={node.y} r="4.5" fill="#C8962E" />
              </g>
            ))}
          </svg>

          {/* ── Step cards ───────────────────────────────────────────── */}
          {STEPS.map((step, i) => {
            const xVw  = 50 + i * 100;   // vw from strip left
            const nyVh = nodeYVh(i);      // vh from strip top
            const above = step.above;
            const { Icon } = step;

            const cardStyle = {
              position: "absolute",
              left: `${xVw}vw`,
              marginLeft: -140,          // center the 280px card
              width: 280,
              zIndex: 2,
              willChange: "transform, opacity",
              ...(above
                ? { bottom: `calc(${100 - nyVh + 3}vh)` }
                : { top:    `calc(${nyVh + 3}vh)` }),
            };

            return (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                style={cardStyle}
              >
                {above ? (
                  // "above" layout: bullets + title → icon at bottom (closest to path)
                  <>
                    <ul style={{ padding: 0, margin: 0, listStyle: "none", marginBottom: 14 }}>
                      {step.bullets.map((b, bi) => (
                        <li key={bi} style={{
                          display: "flex", alignItems: "flex-start", gap: 8,
                          fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem",
                          color: "rgba(255,255,255,0.50)", lineHeight: 1.55,
                          marginBottom: 5, textAlign: "left",
                        }}>
                          <span style={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: "#C8962E", flexShrink: 0, marginTop: 6,
                          }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <h3 style={{
                      fontFamily: "Syne, sans-serif", fontWeight: 700,
                      fontSize: "1.35rem", color: "rgba(255,255,255,0.92)",
                      marginBottom: 6, lineHeight: 1.2, textAlign: "center",
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      textAlign: "center", fontFamily: "DM Sans, sans-serif",
                      fontSize: "0.72rem", fontWeight: 600,
                      letterSpacing: "0.25em", textTransform: "uppercase",
                      color: "#C8962E", marginBottom: 14,
                    }}>
                      {step.num}
                    </p>
                    {/* Icon circle – bottom (nearest to path) */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{
                        width: 62, height: 62,
                        border: "1.5px solid rgba(255,255,255,0.22)",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(200,150,46,0.08)",
                      }}>
                        <Icon size={26} color="rgba(255,255,255,0.85)" />
                      </div>
                    </div>
                  </>
                ) : (
                  // "below" layout: icon at top → title → bullets
                  <>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                      <div style={{
                        width: 62, height: 62,
                        border: "1.5px solid rgba(255,255,255,0.22)",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(200,150,46,0.08)",
                      }}>
                        <Icon size={26} color="rgba(255,255,255,0.85)" />
                      </div>
                    </div>
                    <p style={{
                      textAlign: "center", fontFamily: "DM Sans, sans-serif",
                      fontSize: "0.72rem", fontWeight: 600,
                      letterSpacing: "0.25em", textTransform: "uppercase",
                      color: "#C8962E", marginBottom: 6,
                    }}>
                      {step.num}
                    </p>
                    <h3 style={{
                      fontFamily: "Syne, sans-serif", fontWeight: 700,
                      fontSize: "1.35rem", color: "rgba(255,255,255,0.92)",
                      marginBottom: 14, lineHeight: 1.2, textAlign: "center",
                    }}>
                      {step.title}
                    </h3>
                    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                      {step.bullets.map((b, bi) => (
                        <li key={bi} style={{
                          display: "flex", alignItems: "flex-start", gap: 8,
                          fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem",
                          color: "rgba(255,255,255,0.50)", lineHeight: 1.55,
                          marginBottom: 5, textAlign: "left",
                        }}>
                          <span style={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: "#C8962E", flexShrink: 0, marginTop: 6,
                          }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            );
          })}

          {/* Step number watermark (far left & right as bookend anchors) */}
          <div style={{
            position: "absolute", left: "3vw", top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "Syne, sans-serif", fontWeight: 900,
            fontSize: "clamp(4rem, 8vw, 7rem)",
            color: "rgba(255,255,255,0.03)", userSelect: "none",
            zIndex: 0, letterSpacing: "-0.04em",
          }}>
            PROZESS
          </div>
        </div>

        {/* Scroll hint bottom right */}
        <div style={{
          position: "absolute", bottom: 28, right: "4%", zIndex: 10,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{
            fontFamily: "DM Sans, sans-serif", fontSize: "0.68rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}>
            Scrollen
          </span>
          <span style={{ display: "block", height: 1, width: 28, background: "rgba(255,255,255,0.2)" }} />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.9rem" }}>→</span>
        </div>
      </div>
    </section>
  );
}
