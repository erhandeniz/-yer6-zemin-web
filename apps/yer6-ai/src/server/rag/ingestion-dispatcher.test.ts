import { describe, expect, it } from "vitest";
import { secureIngestionWebhookUrl } from "./ingestion-dispatcher";

describe("secureIngestionWebhookUrl", () => {
  it("accepts HTTPS webhook targets", () => {
    expect(secureIngestionWebhookUrl("https://jobs.example/ingest").href)
      .toBe("https://jobs.example/ingest");
  });

  it("rejects cleartext and missing targets", () => {
    expect(() => secureIngestionWebhookUrl("http://jobs.example/ingest"))
      .toThrow("RAG_INGESTION_WEBHOOK_NOT_SECURE");
    expect(() => secureIngestionWebhookUrl(undefined)).toThrow("RAG_INGESTION_UNAVAILABLE");
  });
});
