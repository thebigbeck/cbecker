import type { Metadata } from "next";
import { Heart, Building2, PartyPopper, Mic2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "DJ-Service für Hochzeiten & Firmenevents",
  description:
    "Professioneller DJ-Service für Hochzeiten, Firmenevents, Geburtstage und Vereinsfeiern in Bodenheim, Mainz und Rheinhessen — inklusive Musik, Moderation und eigener Technik.",
};

const anlaesse = [
  {
    icon: Heart,
    title: "Hochzeiten",
    description:
      "Von der Trauung bis zur Partynacht: stimmungsvolle Musikauswahl, die zu euch und euren Gästen passt.",
  },
  {
    icon: Building2,
    title: "Firmenevents",
    description:
      "Passende Hintergrundmusik für Empfänge und Networking, mitreißende Beats für die anschließende Feier.",
  },
  {
    icon: PartyPopper,
    title: "Geburtstage & private Feiern",
    description:
      "Individuelle Musikwünsche, gute Übergänge und ein Gespür für das richtige Set zur richtigen Zeit.",
  },
  {
    icon: Mic2,
    title: "Vereins- & öffentliche Feste",
    description:
      "Moderation, Durchsagen und Musik für Vereinsfeste, Jubiläen und öffentliche Veranstaltungen.",
  },
];

const inklusivleistungen = [
  "Vorgespräch zu Musikwünschen, Ablauf und besonderen Momenten",
  "Eigene, hochwertige Ton- und Lichttechnik inklusive",
  "Flexible Moderation — dezent im Hintergrund oder aktiv am Mikrofon",
  "Musikwunschliste sowie Absage-Liste für eure Gäste",
];

export default function DjServicePage() {
  return (
    <>
      <PageHero
        eyebrow="DJ-Service"
        title="Die richtige Musik für den richtigen Moment"
        description="Als DJ sorge ich für die passende Stimmung auf eurer Hochzeit, Firmenfeier oder privaten Veranstaltung — inklusive eigener Ton- und Lichttechnik."
      >
        <a
          href="/kontakt"
          className="mt-8 inline-flex rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
        >
          Termin anfragen
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {anlaesse.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-border-soft bg-white p-7"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-amber">
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
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Das ist inklusive
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {inklusivleistungen.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border-soft bg-white px-5 py-4 text-sm leading-relaxed text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Erzähl mir von eurem Fest"
        description="Datum, Location und ein paar Stichworte zur gewünschten Musikrichtung reichen für den Anfang — den Rest besprechen wir gemeinsam."
      />
    </>
  );
}
