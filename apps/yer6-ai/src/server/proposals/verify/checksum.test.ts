import { describe, expect, it } from "vitest";
import { sha256Hex, sha256Short } from "@/server/proposals/verify/checksum";

describe("checksum", () => {
  it("is deterministic and hex-encoded", async () => {
    const data = new TextEncoder().encode("YER6");
    const a = await sha256Hex(data);
    const b = await sha256Hex(data);
    expect(a).toBe(b);
    expect(a).toMatch(/^[0-9a-f]{64}$/);
    expect(await sha256Short(data, 12)).toBe(a.slice(0, 12));
  });
  it("differs for different inputs", async () => {
    expect(await sha256Hex(new TextEncoder().encode("a"))).not.toBe(
      await sha256Hex(new TextEncoder().encode("b"))
    );
  });
});
