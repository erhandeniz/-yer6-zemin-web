import { describe, expect, it } from "vitest";
import { validateProjectFile } from "@/lib/uploads/project-file";

describe("project upload validation", () => {
  it("accepts supported engineering documents and rejects spoofed metadata", () => {
    expect(validateProjectFile({
      name: "investigation.pdf",
      size: 1024,
      type: "application/pdf"
    })).toBeNull();
    expect(validateProjectFile({
      name: "quantities.xlsx",
      size: 2048,
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    })).toBeNull();
    expect(validateProjectFile({ name: "investigation.pdf", size: 1024, type: "image/png" }))
      .toBe("type");
    expect(validateProjectFile({ name: "../secret.pdf", size: 1024, type: "application/pdf" }))
      .toBe("name");
  });
});
