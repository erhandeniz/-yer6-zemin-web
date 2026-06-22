export function ArticleCallout({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 text-white/90">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-200">{title}</div>
      <p className="mt-3 text-sm leading-7 text-white/75">{content}</p>
    </div>
  );
}
