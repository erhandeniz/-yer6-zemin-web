"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUp,
  Bot,
  CheckCircle2,
  ChevronDown,
  Copy,
  FileImage,
  FileText,
  Gauge,
  Layers3,
  MessageSquareText,
  MoreHorizontal,
  Paperclip,
  Plus,
  RotateCcw,
  Search,
  Sparkles
} from "lucide-react";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAITranslation } from "@/components/i18n-provider";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";

const conversations = [
  { id: "c1", title: "Jet grout preliminary design", time: "Now", active: true },
  { id: "c2", title: "BH-03 soil profile review", time: "2h", active: false },
  { id: "c3", title: "Settlement criteria check", time: "Yesterday", active: false },
  { id: "c4", title: "Trial column test plan", time: "Mon", active: false }
];

const suggestions = [
  "Compare jet grout and DSM for this soil profile",
  "Summarize the critical geotechnical risks",
  "Draft a trial column acceptance plan"
];

const contextFiles = [
  { name: "BH-03_Borehole_Log.pdf", meta: "18 pages · Parsed", icon: FileText },
  { name: "Lab_Results_June.pdf", meta: "12 tables · Parsed", icon: FileText },
  { name: "Foundation_Plan.dwg", meta: "Rev. C · Indexed", icon: Layers3 },
  { name: "Site_Section_04.png", meta: "OCR complete", icon: FileImage }
];

