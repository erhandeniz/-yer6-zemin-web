import type { Metadata } from "next";
import { AIWorkspace } from "@/components/chat/ai-workspace";

export const metadata: Metadata = {
  title: "AI Geotechnical Engineer",
  description: "Project-grounded AI assistance for geotechnical engineering analysis.",
  robots: { index: false, follow: false }
};

export default function ChatPage() {
  return <AIWorkspace />;
}
