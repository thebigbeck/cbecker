import type { Metadata } from "next";
import { Volume2, Lightbulb, Video, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { equipmentExamples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Veranstaltungstechnik mieten",
  description:
    "Vermietung von Ton-, Licht- und Videotechnik für Konzerte, Firmenevents, Vereinsfeiern und private Feste in Bodenheim, Mainz und Rheinhessen.",
};

const categories = [
  {
    icon: Volume2,
    title: "Tontechnik",
    items: [
      "PA-Anlagen für kleine bis große Veranstaltungen",
      "Funkmikrofone, Headsets und Konferenztechnik",
      "Mischpulte, Monitoring und Beschallung für Bands",
    ],
  },
  {
    icon: Lightbulb,
    title: "Lichttechnik",
    items: [
      "Bühnen- und Eventbeleuchtung nach Anlass",
      "Movingheads, LED-Scheinwerfer und Effektlicht",
      "Dekoratives Ambiente- und Raumlicht",
    ],
  },
  {
    icon: Video,
    title: "Videotechnik",
    items: [
      "Leinwände, Beamer und LED-Screens",
      "Kameratechnik für Live-Übertragung und Aufzeichnung",
      "Präsentationstechnik für Tagungen und Messen",
    ],
  },
];

const anlaesse = [
  "Firmenfeiern & Tagungen",
  "Konzerte & Bühnenveranstaltungen",
  "Vereinsfeste & öffentliche Veranstaltungen",
  "Hochzeiten & private Feiern",
  "Messen & Produktpräsentationen",
  "Jubiläen & Galas",
];

export default function VeranstaltungstechnikPage() {
  return (
    <>
      <PageHero
        eyebrow="Veranstaltungstechnik"
        title="Ton, Licht und Video für deine Veranstaltung"
        description="Von der kleinen Firmenfeier bis zur großen Bühne: Ich plane, liefere und betreue die passende Technik — zuverlässig und auf dein Budget abgestimmt."
      >
        <a
          href="/kontakt"
          className="mt-8 inline-flex rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
        >
          Technik anfragen
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-border-soft bg-white p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber/15 text-amber">
                <Icon size={24} />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-ink">{title}</h2>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-amber"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber">
            Equipment
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Beispiele aus unserem Bestand
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Ein Auszug aus Marken und Geräten, mit denen wir arbeiten —
            professionelle Technik für anspruchsvolle Veranstaltungen.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {equipmentExamples.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-border-soft bg-white p-7"
              >
                <h3 className="text-base font-semibold text-ink">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="text-sm leading-relaxed">
                      <span className="font-semibold text-ink">
                        {item.name}
                      </span>
                      <p className="mt-0.5 text-muted">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Für welche Anlässe?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Ob privat, geschäftlich oder gemeinnützig — ich stelle für jeden
            Rahmen die passende Technik zusammen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {anlaesse.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border-soft bg-white px-5 py-2.5 text-sm font-medium text-ink"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Technik-Anfrage für deine Veranstaltung"
        description="Teile mir Datum, Ort und ungefähre Gästezahl mit — ich erstelle dir ein unverbindliches Angebot, passend zu deinem Event."
      />
    </>
  );
}
