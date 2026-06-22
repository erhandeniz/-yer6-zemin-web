"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PremiumLoader } from "@/components/PremiumLoader";
import { ScrollEffects } from "@/components/ScrollEffects";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PremiumLoader />
      <ScrollEffects />
      <div className="site-shell">
        <Navbar />
        {children}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
