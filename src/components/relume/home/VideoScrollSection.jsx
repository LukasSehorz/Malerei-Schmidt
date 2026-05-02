"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";

const FRAME_COUNT = 361;

function SectionTitle({ scrollYProgress, start, end, title }) {
  const fade = 0.03;
  const opacity = useTransform(scrollYProgress, [start, start + fade, end - fade, end], [0, 1, 1, 0]);
  return (
    <motion.div className="absolute top-24 left-[5%] md:left-[10%] z-30 pointer-events-none" style={{ opacity }}>
      <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-hoser-gold"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>{title}</p>
    </motion.div>
  );
}

function SectionSubtitle({ scrollYProgress, start, end, subtitle }) {
  const fade = 0.025;
  const opacity = useTransform(scrollYProgress, [start, start + fade, end - fade, end], [0, 1, 1, 0]);
  return (
    <motion.div className="absolute bottom-24 right-[5%] md:right-[10%] z-30 pointer-events-none text-right" style={{ opacity }}>
      <p className="max-w-md font-body text-base text-white/90 md:text-2xl font-light"
        style={{ textShadow: "0 2px 15px rgba(0,0,0,0.9)" }}>{subtitle}</p>
    </motion.div>
  );
}

export function VideoScrollSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const bitmapsRef = useRef(new Array(FRAME_COUNT).fill(null));
  const currentFrameRef = useRef(-1);
  const rafIdRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback((frameIndex) => {
    if (frameIndex === currentFrameRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const bitmap = bitmapsRef.current[frameIndex];
    if (!bitmap) return;
    currentFrameRef.current = frameIndex;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth * dpr;
    const h = canvas.clientHeight * dpr;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const ctx = canvas.getContext("2d", { alpha: false });
    const ca = w / h;
    const ba = bitmap.width / bitmap.height;
    let rw, rh, x, y;
    if (ca > ba) { rw = w; rh = w / ba; x = 0; y = (h - rh) / 2; }
    else { rh = h; rw = h * ba; y = 0; x = (w - rw) / 2; }
    ctx.drawImage(bitmap, x, y, rw, rh);
  }, []);

  // Load all frames in parallel batches of 25 — sequential batches so early frames load first
  useEffect(() => {
    let loaded = 0;
    const bitmaps = bitmapsRef.current;
    const BATCH = 25;

    const loadFrame = (i) =>
      fetch(`/images/video3-sequence/frame_${String(i).padStart(4, "0")}.jpg`)
        .then(r => r.blob())
        .then(blob => createImageBitmap(blob))
        .then(bitmap => {
          bitmaps[i - 1] = bitmap;
          loaded++;
          setLoadedCount(loaded);
          if (loaded === 1) drawFrame(0);
          if (loaded === FRAME_COUNT) setIsReady(true);
        });

    const loadAll = async () => {
      for (let start = 1; start <= FRAME_COUNT; start += BATCH) {
        const end = Math.min(start + BATCH - 1, FRAME_COUNT);
        await Promise.all(
          Array.from({ length: end - start + 1 }, (_, k) => loadFrame(start + k))
        );
      }
    };
    loadAll();
  }, [drawFrame]);

  // Only drive animation once all frames are decoded
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isReady) return;
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = requestAnimationFrame(() => {
      const progress = Math.max(0, Math.min(0.9999, latest));
      drawFrame(Math.floor(progress * FRAME_COUNT));
    });
  });

  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#040D1C]" style={{ height: "1100vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Vignette */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ opacity: vignetteOpacity, background: "radial-gradient(circle at center, transparent 30%, #000 100%)" }}
        />

        {/* Grain */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay z-10" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* Text overlays */}
        <SectionTitle scrollYProgress={scrollYProgress} start={0.00} end={0.18} title="Hochbau & Neubau" />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.02} end={0.10} subtitle="Fundierte Planung und massive Bauweise." />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.10} end={0.18} subtitle="Dein Projekt, Stein für Stein verwirklicht." />

        <SectionTitle scrollYProgress={scrollYProgress} start={0.20} end={0.38} title="Erd- & Kanalbau" />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.22} end={0.30} subtitle="Millimetergenaue Präzision tief im Erdreich." />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.30} end={0.38} subtitle="Sichere Netze und ein stabiles Fundament." />

        <SectionTitle scrollYProgress={scrollYProgress} start={0.40} end={0.58} title="Sanierung & Umbau" />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.42} end={0.50} subtitle="Neues Leben für bestehende Strukturen." />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.50} end={0.58} subtitle="Energieeffizient und modernisiert für die Zukunft." />

        <SectionTitle scrollYProgress={scrollYProgress} start={0.60} end={0.78} title="Ingenieurbau" />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.62} end={0.70} subtitle="Komplexe Konstruktionen sicher gemeistert." />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.70} end={0.78} subtitle="Tragwerke für höchste Anforderungen." />

        <SectionTitle scrollYProgress={scrollYProgress} start={0.80} end={0.97} title="Industrie- & Gewerbebau" />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.82} end={0.90} subtitle="Funktionale Architektur und große Hallen." />
        <SectionSubtitle scrollYProgress={scrollYProgress} start={0.90} end={0.97} subtitle="Gebaut für deinen wirtschaftlichen Erfolg." />

        {/* Loading screen — shown until all frames decoded */}
        {!isReady && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#040D1C]">
            <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-white/40">Wird geladen</p>
            <div className="h-px w-48 bg-white/10">
              <div
                className="h-full bg-hoser-gold transition-all duration-300"
                style={{ width: `${Math.round((loadedCount / FRAME_COUNT) * 100)}%` }}
              />
            </div>
            <p className="mt-3 font-body text-xs text-white/25">{Math.round((loadedCount / FRAME_COUNT) * 100)}%</p>
          </div>
        )}

      </div>
    </section>
  );
}
