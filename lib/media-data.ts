export const DATA_LAST_UPDATED = "2026-07-27"

export interface MediaOutlet {
  id: number
  name: string
  bias: number // -1 (left) to 1 (right)
  reliability: number // 0 (low) to 1 (high)
  type: "Print" | "Web" | "TV" | "Radio" | "Print/Web" | "Agency"
  types?: ("Print" | "Web" | "TV" | "Radio" | "Agency")[] // For media present on multiple platforms
  contentType: "News" | "Opinion" | "Mixed"
  owner: string
  ownerType: "State-owned" | "Private" | "Private-Tajkun" | "Foreign" | "Non-profit"
  description: {
    sl: string
    en: string
  }
  website: string
  podcrtoLink?: string
  isInternational?: boolean
  country?: string
  isPolitical?: boolean // true if the media outlet covers political news
  logo?: string // Optional path to logo image, e.g., /logos/delo.png
  network?: string // Optional network affiliation, e.g., "SDS media network"
  relatedMediaIds?: number[] // IDs of related media outlets (same company/network with different types)
}

export const mediaOutlets: MediaOutlet[] = [
  // Major national media
  {
    id: 1,
    name: "Delo",
    bias: -0.2,
    reliability: 0.78,
    type: "Print/Web",
    contentType: "News",
    owner: "Kolektor (Stojan Petrič)",
    ownerType: "Private",
    description: {
      sl: "Največji slovenski dnevnik, ki izhaja od leta 1959. Znan po poglobljenih poročilih in analizah.",
      en: "Largest Slovenian daily newspaper in circulation since 1959. Known for in-depth reporting and analysis."
    },
    website: "https://delo.si",
    podcrtoLink: "https://podcrto.si/delo",
    isPolitical: true
  },
  {
    id: 2,
    name: "Dnevnik",
    bias: -0.3,
    reliability: 0.75,
    type: "Print/Web",
    contentType: "News",
    owner: "DZS (Marjan Pečar)",
    ownerType: "Private",
    description: {
      sl: "Dnevnik z osredotočenostjo na aktualne zadeve in politično pokritost.",
      en: "Daily newspaper with focus on current affairs and political coverage."
    },
    website: "https://dnevnik.si",
    podcrtoLink: "https://podcrto.si/dnevnik",
    isPolitical: true
  },
  {
    id: 3,
    name: "Večer",
    bias: -0.15,
    reliability: 0.72,
    type: "Print/Web",
    contentType: "News",
    owner: "Večer Media (Martin Odlazek)",
    ownerType: "Private",
    description: {
      sl: "Regionalni dnevnik s sedežem v Mariboru, pokriva nacionalne in regionalne novice.",
      en: "Regional daily based in Maribor, covering national and regional news."
    },
    website: "https://vecer.com",
    isPolitical: true
  },
  {
    id: 4,
    name: "RTV Slovenija",
    bias: 0.0,
    reliability: 0.82,
    type: "TV",
    contentType: "News",
    owner: "Republika Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Nacionalni javni radiotelevizijski zavod s TV, radijsko in spletno prisotnostjo (rtvslo.si).",
      en: "National public broadcaster with TV, radio, and web presence (rtvslo.si)."
    },
    website: "https://rtvslo.si",
    podcrtoLink: "https://podcrto.si/rtv",
    isPolitical: true,
    types: ["TV", "Web", "Radio"] // Multi-type media
  },
  {
    id: 5,
    name: "24ur.com",
    bias: 0.1,
    reliability: 0.58,
    type: "Web",
    contentType: "Mixed",
    owner: "Pro Plus (CME/PPF Group)",
    ownerType: "Foreign",
    description: {
      sl: "Priljubljen novičarski portal, povezan s POP TV, znan po hitrih novicah in tabloidnem pristopu.",
      en: "Popular news portal associated with POP TV, known for breaking news and tabloid approach."
    },
    website: "https://24ur.com",
    isPolitical: true
  },
  {
    id: 6,
    name: "STA",
    bias: 0.0,
    reliability: 0.88,
    type: "Agency",
    contentType: "News",
    owner: "Republika Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Slovenska tiskovna agencija, ki zagotavlja objektivno poročanje drugim medijem (sta.si).",
      en: "Slovenian Press Agency, providing factual news coverage to other media outlets (sta.si)."
    },
    website: "https://sta.si",
    podcrtoLink: "https://podcrto.si/sta",
    isPolitical: true,
    types: ["Agency", "Web"] // Multi-type media
  },
  {
    id: 7,
    name: "Nova24TV",
    bias: 0.85,
    reliability: 0.25,
    type: "TV",
    contentType: "Opinion",
    owner: "Madžarski vlagatelji (povezani z Orbánom)",
    ownerType: "Foreign",
    description: {
      sl: "Konservativni novičarski kanal z močno politično povezanostjo.",
      en: "Conservative news channel with strong political affiliation."
    },
    website: "https://nova24tv.si",
    podcrtoLink: "https://podcrto.si/nova24tv",
    isPolitical: true,
    relatedMediaIds: [125]
  },
  {
    id: 8,
    name: "Demokracija",
    bias: 0.9,
    reliability: 0.20,
    type: "Print/Web",
    contentType: "Opinion",
    owner: "Nova obzorja d.o.o. (SDS-povezano)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Desničarski tedenski časopis z močnim političnim stališčem.",
      en: "Right-wing weekly magazine with strong political stance."
    },
    website: "https://demokracija.si",
    isPolitical: true
  },
  {
    id: 9,
    name: "Mladina",
    bias: -0.75,
    reliability: 0.65,
    type: "Print/Web",
    contentType: "Mixed",
    owner: "Mladina d.d. (neodvisno)",
    ownerType: "Private",
    description: {
      sl: "Levičarski raziskovalni tednik z dolgo tradicijo investigativnega novinarstva, satire in političnih komentarjev.",
      en: "Left-leaning investigative weekly with long tradition of investigative journalism, satire and political commentary."
    },
    website: "https://mladina.si",
    podcrtoLink: "https://podcrto.si/mladina",
    isPolitical: true
  },
  {
    id: 10,
    name: "Siol.net",
    bias: 0.2,
    reliability: 0.52,
    type: "Web",
    contentType: "Mixed",
    owner: "Telekom Slovenije",
    ownerType: "Private",
    description: {
      sl: "Spletni novičarski portal s širokim naborom tem od novic do zabave. Telekom Slovenije je delno v državni lasti, vendar je formalno zasebna družba.",
      en: "Online news portal with wide range of topics from news to entertainment. Telekom Slovenije is partially state-owned but formally operates as a private company."
    },
    website: "https://siol.net",
    isPolitical: true
  },
  {
    id: 11,
    name: "Reporter",
    bias: 0.7,
    reliability: 0.35,
    type: "Print/Web",
    contentType: "Mixed",
    owner: "Salomon 2000 d.o.o.",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Desničarski tedenski časopis z osredotočenostjo na politiko in gospodarstvo.",
      en: "Right-leaning weekly magazine focusing on politics and business."
    },
    website: "https://reporter.si",
    isPolitical: true
  },
  {
    id: 12,
    name: "Necenzurirano",
    bias: -0.5,
    reliability: 0.80,
    type: "Web",
    contentType: "News",
    owner: "Primož Cirman in ekipa",
    ownerType: "Non-profit",
    description: {
      sl: "Neodvisna raziskovalno-novinarska platforma z dokumentiranimi investigativnimi zgodbami.",
      en: "Independent investigative journalism platform with documented investigative stories."
    },
    website: "https://necenzurirano.si",
    isPolitical: true
  },
  {
    id: 13,
    name: "Pod črto",
    bias: -0.2,
    reliability: 0.9,
    type: "Web",
    contentType: "News",
    owner: "Društvo Pod črto",
    ownerType: "Non-profit",
    description: {
      sl: "Neprofitna organizacija za preverjanje dejstev in raziskovalno novinarstvo.",
      en: "Fact-checking and investigative journalism non-profit organization."
    },
    website: "https://podcrto.si",
    isPolitical: true
  },
  {
    id: 14,
    name: "Finance",
    bias: 0.3,
    reliability: 0.72,
    type: "Print/Web",
    contentType: "News",
    owner: "Bonnier Group (Švedska)",
    ownerType: "Foreign",
    description: {
      sl: "Poslovni dnevnik z osredotočenostjo na gospodarstvo, finance in trge.",
      en: "Business daily focusing on economy, finance, and markets."
    },
    website: "https://finance.si",
    isPolitical: true
  },
  {
    id: 15,
    name: "N1 Slovenija",
    bias: -0.1,
    reliability: 0.78,
    type: "TV",
    contentType: "News",
    owner: "United Media (United Group)",
    ownerType: "Foreign",
    description: {
      sl: "24-urni novičarski kanal, ustanovljen leta 2020, del mreže CNN pridruženih kanalov.",
      en: "24-hour news channel launched in 2020, part of CNN affiliate network."
    },
    website: "https://n1info.si",
    isPolitical: true
  },
  {
    id: 16,
    name: "Požareport",
    bias: 0.8,
    reliability: 0.25,
    type: "Web",
    contentType: "Opinion",
    owner: "Anonimni avtor (blog)",
    ownerType: "Private",
    description: {
      sl: "Desničarski portal blog tipa, znan po provokativnih vsebinah.",
      en: "Right-wing blog-style outlet known for provocative content."
    },
    website: "https://pozareport.si",
    isPolitical: true
  },
  {
    id: 17,
    name: "Domovina",
    bias: 0.6,
    reliability: 0.50,
    type: "Web",
    contentType: "Opinion",
    owner: "Inštitut Encyclopaedia",
    ownerType: "Private",
    description: {
      sl: "Konservativni spletni medij z osredotočenostjo na tradicionalne vrednote.",
      en: "Conservative online media focusing on traditional values."
    },
    website: "https://domovina.je",
    isPolitical: true
  },
  {
    id: 18,
    name: "Oštro",
    bias: -0.15,
    reliability: 0.92,
    type: "Web",
    contentType: "News",
    owner: "Zavod Oštro (neprofitno)",
    ownerType: "Non-profit",
    description: {
      sl: "Čezmejni center za raziskovalno novinarstvo, ki proizvaja poglobljene preiskave.",
      en: "Cross-border investigative journalism center producing in-depth investigations."
    },
    website: "https://ostro.si",
    isPolitical: true
  },
  // Regional newspapers
  {
    id: 19,
    name: "Primorske novice",
    bias: -0.1,
    reliability: 0.7,
    type: "Print/Web",
    contentType: "News",
    owner: "Primorske novice d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Regionalni dnevnik za Primorsko regijo.",
      en: "Regional daily newspaper for the Primorska region."
    },
    website: "https://primorske.si",
    isPolitical: true
  },
  {
    id: 20,
    name: "Primorski dnevnik",
    bias: -0.2,
    reliability: 0.72,
    type: "Print/Web",
    contentType: "News",
    owner: "Primorski dnevnik d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Dnevnik za slovensko manjšino v Italiji in Primorsko.",
      en: "Daily for Slovenian minority in Italy and Primorska region."
    },
    website: "https://primorski.eu",
    isPolitical: true
  },
  {
    id: 21,
    name: "Dolenjski list",
    bias: 0.05,
    reliability: 0.68,
    type: "Print/Web",
    contentType: "News",
    owner: "Dolenjski list d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Regionalni tednik za Dolenjsko regijo.",
      en: "Regional weekly for the Dolenjska region."
    },
    website: "https://dolenjskilist.si"
  },
  {
    id: 22,
    name: "Gorenjski glas",
    bias: -0.05,
    reliability: 0.67,
    type: "Print/Web",
    contentType: "News",
    owner: "Gorenjski glas d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Regionalni časopis za Gorenjsko.",
      en: "Regional newspaper for the Gorenjska region."
    },
    website: "https://gorenjskiglas.si"
  },
  // Radio stations
  {
    id: 23,
    name: "Val 202",
    bias: -0.1,
    reliability: 0.8,
    type: "Radio",
    contentType: "Mixed",
    owner: "RTV Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Popularni radijski program RTV Slovenija z glasbo in informativnimi vsebinami.",
      en: "Popular RTV Slovenia radio program with music and informative content."
    },
    website: "https://val202.rtvslo.si"
  },
  {
    id: 24,
    name: "Radio Slovenija 1",
    bias: -0.05,
    reliability: 0.82,
    type: "Radio",
    contentType: "News",
    owner: "RTV Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Prvi program Radia Slovenija z novicami in informativnimi oddajami.",
      en: "First program of Radio Slovenia with news and informative broadcasts."
    },
    website: "https://radioprvi.rtvslo.si"
  },
  {
    id: 25,
    name: "Radio Študent",
    bias: -0.6,
    reliability: 0.50,
    type: "Radio",
    contentType: "Opinion",
    owner: "ŠOU Ljubljana",
    ownerType: "Non-profit",
    description: {
      sl: "Študentski radio z alternativnimi vsebinami in kritičnim novinarstvom.",
      en: "Student radio with alternative content and critical journalism."
    },
    website: "https://radiostudent.si"
  },
  {
    id: 26,
    name: "Radio Ognjišče",
    bias: 0.4,
    reliability: 0.6,
    type: "Radio",
    contentType: "Mixed",
    owner: "Salezijanci (Katoliška cerkev)",
    ownerType: "Non-profit",
    description: {
      sl: "Katoliški radijski program.",
      en: "Catholic radio program."
    },
    website: "https://radio.ognjisce.si"
  },
  {
    id: 27,
    name: "Radio Center",
    bias: 0.1,
    reliability: 0.55,
    type: "Radio",
    contentType: "Mixed",
    owner: "Radio center d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Komercialni radijski program.",
      en: "Commercial radio program."
    },
    website: "https://radiocenter.si"
  },
  // TV channels
  {
    id: 28,
    name: "POP TV",
    bias: 0.1,
    reliability: 0.58,
    type: "TV",
    contentType: "Mixed",
    owner: "Pro Plus (CME/PPF Group)",
    ownerType: "Foreign",
    description: {
      sl: "Največja komercialna televizija v Sloveniji.",
      en: "Largest commercial television in Slovenia."
    },
    website: "https://24ur.com"
  },
  {
    id: 29,
    name: "Planet TV",
    bias: 0.15,
    reliability: 0.6,
    type: "TV",
    contentType: "Mixed",
    owner: "Telekom Slovenije",
    ownerType: "Private",
    description: {
      sl: "Komercialna televizija v lasti Telekoma Slovenije. Telekom Slovenije je delno v državni lasti, vendar je formalno zasebna družba.",
      en: "Commercial television owned by Telekom Slovenije. Telekom Slovenije is partially state-owned but formally operates as a private company."
    },
    website: "https://siol.net/planet-tv"
  },
  {
    id: 30,
    name: "GTV - Gorenjska TV",
    bias: -0.05,
    reliability: 0.58,
    type: "TV",
    contentType: "News",
    owner: "GTV d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Regionalna televizija za Gorenjsko.",
      en: "Regional television for Gorenjska region."
    },
    website: "https://gtv.si"
  },
  // Web portals
  {
    id: 31,
    name: "Časoris",
    bias: -0.3,
    reliability: 0.65,
    type: "Web",
    contentType: "News",
    owner: "SLOGI (Slovenska ljudska izobraževalna družba)",
    ownerType: "Non-profit",
    description: {
      sl: "Spletni portal za otroke in mladino z novicami in izobraževalnimi vsebinami.",
      en: "Web portal for children and youth with news and educational content."
    },
    website: "https://casoris.si"
  },
  {
    id: 32,
    name: "Družina",
    bias: 0.5,
    reliability: 0.48,
    type: "Print/Web",
    contentType: "Opinion",
    owner: "Družina d.o.o. (Katoliška cerkev)",
    ownerType: "Private",
    description: {
      sl: "Katoliški družinski tednik z versko-moralnim poudarkom.",
      en: "Catholic family weekly with religious-moral emphasis."
    },
    website: "https://druzina.si",
    isPolitical: true
  },
  {
    id: 33,
    name: "Monitor",
    bias: -0.1,
    reliability: 0.7,
    type: "Print/Web",
    contentType: "News",
    owner: "Mladinska knjiga",
    ownerType: "Private",
    description: {
      sl: "Računalniška in tehnološka revija.",
      en: "Computer and technology magazine."
    },
    website: "https://monitor.si"
  },
  {
    id: 34,
    name: "Manager",
    bias: 0.25,
    reliability: 0.7,
    type: "Web",
    contentType: "News",
    owner: "Bonnier Group (Švedska)",
    ownerType: "Foreign",
    description: {
      sl: "Portal za poslovne novice in menedžment.",
      en: "Business news and management portal."
    },
    website: "https://manager.finance.si"
  },
  // Additional online media
  {
    id: 35,
    name: "24KUL.si",
    bias: -0.15,
    reliability: 0.55,
    type: "Web",
    contentType: "Mixed",
    owner: "Kulturni portal (samostojni)",
    ownerType: "Private",
    description: {
      sl: "Kulturni in zabavni spletni portal.",
      en: "Cultural and entertainment web portal."
    },
    website: "https://24kul.si"
  },
  {
    id: 36,
    name: "Časnik",
    bias: 0.55,
    reliability: 0.48,
    type: "Web",
    contentType: "Opinion",
    owner: "Skupina konservativnih avtorjev",
    ownerType: "Private",
    description: {
      sl: "Konservativni spletni medij.",
      en: "Conservative online media."
    },
    website: "https://casnik.si"
  },
  {
    id: 37,
    name: "Info360",
    bias: 0.05,
    reliability: 0.55,
    type: "Web",
    contentType: "Mixed",
    owner: "Info360 d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Novičarski spletni portal.",
      en: "News web portal."
    },
    website: "https://info360.si"
  },
  {
    id: 38,
    name: "Informer.si",
    bias: 0.5,
    reliability: 0.35,
    type: "Web",
    contentType: "Mixed",
    owner: "Informer Media Group (Srbija)",
    ownerType: "Foreign",
    description: {
      sl: "Tabloidni spletni medij.",
      en: "Tabloid web media."
    },
    website: "https://informer.si"
  },
  {
    id: 39,
    name: "Insajder",
    bias: -0.3,
    reliability: 0.68,
    type: "Web",
    contentType: "News",
    owner: "Ekipa novinarjev (neodvisno)",
    ownerType: "Private",
    description: {
      sl: "Investigativni spletni medij.",
      en: "Investigative web media."
    },
    website: "https://insajder.com"
  },
  {
    id: 40,
    name: "Kvarkadabra",
    bias: -0.1,
    reliability: 0.75,
    type: "Web",
    contentType: "News",
    owner: "Prostovoljci (znanstvena skupnost)",
    ownerType: "Non-profit",
    description: {
      sl: "Znanstveno-popularni portal.",
      en: "Popular science portal."
    },
    website: "https://kvarkadabra.net"
  },
  {
    id: 41,
    name: "Ljubljanec",
    bias: -0.1,
    reliability: 0.55,
    type: "Web",
    contentType: "News",
    owner: "Lokalni novičarski portal",
    ownerType: "Private",
    description: {
      sl: "Lokalne novice iz Ljubljane.",
      en: "Local news from Ljubljana."
    },
    website: "https://ljubljanec.si"
  },
  {
    id: 42,
    name: "Politikis",
    bias: 0.6,
    reliability: 0.35,
    type: "Web",
    contentType: "Opinion",
    owner: "Vinko Vasle",
    ownerType: "Private",
    description: {
      sl: "Desničarski politični portal.",
      en: "Right-wing political portal."
    },
    website: "https://politikis.si"
  },
  {
    id: 43,
    name: "Portal Plus",
    bias: 0.5,
    reliability: 0.4,
    type: "Web",
    contentType: "Opinion",
    owner: "Skupina novinarjev",
    ownerType: "Private",
    description: {
      sl: "Konservativni spletni portal.",
      en: "Conservative web portal."
    },
    website: "https://portalplus.si"
  },
  {
    id: 44,
    name: "Rockline",
    bias: -0.2,
    reliability: 0.6,
    type: "Web",
    contentType: "Mixed",
    owner: "Rockline.si (glasbeni portal)",
    ownerType: "Private",
    description: {
      sl: "Glasbeni in kulturni portal.",
      en: "Music and culture portal."
    },
    website: "https://rockline.si"
  },
  {
    id: 45,
    name: "Slovenec",
    bias: 0.65,
    reliability: 0.35,
    type: "Web",
    contentType: "Opinion",
    owner: "Konservativna skupnost",
    ownerType: "Private",
    description: {
      sl: "Konservativni nacionalistični portal.",
      en: "Conservative nationalist portal."
    },
    website: "https://slovenec.net"
  },
  {
    id: 46,
    name: "Spletni časopis",
    bias: 0.15,
    reliability: 0.5,
    type: "Web",
    contentType: "Mixed",
    owner: "Neodvisni avtorji",
    ownerType: "Private",
    description: {
      sl: "Splošni spletni medij.",
      en: "General web media."
    },
    website: "https://spletnicasopis.si"
  },
  {
    id: 47,
    name: "Svet24",
    bias: 0.7,
    reliability: 0.35,
    type: "Web",
    contentType: "Opinion",
    owner: "Nova obzorja d.o.o. (SDS-povezano)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Desničarski novičarski portal povezan z Nova24TV.",
      en: "Right-wing news portal associated with Nova24TV."
    },
    website: "https://svet24.si"
  },
  {
    id: 48,
    name: "Telex.si",
    bias: 0.1,
    reliability: 0.5,
    type: "Web",
    contentType: "Mixed",
    owner: "Telex mediji d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Spletni novičarski portal.",
      en: "Online news portal."
    },
    website: "https://telex.si"
  },
  {
    id: 49,
    name: "Zanima.me",
    bias: 0.05,
    reliability: 0.55,
    type: "Web",
    contentType: "Mixed",
    owner: "Zanima.me d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Portal za zanimivosti in novice.",
      en: "Portal for curiosities and news."
    },
    website: "https://zanima.me"
  },
  {
    id: 50,
    name: "ŽVPL",
    bias: -0.4,
    reliability: 0.55,
    type: "Web",
    contentType: "Opinion",
    owner: "Mladinska knjiga",
    ownerType: "Non-profit",
    description: {
      sl: "Kulturni in družbeni portal za Ljubljano in Primorsko.",
      en: "Cultural and social portal for Ljubljana and Primorska."
    },
    website: "https://zvpl.si"
  },
  // More regional radios
  {
    id: 51,
    name: "Radio Aktual",
    bias: 0.05,
    reliability: 0.55,
    type: "Radio",
    contentType: "Mixed",
    owner: "Radio Aktual d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Komercialni radijski program.",
      en: "Commercial radio program."
    },
    website: "https://radioaktual.si"
  },
  {
    id: 52,
    name: "Radio Antena",
    bias: 0.1,
    reliability: 0.55,
    type: "Radio",
    contentType: "Mixed",
    owner: "Radio Antena d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Komercialni radijski program.",
      en: "Commercial radio program."
    },
    website: "https://radioantena.si"
  },
  {
    id: 53,
    name: "Radio Capris",
    bias: -0.05,
    reliability: 0.55,
    type: "Radio",
    contentType: "Mixed",
    owner: "Radio Capris d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Obalni radijski program iz Kopra.",
      en: "Coastal radio program from Koper."
    },
    website: "https://radiocapris.si"
  },
  {
    id: 54,
    name: "Radio City Ljubljana",
    bias: -0.1,
    reliability: 0.55,
    type: "Radio",
    contentType: "Mixed",
    owner: "Radio City d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Mestni radijski program iz Ljubljane.",
      en: "City radio program from Ljubljana."
    },
    website: "https://radiocity.si"
  },
  {
    id: 55,
    name: "Radio Hit",
    bias: 0.05,
    reliability: 0.55,
    type: "Radio",
    contentType: "Mixed",
    owner: "Radio HIT d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Popularni radijski program z glasbo.",
      en: "Popular radio program with music."
    },
    website: "https://radiohit.si"
  },
  {
    id: 56,
    name: "Radio Maribor",
    bias: -0.05,
    reliability: 0.75,
    type: "Radio",
    contentType: "News",
    owner: "RTV Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Regionalni program RTV Slovenija za Štajersko.",
      en: "Regional RTV Slovenia program for Styria."
    },
    website: "https://radiomaribor.rtvslo.si"
  },
  {
    id: 57,
    name: "Radio Koper",
    bias: -0.05,
    reliability: 0.75,
    type: "Radio",
    contentType: "News",
    owner: "RTV Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Regionalni program RTV Slovenija za Primorsko.",
      en: "Regional RTV Slovenia program for Primorska."
    },
    website: "https://radiokoper.rtvslo.si"
  },
  // More online media
  {
    id: 58,
    name: "Topnews",
    bias: 0.4,
    reliability: 0.4,
    type: "Web",
    contentType: "Mixed",
    owner: "Topnews mediji d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Novičarski portal z mešano vsebino.",
      en: "News portal with mixed content."
    },
    website: "https://topnews.si"
  },
  {
    id: 59,
    name: "Zurnal24",
    bias: 0.1,
    reliability: 0.5,
    type: "Web",
    contentType: "Mixed",
    owner: "Skupina Delo",
    ownerType: "Private",
    description: {
      sl: "Brezplačni dnevnik in spletni portal.",
      en: "Free daily and web portal."
    },
    website: "https://zurnal24.si"
  },
  {
    id: 60,
    name: "Metropolitan",
    bias: -0.1,
    reliability: 0.6,
    type: "Web",
    contentType: "Mixed",
    owner: "Metropolitan Media d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Urbani lifestyle portal.",
      en: "Urban lifestyle portal."
    },
    website: "https://metropolitan.si"
  },
  // TV regional
  {
    id: 61,
    name: "TV Maribor",
    bias: -0.05,
    reliability: 0.75,
    type: "TV",
    contentType: "News",
    owner: "RTV Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Regionalni TV center RTV Slovenija v Mariboru.",
      en: "Regional TV center of RTV Slovenia in Maribor."
    },
    website: "https://rtvslo.si"
  },
  {
    id: 62,
    name: "TV Koper-Capodistria",
    bias: -0.05,
    reliability: 0.75,
    type: "TV",
    contentType: "News",
    owner: "RTV Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Regionalni TV center RTV Slovenija v Kopru.",
      en: "Regional TV center of RTV Slovenia in Koper."
    },
    website: "https://rtvslo.si"
  },
  // Additional specialized media
  {
    id: 63,
    name: "Delo in dom",
    bias: 0.1,
    reliability: 0.6,
    type: "Print/Web",
    contentType: "News",
    owner: "Kmečki glas (Kmetijsko gozdarska zbornica)",
    ownerType: "Non-profit",
    description: {
      sl: "Tednik za podeželje in kmetijstvo.",
      en: "Weekly for rural areas and agriculture."
    },
    website: "https://deloindom.si"
  },
  {
    id: 64,
    name: "Ekipa",
    bias: 0.15,
    reliability: 0.6,
    type: "Print/Web",
    contentType: "News",
    owner: "Ekipa SN d.o.o.",
    ownerType: "Private",
    description: {
      sl: "Športni dnevnik.",
      en: "Sports daily."
    },
    website: "https://ekipa.svet24.si"
  },
  {
    id: 65,
    name: "Jana",
    bias: 0.1,
    reliability: 0.5,
    type: "Print/Web",
    contentType: "Mixed",
    owner: "Adria Media Ljubljana",
    ownerType: "Foreign",
    description: {
      sl: "Ženski tednik.",
      en: "Women's weekly."
    },
    website: "https://jana.si"
  },
  {
    id: 66,
    name: "Lady",
    bias: 0.1,
    reliability: 0.5,
    type: "Print/Web",
    contentType: "Mixed",
    owner: "Adria Media Ljubljana",
    ownerType: "Foreign",
    description: {
      sl: "Ženski tednik.",
      en: "Women's weekly."
    },
    website: "https://lady.si"
  },
  {
    id: 67,
    name: "Obrazi",
    bias: 0.1,
    reliability: 0.5,
    type: "Print/Web",
    contentType: "Mixed",
    owner: "Adria Media Ljubljana",
    ownerType: "Foreign",
    description: {
      sl: "Revija o slavnih osebnostih.",
      en: "Celebrity magazine."
    },
    website: "https://obrazi.si"
  },
  {
    id: 68,
    name: "Ars Vivendi",
    bias: -0.1,
    reliability: 0.65,
    type: "Radio",
    contentType: "Mixed",
    owner: "RTV Slovenija",
    ownerType: "State-owned",
    description: {
      sl: "Kulturni program RTV Slovenija.",
      en: "Cultural program of RTV Slovenia."
    },
    website: "https://rtvslo.si"
  },

  {
    id: 109,
    name: "e-Koroška",
    bias: 0.8,
    reliability: 0.20,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://e-koroska.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 110,
    name: "Moja Dolenjska",
    bias: 0.8,
    reliability: 0.21,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://moja-dolenjska.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 111,
    name: "Moje Posavje",
    bias: 0.8,
    reliability: 0.22,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://mojeposavje.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 112,
    name: "Moje Podravje",
    bias: 0.8,
    reliability: 0.23,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://mojepodravje.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 113,
    name: "GO Portal",
    bias: 0.8,
    reliability: 0.21,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Novičarski portal s desničarsko usmerjenostjo, del SDS medijske mreže.",
      en: "News portal with right-wing orientation, part of SDS media network."
    },
    website: "https://go-portal.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 114,
    name: "e-Maribor",
    bias: 0.8,
    reliability: 0.22,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://e-maribor.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 115,
    name: "Primorska24",
    bias: 0.8,
    reliability: 0.21,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://primorska24.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 116,
    name: "Pomurske Novice",
    bias: 0.8,
    reliability: 0.20,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://pomurske-novice.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 117,
    name: "Naše Zasavje",
    bias: 0.8,
    reliability: 0.23,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://nase-zasavje.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 118,
    name: "Gorenjski Utrip",
    bias: 0.8,
    reliability: 0.21,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://gorenjski-utrip.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 119,
    name: "Portal-OS",
    bias: 0.8,
    reliability: 0.22,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://portal-os.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 120,
    name: "Saša Novice",
    bias: 0.8,
    reliability: 0.20,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://sasa-novice.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 121,
    name: "Spodnje Podravje",
    bias: 0.8,
    reliability: 0.23,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://spodnjepodravje.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 122,
    name: "Celje Glasnik",
    bias: 0.8,
    reliability: 0.21,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://celjskiglasnik.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 123,
    name: "Utrip Ljubljane",
    bias: 0.8,
    reliability: 0.22,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://utrip-ljubljane.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 124,
    name: "Notranjska",
    bias: 0.8,
    reliability: 0.20,
    type: "Web",
    contentType: "Opinion",
    owner: "SDS-povezano (hobotnica)",
    ownerType: "Private-Tajkun",
    description: {
      sl: "Del mreže lokalnih spletnih portalov, ki jih je dokumentirala organizacija Pod črto. Portali delijo vsebine, uredniško linijo in lastniško strukturo, povezano s stranko SDS. Kljub regionalnemu imenu pokrivajo pretežno strankarsko politiko.",
      en: "Part of a network of local web portals documented by the fact-checking organization Pod črto. These portals share content, editorial direction, and an ownership structure linked to the SDS party. Despite regional branding, they primarily cover party politics."
    },
    website: "https://notranjska.si",
    isPolitical: true,
    network: "SDS media network"
  },
  {
    id: 125,
    name: "nova24tv.si",
    bias: 0.85,
    reliability: 0.25,
    type: "Web",
    contentType: "Opinion",
    owner: "Madžarski vlagatelji (povezani z Orbánom)",
    ownerType: "Foreign",
    description: {
      sl: "Spletni portal povezan z Nova24TV kanalom. Objavlja desničarske članke in politično usmerjeno vsebino.",
      en: "Web portal associated with Nova24TV channel. Publishes right-wing articles and politically oriented content."
    },
    website: "https://nova24tv.si",
    isPolitical: true,
    relatedMediaIds: [7]
  },
]

