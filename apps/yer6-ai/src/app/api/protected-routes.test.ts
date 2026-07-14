import { describe, expect, it, vi } from "vitest";

vi.mock("@/server/auth/workspace-access", () => ({
  requireAdmin: vi.fn(async () => Response.json({ error: "UNAUTHORIZED" }, { status: 401 })),
  requireWorkspaceUser: vi.fn(async () => Response.json({ error: "UNAUTHORIZED" }, { status: 401 })),
  isAccessResponse: (value: unknown) => value instanceof Response
}));

vi.mock("@/lib/prisma", () => ({ prisma: {} }));

import { GET as getCompanyMemory, POST as postCompanyMemory } from "@/app/api/admin/company-memory/route";
import { GET as getCategories } from "@/app/api/admin/knowledge/categories/route";
import { GET as getDocuments, POST as postDocument } from "@/app/api/admin/knowledge/documents/route";
import { DELETE as deleteDocument, PATCH as patchDocument } from "@/app/api/admin/knowledge/documents/[documentId]/route";
import { POST as ingestDocument } from "@/app/api/admin/knowledge/documents/[documentId]/ingest/route";
import { POST as searchKnowledge } from "@/app/api/admin/knowledge/search/route";
import { GET as getStats } from "@/app/api/admin/knowledge/stats/route";
import { GET as getStandards, POST as postStandard } from "@/app/api/admin/standards/route";
import { DELETE as deleteStandard, PATCH as patchStandard } from "@/app/api/admin/standards/[standardId]/route";
import { GET as getProjectMemory, POST as postProjectMemory } from "@/app/api/projects/[projectId]/memory/route";

const getRequest = new Request("https://yer6.test/api/test");
const postRequest = new Request("https://yer6.test/api/test", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: "{}"
});
const documentContext = { params: Promise.resolve({ documentId: "document-1" }) };
const standardContext = { params: Promise.resolve({ standardId: "standard-1" }) };
const projectContext = { params: Promise.resolve({ projectId: "project-1" }) };

describe("protected API routes", () => {
  const cases: Array<[string, () => Promise<Response>]> = [
    ["company memory GET", () => getCompanyMemory(getRequest)],
    ["company memory POST", () => postCompanyMemory(postRequest)],
    ["knowledge categories", () => getCategories()],
    ["knowledge documents GET", () => getDocuments(getRequest)],
    ["knowledge documents POST", () => postDocument(postRequest)],
    ["knowledge document PATCH", () => patchDocument(postRequest, documentContext)],
    ["knowledge document DELETE", () => deleteDocument(getRequest, documentContext)],
    ["knowledge ingestion", () => ingestDocument(postRequest, documentContext)],
    ["knowledge search", () => searchKnowledge(postRequest)],
    ["knowledge stats", () => getStats()],
    ["standards GET", () => getStandards(getRequest)],
    ["standards POST", () => postStandard(postRequest)],
    ["standard PATCH", () => patchStandard(postRequest, standardContext)],
    ["standard DELETE", () => deleteStandard(getRequest, standardContext)],
    ["project memory GET", () => getProjectMemory(getRequest, projectContext)],
    ["project memory POST", () => postProjectMemory(postRequest, projectContext)]
  ];

  it.each(cases)("rejects anonymous access to %s", async (_name, invoke) => {
    const response = await invoke();
    expect(response.status).toBe(401);
    expect(await response.json()).toEqual({ error: "UNAUTHORIZED" });
  });
});
