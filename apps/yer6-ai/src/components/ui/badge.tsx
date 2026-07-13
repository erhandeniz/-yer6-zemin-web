import { cn } from "@/lib/utils";

const tones = {
  gold: "border-primary/25 bg-primary/10 text-[#e9c45f]",
  green: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  blue: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  neutral: "border-white/10 bg-white/[0.055] text-white/60",
  red: "border-red-400/20 bg-red-400/10 text-red-300"
};

export function Badge({
  children,
  tone = "neutral",
  className
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium", tones[tone], className)}>
      {children}
    </span>
  );
}
