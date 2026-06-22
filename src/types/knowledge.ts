export type KnowledgeCategory =
  | "Jet Grout"
  | "Fore Kazık"
  | "DSM"
  | "Zemin İyileştirme"
  | "Kalite Kontrol";

export type KnowledgeBlockType = "paragraph" | "list" | "note" | "warning";

export type KnowledgeBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "list";
      title?: string;
      items: string[];
    }
  | {
      type: "note" | "warning";
      title: string;
      content: string;
    };

export type KnowledgeSection = {
  id: string;
  title: string;
  blocks: KnowledgeBlock[];
};

export type KnowledgeFaq = {
  question: string;
  answer: string;
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: KnowledgeCategory;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  heroLabel: string;
  introduction: string;
  sections: KnowledgeSection[];
  faq: KnowledgeFaq[];
  relatedSlugs: string[];
  keywords: string[];
  published: boolean;
};
