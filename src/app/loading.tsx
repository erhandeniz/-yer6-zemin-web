export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-obsidian text-champagne">
      <div className="relative h-28 w-28">
        <div className="absolute inset-0 rounded-full border border-gold-400/20" />
        <div className="absolute inset-3 rounded-full border border-gold-300/40" />
        <div className="absolute inset-0 animate-spin rounded-full border-t border-gold-300" />
        <div className="absolute inset-0 grid place-items-center text-sm font-semibold tracking-[0.32em] text-gold-200">YER6</div>
      </div>
    </div>
  );
}
