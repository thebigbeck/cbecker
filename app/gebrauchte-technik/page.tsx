import type { Metadata } from "next";
import { ExternalLink, Tags, ShieldCheck, Wallet } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gebrauchte Veranstaltungstechnik kaufen",
  description:
    "Geprüfte, gebrauchte Veranstaltungstechnik zu fairen Preisen — aktuelle Angebote auf gebrauchte-veranstaltungstechnik.de.",
};

const vorteile = [
  {
    icon: ShieldCheck,
    title: "Geprüfte Technik",
    description:
      "Alle angebotenen Geräte wurden von mir genutzt, gepflegt und vor dem Verkauf überprüft.",
  },
  {
    icon: Wallet,
    title: "Faire Preise",
    description:
      "Gebrauchte Technik zu einem Bruchteil des Neupreises — ideal für Einsteiger und Vereine.",
  },
  {
    icon: Tags,
    title: "Wechselndes Angebot",
    description:
      "Das Sortiment ändert sich regelmäßig — ein Blick in die aktuellen Anzeigen lohnt sich.",
  },
];

export default function GebrauchteTechnikPage() {
  return (
    <>
      <PageHero
        eyebrow="Gebrauchte Technik"
        title="Gebrauchte Veranstaltungstechnik kaufen"
        description="Ich verkaufe ausgemusterte und überzählige Ton-, Licht- und Videotechnik aus meinem eigenen Bestand — geprüft und zu fairen Preisen."
      >
        <a
          href={business.usedEquipmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
        >
          Aktuelle Angebote ansehen
          <ExternalLink size={16} />
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {vorteile.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border-soft bg-white p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber/15 text-amber">
                <Icon size={24} />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Alle Anzeigen auf einen Blick
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Meine aktuellen Verkaufsanzeigen pflege ich auf der
            Vermittlungsplattform gebrauchte-veranstaltungstechnik.de. Dort
            findest du Fotos, Beschreibungen und Preise zu jedem verfügbaren
            Artikel.
          </p>
          <a
            href={business.usedEquipmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            Zu meinen Anzeigen
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <CTASection
        title="Etwas Bestimmtes gesucht?"
        description="Du suchst ein bestimmtes Gerät und findest es nicht in meinen Anzeigen? Schreib mir einfach — vielleicht kann ich weiterhelfen."
      />
    </>
  );
}
