// ── Modesto-specific overrides for legal pSEO ──
// Angle: "Good firms, thin sites." Strong reputations, hollow web presence.
// Data source: 36-firm market scan (35 sites analyzed), 2026.

export const modestoLegal = {
  headline: "Modesto law firms average 84 Google reviews. A third of their sites have five pages.",

  subtext:
    "People searching for a lawyer in Modesto compare sites, check credentials, and judge fast. The gap between your reputation and your website is where you're losing them.",

  heroContext:
    "I scanned 36 Modesto-area law firms. The reviews are strong — 84 average. But 37% have five pages or fewer, half have no blog, and 40% have no structured data. The reputations were built in courtrooms. The websites haven't caught up.",

  localStat: { value: "84", label: "avg Google reviews, but most sites are paper-thin" },

  problemHeading: "Strong firms. Thin websites.",
  problemSubtext: "Modesto's legal market built trust offline. Online, the story looks different.",

  problemCards: [
    {
      stat: "37%",
      statLabel: "five pages or fewer",
      heading: "Most sites are a homepage and a prayer",
      body: "Over a third of Modesto firm sites have five or fewer pages. No practice area detail, no attorney bios with substance. You can't win searches you haven't built pages for.",
      source: { label: "austino.dev · 36-firm scan", href: "/insights/modesto-law-firm-websites" },
    },
    {
      stat: "51%",
      statLabel: "no blog or resources",
      heading: "Half the market has nothing to publish",
      body: "Half of Modesto firm sites have zero educational content. Google's quality raters look for this on legal sites specifically. The firms that publish rank. The rest get page two.",
      source: { label: "austino.dev · 36-firm scan", href: "/insights/modesto-law-firm-websites" },
    },
    {
      stat: "40%",
      statLabel: "no structured data",
      heading: "Invisible to rich results",
      body: "40% of Modesto firm sites have no Schema markup. With 84 average reviews, the proof is there. The sites just aren't telling Google about it.",
      source: { label: "austino.dev · 36-firm scan", href: "/insights/modesto-law-firm-websites" },
    },
  ],

  authoritySubtext:
    "Legal sites get extra scrutiny from Google. They fall under YMYL — Your Money or Your Life — the same standard as medical and financial content. Modesto firms have the trust. The websites just aren't proving it.",

  authoritySignals: [
    {
      title: "E-E-A-T signals",
      description:
        "Modesto firms have the real-world credentials and the reviews. What's missing is structured web content — practice area pages, detailed bios, published expertise — that translates reputation into rankings.",
    },
    {
      title: "Legal schema markup",
      description:
        "40% have no Schema at all. You've got 84 average reviews. Schema is what makes those visible as star ratings in search results.",
    },
    {
      title: "YMYL content depth",
      description:
        "51% have no blog or resources. On a legal site, that's a quality signal failure. Google wants to see expertise through detailed content. Five pages won't cut it.",
    },
    {
      title: "Local authority signals",
      description:
        "17% are missing contact data, and 63% lack a maps embed. Better than some Valley markets, but still room to own local results outright.",
    },
  ],

  audit: {
    heading: "What 36 Modesto firm sites look like under the hood.",
    subtext:
      "Strong reputations, but the websites tell a different story. I scanned every firm I could find for basic web fundamentals.",
    scanSummary: "36 firms scanned",
    sitesSummary: "35 sites analyzed",
    rows: [
      { label: "No Google Maps embed", pct: "63%", fraction: "22/35", failing: true },
      { label: "No blog or resources", pct: "51%", fraction: "18/35", failing: true },
      { label: "No schema markup", pct: "40%", fraction: "14/35", failing: true },
      { label: "No contact form", pct: "40%", fraction: "14/35", failing: true },
      { label: "5 pages or fewer", pct: "37%", fraction: "13/35", failing: true },
      { label: "No click-to-call link", pct: "20%", fraction: "7/35", failing: true },
      { label: "Missing NAP data", pct: "17%", fraction: "6/35", failing: true },
      { label: "Has a website", pct: "97%", fraction: "35/36", failing: false },
      { label: "Strong review presence", pct: "84 avg", fraction: "35 firms", failing: false },
    ],
    source: { label: "austino.dev · Full breakdown", href: "/insights/modesto-law-firm-websites" },
  },

  additionalFAQ: [
    {
      q: "My firm has great reviews. Why do I need a better website?",
      a: "Reviews prove clients trust you. But Google needs more than reviews to rank you. It needs structured pages for each practice area, schema markup it can read, and content that proves expertise. Your reviews are an asset — a proper site turns that social proof into search rankings.",
    },
    {
      q: "What makes a law firm site 'thin'?",
      a: "Five or fewer pages, no practice area detail, no educational content. 37% of Modesto firm sites fit that description. Google's quality guidelines specifically flag thin content on legal sites. A homepage, about page, and contact form won't rank — no matter how many reviews you have.",
    },
  ],
};
