import { describe, expect, it } from "vitest";
import type { AIProvider } from "@/server/ai/providers/types";
import type { DocumentScope, KnowledgeChunk } from "@/server/ai/knowledge-base/types";
import { getAIConfig } from "@/server/ai/config";
import { buildIntelligenceSystemPrompt, buildTurnContext } from "@/server/intelligence/context-builder";
import { resolveModelPolicy, PRIMARY_MODEL } from "@/server/intelligence/model-policy";
import { prepareIntelligenceTurn, selectPrimaryProvider } from "@/server/intelligence/runtime";
import { honestFailureMessage } from "@/server/intelligence/errors";
import { CitationCollector } from "@/server/intelligence/response-parser";
import { buildIntelligenceTools } from "@/server/intelligence/tool-registry";

const scope: DocumentScope = { organizationId: "yer6" } as DocumentScope;

function fakeProvider(name: AIProvider["name"]): AIProvider {
  return {
    name,
    supportsTools: name === "openai",
    async *stream() {
      yield* [];
    }
  };
}

describe("GPT-5.6 intelligence runtime", () => {
  // Model policy — GPT-5.6 is the primary brain, low effort for ordinary chat.
  it("resolves the primary model to gpt-5.6 with low effort", () => {
    const policy = resolveModelPolicy(getAIConfig({} as NodeJS.ProcessEnv));
    expect(policy.model).toBe("gpt-5.6");
    expect(PRIMARY_MODEL).toBe("gpt-5.6");
    expect(policy.reasoningEffort).toBe("low");
  });

  // TEST 1 & 2 — ordinary conversation is not forced through RAG and never
  // carries the old canned "knowledge base empty" disclosure.
  it("system prompt is model-first and has no canned RAG-empty disclosure", () => {
    const prompt = buildIntelligenceSystemPrompt("tr");
    expect(prompt).toContain("Do not force every answer through retrieval");
    expect(prompt).not.toContain("Bilgi tabanında bu soruyla");
    expect(prompt).not.toContain("genel mühendislik bilgisine dayan");
    expect(prompt.length).toBeLessThan(2000); // concise, not thousands of rules
  });

  // TEST 3 — multi-turn: the full recent history is passed to the model so
  // "Bunu müşteriye anlat" resolves against the earlier Jet Grout/DSM turns.
  it("passes full conversation history for multi-turn understanding", () => {
    const messages = [
      { role: "user" as const, content: "Jet grout ile DSM arasındaki fark nedir?" },
      { role: "assistant" as const, content: "Jet grout ... DSM ..." },
      { role: "user" as const, content: "Hangisi daha ekonomik?" },
      { role: "assistant" as const, content: "Genellikle ..." },
      { role: "user" as const, content: "Bunu müşteriye iki paragrafta anlat." }
    ];
    const ctx = buildTurnContext({ locale: "tr", messages });
    expect(ctx.messages).toHaveLength(5);
    expect(ctx.messages[0].content).toContain("Jet grout ile DSM");
    expect(ctx.messages.at(-1)?.content).toContain("Bunu müşteriye");
  });

  // TEST 4 & 5 — RAG is an OPTIONAL tool: available for authenticated retrieval,
  // absent for demo/no-retrieval. Its absence never blocks the model.
  it("exposes search_company_knowledge only when retrieval is available", () => {
    const withRag = buildIntelligenceTools({
      demo: false,
      locale: "tr",
      scope,
      retrieval: { search: async () => [] },
      databaseAvailable: true,
      researchEnabled: true
    });
    expect(withRag.toolNames).toContain("search_company_knowledge");

    const demo = buildIntelligenceTools({
      demo: true,
      locale: "tr",
      scope,
      retrieval: null,
      databaseAvailable: false,
      researchEnabled: false
    });
    expect(demo.toolNames).not.toContain("search_company_knowledge");
  });

  it("surfaces citations only when the knowledge tool returns real sources", async () => {
    const chunk: KnowledgeChunk = {
      citation: { id: "C1", fileName: "yer6-machines.pdf", sourceType: "pdf", scope: "company" },
      content: "YER6 makine parkuru ..."
    } as KnowledgeChunk;

    const found = buildIntelligenceTools({
      demo: false,
      locale: "tr",
      scope,
      retrieval: { search: async () => [chunk] },
      databaseAvailable: true,
      researchEnabled: false
    });
    const exec = found.tools.search_company_knowledge.execute as
      | ((a: { query: string }, o: unknown) => Promise<unknown>)
      | undefined;
    await exec?.({ query: "YER6 makineleri" }, {});
    expect(found.citations.size).toBe(1);
    expect(found.citations.list()[0].fileName).toBe("yer6-machines.pdf");

    // Zero results must NOT block and must NOT invent citations.
    const empty = buildIntelligenceTools({
      demo: false,
      locale: "tr",
      scope,
      retrieval: { search: async () => [] },
      databaseAvailable: true,
      researchEnabled: false
    });
    const execEmpty = empty.tools.search_company_knowledge.execute as
      | ((a: { query: string }, o: unknown) => Promise<unknown>)
      | undefined;
    const result = await execEmpty?.({ query: "olmayan belge" }, {});
    expect((result as { ok: boolean }).ok).toBe(true); // does not throw / block
    expect(empty.citations.size).toBe(0);
  });

  // TEST 6 — never silently fall back to Cloudflare; primary brain is GPT-5.6.
  it("selects the OpenAI primary and refuses a silent Cloudflare fallback", () => {
    const openai = fakeProvider("openai");
    const cloudflare = fakeProvider("cloudflare-workers-ai");
    expect(selectPrimaryProvider([openai, cloudflare])).toBe(openai);
    expect(() => selectPrimaryProvider([cloudflare])).toThrow();
  });

  it("provider failure yields an honest localized message, not a fabricated answer", () => {
    expect(honestFailureMessage("tr")).toContain("ulaşılamıyor");
    expect(honestFailureMessage("en")).toContain("unavailable");
    expect(honestFailureMessage("tr", "not_configured")).toContain("yapılandır");
    // Never the old RAG-empty warning.
    expect(honestFailureMessage("tr")).not.toContain("Bilgi tabanında");
  });

  it("prepareIntelligenceTurn wires policy, history, tools and a citation collector", () => {
    const turn = prepareIntelligenceTurn({
      config: getAIConfig({} as NodeJS.ProcessEnv),
      locale: "tr",
      messages: [{ role: "user", content: "Merhaba" }],
      toolContext: {
        demo: false,
        locale: "tr",
        scope,
        retrieval: { search: async () => [] },
        databaseAvailable: true,
        researchEnabled: false
      }
    });
    expect(turn.policy.model).toBe("gpt-5.6");
    expect(turn.messages).toHaveLength(1);
    expect(turn.tools.citations).toBeInstanceOf(CitationCollector);
    expect(turn.system).toContain("YER6 AI");
  });
});
