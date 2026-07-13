import { cn } from "@/lib/utils";

export function BrandMark({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)} aria-label="YER6 AI">
      <span className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-md border border-primary/35 bg-[#15120b] shadow-[inset_0_0_20px_rgba(226,181,76,.08)]">
        <span className="absolute inset-x-1.5 top-2 h-px bg-primary/75" />
        <span className="absolute inset-x-1.5 top-3.5 h-px bg-primary/45" />
        <span className="absolute inset-x-1.5 top-5 h-px bg-primary/25" />
        <span className="relative mt-1 text-[10px] font-bold text-primary">Y6</span>
      </span>
      {!compact ? (
        <span className="flex items-baseline gap-1.5 text-[15px] font-semibold text-white">
          YER6 <span className="text-primary">AI</span>
        </span>
      ) : null}
    </div>
  );
}
