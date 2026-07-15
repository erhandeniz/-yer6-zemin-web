import { describe, expect, it } from "vitest";
import { createSignedToken, verifySignedToken } from "@/server/proposals/storage/proposal-store";

describe("signed download tokens", () => {
  const claims = {
    key: "proposals/yer6/p1/r0/client-abc.pdf",
    organizationId: "yer6",
    pdfId: "pdf1",
    audience: "client"
  };

  it("round-trips valid claims", async () => {
    const token = await createSignedToken(claims, 600);
    const resolved = await verifySignedToken(token);
    expect(resolved?.key).toBe(claims.key);
    expect(resolved?.organizationId).toBe("yer6");
    expect(resolved?.pdfId).toBe("pdf1");
  });

  it("rejects a tampered token", async () => {
    const token = await createSignedToken(claims, 600);
    const tampered = token.slice(0, -2) + (token.endsWith("aa") ? "bb" : "aa");
    expect(await verifySignedToken(tampered)).toBeNull();
  });

  it("rejects an expired token", async () => {
    const token = await createSignedToken(claims, -1); // already expired
    expect(await verifySignedToken(token)).toBeNull();
  });

  it("rejects a malformed token", async () => {
    expect(await verifySignedToken("garbage")).toBeNull();
  });

  it("carries the audience so internal PDFs can be gated to ADMIN at download", async () => {
    const internal = { ...claims, audience: "internal" };
    const token = await createSignedToken(internal, 600);
    const resolved = await verifySignedToken(token);
    expect(resolved?.audience).toBe("internal");
  });
});
