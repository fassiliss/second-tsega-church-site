"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  X,
} from "lucide-react";

type ChatMessage = {
  id: number;
  sender: "church" | "visitor";
  text: string;
};

const churchEmail = "gec5227@gmail.com";
const churchPhone = "(615) 485-1516";
const churchAddress = "5227 Murfreesboro Rd, La Vergne, TN 37086";

function getReply(message: string) {
  const text = message.toLowerCase();

  if (text.includes("time") || text.includes("service")) {
    return "Sunday worship is from 11:00 AM to 1:00 PM. Wednesday Youth Fellowship is 6:00 PM to 8:00 PM, and Saturday Prayer Meeting is 9:00 AM to 11:00 AM.";
  }

  if (text.includes("address") || text.includes("location") || text.includes("visit")) {
    return `We meet at ${churchAddress}. You are welcome to visit us this Sunday.`;
  }

  if (text.includes("phone") || text.includes("call")) {
    return `You can call the church office at ${churchPhone}.`;
  }

  if (text.includes("email") || text.includes("contact")) {
    return `You can email the church office at ${churchEmail}.`;
  }

  if (text.includes("donate") || text.includes("give")) {
    return "Online giving is coming soon. For giving questions, please contact the church office.";
  }

  if (text.includes("youth")) {
    return "Youth Fellowship meets Wednesdays from 6:00 PM to 8:00 PM.";
  }

  if (text.includes("prayer")) {
    return "Prayer Meeting is Saturdays from 9:00 AM to 11:00 AM. You can also contact us for prayer requests.";
  }

  return "Thanks for reaching out. I can help with service times, address, youth fellowship, prayer meeting, giving, or contact information. For a personal reply, please email the church office.";
}

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "church",
      text: "Hi, welcome to Grace Ethiopian Evangelical Church. How can we help you today?",
    },
  ]);
  const nextId = useRef(2);

  const quickPrompts = useMemo(
    () => ["Service times", "Church address", "Prayer meeting", "Contact us"],
    [],
  );

  const addVisitorMessage = (message: string) => {
    const trimmed = message.trim();

    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      {
        id: nextId.current++,
        sender: "visitor",
        text: trimmed,
      },
      {
        id: nextId.current++,
        sender: "church",
        text: getReply(trimmed),
      },
    ]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addVisitorMessage(input);
  };

  const lastVisitorMessage = [...messages]
    .reverse()
    .find((message) => message.sender === "visitor")?.text;
  const emailHref = `mailto:${churchEmail}?subject=Website%20chat%20message&body=${encodeURIComponent(
    lastVisitorMessage || "Hello, I would like to contact the church office.",
  )}`;

  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end sm:bottom-6 sm:right-6">
      {open ? (
        <section
          aria-label="Church live chat"
          className="mb-4 flex h-[min(620px,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-950"
        >
          <div className="flex items-center justify-between bg-purple-700 px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <MessageCircle size={20} />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Church Chat</h2>
                <p className="text-xs text-purple-100">
                  Instant info and contact help
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/15"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="border-b border-slate-200 px-4 py-3 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300">
            <div className="grid gap-2">
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-purple-600" />
                Sunday 11:00 AM - 1:00 PM
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-purple-600" />
                {churchPhone}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-purple-600" />
                La Vergne, TN
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "visitor" ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                    message.sender === "visitor"
                      ? "bg-purple-700 text-white"
                      : "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-4 dark:border-slate-800">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => addVisitorMessage(prompt)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-purple-300 hover:text-purple-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-purple-500 dark:hover:text-purple-300"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label htmlFor="chat-message" className="sr-only">
                Type your message
              </label>
              <input
                id="chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                type="text"
                maxLength={300}
                placeholder="Type your question..."
                className="min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-700 text-white transition hover:bg-purple-800"
                aria-label="Send chat message"
              >
                <Send size={16} />
              </button>
            </form>

            <a
              href={emailHref}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-purple-300 hover:text-purple-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-purple-500 dark:hover:text-purple-300"
            >
              <Mail size={15} />
              Email church office
            </a>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-white shadow-2xl ring-4 ring-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-800 dark:ring-purple-900/60"
        aria-label="Open church chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
