"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll, Stars, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#C8962E";

const PROJECTS = [
  {
    id: "01",
    image: "/images/villa-twilight.jpg",
    category: "Hochbau · 2023",
    title: "Villa Markt Schwaben",
    body: "Einfamilienhaus mit Natursteinfassade und Tiefgarage.",
    z: 0,
  },
  {
    id: "02",
    image: "/images/munich-residential.jpg",
    category: "Wohnungsbau · 2022",
    title: "Wohnanlage München",
    body: "Mehrfamilienhaus mit 18 Einheiten und Gemeinschaftsgarten.",
    z: -200,
  },
  {
    id: "03",
    image: "/images/craftsmen-stone-facade.jpg",
    category: "Gewerbebau · 2021",
    title: "Gewerbepark Ebersberg",
    body: "Nachhaltiges Gewerbeobjekt mit Tiefgarage.",
    z: -400,
  },
];

// Scroll offset ranges where each project info is shown
const INFO_RANGES = [
  [0.09, 0.27],
  [0.40, 0.58],
  [0.71, 0.87],
];

// ─── Building: 6 separate planes so each face can have its own material ───────
function Building({ z, image }) {
  const texture = useTexture(image);
  texture.colorSpace = THREE.SRGBColorSpace;

  const W = 54, H = 30, D = 14;

  return (
    <group position={[0, H / 2, z]}>
      {/* Front — project image */}
      <mesh position={[0, 0, D / 2]}>
        <planeGeometry args={[W, H]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Back */}
      <mesh position={[0, 0, -D / 2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[W, H]} />
        <meshStandardMaterial color="#0c1e33" />
      </mesh>

      {/* Left */}
      <mesh position={[-W / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[D, H]} />
        <meshStandardMaterial color="#091a2e" />
      </mesh>

      {/* Right */}
      <mesh position={[W / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[D, H]} />
        <meshStandardMaterial color="#091a2e" />
      </mesh>

      {/* Top */}
      <mesh position={[0, H / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[W, D]} />
        <meshStandardMaterial color="#071425" />
      </mesh>

      {/* Gold base accent */}
      <mesh position={[0, -H / 2 + 0.12, D / 2 + 0.02]}>
        <planeGeometry args={[W, 0.22]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.6} />
      </mesh>

      {/* Glowing windows */}
      {[-16, -5, 6, 17].map((x) =>
        [4, 11].map((y) => (
          <mesh key={`${x}-${y}`} position={[x, y - H / 2, D / 2 + 0.02]}>
            <planeGeometry args={[3.8, 4.5]} />
            <meshStandardMaterial
              color={GOLD}
              emissive={GOLD}
              emissiveIntensity={0.35}
              transparent
              opacity={0.22}
            />
          </mesh>
        ))
      )}
    </group>
  );
}

// ─── Interior room the camera starts inside ───────────────────────────────────
function StartRoom() {
  const W = 44, H = 22;
  return (
    <group position={[0, H / 2, 24]}>
      {/* Floor */}
      <mesh position={[0, -H / 2 + 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[W, 20]} />
        <meshStandardMaterial color="#05101c" />
      </mesh>
      {/* Ceiling */}
      <mesh position={[0, H / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[W, 20]} />
        <meshStandardMaterial color="#040c18" />
      </mesh>
      {/* Left wall */}
      <mesh position={[-W / 2 + 0.05, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, H]} />
        <meshStandardMaterial color="#0a1b2c" />
      </mesh>
      {/* Right wall */}
      <mesh position={[W / 2 - 0.05, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, H]} />
        <meshStandardMaterial color="#0a1b2c" />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, 0, 9]}>
        <planeGeometry args={[W, H]} />
        <meshStandardMaterial color="#0d2244" />
      </mesh>
      {/* Gold pillar lines */}
      {[-W / 2 + 0.6, W / 2 - 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <planeGeometry args={[0.18, H]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

// ─── Camera rig driven by scroll ─────────────────────────────────────────────
function Rig() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const t = scroll.offset;
    // Fly from inside room (z=28) to past last building (z=-520)
    const z = 28 + (-525 - 28) * t;
    camera.position.z = z;
    camera.position.y = 8 + Math.sin(t * Math.PI * 2.6) * 1.6;
    camera.position.x = Math.sin(t * Math.PI * 2.1) * 3.5;
    camera.lookAt(
      camera.position.x * 0.12,
      camera.position.y - 2.8,
      camera.position.z - 18
    );
  });

  return null;
}

// ─── HTML overlays: project info panels + CTA ─────────────────────────────────
function Overlays() {
  const scroll = useScroll();
  const panelRefs = useRef([null, null, null]);
  const numRefs   = useRef([null, null, null]);
  const ctaRef    = useRef(null);

  useFrame(() => {
    const t = scroll.offset;

    INFO_RANGES.forEach(([start, end], i) => {
      const panel = panelRefs.current[i];
      const num   = numRefs.current[i];
      const fi = 0.06, fo = 0.06;
      let op = 0;
      if      (t >= start      && t < start + fi)    op = (t - start) / fi;
      else if (t >= start + fi && t <= end - fo)      op = 1;
      else if (t > end - fo    && t <= end)           op = 1 - (t - (end - fo)) / fo;
      const o = String(Math.max(0, Math.min(1, op)));
      const ty = `translateY(${(1 - Math.min(1, op * 3)) * 22}px)`;
      if (panel) { panel.style.opacity = o; panel.style.transform = ty; }
      if (num)   { num.style.opacity   = o; }
    });

    if (ctaRef.current) {
      const p = Math.max(0, Math.min(1, (t - 0.87) / 0.09));
      ctaRef.current.style.opacity = String(p);
      ctaRef.current.style.pointerEvents = p > 0.4 ? "auto" : "none";
    }
  });

  return (
    <Html fullscreen zIndexRange={[5, 30]} style={{ pointerEvents: "none" }}>

      {/* ── Project info panels (bottom-left) ── */}
      {PROJECTS.map((p, i) => (
        <div
          key={p.id}
          ref={(el) => { panelRefs.current[i] = el; }}
          style={{
            position: "absolute",
            bottom: "9vh",
            left: "6%",
            maxWidth: "520px",
            opacity: 0,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ height: "1px", width: "32px", background: GOLD, flexShrink: 0 }} />
            <p style={{ color: GOLD, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
              {p.category}
            </p>
          </div>
          <h3 style={{
            color: "white",
            fontSize: "clamp(2rem, 4vw, 3.8rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            lineHeight: 1.1,
            margin: "0 0 10px",
            textShadow: "0 2px 40px rgba(0,0,0,0.95), 0 0 60px rgba(0,0,0,0.8)",
          }}>
            {p.title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "15px", fontFamily: "'DM Sans', sans-serif", margin: 0, lineHeight: 1.55 }}>
            {p.body}
          </p>
        </div>
      ))}

      {/* ── Ghost project numbers (top-right) ── */}
      {PROJECTS.map((p, i) => (
        <div
          key={`num-${p.id}`}
          ref={(el) => { numRefs.current[i] = el; }}
          style={{
            position: "absolute",
            top: "4vh",
            right: "4%",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            fontSize: "clamp(5rem, 15vw, 13rem)",
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            opacity: 0,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {p.id}
        </div>
      ))}

      {/* ── CTA overlay ── */}
      <div
        ref={ctaRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          background: "radial-gradient(ellipse at center, rgba(4,13,28,0.92) 0%, rgba(2,5,10,0.97) 70%)",
          pointerEvents: "none",
        }}
      >
        <p style={{ color: GOLD, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'DM Sans', sans-serif" }}>
          Und viele mehr
        </p>
        <h3 style={{
          color: "white",
          fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          lineHeight: 1.1,
          marginBottom: "30px",
          textAlign: "center",
        }}>
          Alle Projekte<br />entdecken
        </h3>
        <a
          href="/projekte"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            border: "1px solid rgba(255,255,255,0.25)",
            padding: "16px 34px",
            color: "white",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "0.08em",
            fontFamily: "'DM Sans', sans-serif",
            pointerEvents: "auto",
            transition: "border-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "white"; }}
        >
          Alle Projekte ansehen →
        </a>
      </div>
    </Html>
  );
}

// ─── Full scene ───────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <color attach="background" args={["#010608"]} />
      <fog attach="fog" color="#010608" near={55} far={215} />

      <ambientLight intensity={0.5} color="#b0c4df" />
      <directionalLight position={[25, 50, 15]} intensity={1.8} color="#fff6e8" castShadow />
      <directionalLight position={[-20, 28, -80]} intensity={0.45} color="#3a5888" />
      <pointLight position={[0, 18, -100]} intensity={130} color={GOLD} distance={165} decay={2} />
      <pointLight position={[0, 18, -300]} intensity={130} color={GOLD} distance={165} decay={2} />

      <Stars radius={350} depth={65} count={5000} factor={4} fade speed={0.2} />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -260]} receiveShadow>
        <planeGeometry args={[360, 720]} />
        <meshStandardMaterial color="#030910" />
      </mesh>

      <StartRoom />

      {PROJECTS.map((p) => (
        <Building key={p.id} z={p.z} image={p.image} />
      ))}

      <Overlays />
      <Rig />
    </>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export function Gallery9() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 6, 28], fov: 62, near: 0.1, far: 800 }}
        shadows
        dpr={[1, 2]}
      >
        <ScrollControls pages={5} damping={0.18}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
