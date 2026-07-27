import { cn } from "@/lib/utils";

export function BrandMark({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)} aria-label="YER6 AI">
      <span className="relative grid size-8.5 shrink-0 place-items-center overflow-hidden rounded-lg border border-primary/40 bg-gradient-to-b from-[#1c180e] to-[#0d0b07] shadow-[0_0_15px_rgba(226,181,76,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)]">
        <span className="absolute inset-x-1.5 top-2 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
        <span className="absolute inset-x-1.5 top-3.5 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <span className="relative text-[11px] font-extrabold gold-gradient-text">Y6</span>
      </span>
      {!compact ? (
        <span className="flex items-baseline gap-1.5 text-[15px] font-bold tracking-tight text-white">
          YER6 <span className="gold-gradient-text font-extrabold">AI</span>
        </span>
      ) : null}
    </div>
  );
}
