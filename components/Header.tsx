"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="cbecker.eu"
            width={160}
            height={103}
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span className="hidden border-l border-border-soft pl-3 text-[0.68rem] uppercase leading-tight tracking-[0.14em] text-muted sm:block">
            Veranstaltungs- &amp;
            <br />
            IT-Dienstleistungen
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="hidden rounded-full bg-blue px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink md:inline-block"
        >
          Anfrage senden
        </Link>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-soft bg-white px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-ink/80 hover:bg-surface hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-blue px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Anfrage senden
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
