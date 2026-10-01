import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von " + business.legalName,
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink">
        Datenschutzerklärung
      </h1>

      <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-ink/90">
        <div>
          <h2 className="text-base font-semibold text-ink">
            1. Verantwortlicher
          </h2>
          <p className="mt-2">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            ist:
            <br />
            {business.owner}, {business.legalName}
            <br />
            {business.street}, {business.zip} {business.city}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${business.email}`} className="underline">
              {business.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            2. Hosting und Server-Logfiles
          </h2>
          <p className="mt-2">
            Diese Website wird bei einem externen Hosting-Anbieter
            betrieben. Beim Aufruf der Website erfasst der Hosting-Anbieter
            automatisch sogenannte Server-Logfiles, die Ihr Browser
            übermittelt. Dazu gehören z. B. IP-Adresse, Datum und Uhrzeit der
            Anfrage, Browsertyp und -version sowie das verwendete
            Betriebssystem. Diese Daten werden ausschließlich zur
            Gewährleistung eines störungsfreien Betriebs sowie zur
            Verbesserung der Sicherheit verarbeitet (Art. 6 Abs. 1 lit. f
            DSGVO) und nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            3. Kontaktaufnahme
          </h2>
          <p className="mt-2">
            Das Kontaktformular dieser Website öffnet beim Absenden Ihr
            lokales E-Mail-Programm mit einer vorausgefüllten Nachricht an
            unsere E-Mail-Adresse. Die eingegebenen Daten (Name, E-Mail,
            Nachricht) werden dabei nicht über unseren Server oder
            Hosting-Anbieter übertragen oder dort gespeichert, sondern
            verlassen Ihr Gerät erst, wenn Sie die E-Mail über Ihr eigenes
            E-Mail-Programm versenden. Die Verarbeitung der so übermittelten
            Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur
            Bearbeitung Ihrer Anfrage und wird gelöscht, sobald sie für die
            Bearbeitung nicht mehr erforderlich ist.
          </p>
          <p className="mt-2">
            Alternativ können Sie uns auch direkt per E-Mail an{" "}
            <a href={`mailto:${business.email}`} className="underline">
              {business.email}
            </a>{" "}
            kontaktieren.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            4. Google Maps
          </h2>
          <p className="mt-2">
            Auf der Kontaktseite binden wir eine Karte des Dienstes Google
            Maps ein, bereitgestellt von Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Irland. Beim Aufruf der
            Kontaktseite wird eine Verbindung zu Servern von Google
            hergestellt, wobei Ihre IP-Adresse sowie weitere technische
            Daten an Google übertragen werden können. Die Nutzung erfolgt im
            Interesse einer anschaulichen Standortdarstellung (Art. 6 Abs. 1
            lit. f DSGVO). Weitere Informationen zum Umgang mit
            Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            5. Cookies und Tracking
          </h2>
          <p className="mt-2">
            Diese Website verwendet keine Analyse- oder Tracking-Cookies und
            bindet keine Werbe- oder Social-Media-Dienste ein, die Ihr
            Verhalten auf dieser Seite nachverfolgen.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink">
            6. Ihre Rechte
          </h2>
          <p className="mt-2">
            Sie haben jederzeit das Recht auf Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empfänger sowie den Zweck der Datenverarbeitung (Art. 15 DSGVO)
            und ggf. ein Recht auf Berichtigung (Art. 16 DSGVO), Löschung
            (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
            Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) sowie
            Datenübertragbarkeit (Art. 20 DSGVO). Zudem steht Ihnen ein
            Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
          </p>
          <p className="mt-2">
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
            personenbezogenen Daten wenden Sie sich bitte an{" "}
            <a href={`mailto:${business.email}`} className="underline">
              {business.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
