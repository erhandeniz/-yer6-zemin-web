"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Bot,
  Check,
  ChevronDown,
  Copy,
  FileSearch,
  MessageSquareText,
  MoreHorizontal,
  PanelLeft,
  Paperclip,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
  Square,
  Trash2,
  X
} from "lucide-react";
import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAITranslation, type AILocale } from "@/components/i18n-provider";
import type { AIChatMessage, AIStreamEvent, SourceCitation } from "@/lib/ai/contracts";
import { consumeAIEventStream } from "@/lib/ai/sse-client";
import { cn } from "@/lib/utils";
import {
  useAppStore,
  type ChatConversation,
  type ChatMessage
} from "@/store/app-store";

const suggestions = [
  "Compare jet grout and DSM for this soil profile",
  "Summarize the critical geotechnical risks",
  "Draft a trial column acceptance plan"
];

const emptyMessages: ChatMessage[] = [];

function languageTag(locale: AILocale) {
  return locale === "tr" ? "tr-TR" : locale === "ar" ? "ar" : "en-US";
}

function messageTime(value: string, locale: AILocale) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(languageTag(locale), {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function conversationTime(value: string, locale: AILocale, t: (text: string) => string) {
  if (!value) return t("Now");
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return t("Now");
  const elapsedMinutes = Math.max(0, Math.floor((Date.now() - date.getTime()) / 60_000));
  if (elapsedMinutes < 1) return t("Now");
  if (elapsedMinutes < 60) return `${elapsedMinutes}${t("m")}`;
  if (elapsedMinutes < 1_440) return `${Math.floor(elapsedMinutes / 60)}${t("h")}`;
  return new Intl.DateTimeFormat(languageTag(locale), { month: "short", day: "numeric" }).format(date);
}

function citationLabel(citation: SourceCitation, t: (text: string) => string) {
  const location = citation.page
    ? `${t("page")} ${citation.page}`
    : citation.section
      ? `${t("section")} ${citation.section}`
      : t("location unavailable");
  const version = citation.version ? ` · ${t("version")} ${citation.version}` : "";
  const standard = citation.standardCode ? ` · ${citation.standardCode}` : "";
  return `${citation.fileName} · ${location}${standard}${version}`;
}

function apiMessages(messages: ChatMessage[]): AIChatMessage[] {
  return messages
    .filter((message) => message.content.trim() && message.status !== "error")
    .map(({ role, content }) => ({ role, content }))
    .slice(-20);
}

type MessageBubbleProps = {
  message: ChatMessage;
  locale: AILocale;
  copied: boolean;
  canRegenerate: boolean;
  onCopy: (message: ChatMessage) => void;
  onRegenerate: (messageId: string) => void;
  t: (text: string) => string;
};

function MessageBubble({
  message,
  locale,
  copied,
  canRegenerate,
  onCopy,
  onRegenerate,
  t
}: MessageBubbleProps) {
  const isAssistant = message.role === "assistant";
  const generating = message.status === "pending" || message.status === "streaming";

  return (
    <motion.article
      initial={{ opacity: 0, y: 7 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex gap-3", !isAssistant && "justify-end")}
    >
      {isAssistant ? (
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/[0.08] text-primary">
          <Bot className="size-4" />
        </span>
      ) : null}
      <div className={cn("max-w-[760px] min-w-0", !isAssistant && "max-w-[620px]") }>
        <div className={cn(
          "rounded-lg border px-4 py-3 text-[13px] leading-6",
          isAssistant
            ? "border-white/[0.075] bg-white/[0.025] text-white/72"
            : "border-primary/25 bg-primary/10 text-white/82",
          message.status === "error" && "border-red-400/20"
        )}>
          {message.status === "pending" && !message.content ? (
            <span className="flex h-6 items-center gap-1" aria-label={t("AI is thinking")}>
              {[0, 1, 2].map((index) => (
                <motion.span
                  key={index}
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.16 }}
                  className="size-1.5 rounded-full bg-primary"
                />
              ))}
            </span>
          ) : (
            <p className="break-words whitespace-pre-wrap">{message.content}</p>
          )}
          {message.citations?.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/[0.065] pt-3">
              {message.citations.map((citation) => (
                <button
                  key={citation.id}
                  type="button"
                  className="max-w-full truncate rounded-md border border-white/[0.075] bg-black/20 px-2 py-1 text-[10px] text-white/38 hover:text-white/65"
                  title={`${citation.fileName} · ${citation.sourceType}`}
                >
                  {citationLabel(citation, t)}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className={cn("mt-1.5 flex items-center gap-1", !isAssistant && "justify-end") }>
          <time
            className="px-1 text-[10px] text-white/20"
            dateTime={message.createdAt}
            suppressHydrationWarning
          >
            {messageTime(message.createdAt, locale)}
          </time>
          {isAssistant && !generating && message.content ? (
            <>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-7 min-h-7"
                aria-label={t("Copy response")}
                title={t("Copy response")}
                onClick={() => onCopy(message)}
              >
                {copied ? <Check className="size-3 text-emerald-300" /> : <Copy className="size-3" />}
              </Button>
              {canRegenerate ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-7 min-h-7"
                  aria-label={t("Regenerate response")}
                  title={t("Regenerate response")}
                  onClick={() => onRegenerate(message.id)}
                >
                  <RotateCcw className="size-3" />
                </Button>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

type ConversationPanelProps = {
  conversations: ChatConversation[];
  activeConversationId: string;
  locale: AILocale;
  search: string;
  onSearch: (value: string) => void;
  onNew: () => void;
  onSelect: (id: string) => void;
  onRename: (conversation: ChatConversation) => void;
  onDelete: (conversation: ChatConversation) => void;
  t: (text: string) => string;
};

function ConversationPanel({
  conversations,
  activeConversationId,
  locale,
  search,
  onSearch,
  onNew,
  onSelect,
  onRename,
  onDelete,
  t
}: ConversationPanelProps) {
  const normalizedSearch = search.trim().toLocaleLowerCase(languageTag(locale));
  const visibleConversations = normalizedSearch
    ? conversations.filter((conversation) => conversation.title.toLocaleLowerCase(languageTag(locale)).includes(normalizedSearch))
    : conversations;

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-white/[0.065] p-3">
        <Button type="button" variant="secondary" className="w-full justify-start" onClick={onNew}>
          <Plus className="size-4" />
          {t("New conversation")}
        </Button>
        <label className="relative mt-2 block">
          <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-white/25 rtl:left-auto rtl:right-3" />
          <input
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            className="h-9 w-full rounded-md border border-white/[0.065] bg-white/[0.025] pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/22 rtl:pl-3 rtl:pr-9"
            placeholder={t("Search conversations")}
            aria-label={t("Search conversations")}
          />
        </label>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        <p className="technical-label mb-2 px-2 pt-2 text-white/22">{t("Recent")}</p>
        <div className="space-y-1">
          {visibleConversations.map((conversation) => {
            const active = conversation.id === activeConversationId;
            return (
              <div
                key={conversation.id}
                className={cn(
                  "group flex items-start gap-1 rounded-md",
                  active ? "bg-primary/[0.07]" : "hover:bg-white/[0.03]"
                )}
              >
                <button
                  type="button"
                  onClick={() => onSelect(conversation.id)}
                  className="flex min-w-0 flex-1 items-start gap-2 px-2.5 py-2.5 text-left rtl:text-right"
                >
                  <MessageSquareText className={cn("mt-0.5 size-3.5 shrink-0", active ? "text-primary" : "text-white/25")} />
                  <span className="min-w-0 flex-1">
                    <span className={cn("block truncate text-xs", active ? "text-white/72" : "text-white/42")}>
                      {conversation.title === "New conversation" ? t(conversation.title) : conversation.title}
                    </span>
                    <span className="mt-1 block text-[10px] text-white/20">
                      {conversationTime(conversation.updatedAt, locale, t)}
                    </span>
                  </span>
                </button>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="mr-1 mt-1 size-8 min-h-8 shrink-0 opacity-60 sm:opacity-0 sm:group-hover:opacity-100 data-[state=open]:opacity-100 rtl:ml-1 rtl:mr-0"
                      aria-label={t("Conversation options")}
                    >
                      <MoreHorizontal className="size-3.5" />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      sideOffset={5}
                      align="end"
                      className="z-[100] min-w-40 rounded-md border border-white/10 bg-[#171717] p-1 text-xs text-white/70 shadow-2xl"
                    >
                      <DropdownMenu.Item
                        onSelect={() => onRename(conversation)}
                        className="flex cursor-pointer items-center gap-2 rounded px-2.5 py-2 outline-none hover:bg-white/[0.06] focus:bg-white/[0.06]"
                      >
                        <Pencil className="size-3.5" />{t("Rename")}
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        onSelect={() => onDelete(conversation)}
                        className="flex cursor-pointer items-center gap-2 rounded px-2.5 py-2 text-red-300/80 outline-none hover:bg-red-400/[0.08] focus:bg-red-400/[0.08]"
                      >
                        <Trash2 className="size-3.5" />{t("Delete")}
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            );
          })}
          {visibleConversations.length === 0 ? (
            <p className="px-3 py-8 text-center text-xs text-white/28">{t("No conversations found")}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function AIWorkspace() {
  const { locale, t } = useAITranslation();
  const conversations = useAppStore((state) => state.conversations);
  const activeConversationId = useAppStore((state) => state.activeConversationId);
  const selectedProjectId = useAppStore((state) => state.selectedProjectId);
  const createConversation = useAppStore((state) => state.createConversation);
  const selectConversation = useAppStore((state) => state.selectConversation);
  const renameConversation = useAppStore((state) => state.renameConversation);
  const deleteConversation = useAppStore((state) => state.deleteConversation);
  const addMessage = useAppStore((state) => state.addMessage);
  const updateMessage = useAppStore((state) => state.updateMessage);
  const setUploadOpen = useAppStore((state) => state.setUploadOpen);
  const activeConversation = conversations.find((conversation) => conversation.id === activeConversationId);
  const messages = activeConversation?.messages ?? emptyMessages;
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileHistoryOpen, setMobileHistoryOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [renameTarget, setRenameTarget] = useState<ChatConversation | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<ChatConversation | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const copyTimerRef = useRef<number | null>(null);
  const activeRequestRef = useRef<{
    requestId: string;
    conversationId: string;
    assistantId: string;
    controller: AbortController;
  } | null>(null);
  const welcomeTimestamp = useMemo(() => new Date().toISOString(), []);

  const latestAssistantId = [...messages].reverse().find((message) => message.role === "assistant")?.id;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => () => {
    activeRequestRef.current?.controller.abort();
    if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
  }, []);

  async function runAssistant(
    conversationId: string,
    history: AIChatMessage[],
    assistantId: string
  ) {
    const requestId = crypto.randomUUID();
    const controller = new AbortController();
    activeRequestRef.current = { requestId, conversationId, assistantId, controller };
    setSending(true);
    let answer = "";
    let citations: SourceCitation[] = [];
    let done = false;

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          requestId,
          conversationId,
          projectId: selectedProjectId,
          locale,
          messages: history
        })
      });

      await consumeAIEventStream(response, (event: AIStreamEvent) => {
        if (event.type === "sources") {
          citations = event.citations;
          updateMessage(conversationId, assistantId, { citations });
          return;
        }
        if (event.type === "delta") {
          answer += event.text;
          updateMessage(conversationId, assistantId, {
            content: answer,
            citations,
            status: "streaming"
          });
          return;
        }
        if (event.type === "done") {
          done = true;
          updateMessage(conversationId, assistantId, {
            content: answer || (event.stopped ? t("Response stopped.") : answer),
            citations,
            status: event.stopped ? "stopped" : "complete"
          });
          return;
        }
        if (event.type === "error") throw new Error(event.message);
      }, controller.signal);

      if (!done && !controller.signal.aborted) {
        if (!answer) throw new Error(t("The AI service returned an empty response."));
        updateMessage(conversationId, assistantId, { content: answer, citations, status: "complete" });
      }
    } catch (error) {
      if (controller.signal.aborted || (error instanceof DOMException && error.name === "AbortError")) {
        updateMessage(conversationId, assistantId, {
          content: answer || t("Response stopped."),
          citations,
          status: "stopped"
        });
      } else {
        const rawMessage = error instanceof Error ? error.message : "";
        const message = rawMessage && rawMessage !== "AI_REQUEST_FAILED"
          ? rawMessage
          : t("The AI service is currently unavailable. Please try again shortly.");
        updateMessage(conversationId, assistantId, {
          content: answer ? `${answer}\n\n${message}` : message,
          citations,
          status: "error"
        });
      }
    } finally {
      if (activeRequestRef.current?.requestId === requestId) activeRequestRef.current = null;
      setSending(false);
    }
  }

  function sendMessage(content: string) {
    const trimmed = content.trim().slice(0, 6_000);
    if (!trimmed || sending || !activeConversation) return;

    const createdAt = new Date().toISOString();
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      createdAt,
      status: "complete"
    };
    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
      createdAt: new Date().toISOString(),
      status: "pending"
    };

    addMessage(activeConversation.id, userMessage);
    addMessage(activeConversation.id, assistantMessage);
    if (messages.length === 0 || activeConversation.title === "New conversation") {
      renameConversation(activeConversation.id, trimmed.replace(/\s+/g, " ").slice(0, 58));
    }
    setInput("");
    void runAssistant(
      activeConversation.id,
      apiMessages([...messages, userMessage]),
      assistantMessage.id
    );
  }

  function stopGeneration() {
    const activeRequest = activeRequestRef.current;
    if (!activeRequest) return;
    activeRequest.controller.abort();
    void fetch("/api/ai/chat/stop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestId: activeRequest.requestId })
    }).catch(() => undefined);
  }

  function regenerateResponse(messageId: string) {
    if (sending || !activeConversation) return;
    const messageIndex = messages.findIndex((message) => message.id === messageId);
    if (messageIndex < 1) return;
    const history = apiMessages(messages.slice(0, messageIndex));
    updateMessage(activeConversation.id, messageId, {
      content: "",
      citations: [],
      createdAt: new Date().toISOString(),
      status: "pending"
    });
    void runAssistant(activeConversation.id, history, messageId);
  }

  async function copyResponse(message: ChatMessage) {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopiedId(message.id);
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopiedId(null), 1_600);
    } catch {
      setCopiedId(null);
    }
  }

  function startRename(conversation: ChatConversation) {
    setRenameTarget(conversation);
    setRenameValue(conversation.title === "New conversation" ? "" : conversation.title);
  }

  function createNewConversation() {
    if (sending) stopGeneration();
    createConversation(selectedProjectId);
    setInput("");
    setMobileHistoryOpen(false);
  }

  function confirmDelete() {
    if (!deleteTarget) return;
    if (activeRequestRef.current?.conversationId === deleteTarget.id) stopGeneration();
    deleteConversation(deleteTarget.id);
    setDeleteTarget(null);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  }

  const panelProps: ConversationPanelProps = {
    conversations,
    activeConversationId,
    locale,
    search,
    onSearch: setSearch,
    onNew: createNewConversation,
    onSelect: (id) => {
      selectConversation(id);
      setMobileHistoryOpen(false);
    },
    onRename: startRename,
    onDelete: setDeleteTarget,
    t
  };

  const welcomeMessage: ChatMessage = {
    id: "welcome-message",
    role: "assistant",
    content: t("How can I help with your geotechnical project today?"),
    createdAt: welcomeTimestamp,
    status: "complete"
  };

  return (
    <div className="flex h-[calc(100dvh-64px)] min-h-0 overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-r border-white/[0.065] bg-[#0c0c0c]/80 xl:block">
        <ConversationPanel {...panelProps} />
      </aside>

      <AnimatePresence>
        {mobileHistoryOpen ? (
          <div className="fixed inset-0 z-[85] xl:hidden">
            <motion.button
              type="button"
              aria-label={t("Close conversation history")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70"
              onClick={() => setMobileHistoryOpen(false)}
            />
            <motion.aside
              initial={{ x: locale === "ar" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: locale === "ar" ? "100%" : "-100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 w-[min(86vw,320px)] border-r border-white/10 bg-[#0c0c0c] shadow-2xl rtl:left-auto rtl:right-0 rtl:border-l rtl:border-r-0"
            >
              <div className="flex h-12 items-center justify-between border-b border-white/[0.065] px-3">
                <span className="text-xs font-semibold text-white/65">{t("Conversations")}</span>
                <Button type="button" variant="ghost" size="icon" onClick={() => setMobileHistoryOpen(false)} aria-label={t("Close")}>
                  <X className="size-4" />
                </Button>
              </div>
              <div className="h-[calc(100%-48px)]"><ConversationPanel {...panelProps} /></div>
            </motion.aside>
          </div>
        ) : null}
      </AnimatePresence>

      <section className="flex min-w-0 flex-1 flex-col bg-[#0a0a0a]">
        <div className="flex h-14 shrink-0 items-center gap-2 border-b border-white/[0.065] px-3 sm:gap-3 sm:px-5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setMobileHistoryOpen(true)}
            aria-label={t("Open conversation history")}
          >
            <PanelLeft className="size-4" />
          </Button>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-white/88">
              {activeConversation?.title === "New conversation"
                ? t("New conversation")
                : activeConversation?.title ?? t("New conversation")}
            </h1>
            <p className="mt-0.5 truncate text-[10px] text-white/28">YER6 AI · {t("No sources in context")}</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 rtl:ml-0 rtl:mr-auto">
            <Badge tone="neutral" className="hidden sm:inline-flex">{t("Knowledge base empty")}</Badge>
            {activeConversation ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button type="button" variant="ghost" size="icon" aria-label={t("Conversation options")}>
                    <MoreHorizontal className="size-4" />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content sideOffset={5} align="end" className="z-[100] min-w-40 rounded-md border border-white/10 bg-[#171717] p-1 text-xs text-white/70 shadow-2xl">
                    <DropdownMenu.Item onSelect={() => startRename(activeConversation)} className="flex cursor-pointer items-center gap-2 rounded px-2.5 py-2 outline-none hover:bg-white/[0.06] focus:bg-white/[0.06]">
                      <Pencil className="size-3.5" />{t("Rename")}
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => setDeleteTarget(activeConversation)} className="flex cursor-pointer items-center gap-2 rounded px-2.5 py-2 text-red-300/80 outline-none hover:bg-red-400/[0.08] focus:bg-red-400/[0.08]">
                      <Trash2 className="size-3.5" />{t("Delete")}
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : null}
          </div>
        </div>

        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-3 py-5 sm:px-6 sm:py-6 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-7">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-white/[0.055]" />
              <span className="technical-label text-white/20">{t("Today")}</span>
              <span className="h-px flex-1 bg-white/[0.055]" />
            </div>
            {messages.length === 0 ? (
              <MessageBubble
                message={welcomeMessage}
                locale={locale}
                copied={copiedId === welcomeMessage.id}
                canRegenerate={false}
                onCopy={copyResponse}
                onRegenerate={regenerateResponse}
                t={t}
              />
            ) : messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                locale={locale}
                copied={copiedId === message.id}
                canRegenerate={!sending && message.id === latestAssistantId}
                onCopy={copyResponse}
                onRegenerate={regenerateResponse}
                t={t}
              />
            ))}
          </div>
        </div>

        <div className="shrink-0 border-t border-white/[0.065] bg-[#0b0b0b] px-3 py-3 sm:px-6">
          <div className="mx-auto max-w-4xl">
            {messages.length < 3 ? (
              <div className="mb-2.5 flex gap-2 overflow-x-auto pb-1">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(t(suggestion))}
                    disabled={sending}
                    className="shrink-0 rounded-md border border-white/[0.075] bg-white/[0.025] px-3 py-2 text-[11px] text-white/42 hover:border-primary/25 hover:text-white/68 disabled:opacity-40"
                  >
                    {t(suggestion)}
                  </button>
                ))}
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-[#151515] p-2 focus-within:border-primary/30 focus-within:shadow-[0_0_0_3px_rgba(226,181,76,.04)]">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("Ask about soil conditions, design methods or project documents...")}
                className="max-h-36 min-h-12 w-full resize-none bg-transparent px-2 py-1.5 text-[13px] leading-5 text-white/82 outline-none placeholder:text-white/24"
                rows={2}
                maxLength={6_000}
                aria-label={t("Message AI engineer")}
              />
              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost" size="icon" onClick={() => setUploadOpen(true)} aria-label={t("Attach project file")}>
                  <Paperclip className="size-4" />
                </Button>
                <button type="button" className="flex min-w-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] text-white/28 hover:bg-white/[0.04]">
                  <Sparkles className="size-3 shrink-0 text-primary/60" />
                  <span className="truncate">YER6 AI</span>
                  <ChevronDown className="size-3 shrink-0" />
                </button>
                {sending ? (
                  <Button type="button" size="icon" className="ml-auto rtl:ml-0 rtl:mr-auto" onClick={stopGeneration} aria-label={t("Stop response")} title={t("Stop response")}>
                    <Square className="size-3.5 fill-current" />
                  </Button>
                ) : (
                  <Button type="submit" size="icon" className="ml-auto rtl:ml-0 rtl:mr-auto" disabled={!input.trim()} aria-label={t("Send message")}>
                    <ArrowUp className="size-4" />
                  </Button>
                )}
              </div>
            </form>
            <p className="mt-2 text-center text-[10px] text-white/20">{t("AI output requires review by a qualified geotechnical engineer.")}</p>
          </div>
        </div>
      </section>

      <aside className="hidden w-[310px] shrink-0 border-l border-white/[0.065] bg-[#0c0c0c]/80 2xl:block rtl:border-l-0 rtl:border-r">
        <div className="flex h-14 items-center justify-between border-b border-white/[0.065] px-4">
          <h2 className="text-xs font-semibold text-white/70">{t("Project context")}</h2>
          <Badge tone="neutral">0 {t("files")}</Badge>
        </div>
        <div className="grid h-[calc(100%-56px)] place-items-center px-8 text-center">
          <div>
            <FileSearch className="mx-auto size-6 text-white/20" />
            <p className="mt-3 text-xs font-medium text-white/48">{t("No indexed sources")}</p>
            <p className="mt-1.5 text-[10px] leading-4 text-white/25">{t("Upload a project document to add verified context.")}</p>
          </div>
        </div>
      </aside>

      <Dialog.Root open={Boolean(renameTarget)} onOpenChange={(open) => { if (!open) setRenameTarget(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[110] bg-black/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[111] w-[calc(100%-24px)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-[#141414] p-5 shadow-2xl">
            <Dialog.Title className="text-sm font-semibold text-white/85">{t("Rename conversation")}</Dialog.Title>
            <Dialog.Description className="mt-1 text-xs text-white/35">{t("Use a short title you can recognize later.")}</Dialog.Description>
            <input
              autoFocus
              value={renameValue}
              onChange={(event) => setRenameValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && renameTarget && renameValue.trim()) {
                  renameConversation(renameTarget.id, renameValue);
                  setRenameTarget(null);
                }
              }}
              maxLength={80}
              className="mt-4 h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 text-sm text-white/80 outline-none focus:border-primary/40"
              aria-label={t("Conversation title")}
            />
            <div className="mt-5 flex justify-end gap-2">
              <Dialog.Close asChild><Button type="button" variant="ghost">{t("Cancel")}</Button></Dialog.Close>
              <Button
                type="button"
                disabled={!renameValue.trim()}
                onClick={() => {
                  if (!renameTarget) return;
                  renameConversation(renameTarget.id, renameValue);
                  setRenameTarget(null);
                }}
              >
                {t("Save")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={Boolean(deleteTarget)} onOpenChange={(open) => { if (!open) setDeleteTarget(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[110] bg-black/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[111] w-[calc(100%-24px)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-[#141414] p-5 shadow-2xl">
            <Dialog.Title className="text-sm font-semibold text-white/85">{t("Delete conversation?")}</Dialog.Title>
            <Dialog.Description className="mt-2 text-xs leading-5 text-white/38">{t("This conversation and its local message history will be removed.")}</Dialog.Description>
            <div className="mt-5 flex justify-end gap-2">
              <Dialog.Close asChild><Button type="button" variant="ghost">{t("Cancel")}</Button></Dialog.Close>
              <Button type="button" className="bg-red-500 text-white hover:bg-red-400" onClick={confirmDelete}>{t("Delete")}</Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
