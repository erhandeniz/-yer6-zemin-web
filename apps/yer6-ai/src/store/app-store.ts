"use client";

import { create } from "zustand";
import { sampleAssistantMessage } from "@/lib/data";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  citations?: string[];
  pending?: boolean;
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
  messages: ChatMessage[];
  uploads: UploadItem[];
  setSidebarOpen: (open: boolean) => void;
  setUploadOpen: (open: boolean) => void;
  setSelectedProjectId: (id: string) => void;
  addMessage: (message: ChatMessage) => void;
  updateMessage: (id: string, content: string, pending?: boolean) => void;
  addUploads: (items: UploadItem[]) => void;
  updateUpload: (id: string, progress: number, status: UploadItem["status"]) => void;
};

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: false,
  uploadOpen: false,
  selectedProjectId: "PRJ-0248",
  messages: [sampleAssistantMessage],
  uploads: [],
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setUploadOpen: (uploadOpen) => set({ uploadOpen }),
  setSelectedProjectId: (selectedProjectId) => set({ selectedProjectId }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  updateMessage: (id, content, pending = false) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id ? { ...message, content, pending } : message
      )
    })),
  addUploads: (items) => set((state) => ({ uploads: [...items, ...state.uploads] })),
  updateUpload: (id, progress, status) =>
    set((state) => ({
      uploads: state.uploads.map((item) =>
        item.id === id ? { ...item, progress, status } : item
      )
    }))
}));
