import { describe, expect, it } from "vitest";
import { ar, tr } from "@/components/i18n-provider";

const chatKeys = [
  "AI is thinking",
  "AI output requires review by a qualified geotechnical engineer.",
  "Ask about soil conditions, design methods or project documents...",
  "Attach project file",
  "Cancel",
  "Close conversation history",
  "Close",
  "Conversation options",
  "Conversation title",
  "Conversations",
  "Copy response",
  "Delete conversation?",
  "Delete",
  "How can I help with your geotechnical project today?",
  "Knowledge base empty",
  "Message AI engineer",
  "New conversation",
  "No conversations found",
  "No indexed sources",
  "No sources in context",
  "Now",
  "Open conversation history",
  "Project context",
  "Recent",
  "Regenerate response",
  "Rename conversation",
  "Rename",
  "Response stopped.",
  "Save",
  "Search conversations",
  "Send message",
  "Stop response",
  "The AI service is currently unavailable. Please try again shortly.",
  "The AI service returned an empty response.",
  "This conversation and its local message history will be removed.",
  "Today",
  "Upload a project document to add verified context.",
  "Use a short title you can recognize later.",
  "files",
  "h",
  "location unavailable",
  "m",
  "page",
  "section"
];

describe("chat translations", () => {
  it.each([
    ["Turkish", tr],
    ["Arabic", ar]
  ])("contains every %s chat string", (_language, dictionary) => {
    expect(chatKeys.filter((key) => !dictionary[key])).toEqual([]);
  });
});
