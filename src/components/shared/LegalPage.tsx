import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/impressum", label: "Impressum" },
  { to: "/datenschutz", label: "Datenschutz" },
  { to: "/agb", label: "AGB" },
];

/**
 * Markierung für Angaben, die der Betreiber vor Veröffentlichung noch
 * ergänzen oder prüfen muss (z. B. USt-IdNr., Hosting-Anbieter).
 */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="legal-todo">{children}</span>;
}

export function LegalPage({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string;
  intro?: ReactNode;
  lastUpdated?: string;
  children: ReactNode;
}) {
  const { pathname } = useLocation();

  return (
    <section
      className="px-[5%] py-20 md:py-28 lg:py-32 min-h-screen"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="container max-w-3xl">
        <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#B8935A]">
          Rechtliches
        </p>
        <h1
          className="mb-8 font-heading font-bold leading-tight tracking-tight text-[#141414]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {title}
        </h1>

        {intro && (
          <p className="mb-10 max-w-2xl font-body text-base leading-relaxed text-[#141414]/60">
            {intro}
          </p>
        )}

        <div className="legal-prose">{children}</div>

        {lastUpdated && (
          <p className="mt-12 font-body text-xs uppercase tracking-[0.18em] text-[#141414]/40">
            Stand: {lastUpdated}
          </p>
        )}

        {/* Cross-Links */}
        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#B8935A]/15 pt-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={
                  "font-body text-sm transition-colors duration-200 " +
                  (active
                    ? "font-semibold text-[#B8935A]"
                    : "text-[#141414]/50 hover:text-[#B8935A]")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
