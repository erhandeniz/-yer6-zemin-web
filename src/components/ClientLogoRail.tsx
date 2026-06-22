import { clientLogos } from "@/lib/content";

export function ClientLogoRail() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-6">
      <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-4 px-4">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="grid h-16 min-w-44 place-items-center rounded-2xl border border-white/10 bg-obsidian/54 px-5 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/52"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
