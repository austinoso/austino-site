// ── Stockton-specific overrides for legal pSEO ──
// Angle: "The basics are broken." Most Stockton firms haven't gotten the fundamentals right.
// Data source: 42-firm market scan (38 sites analyzed), 2026.

export const stocktonLegal = {
  headline: "79% of Stockton law firms forgot to put themselves on the map.",

  subtext:
    "The firms ranking in Stockton search results aren't necessarily better. They showed up. They added their address. They built pages for the things their clients search for. That's the whole secret.",

  heroContext:
    "I scanned 42 Stockton-area law firms on the fundamentals that drive local rankings. Of the 38 with websites, 30 have no Google Maps embed on their site. The other basics look about the same.",

  localStat: { value: "79%", label: "of Stockton firm sites have no Google Maps embed" },

  problemHeading: "What 42 Stockton law firms actually look like online.",
  problemSubtext:
    "These aren't advanced tactics. They're the basics Google checks before it'll show you in local results.",

  problemCards: [
    {
      stat: "79%",
      statLabel: "no Google Maps embed",
      heading: "No map, no local results",
      body: "79% of Stockton firms don't have a Google Maps embed. Your competitor doesn't need to be great at SEO. They just need a map.",
      source: { label: "loudbark.dev · 42-firm scan", href: "/insights/stockton-law-firm-websites" },
    },
    {
      stat: "21%",
      statLabel: "missing their own contact info",
      heading: "One in five can't list their address",
      body: "Name, address, phone number. One in five Stockton firms don't have it in a format Google can read. Without it, Google can't confirm you exist where you say you do.",
      source: { label: "loudbark.dev · 42-firm scan", href: "/insights/stockton-law-firm-websites" },
    },
    {
      stat: "10%",
      statLabel: "have no website at all",
      heading: "Some firms skipped the website entirely",
      body: "4 out of 42 Stockton firms don't have a site at all. The bar here is: a site that loads and shows your contact info with proper markup. If yours does that, you're already ahead.",
      source: { label: "loudbark.dev · 42-firm scan", href: "/insights/stockton-law-firm-websites" },
    },
  ],

  authoritySubtext:
    "Legal sites get extra scrutiny from Google's quality raters. They fall under YMYL — Your Money or Your Life — the same standard applied to medical and financial sites. In Stockton, most firms fail these basics.",

  authoritySignals: [
    {
      title: "E-E-A-T signals",
      description:
        "Google scores Experience, Expertise, Authoritativeness, and Trustworthiness. For Stockton firms: attorney credentials, bar associations, and structured case history. Most local firm sites don't communicate any of this in a way Google can read.",
    },
    {
      title: "Legal schema markup",
      description:
        "32% of Stockton firms have no structured data at all. Schema is what makes you eligible for star ratings and practice areas in search results. A third of the market is handing you that advantage.",
    },
    {
      title: "YMYL-grade site quality",
      description:
        "Legal sites need faster load times, cleaner code, and stronger security than most businesses. Google penalizes slow, insecure law firm sites harder than it would a restaurant or retail store.",
    },
    {
      title: "Local authority signals",
      description:
        "Google Business Profile integration, consistent contact data, and city-specific content. Most Stockton firms are missing the basics. The local signal gap is wide open.",
    },
  ],

  audit: {
    heading: "The scorecard doesn't lie.",
    subtext:
      "42 firms across Stockton and San Joaquin County. Nine fundamental checks. Here's how the market scored.",
    scanSummary: "42 firms scanned",
    sitesSummary: "38 sites analyzed",
    rows: [
      { label: "No Google Maps embed", pct: "79%", fraction: "30/38", failing: true },
      { label: "No blog or resources", pct: "53%", fraction: "20/38", failing: true },
      { label: "No click-to-call link", pct: "42%", fraction: "16/38", failing: true },
      { label: "5 pages or fewer", pct: "37%", fraction: "14/38", failing: true },
      { label: "No contact form", pct: "34%", fraction: "13/38", failing: true },
      { label: "No schema markup", pct: "32%", fraction: "12/38", failing: true },
      { label: "Missing NAP data", pct: "21%", fraction: "8/38", failing: true },
      { label: "No website at all", pct: "10%", fraction: "4/42", failing: true },
      { label: "Has a website", pct: "90%", fraction: "38/42", failing: false },
    ],
    source: { label: "loudbark.dev · Full breakdown", href: "/insights/stockton-law-firm-websites" },
  },

  additionalFAQ: [
    {
      q: "Where does my Stockton firm actually rank right now?",
      a: "I can show you. I run a market scan of the top firms in your practice area and show you where you fall — ranking position, reviews, site quality, schema status. It takes about a week and it's free. Most firms are surprised by what they see.",
    },
    {
      q: "Is Stockton too competitive for SEO to work?",
      a: "The opposite. Stockton has plenty of firms, but their websites are behind. 79% don't have a maps embed. One in five are missing their own contact info. The firms showing up in search aren't winning on merit. They're winning because the rest haven't shown up yet.",
    },
    {
      q: "Do you cover Lincoln Center, the Miracle Mile, and Lodi?",
      a: "Yes. I work with firms across Stockton and San Joaquin County — downtown, Lincoln Center, the Miracle Mile, and the broader area including Lodi, Lathrop, and Manteca. The local SEO dynamics differ slightly in each, and I account for that.",
    },
  ],
};
