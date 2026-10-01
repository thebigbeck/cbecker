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
  { href: "/gebrauchte-technik", label: "Gebrauchte Technik" },
  { href: "/it-dienstleistungen", label: "IT-Dienstleistungen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export type ItReference = {
  domain: string;
  url: string;
  tag?: string;
};

export type EquipmentItem = {
  name: string;
  description: string;
};

export type EquipmentCategory = {
  title: string;
  items: EquipmentItem[];
};

export const equipmentExamples: EquipmentCategory[] = [
  {
    title: "Lichttechnik",
    items: [
      {
        name: "SGM G1 Beam",
        description:
          "Wasserdichter Moving Head (IP65) mit integriertem Akku und Wireless DMX — auch für den Open-Air-Einsatz.",
      },
      {
        name: "Wireless Solution W-DMX UglyBox",
        description:
          "Funk-DMX-System für kabellose Lichtsteuerung, z. B. bei verwinkelten Locations oder im Außenbereich.",
      },
    ],
  },
  {
    title: "Videotechnik",
    items: [
      {
        name: "Barco PDS-902",
        description:
          "Seamless Presentation Switcher für professionelle Bildumschaltung bei Tagungen und Konferenzen.",
      },
      {
        name: "Analog Way PLS300",
        description:
          "Präsentations-Switcher und Seamless-Scaler für mehrere Bildquellen auf einer Leinwand.",
      },
      {
        name: "Kramer DigiTOOLS / Glasfaser-Extender",
        description:
          "HDMI- und DVI-Signalübertragung über weite Strecken — für große Locations und mehrere Räume.",
      },
    ],
  },
  {
    title: "Tontechnik",
    items: [
      {
        name: "AKG C747",
        description:
          "Kondensator-Schwanenhalsmikrofon für Rednerpulte, Podiumsdiskussionen und Konferenzen.",
      },
    ],
  },
];

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
