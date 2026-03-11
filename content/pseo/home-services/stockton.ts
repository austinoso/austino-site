// ── Stockton-specific overrides for home-services pSEO ──
// Data source: 115-business scan across 5 service categories, 2026.

export const stocktonHomeServices = {
  headline: "71% of Stockton contractor sites have no map.",

  heroContext:
    "I scanned 115 home service businesses across Stockton — AC repair, plumbing, roofing, electricians, landscaping. A third don't have a website. Of the 79 with sites, 71% have no maps embed and half are missing a contact form. The work is here year-round. Whether anyone finds you depends on the basics.",

  localStat: {
    value: "31%",
    label: "of Stockton contractors have no website at all",
  },

  problemHeading: "A website. A form. A map. Most are missing at least one.",
  problemSubtext:
    "115 businesses across five trades. The gaps aren't complicated. They're the kind of thing you'd assume every contractor already has.",

  problemCards: [
    {
      stat: "31%",
      statLabel: "no website at all",
      heading: "A third of the market has nothing.",
      body: "36 out of 115 Stockton contractors don't have a website. When a homeowner's AC dies in July, those 36 businesses don't exist.",
      source: { label: "austino.dev · 115-business scan", href: "/contact" },
    },
    {
      stat: "49%",
      statLabel: "no contact form on their site",
      heading: "Half the sites can't take a lead",
      body: "Of the 79 Stockton contractors with websites, half don't have a contact form and 29% lack click-to-call. A homeowner with a burst pipe is calling the next result.",
      source: { label: "austino.dev · 115-business scan", href: "/contact" },
    },
    {
      stat: "71%",
      statLabel: "no Google Maps embed",
      heading: "No map. No 'near me' results.",
      body: "71% of Stockton contractor sites have no maps embed. Google uses that signal for local results. 'Plumber near me' goes to the handful that bothered.",
      source: { label: "austino.dev · 115-business scan", href: "/contact" },
    },
  ],

  additionalFAQ: [
    {
      q: "Is Stockton a good market for home service SEO?",
      a: "Very. Stockton has 330K residents, aging housing stock, and extreme seasonal weather driving HVAC and roofing demand year-round. A third of contractors here don't have a website. The ones investing in search now will own this market.",
    },
  ],
};
