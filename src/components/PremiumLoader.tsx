"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PremiumLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-obsidian text-champagne"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: "easeInOut" } }}
        >
          <motion.div
            className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="relative grid h-36 w-36 place-items-center"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 rounded-full border border-gold-400/20" />
            <div className="absolute inset-4 rounded-full border border-gold-200/30" />
            <motion.div
              className="absolute inset-0 rounded-full border-t border-gold-200"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.35, repeat: Infinity, ease: "linear" }}
            />
            <div className="text-center">
              <div className="text-3xl font-semibold tracking-[0.18em] text-white">YER6</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.42em] text-gold-200">Ground Intelligence</div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
