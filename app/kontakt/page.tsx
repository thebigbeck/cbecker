import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Christian Becker für Veranstaltungstechnik, gebrauchte Technik oder ein IT-Projekt. An der Reithalle 21, 55294 Bodenheim.",
};

export default function KontaktPage() {
  const mapsQuery = encodeURIComponent(
    `${business.street}, ${business.zip} ${business.city}`,
  );

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lass uns über dein Vorhaben sprechen"
        description="Ob Veranstaltungstechnik oder IT-Projekt — schreib mir über das Formular oder direkt per E-Mail."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-ink">
              {business.legalName}
            </h2>
            <p className="mt-4 flex items-start gap-3 text-sm text-muted">
              <MapPin size={18} className="mt-0.5 shrink-0 text-amber" />
              <span>
                {business.street}
                <br />
                {business.zip} {business.city}
              </span>
            </p>
            <p className="mt-3 flex items-center gap-3 text-sm text-muted">
              <Mail size={18} className="shrink-0 text-amber" />
              <a href={`mailto:${business.email}`} className="hover:text-ink">
                {business.email}
              </a>
            </p>
            <p className="mt-3 flex items-start gap-3 text-sm text-muted">
              <Clock size={18} className="mt-0.5 shrink-0 text-amber" />
              <span>
                Rückmeldung in der Regel innerhalb von 1&ndash;2 Werktagen.
              </span>
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border-soft">
            <iframe
              title="Standort: An der Reithalle 21, 55294 Bodenheim"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
