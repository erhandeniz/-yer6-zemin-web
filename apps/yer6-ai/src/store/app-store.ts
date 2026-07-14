"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { SourceCitation } from "@/lib/ai/contracts";

export type ChatMessageStatus = "pending" | "streaming" | "complete" | "stopped" | "error";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  citations?: SourceCitation[];
  status: ChatMessageStatus;
};

export type ChatConversation = {
  id: string;
  title: string;
  projectId?: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
};

export type UploadItem = {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: "uploading" | "processing" | "ready" | "failed";
};

type AppState = {
  sidebarOpen: boolean;
  uploadOpen: boolean;
  selectedProjectId: string;
  conversations: ChatConversation[];
  activeConversationId: string;
  uploads: UploadItem[];
  setSidebarOpen: (open: boolean) => void;
  setUploadOpen: (open: boolean) => void;
  setSelectedProjectId: (id: string) => void;
  createConversation: (projectId?: string) => string;
  selectConversation: (id: string) => void;
  renameConversation: (id: string, title: string) => void;
  deleteConversation: (id: string) => void;
  addMessage: (conversationId: string, message: ChatMessage) => void;
  updateMessage: (conversationId: string, messageId: string, patch: Partial<ChatMessage>) => void;
  addUploads: (items: UploadItem[]) => void;
  updateUpload: (id: string, progress: number, status: UploadItem["status"]) => void;
};

const initialConversation: ChatConversation = {
  id: "initial-conversation",
  title: "New conversation",
  messages: [],
  createdAt: "",
  updatedAt: ""
};

function newConversation(projectId?: string): ChatConversation {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    title: "New conversation",
    projectId,
    messages: [],
    createdAt: now,
    updatedAt: now
  };
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      sidebarOpen: false,
      uploadOpen: false,
      selectedProjectId: "PRJ-0248",
      conversations: [initialConversation],
      activeConversationId: initialConversation.id,
      uploads: [],
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
      setUploadOpen: (uploadOpen) => set({ uploadOpen }),
      setSelectedProjectId: (selectedProjectId) => set({ selectedProjectId }),
      createConversation: (projectId) => {
        const conversation = newConversation(projectId);
        set((state) => ({
          conversations: [conversation, ...state.conversations].slice(0, 50),
          activeConversationId: conversation.id
        }));
        return conversation.id;
      },
      selectConversation: (activeConversationId) => set({ activeConversationId }),
      renameConversation: (id, title) => {
        const normalizedTitle = title.trim().slice(0, 80);
        if (!normalizedTitle) return;
        set((state) => ({
          conversations: state.conversations.map((conversation) =>
            conversation.id === id
              ? { ...conversation, title: normalizedTitle, updatedAt: new Date().toISOString() }
              : conversation
          )
        }));
      },
      deleteConversation: (id) => set((state) => {
        const remaining = state.conversations.filter((conversation) => conversation.id !== id);
        if (remaining.length > 0) {
          return {
            conversations: remaining,
            activeConversationId: state.activeConversationId === id
              ? remaining[0].id
              : state.activeConversationId
          };
        }

        const replacement = newConversation(state.selectedProjectId);
        return { conversations: [replacement], activeConversationId: replacement.id };
      }),
      addMessage: (conversationId, message) => set((state) => ({
        conversations: state.conversations.map((conversation) =>
          conversation.id === conversationId
            ? {
                ...conversation,
                messages: [...conversation.messages, message].slice(-200),
                updatedAt: message.createdAt
              }
            : conversation
        )
      })),
      updateMessage: (conversationId, messageId, patch) => set((state) => ({
        conversations: state.conversations.map((conversation) =>
          conversation.id === conversationId
            ? {
                ...conversation,
                messages: conversation.messages.map((message) =>
                  message.id === messageId ? { ...message, ...patch } : message
                ),
                updatedAt: new Date().toISOString()
              }
            : conversation
        )
      })),
      addUploads: (items) => set((state) => ({ uploads: [...items, ...state.uploads] })),
      updateUpload: (id, progress, status) => set((state) => ({
        uploads: state.uploads.map((item) => item.id === id ? { ...item, progress, status } : item)
      }))
    }),
    {
      name: "yer6-ai-conversations-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        conversations: state.conversations.map((conversation) => ({
          ...conversation,
          messages: conversation.messages.map((message) => ({
            ...message,
            status: message.status === "pending" || message.status === "streaming"
              ? "stopped" as const
              : message.status
          }))
        })),
        activeConversationId: state.activeConversationId
      }),
      merge: (persisted, current) => {
        const stored = persisted as Partial<AppState>;
        const conversations = stored.conversations?.length ? stored.conversations : current.conversations;
        const activeConversationId = conversations.some((item) => item.id === stored.activeConversationId)
          ? stored.activeConversationId as string
          : conversations[0].id;
        return { ...current, ...stored, conversations, activeConversationId };
      }
    }
  )
);