export function getBiasLabel(bias: number, lang: "sl" | "en" = "sl"): string {
  const labels = {
    sl: {
      left: "Levo",
      centerLeft: "Levo-sredina",
      center: "Sredina",
      centerRight: "Desno-sredina",
      right: "Desno"
    },
    en: {
      left: "Left",
      centerLeft: "Center-Left",
      center: "Center",
      centerRight: "Center-Right",
      right: "Right"
    }
  }
  
  if (bias <= -0.5) return labels[lang].left
  if (bias < -0.15) return labels[lang].centerLeft
  if (bias <= 0.15) return labels[lang].center
  if (bias < 0.5) return labels[lang].centerRight
  return labels[lang].right
}

export function getReliabilityLabel(reliability: number, lang: "sl" | "en" = "sl"): string {
  const labels = {
    sl: {
      high: "Visoka",
      medium: "Srednja",
      low: "Nizka",
      veryLow: "Zelo nizka"
    },
    en: {
      high: "High",
      medium: "Medium",
      low: "Low",
      veryLow: "Very Low"
    }
  }
  
  if (reliability >= 0.75) return labels[lang].high
  if (reliability >= 0.55) return labels[lang].medium
  if (reliability >= 0.35) return labels[lang].low
  return labels[lang].veryLow
}

export function getBiasColor(bias: number): string {
  if (bias <= -0.5) return "bg-blue-600 text-white"
  if (bias < -0.15) return "bg-blue-400 text-white"
  if (bias <= 0.15) return "bg-slate-500 text-white"
  if (bias < 0.5) return "bg-red-400 text-white"
  return "bg-red-600 text-white"
}

export function getReliabilityColor(reliability: number): string {
  if (reliability >= 0.75) return "text-emerald-600"
  if (reliability >= 0.55) return "text-amber-600"
  if (reliability >= 0.35) return "text-orange-600"
  return "text-red-600"
}