function MessageBubble({
  message
}: {
  message: ReturnType<typeof useAppStore.getState>["messages"][number];
}) {
  const isAssistant = message.role === "assistant";
  const { t } = useAITranslation();
  const content = message.id === "assistant-intro" ? t(message.content) : message.content;
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
      <div className={cn("max-w-[760px]", !isAssistant && "max-w-[620px]")}>
        <div className={cn(
          "rounded-lg border px-4 py-3 text-[13px] leading-6",
          isAssistant ? "border-white/[0.075] bg-white/[0.025] text-white/72" : "border-primary/25 bg-primary/10 text-white/82"
        )}>
          {message.pending && !message.content ? (
            <span className="flex h-6 items-center gap-1" aria-label={t("AI is thinking")}>
              {[0, 1, 2].map((index) => <motion.span key={index} animate={{ opacity: [0.25, 1, 0.25] }} transition={{ duration: 1.2, repeat: Infinity, delay: index * .16 }} className="size-1.5 rounded-full bg-primary" />)}
            </span>
          ) : (
            <p className="whitespace-pre-wrap">{content}</p>
          )}
          {message.citations?.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/[0.065] pt-3">
              {message.citations.map((citation) => <button key={citation} className="rounded-md border border-white/[0.075] bg-black/20 px-2 py-1 text-[10px] text-white/38 hover:text-white/65">{citation}</button>)}
            </div>
          ) : null}
        </div>
        <div className={cn("mt-1.5 flex items-center gap-1", !isAssistant && "justify-end")}>
          <span className="px-1 text-[10px] text-white/20">{message.createdAt}</span>
          {isAssistant && !message.pending ? (
            <>
              <Button variant="ghost" size="icon" className="size-7 min-h-7" aria-label={t("Copy response")}><Copy className="size-3" /></Button>
              <Button variant="ghost" size="icon" className="size-7 min-h-7" aria-label={t("Regenerate response")}><RotateCcw className="size-3" /></Button>
            </>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function AIWorkspace() {
  const { locale, t } = useAITranslation();
  const messages = useAppStore((state) => state.messages);
  const addMessage = useAppStore((state) => state.addMessage);
  const updateMessage = useAppStore((state) => state.updateMessage);
  const setUploadOpen = useAppStore((state) => state.setUploadOpen);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || sending) return;

    const languageTag = locale === "tr" ? "tr-TR" : locale === "ar" ? "ar" : "en-US";
    const now = new Date().toLocaleTimeString(languageTag, { hour: "2-digit", minute: "2-digit" });
    const userMessage = { id: crypto.randomUUID(), role: "user" as const, content: trimmed, createdAt: now };
    const assistantId = crypto.randomUUID();
    addMessage(userMessage);
    addMessage({ id: assistantId, role: "assistant", content: "", createdAt: now, pending: true });
    setInput("");
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: projects[0].id,
          locale,
          messages: [...messages, userMessage].map(({ role, content: messageContent }) => ({ role, content: messageContent }))
        })
      });
      if (!response.ok || !response.body) throw new Error("AI request failed");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        updateMessage(assistantId, answer, true);
      }
      updateMessage(assistantId, answer, false);
    } catch {
      updateMessage(
        assistantId,
        t("I could not reach the analysis service. Your project context is preserved; check the OpenAI configuration and retry."),
        false
      );
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  return (
    <div className="flex h-[calc(100vh-64px)] min-h-[620px] overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-r border-white/[0.065] bg-[#0c0c0c]/80 xl:flex xl:flex-col">
        <div className="border-b border-white/[0.065] p-3">
          <Button variant="secondary" className="w-full justify-start"><Plus className="size-4" />{t("New conversation")}</Button>
          <label className="relative mt-2 block">
            <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-white/25" />
            <input className="h-9 w-full rounded-md border border-white/[0.065] bg-white/[0.025] pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/22" placeholder={t("Search conversations")} aria-label={t("Search conversations")} />
          </label>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          <p className="technical-label mb-2 px-2 pt-2 text-white/22">{t("Recent")}</p>
          <div className="space-y-1">
            {conversations.map((conversation) => (
              <button key={conversation.id} className={cn("flex w-full items-start gap-2 rounded-md px-2.5 py-2.5 text-left", conversation.active ? "bg-primary/[0.07]" : "hover:bg-white/[0.03]") }>
                <MessageSquareText className={cn("mt-0.5 size-3.5 shrink-0", conversation.active ? "text-primary" : "text-white/25")} />
                <span className="min-w-0 flex-1"><span className={cn("block truncate text-xs", conversation.active ? "text-white/72" : "text-white/42")}>{t(conversation.title)}</span><span className="mt-1 block text-[10px] text-white/20">{t(conversation.time)}</span></span>
                <MoreHorizontal className="size-3.5 text-white/20" />
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col bg-[#0a0a0a]">
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-white/[0.065] px-4 sm:px-5">
          <div className="min-w-0"><h1 className="truncate text-sm font-semibold text-white/88">{t("Jet grout preliminary design")}</h1><p className="mt-0.5 truncate text-[10px] text-white/28">Duzce Industrial Campus · {t("4 sources in context")}</p></div>
          <div className="ml-auto flex items-center gap-2"><Badge tone="green"><span className="mr-1 size-1.5 rounded-full bg-emerald-300" />{t("Project grounded")}</Badge><Button variant="ghost" size="icon" aria-label={t("Conversation options")}><MoreHorizontal className="size-4" /></Button></div>
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-7">
            <div className="flex items-center gap-3"><span className="h-px flex-1 bg-white/[0.055]" /><span className="technical-label text-white/20">{t("Today")}</span><span className="h-px flex-1 bg-white/[0.055]" /></div>
            {messages.map((message) => <MessageBubble key={message.id} message={message} />)}
          </div>
        </div>
        <div className="shrink-0 border-t border-white/[0.065] bg-[#0b0b0b] px-4 py-3 sm:px-6">
          <div className="mx-auto max-w-4xl">
            {messages.length < 3 ? (
              <div className="mb-2.5 flex gap-2 overflow-x-auto pb-1">
                {suggestions.map((suggestion) => <button key={suggestion} onClick={() => void sendMessage(t(suggestion))} className="shrink-0 rounded-md border border-white/[0.075] bg-white/[0.025] px-3 py-2 text-[11px] text-white/42 hover:border-primary/25 hover:text-white/68">{t(suggestion)}</button>)}
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
                aria-label={t("Message AI engineer")}
              />
              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost" size="icon" onClick={() => setUploadOpen(true)} aria-label={t("Attach project file")}><Paperclip className="size-4" /></Button>
                <button type="button" className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] text-white/28 hover:bg-white/[0.04]"><Sparkles className="size-3 text-primary/60" />YER6 Engineering v1<ChevronDown className="size-3" /></button>
                <Button type="submit" size="icon" className="ml-auto" disabled={!input.trim() || sending} aria-label={t("Send message")}><ArrowUp className="size-4" /></Button>
              </div>
            </form>
            <p className="mt-2 text-center text-[10px] text-white/20">{t("AI output requires review by a qualified geotechnical engineer.")}</p>
          </div>
        </div>
      </section>

      <aside className="hidden w-[310px] shrink-0 border-l border-white/[0.065] bg-[#0c0c0c]/80 2xl:block">
        <div className="flex h-14 items-center justify-between border-b border-white/[0.065] px-4"><h2 className="text-xs font-semibold text-white/70">{t("Project context")}</h2><Badge tone="neutral">{t("4 files")}</Badge></div>
        <div className="h-[calc(100%-56px)] overflow-y-auto">
          <div className="border-b border-white/[0.055] p-4"><p className="technical-label mb-3 text-white/24">{t("Sources")}</p><div className="space-y-1">{contextFiles.map((file) => { const Icon = file.icon; return <button key={file.name} className="flex w-full items-center gap-2.5 rounded-md px-2 py-2 text-left hover:bg-white/[0.03]"><span className="grid size-8 place-items-center rounded-md bg-white/[0.045] text-white/35"><Icon className="size-3.5" /></span><span className="min-w-0 flex-1"><span className="block truncate text-[11px] text-white/58">{file.name}</span><span className="mt-0.5 block text-[9px] text-white/22">{t(file.meta)}</span></span><CheckCircle2 className="size-3.5 text-emerald-400/70" /></button>; })}</div></div>
          <div className="border-b border-white/[0.055] p-4"><p className="technical-label mb-3 text-white/24">{t("Design parameters")}</p><dl className="space-y-3">{[["Groundwater", "-2.4 m"], ["Target UCS", "2.5 MPa"], ["Column dia.", "800 mm"], ["Grid spacing", "1.8 m"]].map(([term, value]) => <div key={term} className="flex items-center justify-between text-[11px]"><dt className="text-white/32">{t(term)}</dt><dd className="font-mono text-white/62">{value}</dd></div>)}</dl></div>
          <div className="p-4"><p className="technical-label mb-3 text-white/24">{t("Quality status")}</p><div className="flex items-start gap-2.5 rounded-md border border-amber-400/15 bg-amber-400/[0.045] p-3"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-300" /><div><p className="text-[11px] font-medium text-amber-200/80">{t("1 unresolved assumption")}</p><p className="mt-1 text-[10px] leading-4 text-white/30">{t("Confirm design groundwater elevation before issue.")}</p></div></div><div className="mt-3 flex items-center gap-2 text-[10px] text-white/25"><Gauge className="size-3.5 text-emerald-300/60" />{t("Context confidence")}: 92%</div></div>
        </div>
      </aside>
    </div>
  );
}
