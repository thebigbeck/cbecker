import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von " + business.legalName,
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink">
        Impressum
      </h1>

      <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-ink/90">
        <div>
          <h2 className="text-base font-semibold text-ink">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2">
            {business.owner}
            <br />
            {business.legalName}
            <br />
            {business.street}
            <br />
            {business.zip} {business.city}
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">Kontakt</h2>
          <p className="mt-2">
            E-Mail:{" "}
            <a href={`mailto:${business.email}`} className="underline">
              {business.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            Umsatzsteuer
          </h2>
          <p className="mt-2">
            Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet
            (Kleinunternehmerregelung).
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            {business.owner}, Anschrift wie oben.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            EU-Streitschlichtung
          </h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-2">
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
