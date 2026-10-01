import type { Metadata } from "next";
import { ExternalLink, Code2, Smartphone, Gauge, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { itReferences } from "@/lib/content";

export const metadata: Metadata = {
  title: "IT-Dienstleistungen & Webentwicklung",
  description:
    "Programmierung moderner, schneller Websites für kleine und mittelständische Unternehmen. Referenzen unter anderem: weingut-dutt.de, lvis-hausverwaltung.de, vvs-frankfurt.de.",
};

const leistungen = [
  {
    icon: Code2,
    title: "Individuelle Websites",
    description:
      "Von der Visitenkarten-Website bis zur mehrseitigen Unternehmenspräsenz — passgenau programmiert statt von der Stange.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Deine Website funktioniert und überzeugt auf jedem Gerät — vom Smartphone bis zum großen Desktop-Bildschirm.",
  },
  {
    icon: Gauge,
    title: "Performance & Technik",
    description:
      "Schnelle Ladezeiten, sauberer Code und eine solide technische Basis, auf die du dich verlassen kannst.",
  },
  {
    icon: Wrench,
    title: "Pflege & Weiterentwicklung",
    description:
      "Auch nach dem Launch bin ich erreichbar — für Anpassungen, neue Inhalte und die laufende Betreuung deiner Seite.",
  },
];

export default function ItDienstleistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="IT-Dienstleistungen"
        title="Websites für kleine und mittelständische Unternehmen"
        description="Ich entwickle individuelle Websites für Betriebe, Vereine und Selbstständige — verständlich, zuverlässig und mit persönlicher Betreuung."
      >
        <a
          href="/kontakt"
          className="mt-8 inline-flex rounded-full bg-blue px-6 py-3 text-sm font-semibold text-ink transition-colors hover:brightness-110"
        >
          Projekt besprechen
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {leistungen.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-border-soft bg-white p-7"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue/15 text-blue">
                <Icon size={24} />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            Referenzen
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Websites, die ich umgesetzt habe
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Ein Auszug aus abgeschlossenen Projekten für Unternehmen, Vereine
            und Betriebe aus unterschiedlichen Branchen.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {itReferences.map((ref) => (
              <a
                key={ref.domain}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border-soft bg-white px-6 py-5 transition-colors hover:border-blue"
              >
                <div>
                  <p className="font-semibold text-ink">{ref.domain}</p>
                  {ref.tag && (
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                      {ref.tag}
                    </p>
                  )}
                </div>
                <ExternalLink
                  size={18}
                  className="shrink-0 text-muted transition-colors group-hover:text-blue"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Neue Website oder Relaunch geplant?"
        description="Schreib mir kurz, worum es bei deinem Unternehmen geht und was deine Website leisten soll — ich melde mich mit einer Einschätzung zurück."
      />
    </>
  );
}
