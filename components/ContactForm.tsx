"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/content";

const topics = [
  "Veranstaltungstechnik",
  "Gebrauchte Technik",
  "IT-Dienstleistungen",
  "Sonstiges",
] as const;

export default function ContactForm() {
  const [topic, setTopic] = useState<(typeof topics)[number]>(topics[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `Anfrage: ${topic}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border-soft bg-white p-7 sm:p-8"
    >
      <div>
        <label
          htmlFor="topic"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Worum geht es?
        </label>
        <select
          id="topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value as (typeof topics)[number])}
          className="w-full rounded-lg border border-border-soft bg-white px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border-soft px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border-soft px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Datum, Ort, gewünschte Leistung oder ein paar Worte zu deinem Projekt …"
          className="w-full rounded-lg border border-border-soft px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft sm:w-auto"
      >
        Anfrage per E-Mail senden
      </button>
      <p className="text-xs text-muted">
        Der Button öffnet dein E-Mail-Programm mit einer vorausgefüllten
        Nachricht an {business.email}.
      </p>
    </form>
  );
}
