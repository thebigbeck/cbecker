import Link from "next/link";
import { Mail } from "lucide-react";
import { business } from "@/lib/content";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Lust auf eine unverbindliche Beratung?",
  description = "Erzähl mir kurz von deiner Veranstaltung oder deinem IT-Projekt — ich melde mich zeitnah mit einem passenden Vorschlag zurück.",
}: CTASectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-surface p-10 sm:p-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Zum Kontaktformular
          </Link>
          <a
            href={`mailto:${business.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            <Mail size={16} />
            {business.email}
          </a>
        </div>
      </div>
    </section>
  );
}
