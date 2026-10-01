import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { business, navigation } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-base font-semibold text-white">
            {business.name}
          </p>
          <p className="mt-1 text-sm">Veranstaltungs- &amp; IT-Dienstleistungen</p>
          <p className="mt-5 flex items-start gap-2 text-sm">
            <MapPin size={16} className="mt-0.5 shrink-0 text-amber" />
            <span>
              {business.street}
              <br />
              {business.zip} {business.city}
            </span>
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <Mail size={16} className="shrink-0 text-amber" />
            <a href={`mailto:${business.email}`} className="hover:text-amber">
              {business.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Leistungen
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Unternehmen
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/impressum" className="hover:text-amber">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-amber">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Einsatzgebiet
          </p>
          <p className="mt-4 text-sm">
            Bodenheim, Mainz, Rheinhessen und Rhein-Main-Gebiet &mdash; auf
            Anfrage auch überregional.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {business.legalName}. Alle Rechte
        vorbehalten.
      </div>
    </footer>
  );
}
