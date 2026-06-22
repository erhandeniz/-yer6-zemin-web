import type { KnowledgeSection } from "@/types/knowledge";

export function ArticleSection({ section }: { section: KnowledgeSection }) {
  return (
    <section id={section.id} className="scroll-mt-28 pt-10">
      <h2 className="text-3xl font-semibold text-white">{section.title}</h2>
      <div className="mt-6 space-y-6 text-sm leading-7 text-white/75">
        {section.blocks.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.content}</p>;
            case "list":
              return (
                <div key={index}>
                  {block.title ? <p className="mb-3 font-semibold text-white">{block.title}</p> : null}
                  <ul className="list-inside list-disc space-y-2 pl-5 text-white/70">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            case "note":
            case "warning":
              return (
                <div key={index} className="rounded-3xl border border-gold-300/20 bg-gold-300/10 p-5 text-sm text-white/90">
                  <div className="font-semibold uppercase tracking-[0.2em] text-gold-100">{block.title}</div>
                  <p className="mt-3 text-white/80">{block.content}</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
