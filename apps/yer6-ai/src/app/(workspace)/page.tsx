import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard/dashboard";

export const metadata: Metadata = {
  title: "Engineering Overview",
  description: "YER6 AI project and geotechnical analysis overview.",
  robots: { index: false, follow: false }
};

export default function DashboardPage() {
  return <Dashboard />;
}
