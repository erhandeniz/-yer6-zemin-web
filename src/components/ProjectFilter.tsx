"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/components/LanguageProvider";

const ALL_KEY = "__all__";

export function ProjectFilter() {
  const { t } = useLanguage();
  const categories = useMemo(
    () => [ALL_KEY, ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );
  const [active, setActive] = useState(ALL_KEY);
  const filtered = active === ALL_KEY ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
              active === category
                ? "border-gold-300 bg-gold-300 text-obsidian"
                : "border-white/10 bg-white/5 text-white/68 hover:border-gold-300/40"
            }`}
          >
            {category === ALL_KEY ? t("knowledgeFilterAll") : category}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
