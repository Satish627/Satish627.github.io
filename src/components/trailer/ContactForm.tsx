"use client";

import { useState } from "react";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const labelClass = "text-xs font-extrabold tracking-[0.22em] text-haze";
const fieldClass =
  "mt-1.5 block w-full border-2 border-white/20 bg-night px-3.5 text-base tracking-normal text-white outline-none placeholder:text-white/40 focus:border-pink";

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Honeypot: real visitors never fill the hidden field.
    if (String(data.get("website") ?? "").trim()) {
      form.reset();
      setStatus("Invite sent. Thanks for reaching out!");
      return;
    }

    // No form service configured: hand the message to the visitor's mail app.
    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Hello from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name} (${from})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    setSending(true);
    setStatus(null);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email: from, message }),
      });
      if (!response.ok) {
        setStatus("Couldn't send right now. Try emailing me instead.");
        return;
      }
      form.reset();
      setStatus("Invite sent. Thanks for reaching out!");
    } catch {
      setStatus("Network error. Try emailing me instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hard-shadow flex flex-col gap-4 border-2 border-pink bg-panel/95 p-7"
    >
      <label className={labelClass}>
        NAME
        <input name="name" required autoComplete="name" placeholder="Your name" className={`${fieldClass} min-h-12`} />
      </label>
      <label className={labelClass}>
        EMAIL
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={`${fieldClass} min-h-12`}
        />
      </label>
      <label className={labelClass}>
        MESSAGE
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Say hi, or tell me about your project"
          className={`${fieldClass} resize-none py-3`}
        />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} className="skew-btn hard-shadow-sm cursor-pointer bg-pink disabled:opacity-60">
          {sending ? "SENDING…" : "SEND INVITE"}
        </button>
        {status && (
          <p role="status" className="text-sm text-mist">
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
