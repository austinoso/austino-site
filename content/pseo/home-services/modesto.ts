// ── Modesto-specific overrides for home-services pSEO ──
// Data source: 124-business scan across 5 service categories, 2026.

export const modestoHomeServices = {
  headline: "Over half of Modesto contractor sites don't have a contact form.",

  heroContext:
    "124 home service businesses across Modesto. 30% don't have a website. Of the 87 with sites, over half have no contact form and 68% have no maps embed. Bay Area transplants search online first. Most Modesto contractors aren't ready for that.",

  localStat: {
    value: "68%",
    label: "of Modesto contractor sites have no maps embed",
  },

  problemHeading: "The web presence doesn't match the market.",
  problemSubtext:
    "AC repair. Plumbing. Roofing. Electrical. Landscaping. 124 businesses across Modesto. The demand has grown. The sites haven't.",

  problemCards: [
    {
      stat: "30%",
      statLabel: "no website at all",
      heading: "37 businesses. Zero web presence.",
      body: "30% of Modesto contractors don't have a website. In a market serving over 210K residents, 37 businesses are invisible to anyone who searches before they call.",
      source: { label: "loudbark.dev · 124-business scan", href: "/contact" },
    },
    {
      stat: "53%",
      statLabel: "no contact form",
      heading: "The form is missing. So is the call.",
      body: "53% of sites don't have a contact form. 29% have no click-to-call. The homeowner is ready to book and there's no obvious way to do it.",
      source: { label: "loudbark.dev · 124-business scan", href: "/contact" },
    },
    {
      stat: "68%",
      statLabel: "no Google Maps embed",
      heading: "68% forgot the map.",
      body: "68% of Modesto contractor sites have no maps embed. Google treats that as a location signal for 'near me' searches. No map, no map pack.",
      source: { label: "loudbark.dev · 124-business scan", href: "/contact" },
    },
  ],

  additionalFAQ: [
    {
      q: "Do you work with contractors across all of Modesto?",
      a: "Yes — I work with home service businesses across Modesto, including downtown, the Village One area, Sylvan, and the newer developments along Dale Road. I also serve nearby Ceres, Turlock, and Riverbank. Same county, same search patterns.",
    },
  ],
};
