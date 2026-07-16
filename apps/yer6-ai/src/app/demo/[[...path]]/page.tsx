import { Dashboard } from "@/components/dashboard/dashboard";
import { AIWorkspace } from "@/components/chat/ai-workspace";
import { ProjectsView } from "@/components/projects/projects-view";
import { OperationalPage } from "@/components/operational-page";
import { notFound } from "next/navigation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function DemoCatchAllPage(props: { params: Promise<{ path?: string[] }> }) {
  const params = await props.params;
  const path = params.path;

  if (!path || path.length === 0) {
    return <Dashboard />;
  }

  const sub = path[0];

  if (sub === "chat") {
    return <AIWorkspace />;
  }
  if (sub === "projects") {
    return <ProjectsView />;
  }
  if (sub === "documents") {
    return <OperationalPage section="documents" />;
  }
  if (sub === "reports") {
    return <OperationalPage section="reports" />;
  }
  if (sub === "team") {
    return <OperationalPage section="team" />;
  }
  if (sub === "settings") {
    return <OperationalPage section="settings" />;
  }

  notFound();
}
