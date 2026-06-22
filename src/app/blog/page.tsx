import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description: "SEO optimize geoteknik bilgi bankası: jet grout, DSM, fore kazık, ankraj, iksa ve zemin iyileştirme rehberleri."
};

export default function BlogPage() {
  return <BlogContent />;
}
