"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Send, ShoppingBag } from "lucide-react";
import { useState } from "react";

const mockMessages = [
  {
    id: "m1",
    from: "buyer" as const,
    text: "Hi, is the ThinkPad available for pickup today?",
    time: "10:12am",
  },
  {
    id: "m2",
    from: "vendor" as const,
    text: "Yes, we have 3 units in stock. Pickup from Luthuli Avenue is available.",
    time: "10:14am",
  },
];

export default function VendorChatPage() {
  const router = useRouter();
  const params = useParams();
  const chatId = Array.isArray(params?.chatId) ? params.chatId[0] : (params?.chatId as string | undefined);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] max-h-[700px] rounded-2xl border border-slate-800 bg-slate-900/70">
      <header className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/vendor/messages")}
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-2 py-1 text-[11px] text-slate-200 hover:bg-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-semibold text-slate-100">Chat with buyer</span>
            <span className="text-[11px] text-slate-400">Conversation {chatId ?? "c1"}</span>
          </div>
        </div>
        <button className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1.5 text-[11px] text-slate-100 hover:bg-slate-800">
          <ShoppingBag className="w-3.5 h-3.5" /> View order
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-3 md:px-4 py-3 space-y-2 text-xs">
        {mockMessages.map((m) => (
          <div key={m.id} className={`flex ${m.from === "vendor" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs md:max-w-sm rounded-2xl px-3 py-2 space-y-1 ${
                m.from === "vendor"
                  ? "bg-orange-500 text-white rounded-br-sm"
                  : "bg-slate-800 text-slate-100 rounded-bl-sm"
              }`}
            >
              <p>{m.text}</p>
              <p className="text-[10px] opacity-70 text-right">{m.time}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="border-t border-slate-800 px-3 md:px-4 py-2 flex items-center gap-2 text-xs">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Type a message to the buyer..."
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-3 py-1.5 text-[11px] font-semibold text-white"
        >
          <Send className="w-3.5 h-3.5 mr-1" /> Send
        </button>
      </form>
    </div>
  );
}
