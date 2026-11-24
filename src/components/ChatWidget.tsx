"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { MessageSquareText, X, SendHorizontal, Loader2, FileText } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import { cx } from "./ui";

type Msg = { role: "user" | "assistant"; content: string };

const WELCOME =
  "Hello! Welcome to Make IT Work. I'm your virtual ICT assistant. How can I help you today? You can ask me about our services, Microsoft solutions, cloud technology, hardware, IT support, or request a quotation.";

const SUGGESTIONS = [
  "What services do you offer?",
  "I need business laptops",
  "Help with Microsoft 365",
  "Dynamics GP support",
  "I'd like a quotation",
];

/** Render a safe subset of markdown: paragraphs, "- " bullets, **bold**, and [label](/internal or wa.me) links. */
function renderInline(text: string, keyBase: string) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      if (href.startsWith("/")) {
        parts.push(
          <Link key={`${keyBase}-${i++}`} href={href} className="font-semibold text-brand-strong underline underline-offset-2">
            {m[1]}
          </Link>,
        );
      } else if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
        parts.push(
          <a key={`${keyBase}-${i++}`} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-strong underline underline-offset-2">
            {m[1]}
          </a>,
        );
      } else {
        parts.push(m[1]);
      }
    } else if (m[3]) {
      parts.push(<strong key={`${keyBase}-${i++}`}>{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function MessageBody({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => /^\s*[-*•]\s+/.test(l));
        if (isList) {
          return (
            <ul key={bi} className="my-1 list-disc space-y-1 pl-5">
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.replace(/^\s*[-*•]\s+/, ""), `${bi}-${li}`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={bi} className="[&+*]:mt-2">
            {lines.map((l, li) => (
              <Fragment key={li}>
                {li > 0 && <br />}
                {renderInline(l, `${bi}-${li}`)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Welcome message is UI-only; send only the real conversation, capped.
        body: JSON.stringify({ messages: next.slice(1).slice(-16) }),
      });
      const json = (await res.json().catch(() => ({}))) as { reply?: string; error?: string };
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            json.reply ??
            json.error ??
            "Sorry, I couldn't respond just now. You can [request a quote](/quote) or [chat with our team on WhatsApp](" +
              whatsappUrl() +
              ").",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `I'm having trouble connecting. Please try again, or [contact our team](/contact) directly.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="miw-chat"
        aria-label={open ? "Close Make IT Work Assistant" : "Open Make IT Work Assistant"}
        className={cx(
          "fixed bottom-5 right-5 z-40 flex h-14 min-w-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-4 sm:pr-5 text-white shadow-xl shadow-black/25 ring-1 ring-white/10 transition-transform duration-200 hover:scale-[1.03] sm:bottom-6 sm:right-6",
          open && "max-sm:hidden",
        )}
      >
        {open ? (
          <X aria-hidden className="size-6" />
        ) : (
          <span className="relative">
            <MessageSquareText aria-hidden className="size-6" />
            <span aria-hidden className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-brand ring-2 ring-ink" />
          </span>
        )}
        <span className="hidden text-sm font-semibold sm:inline">{open ? "Close" : "Ask us"}</span>
      </button>

      <div
        id="miw-chat"
        role="dialog"
        aria-label="Make IT Work Assistant"
        className={cx(
          "fixed z-50 flex flex-col overflow-hidden bg-paper shadow-2xl transition-all duration-300",
          "inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(640px,calc(100dvh-8rem))] sm:w-[400px] sm:rounded-2xl sm:border sm:border-line",
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-center justify-between gap-3 bg-ink px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-brand-strong font-heading text-sm font-bold">
              IT
            </span>
            <div>
              <p className="font-heading font-semibold leading-tight">Make IT Work Assistant</p>
              <p className="text-xs text-subtle-dark">Virtual ICT assistant · AI-generated answers</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              launcherRef.current?.focus();
            }}
            aria-label="Close assistant"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-white/10"
          >
            <X aria-hidden className="size-5" />
          </button>
        </div>

        <div ref={logRef} role="log" aria-live="polite" className="flex-1 space-y-4 overflow-y-auto bg-mist px-4 py-5">
          {messages.map((m, i) => (
            <div key={i} className={cx("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cx(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-[0.94rem] leading-relaxed",
                  m.role === "user" ? "rounded-br-md bg-ink text-white" : "rounded-bl-md bg-paper text-ink shadow-sm ring-1 ring-line",
                )}
              >
                <span className="sr-only">{m.role === "user" ? "You said: " : "Assistant: "}</span>
                <MessageBody text={m.content} />
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-sm text-subtle" role="status">
              <Loader2 aria-hidden className="size-4 animate-spin" />
              Assistant is typing…
            </div>
          )}
          {messages.length === 1 && !loading && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="min-h-9 cursor-pointer rounded-full border border-line bg-paper px-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-line bg-paper px-4 pb-4 pt-3">
          <div className="mb-3 flex gap-2">
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-mist px-3 text-xs font-semibold text-ink hover:bg-line"
            >
              <FileText aria-hidden className="size-3.5" />
              Request a quote
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-mist px-3 text-xs font-semibold text-ink hover:bg-line"
            >
              <WhatsAppIcon className="size-3.5 text-[#1DA851]" />
              Talk to a person
            </a>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2"
          >
            <label htmlFor="miw-chat-input" className="sr-only">
              Type your message
            </label>
            <textarea
              id="miw-chat-input"
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={1000}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Ask about our services…"
              className="max-h-32 min-h-11 flex-1 resize-none rounded-xl border border-line px-4 py-2.5 text-base focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-brand-strong text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-40"
            >
              <SendHorizontal aria-hidden className="size-5" />
            </button>
          </form>
          <p className="mt-2 text-[0.7rem] text-subtle">
            The assistant can make mistakes. Prices and availability are confirmed only in a formal quotation.
          </p>
        </div>
      </div>
    </>
  );
}
