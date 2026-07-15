import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left"
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`gsap-reveal ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <div className={`mb-5 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-14 bg-gold-300 gold-line" />
        <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">{eyebrow}</span>
      </div>
      <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">{copy}</p> : null}
    </div>
  );
}
