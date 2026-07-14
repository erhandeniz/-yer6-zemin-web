import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  FileScan,
  FolderKanban,
  Gauge,
  Layers3,
  ShieldCheck,
  Users
} from "lucide-react";

export type ProjectStatus = "Analysis" | "Review" | "Complete";

export type Project = {
  id: string;
  name: string;
  location: string;
  category: string;
  status: ProjectStatus;
  progress: number;
  files: number;
  updated: string;
  image?: string;
};

export const engineeringCategories = [
  "Jet Grout",
  "DSM",
  "Fore Pile",
  "Micropile",
  "CFA",
  "Anchors",
  "Diaphragm Wall",
  "Soldier Pile Wall",
  "Sheet Pile",
  "Ground Improvement",
  "Soil Injection",
  "Compaction Grouting",
  "Permeation Grouting",
  "Stone Columns",
  "Vibro Compaction",
  "Vibro Replacement",
  "Shotcrete",
  "Retaining Systems"
] as const;

export const projects: Project[] = [
  {
    id: "PRJ-0248",
    name: "Duzce Industrial Campus",
    location: "Duzce, TR",
    category: "Jet Grout",
    status: "Analysis",
    progress: 72,
    files: 18,
    updated: "12 min ago",
    image: "/projects/pekintas.jpg"
  },
  {
    id: "PRJ-0241",
    name: "Yunuseli Residences",
    location: "Bursa, TR",
    category: "Ground Improvement",
    status: "Review",
    progress: 91,
    files: 32,
    updated: "2 hr ago",
    image: "/projects/yunuseli.webp"
  },
  {
    id: "PRJ-0234",
    name: "Bozuyuk Cold Storage",
    location: "Bilecik, TR",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 24,
    updated: "Yesterday",
    image: "/projects/bozuyuk.jpg"
  }
];

export const metrics: Array<{
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
}> = [
  { label: "Active projects", value: "24", delta: "+4 this month", icon: FolderKanban },
  { label: "Documents analyzed", value: "1,842", delta: "+18.6%", icon: FileScan },
  { label: "AI engineering hours", value: "386", delta: "94% accepted", icon: Bot },
  { label: "Risk items", value: "7", delta: "3 require review", icon: ShieldCheck }
];

export const adminMetrics = [
  { label: "Workspace users", value: "42", icon: Users },
  { label: "Monthly analyses", value: "8,924", icon: Gauge },
  { label: "Storage used", value: "68%", icon: Layers3 },
  { label: "Organizations", value: "12", icon: Building2 }
];
