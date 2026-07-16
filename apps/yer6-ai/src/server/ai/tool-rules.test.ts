import { describe, expect, it } from "vitest";
import { buildSystemPrompt } from "@/server/ai/system-prompt";

describe("tool-usage and sourcing rules in the system prompt", () => {
  it("mandates calculator tools and forbids mental calculation", () => {
    const prompt = buildSystemPrompt("tr", []);
    expect(prompt).toContain("you MUST call the matching calc_* tool");
    expect(prompt).toContain("Never compute these values mentally");
    expect(prompt).toContain("never invent specs");
  });

  it("declares the A–F source priority and separated answer format", () => {
    const prompt = buildSystemPrompt("en", []);
    expect(prompt).toContain("Source priority (highest to lowest)");
    expect(prompt).toContain("Project documents uploaded by the authenticated user");
    expect(prompt).toContain("Permanent YER6 company knowledge");
    expect(prompt).toContain("General model knowledge");
    expect(prompt).toContain("External research sources");
    expect(prompt).toContain("Calculated results");
    expect(prompt).toContain("professional engineering disclaimer");
  });

  it("mandates research-before-empty and non-fabricated citations", () => {
    const prompt = buildSystemPrompt("en", []);
    expect(prompt).toContain("call external_research and retrieve at least three authoritative sources");
    expect(prompt).toContain("Do not answer only \"the knowledge base is empty\"");
    expect(prompt).toContain("Never invent a citation");
  });

  it("sets the correct response language for tr, en and ar", () => {
    expect(buildSystemPrompt("tr", [])).toContain("The selected interface language is Turkish");
    expect(buildSystemPrompt("en", [])).toContain("The selected interface language is English");
    expect(buildSystemPrompt("ar", [])).toContain("The selected interface language is Arabic");
  });
});
