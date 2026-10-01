export const business = {
  name: "Christian Becker",
  legalName: "Christian Becker Veranstaltungs- und IT-Dienstleistungen",
  owner: "Christian Becker",
  street: "An der Reithalle 21",
  zip: "55294",
  city: "Bodenheim",
  email: "mail@cbecker.eu",
  usedEquipmentUrl:
    "https://gebrauchte-veranstaltungstechnik.de/?modul=ads&site=userads&userid=28513",
};

export const navigation = [
  { href: "/veranstaltungstechnik", label: "Veranstaltungstechnik" },
  { href: "/dj-service", label: "DJ-Service" },
  { href: "/gebrauchte-technik", label: "Gebrauchte Technik" },
  { href: "/it-dienstleistungen", label: "IT-Dienstleistungen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export type ItReference = {
  domain: string;
  url: string;
  tag?: string;
};

export const itReferences: ItReference[] = [
  { domain: "blitzmichel.de", url: "https://blitzmichel.de" },
  { domain: "hausrenate.de", url: "https://hausrenate.de" },
  {
    domain: "lvis-hausverwaltung.de",
    url: "https://lvis-hausverwaltung.de",
    tag: "Hausverwaltung",
  },
  {
    domain: "weingut-dutt.de",
    url: "https://weingut-dutt.de",
    tag: "Weingut",
  },
  {
    domain: "fv-kita-muehlbachstoerche.de",
    url: "https://fv-kita-muehlbachstoerche.de",
    tag: "Förderverein Kita",
  },
  { domain: "vvs-frankfurt.de", url: "https://vvs-frankfurt.de" },
];
