import Link from "next/link";
import {
  Volume2,
  Tags,
  Code2,
  ShieldCheck,
  MapPin,
  Users,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { itReferences } from "@/lib/content";

const equalizerHeights = [40, 65, 30, 80, 50, 95, 35, 70, 45, 60, 25, 85];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-5 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Bodenheim · Rheinhessen · Rhein-Main
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Veranstaltungstechnik &amp; Websites — aus einer Hand
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              Ich sorge für guten Ton, stimmungsvolles Licht und zuverlässige
              Technik auf deiner Veranstaltung — und baue als IT-Dienstleister
              zuverlässige Websites für kleine und mittelständische
              Unternehmen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/veranstaltungstechnik"
                className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
              >
                Veranstaltungstechnik entdecken
              </Link>
              <Link
                href="/it-dienstleistungen"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
              >
                IT-Projekte ansehen
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex h-40 w-full max-w-sm items-end justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 lg:w-80"
          >
            {equalizerHeights.map((h, i) => (
              <span
                key={i}
                className="w-full rounded-full bg-gradient-to-t from-amber to-blue"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber">
            Leistungen
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Zwei Gewerke, ein Ansprechpartner
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Ob Hochzeit, Firmenfeier oder neue Unternehmenswebsite — du hast
            einen festen Ansprechpartner, der plant, umsetzt und bei Fragen
            erreichbar bleibt.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            href="/veranstaltungstechnik"
            icon={Volume2}
            title="Veranstaltungstechnik"
            description="Vermietung von Ton-, Licht- und Videotechnik für Konzerte, Firmenevents, Vereinsfeiern und private Feste."
          />
          <ServiceCard
            href="/gebrauchte-technik"
            icon={Tags}
            title="Gebrauchte Technik"
            description="Geprüfte, gebrauchte Veranstaltungstechnik zu fairen Preisen — ideal für den Einstieg oder die Erweiterung deines Equipments."
          />
          <ServiceCard
            href="/it-dienstleistungen"
            icon={Code2}
            title="IT-Dienstleistungen"
            description="Programmierung moderner, schneller Websites für kleine und mittelständische Unternehmen — von Konzept bis Go-Live."
            accent="blue"
          />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-3">
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-amber" size={28} />
            <div>
              <h3 className="font-semibold text-ink">
                Zuverlässig &amp; erfahren
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Sorgfältige Planung und geprüfte Technik, damit auf deiner
                Veranstaltung alles reibungslos läuft.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="mt-1 shrink-0 text-amber" size={28} />
            <div>
              <h3 className="font-semibold text-ink">Aus der Region</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Zuhause in Bodenheim, im Einsatz in Rheinhessen, Mainz und dem
                gesamten Rhein-Main-Gebiet.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users className="mt-1 shrink-0 text-amber" size={28} />
            <div>
              <h3 className="font-semibold text-ink">Persönlich betreut</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Ein fester Ansprechpartner von der ersten Anfrage bis zum
                erfolgreichen Projektabschluss.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue">
              IT-Referenzen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
              Websites, die ich umgesetzt habe
            </h2>
          </div>
          <Link
            href="/it-dienstleistungen"
            className="text-sm font-semibold text-ink underline underline-offset-4 hover:text-blue"
          >
            Alle IT-Leistungen ansehen
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {itReferences.map((ref) => (
            <a
              key={ref.domain}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border-soft px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-blue hover:text-blue"
            >
              {ref.domain}
            </a>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
