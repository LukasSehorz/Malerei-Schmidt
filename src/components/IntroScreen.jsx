"use client";
import { motion } from "framer-motion";

export default function IntroScreen({ onComplete }) {
  return (
    <motion.div
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "#000", overflow: "hidden" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <video
        src="/videos/intro.mov"
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>
  );
}
