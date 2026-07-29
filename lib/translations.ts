export type Language = "sl" | "en"

export const translations = {
  sl: {
    // Header
    appName: "Medijski Atlas",
    appSubtitle: "Pregled slovenskega medijskega prostora",
    aboutMethodology: "O metodologiji",
    
    // Hero
    heroTitle: "Raziskujte slovenski medijski prostor",
    heroDescription: "Izobraževalno orodje za medijsko pismenost. Analizirajte politično pristranskost, zanesljivost dejstev in lastniške strukture slovenskih medijev. Kliknite na katerokoli točko za več informacij.",
    
    // Stats
    mediaOutlets: "Medijskih hiš",
    avgReliability: "Povp. zanesljivost",
    distribution: "Porazdelitev",
    
    // Chart
    chartTitle: "Zemljevid pristranskosti in zanesljivosti medijev",
    chartDescription: "Položaj na X-osi prikazuje politično usmerjenost, Y-os prikazuje oceno dejanske zanesljivosti",
    politicalLean: "Politična usmerjenost",
    factualReliability: "Dejanska zanesljivost",
    clickForDetails: "Kliknite za podrobnosti",
    
    // Bias labels
    left: "Levo",
    centerLeft: "Levo-sredina",
    center: "Sredina",
    centerRight: "Desno-sredina",
    right: "Desno",
    
    // Reliability labels
    reliabilityHigh: "Visoka",
    reliabilityMedium: "Srednja",
    reliabilityLow: "Nizka",
    reliabilityVeryLow: "Zelo nizka",
    
    // Filters
    filters: "Filtri",
    reset: "Ponastavi",
    advancedFilters: "Dodatni filtri",
    mediaType: "Vrsta medija",
    ownership: "Lastništvo",
    minReliability: "Min. zanesljivost",
    
    // Media types
    print: "Tisk",
    web: "Splet",
    tv: "TV",
    radio: "Radio",
    printWeb: "Tisk/Splet",
    agency: "Agencija",
    
    // Owner types
    stateOwned: "Državno",
    private: "Zasebno",
    privateTajkun: "Zasebno (tajkunsko)",
    foreign: "Tuje",
    nonProfit: "Neprofitno",
    
    // Content types
    news: "Novice",
    opinion: "Mnenje",
    mixed: "Mešano",
    
    // Top reliable
    mostReliable: "Najbolj zanesljivi",
    topByReliability: "Top 5 po dejanski zanesljivosti",
    
    // All media
    allMediaOutlets: "Vsi mediji",
    grid: "Mreža",
    list: "Seznam",
    searchPlaceholder: "Iskanje medijev...",
    sortBy: "Razvrsti po:",
    name: "Ime",
    bias: "Pristranskost",
    reliability: "Zanesljivost",
    type: "Vrsta",
    owner: "Lastnik",
    content: "Vsebina",
    link: "Povezava",
    showing: "Prikazanih",
    of: "od",
    
    // Modal
    politicalBias: "Politična pristranskost",
    basedOnFactChecking: "zanesljivost na podlagi analize preverjanja dejstev",
    visitWebsite: "Obišči spletno stran",
    podcrtoAnalysis: "Analiza Pod črto",
    
    // Methodology
    methodology: "Metodologija",
    biasTab: "Pristranskost",
    reliabilityTab: "Zanesljivost",
    sourcesTab: "Viri",
    howBiasDetermined: "Kako se določa pristranskost",
    biasExplanation: "Ocene politične pristranskosti temeljijo na analizi uredniških stališč, izbire gostov, okvirjanja zgodb in jezikovnih vzorcev. Ocene segajo od -1 (močno levo) do +1 (močno desno), pri čemer 0 predstavlja nevtralno poročanje. Viri vključujejo akademske raziskave in organizacije za preverjanje dejstev.",
    contentTypeExplanation: "Informativni mediji",
    contentTypeExplanationNews: "Mediji, ki se osredotočajo na poročanje o dejstvih in novicah. Zanesljivost se meri po točnosti podatkov, kakovosti virov in ločevanju novic od mnenj.",
    contentTypeExplanationOpinion: "Mediji ali sekcije s poudarkom na mnenjih, analizi in komentarjih. Zanesljivost se tukaj nanaša na to, kako temeljijo mnenja na realnih ali nerealnih podatkih ter ali avtorji ustrezno razlikujejo med dejstvi in mnenji.",
    contentTypeExplanationMixed: "Mediji s kombinacijo novic in mnenj. Zanesljivost se ocenjuje glede na ločevanje med obema vrstama vsebine.",
    reliabilityScoring: "Razumevanje zanesljivosti",
    reliabilityExplanation: "Zanesljivost ni ista stvar za vse medije. Za faktične medije (novice) se zanesljivost meri po točnosti, kakovosti virov in politiki popravljanja napak. Za mnenjske medije je zanesljivost vezana na to, ali avtorji na resničnih podatkih temeljijo svoje mnenje ali ga podajo kot dejstvo. Višje ocene kažejo na večje upoštevanje novinarskih standardov in poštene argumentacije.",
    dataSources: "Viri podatkov in povezave",
    dataSourcesExplanation: "Informacije so zbrane iz Pod črto, Oštro, akademskih medijskih študij in javnih registrov lastništva. Spodaj so povezave do ključnih virov za nadaljnje branje in preverjanje.",
    transparencyNote: "Opomba o transparentnosti",
    transparencyExplanation: "Ta projekt želi spodbujati medijsko pismenost v Sloveniji. Vse ocene so predmet razlage in se lahko spreminjajo, ko postanejo na voljo novi podatki. Uporabnike spodbujamo, da raziščejo več virov in si oblikujejo lastno informirano mnenje.",
    
    // Footer
    footerText: "Medijski Atlas - Izobraževalno orodje za slovensko medijsko pismenost",
    footerDisclaimer: "Podatki zbrani iz javnih virov. Samo za raziskovalne in izobraževalne namene.",
    
    // Language
    language: "Jezik",
    slovenian: "Slovenščina",
    english: "English",
    
    // International media
    includeInternational: "Vključi tuje medije",
    internationalMedia: "Tuji mediji",
    slovenianMedia: "Slovenski mediji",
    showInternational: "Prikaži tudi tuje medije",
    internationalNote: "Tuji mediji so mednarodni viri za primerjavo in širši kontekst.",
    
    // Political media
    politicalMediaOnly: "Samo politični mediji",
    politicalNote: "Prikaži samo medije, ki pokrivajo politične novice.",
    
    // Resources section
    resources: "Viri in povezave",
    resourcesDescription: "Uporabne povezave za novinarje in medijsko pismenost",
    legislation: "Zakonodaja",
    legislationDescription: "Zakoni in predpisi s področja medijev",
    organizations: "Organizacije",
    organizationsDescription: "Novinarske in medijske organizacije",
    mediaTools: "Orodja za analizo",
    mediaToolsDescription: "Platforme in baze podatkov za analizo bias-a in zanesljivosti medijev",
    viewAll: "Prikaži vse",
  },
  en: {
    // Header
    appName: "Media Atlas",
    appSubtitle: "Slovenian Media Monitor",
    aboutMethodology: "About Methodology",
    
    // Hero
    heroTitle: "Explore the Slovenian Media Landscape",
    heroDescription: "An educational tool for media literacy. Analyze political bias, factual reliability, and ownership structures of Slovenian media outlets. Click on any data point to learn more.",
    
    // Stats
    mediaOutlets: "Media Outlets",
    avgReliability: "Avg. Reliability",
    distribution: "Distribution",
    
    // Chart
    chartTitle: "Media Bias & Reliability Map",
    chartDescription: "Position on X-axis shows political lean, Y-axis shows factual reliability score",
    politicalLean: "Political Lean",
    factualReliability: "Factual Reliability",
    clickForDetails: "Click for details",
    
    // Bias labels
    left: "Left",
    centerLeft: "Center-Left",
    center: "Center",
    centerRight: "Center-Right",
    right: "Right",
    
    // Reliability labels
    reliabilityHigh: "High",
    reliabilityMedium: "Medium",
    reliabilityLow: "Low",
    reliabilityVeryLow: "Very Low",
    
    // Filters
    filters: "Filters",
    reset: "Reset",
    advancedFilters: "Advanced Filters",
    mediaType: "Media Type",
    ownership: "Ownership",
    minReliability: "Min. Reliability",
    
    // Media types
    print: "Print",
    web: "Web",
    tv: "TV",
    radio: "Radio",
    printWeb: "Print/Web",
    agency: "Agency",
    
    // Owner types
    stateOwned: "State-owned",
    private: "Private",
    privateTajkun: "Private (oligarch)",
    foreign: "Foreign",
    nonProfit: "Non-profit",
    
    // Content types
    news: "News",
    opinion: "Opinion",
    mixed: "Mixed",
    
    // Top reliable
    mostReliable: "Most Reliable",
    topByReliability: "Top 5 by factual reliability",
    
    // All media
    allMediaOutlets: "All Media Outlets",
    grid: "Grid",
    list: "List",
    searchPlaceholder: "Search media outlets...",
    sortBy: "Sort by:",
    name: "Name",
    bias: "Bias",
    reliability: "Reliability",
    type: "Type",
    owner: "Owner",
    content: "Content",
    link: "Link",
    showing: "Showing",
    of: "of",
    
    // Modal
    politicalBias: "Political Bias",
    basedOnFactChecking: "reliability based on fact-checking analysis",
    visitWebsite: "Visit Website",
    podcrtoAnalysis: "Pod črto Analysis",
    
    // Methodology
    methodology: "Methodology",
    biasTab: "Bias",
    reliabilityTab: "Reliability",
    sourcesTab: "Sources",
    howBiasDetermined: "How Bias is Determined",
    biasExplanation: "Political bias scores are based on analysis of editorial positions, guest selection, story framing, and language patterns. Scores range from -1 (strong left) to +1 (strong right), with 0 representing centrist coverage. Sources include academic research and fact-checking organizations.",
    contentTypeExplanation: "Understanding Content Types",
    contentTypeExplanationNews: "News outlets focus on factual reporting. Reliability here measures accuracy, source quality, and clear separation of news from opinion.",
    contentTypeExplanationOpinion: "Opinion-focused outlets emphasize analysis and commentary. Reliability here measures whether opinions are based on real or false data, and whether authors properly distinguish facts from opinions.",
    contentTypeExplanationMixed: "Mixed outlets combine news and opinion. Reliability is evaluated on how clearly they separate these types of content.",
    reliabilityScoring: "Understanding Reliability",
    reliabilityExplanation: "Reliability means different things for different outlets. For factual media (news), reliability is measured by accuracy, source quality, and error correction policies. For opinion media, reliability relates to whether authors base opinions on real data or present opinions as facts. Higher scores indicate stronger adherence to journalistic standards and fair argumentation.",
    dataSources: "Data Sources & Resources",
    dataSourcesExplanation: "Information is compiled from Pod črto, Oštro, academic media studies, and public ownership registries. Below are key resources for further reading and verification.",
    transparencyNote: "Transparency Note",
    transparencyExplanation: "This project aims to promote media literacy in Slovenia. All assessments are subject to interpretation and may evolve as more data becomes available. We encourage users to explore multiple sources and form their own informed opinions.",
    
    // Footer
    footerText: "Media Atlas - An educational tool for Slovenian media literacy",
    footerDisclaimer: "Data compiled from public sources. For research and educational purposes only.",
    
    // Language
    language: "Language",
    slovenian: "Slovenščina",
    english: "English",
    
    // International media
    includeInternational: "Include international media",
    internationalMedia: "International Media",
    slovenianMedia: "Slovenian Media",
    showInternational: "Show international media",
    internationalNote: "International media are included for comparison and broader context.",
    
    // Political media
    politicalMediaOnly: "Political media only",
    politicalNote: "Show only media outlets covering political news.",
    
    // Resources section
    resources: "Resources & Links",
    resourcesDescription: "Useful links for journalists and media literacy",
    legislation: "Legislation",
    legislationDescription: "Media laws and regulations",
    organizations: "Organizations",
    organizationsDescription: "Journalism and media organizations",
    mediaTools: "Analysis Tools",
    mediaToolsDescription: "Platforms and databases to analyze media bias and reliability",
    viewAll: "View all",
  },
} as const

export type TranslationKey = keyof typeof translations.en

export function useTranslation(lang: Language) {
  return translations[lang]
}
