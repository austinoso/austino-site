# Copy Registry

The single source of truth for what copy is already in use across the site. **The copy-review agent must read this file before writing and update it after finalizing new copy.**

Purpose: prevent phrase reuse across pages, track CTA labels, and catch repetition before it ships.

---

## How This File Works

- **Before writing:** Scan the relevant sections below. If a phrase, structure, or CTA you're about to write already exists elsewhere, pick a different angle.
- **After writing:** Add any new headlines, signature phrases, or CTAs to the appropriate section.
- **Quarterly cleanup:** Skim the registry against the actual codebase. Remove entries for copy that's been deleted.

---

## Headlines & Subheadlines

Each headline is "claimed" by its page. No other page should use the same line or a minor rewording of it.

### Homepage (`app/page.tsx`, `components/`)

| Section         | Headline                                             |
| --------------- | ---------------------------------------------------- |
| Hero            | Websites built **to outperform.**                    |
| Pain Points     | Your competitors made **this easy.**                 |
| Pain Point 2    | Nobody in your market is doing the work to **rank.** |
| Solutions       | How you take the **lead.**                           |
| Web Development | Ranks higher. Loads faster. Converts more.           |
| Growth Strategy | A great site is just the foundation.                 |
| Automation      | Automate what slows you down.                        |
| About           | One person. **The whole picture.**                   |
| CTA             | It starts with **20 minutes.**                       |

### Automation Service (`app/services/automation/`)

| Section       | Headline                         |
| ------------- | -------------------------------- |
| Hero          | The $37,000 spreadsheet.         |
| Real Examples | This is what you'd actually get. |
| The Math      | Build once. Runs forever.        |
| Final CTA     | What's eating **your time?**     |

### Web Development Service (`app/services/web-development/`)

| Section   | Headline                                                     |
| --------- | ------------------------------------------------------------ |
| Hero      | Your website could be closing **more deals.**                |
| Final CTA | Let's build something that **actually brings in customers.** |

### Growth Strategy Service (`app/services/growth-strategy/`)

| Section       | Headline                                                        |
| ------------- | --------------------------------------------------------------- |
| Hero          | Launched is just **the starting line.**                         |
| SoundFamiliar | Your website launched. **Then nothing happened.**               |
| TheReality    | Your next customer is already searching. **Can they find you?** |
| LongTerm      | A site that gets **stronger every month.**                      |
| Final CTA     | **Built to grow** from day one.                                 |

### Contact (`app/contact/`)

| Section | Headline                     |
| ------- | ---------------------------- |
| Hero    | Tell me about your business. |

### pSEO Legal Template (`content/pseo/legal/shared.ts`)

City-injected via `{city}` placeholder. Per-city overrides replace the shared defaults.

| Section       | Headline                                                          | Override |
| ------------- | ----------------------------------------------------------------- | -------- |
| Hero (shared) | {city} has plenty of law firms. **Google shows three.**           | Fallback |
| Hero (Stockton) | 79% of Stockton law firms forgot to **put themselves on the map.** | Override |
| Hero (Modesto) | Modesto law firms average 84 Google reviews. **A third of their sites have five pages.** | Override |
| The Gap (shared) | Why most {city} law firms **don't rank.**                      | Fallback |
| The Gap (Stockton) | What 20 Stockton law firms **actually look like online.**   | Override |
| The Gap (Modesto) | **Strong firms. Thin websites.**                              | Override |
| Authority     | Google holds law firms to a **higher standard.**                  | Shared   |
| Deliverables  | Built for how people in {city} **find a lawyer.**                 | Shared   |
| Deliverable 1 | A site that's actually yours                                      | Shared   |
| Deliverable 2 | A page for every practice area                                    | Shared   |
| Deliverable 3 | Profiles Google can read                                         | Shared   |
| Deliverable 4 | Maps and local search                                             | Shared   |
| Deliverable 5 | See where leads come from                                         | Shared   |
| FAQ           | Straight answers about law firm websites in **{city}.**           | Shared   |
| Final CTA     | While other {city} firms wait, **yours could rank.**              | Shared   |

### pSEO Home Services Template (`content/pseo/home-services/`)

City-injected via `{city}` placeholder. Per-city overrides replace the shared defaults.

| Section           | Headline                                                                | Override   |
| ----------------- | ----------------------------------------------------------------------- | ---------- |
| Hero (shared)     | When a {city} homeowner's AC dies, your site has **3 seconds.**         | Fallback   |
| Hero (Stockton)   | 71% of Stockton contractor sites **have no map.**                       | Override   |
| Hero (Manteca)    | 43% of Manteca contractors **don't have a website.**                    | Override   |
| Hero (Modesto)    | Over half of Modesto contractor sites **don't have a contact form.**    | Override   |
| Hero (Tracy)      | Tracy doubled in population. **Its contractor websites didn't move.**    | Override   |
| Problem (shared)  | Every slow second costs {city} contractors **real jobs.**               | Fallback   |
| Problem (Stockton)| A website. A form. A map. **Most are missing at least one.**           | Override   |
| Problem (Manteca) | Half of them **don't exist online.**                                    | Override   |
| Problem (Modesto) | The web presence **doesn't match the market.**                          | Override   |
| Problem (Tracy)   | The fastest-growing city. **The thinnest competition.**                 | Override   |
| Problem Card (Stockton 1) | A third of the market **has nothing.**                           | Override   |
| Problem Card (Stockton 2) | Half the sites **can't take a lead**                             | Override   |
| Problem Card (Stockton 3) | No map. **No 'near me' results.**                                | Override   |
| Problem Card (Manteca 1)  | 40 out of 93 **have nothing.**                                   | Override   |
| Problem Card (Manteca 2)  | Good luck **reaching them.**                                     | Override   |
| Problem Card (Manteca 3)  | Over half are **off the map.**                                   | Override   |
| Problem Card (Modesto 1)  | 37 businesses. **Zero web presence.**                            | Override   |
| Problem Card (Modesto 2)  | The form is missing. **So is the call.**                         | Override   |
| Problem Card (Modesto 3)  | 68% **forgot the map.**                                         | Override   |
| Problem Card (Tracy 1)    | No site. **No chance.**                                          | Override   |
| Problem Card (Tracy 2)    | Half the sites **hide the phone number.**                        | Override   |
| Problem Card (Tracy 3)    | The map pack is **wide open.**                                   | Override   |
| Speed Proof       | Your site speed is **your first impression.**                           | Shared     |
| The Math          | What one missed call costs a {city} **contractor.**                     | Shared     |
| Deliverables      | A site built for how {city} **homeowners hire.**                        | Shared     |
| FAQ               | Questions {city} **contractors ask.**                                   | Shared     |
| Final CTA         | Every day your site loads slow, **a {city} competitor gets the call.**  | Shared     |

---

## CTA Button Text

Each entry is the exact button label and where it appears. Reusing the same CTA text across pages is intentional only if it's the _same action in the same context_. Different pages should vary their CTA language.

| CTA Text                  | Page                      | Notes                       |
| ------------------------- | ------------------------- | --------------------------- |
| Book a Free Strategy Call | Homepage hero             | Primary homepage conversion |
| See Selected Work         | Homepage hero             | Secondary / scroll link     |
| Start a Conversation      | Homepage bottom CTA       | Lowkey text-link close      |
| See What You'd Save       | Automation hero           | Service page primary        |
| Get a Free Site Review    | Web Development hero      | Service page primary        |
| Get a Free Consultation   | Growth Strategy hero      | Service page primary        |
| Map Out Your Savings      | Automation final CTA      | Lowkey text-link close      |
| Get Your Free Plan        | Web Dev final CTA         | Lowkey text-link close      |
| Start a Conversation      | Growth Strategy final CTA | Lowkey text-link close      |
| Explore web development   | Homepage solutions        | Service cross-link          |
| Explore growth strategy   | Homepage solutions        | Service cross-link          |
| Explore automation        | Homepage solutions        | Service cross-link          |
| Send Message              | Contact form              | Form submit                 |
| See How You Stack Up      | pSEO Legal hero           | City template primary       |
| See Where You Rank        | pSEO Legal final CTA      | City template close         |

**Resolved:** Hero and FinalCTA button text now varies across service pages.

---

## Signature Phrases & Motifs

Phrases that carry weight or appear more than once. If a phrase is listed here, it's already doing work on one page — don't reuse it elsewhere without a deliberate reason.

| Phrase                                    | Where it lives                      | Status                                                        |
| ----------------------------------------- | ----------------------------------- | ------------------------------------------------------------- |
| "what Google says gets you to page one"   | Hero.tsx (homepage)                 | Homepage hero subtext — core differentiator                   |
| "Google wants from its page one sites"    | growth-strategy/Hero.tsx            | Growth strategy hero subtext                                  |
| "Google rewards with higher rankings"     | OngoingSupport.tsx                  | Homepage solutions — growth strategy description              |
| "This isn't my framework. It's Google's." | growth-strategy/TheReality.tsx      | Source citation + link to Google Helpful Content Guidelines   |
| "That's the strategy"                     | growth-strategy/TheReality.tsx      | Handoff line to deliverables section                          |
| "don't walk away (after launch)"          | About.tsx                           | **Consolidated** — was 3×, now 1× in About blockquote         |
| "Good enough has never been the bar"      | About.tsx                           | About blockquote opener — replaced former cliché              |
| "show up higher on Google"                | WebDevelopment.tsx                  | **Consolidated** — was 2×, now 1× in homepage WebDev          |
| "doing the work to rank"                  | PainPoints.tsx                      | Replaced "untouched after launch" — clearer framing           |
| "built to [verb] from day one"            | growth-strategy/FinalCTA.tsx        | **Consolidated** — was 2×, now 1× (headline only)             |
| "repetitive work"                         | Automation.tsx, automation/Hero.tsx | Acceptable — same service, different pages                    |
| "what's slowing you down"                 | automation/FinalCTA.tsx             | **Consolidated** — was 2×, now 1× (form placeholder reworded) |
| "paying customers"                        | WebDevelopment.tsx                  | Removed — replaced with "pick up the phone"                   |
| "your competition"                        | Solutions/index.tsx                 | Homepage solutions only                                       |
| "within 24 hours"                         | contact/page.tsx, ContactForm.tsx   | **Reduced** — was 5×, now 2× (header + form success)          |
| "no pressure"                             | contact/page.tsx                    | **Reduced** — was 3×, now 1× (header only)                    |
| "Page two is a graveyard"                  | pseo/legal/shared.ts                | Problem card heading — shared fallback                          |
| "Your site has 50 milliseconds"            | pseo/legal/shared.ts                | Problem card heading — shared fallback                          |
| "You own everything"                       | pseo/legal/shared.ts                | FAQ differentiator vs FindLaw/Justia — pSEO legal template     |
| "Google shows three"                       | pseo/legal/shared.ts                | Hero headline hook — shared fallback                            |
| "forgot to put themselves on the map"      | pseo/legal/stockton.ts              | Stockton hero headline — double meaning (maps embed + visibility) |
| "Most sites are a homepage and a prayer"   | pseo/legal/modesto.ts               | Modesto problem card heading                                     |
| "Half the market has nothing to publish"   | pseo/legal/modesto.ts               | Modesto problem card heading                                     |
| "Strong firms. Thin websites."             | pseo/legal/modesto.ts               | Modesto problem section heading                                  |
| "The basics are broken"                    | pseo/legal/stockton.ts              | Stockton override angle / motif                                  |
| "Nine out of ten. Invisible."              | **RETIRED**                                 | Replaced — stat was dubious (page 1–2 math)                      |
| "No map. No 'near me' results."            | pseo/home-services/stockton.ts      | Problem card — maps embed gap                                     |
| "A third of the market has nothing."       | pseo/home-services/stockton.ts      | Problem card — no-website stat (replaced page 1–2 card)           |
| "40 out of 93 have nothing."               | pseo/home-services/manteca.ts       | Problem card — no-website stat                                    |
| "Good luck reaching them."                 | pseo/home-services/manteca.ts       | Problem card — no contact form/click-to-call                      |
| "Over half are off the map."               | pseo/home-services/manteca.ts       | Problem card — maps embed gap (replaced page 1–2 card)            |
| "124 businesses. 15 show up."              | **RETIRED**                                 | Replaced — stat was dubious (page 1–2 math)                      |
| "37 businesses. Zero web presence."        | pseo/home-services/modesto.ts       | Problem card — no-website stat (replaced page 1–2 card)           |
| "The form is missing. So is the call."     | pseo/home-services/modesto.ts       | Problem card — no contact form/click-to-call                      |
| "68% forgot the map."                      | pseo/home-services/modesto.ts       | Problem card — maps embed gap                                     |
| "No site. No chance."                      | pseo/home-services/tracy.ts         | Problem card — no-website stat                                    |
| "94% invisible. That's your opening."      | **RETIRED**                                 | Replaced — stat was dubious (page 1–2 math)                      |
| "The map pack is wide open."               | pseo/home-services/tracy.ts         | Problem card — maps embed gap (replaced page 1–2 card)            |

---

## Phrases to Retire or Rework

Lines that have been flagged as generic, overused in the industry, or AI-sounding. If rewriting a section that contains one of these, replace it with something more specific.

| Phrase                                                 | Problem                                        | Status      |
| ------------------------------------------------------ | ---------------------------------------------- | ----------- |
| "turn more visitors into paying customers"             | Most-used line in web agency marketing         | **Retired** |
| "More leads every month"                               | Vague filler — no specificity                  | **Retired** |
| "keeps improving results month after month"            | Stock outcome language                         | **Retired** |
| "earn trust from the first click and drive more sales" | Two vague value props stacked                  | **Retired** |
| "I know the exact systems that make it work"           | Vague authority claim with no proof            | **Retired** |
| "your problems become mine"                            | Service-provider cliché                        | **Retired** |
| "whether we work together or not"                      | Used on every consulting page on the internet  | **Retired** |
| "One conversation is all it takes"                     | Overused low-friction framing                  | **Retired** |
| "Good enough never sits right with me"                 | Generic freelancer cliché opener               | **Retired** |
| "earns search authority"                               | SEO jargon — audience doesn't use this term    | **Retired** |
| "The kind of work that compounds"                      | Finance jargon as metaphor                     | **Retired** |
| "compounds every month"                                | Finance jargon in heading                      | **Retired** |
| "One person accountable for the whole picture"         | Duplicated About-section claim on service page | **Retired** |
| "This isn't abstract"                                   | Filler opener — The Math subtext               | **Retired** |
| "Honest answer:"                                        | Filler opener — FAQ timeline answer            | **Retired** |
| "Right now, someone in {city} is typing..."             | Dramatic scene-setting — problem card          | **Retired** |
| "building a focused practice around"                    | Odd phrasing for a web developer               | **Retired** |
| "NAP consistency"                                       | SEO jargon — audience doesn't know this term   | **Retired** |
| "Straight answers about [X] websites in {city}"        | Skeleton reuse across legal + home services    | **Retired** (legal keeps it, home services changed) |

---

## Structural Patterns to Vary

These aren't word-for-word duplicates but _skeleton reuse_ — same sentence structure, swapped nouns.

| Pattern                                                                                 | Where it appears                                 | Status       |
| --------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------ |
| "[Built/Designed] to [verb] from [day one / the first click]"                           | growth-strategy FinalCTA (headline only)         | **Resolved** |
| "I don't [walk away / build and walk away] [after launch / until…]"                     | About.tsx only                                   | **Resolved** |
| "A [website/site] that [sits/goes] untouched after launch [loses/drops]"                | PainPoints only                                  | **Resolved** |
| FinalCTA: divider → label → H2 with muted span → body → text-link CTA → two cross-links | All 3 service pages (same skeleton, varied copy) | Acceptable   |
| Service Hero: grid → H1 with gradient → body → CTA button                               | All 3 service pages (same skeleton, varied CTAs) | Acceptable   |

---

## Local Insights (Blog)

### Headlines

| Post slug                          | Headline / Title                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| local-seo-basics-central-valley    | Why Your Business Isn't Showing Up on Google                                      |
| modesto-experience-gap             | Modesto Is Growing. Most Local Business Websites Aren't.                          |
| stockton-law-firm-websites         | 79% of Stockton Law Firms Have No Map on Their Website                            |
| modesto-law-firm-websites          | Modesto Law Firms Have 84 Average Reviews. Their Websites Have 5 Pages.           |
| stockton-contractor-website-audit  | I Scanned 115 Stockton Contractors. Here's What Their Websites Look Like.         |
| manteca-contractor-website-audit   | 43% of Manteca Contractors Don't Have a Website                                   |
| modesto-contractor-website-audit   | I Audited 124 Modesto Contractor Businesses. Most Sites Can't Take a Lead.        |
| tracy-contractor-website-audit     | Tracy Is the Fastest-Growing City in the Valley. Its Contractor Websites Are the Worst. |

### Signature Phrases (Insights)

| Phrase                                                                | Post                            |
| --------------------------------------------------------------------- | ------------------------------- |
| "That's the experience gap"                                           | modesto-experience-gap          |
| "The bar is low. The businesses that clear it first get the traffic." | local-seo-basics-central-valley |
| "One business, four directories, three mismatches."                   | local-seo-basics-central-valley |
| "None of these take more than an hour. All of them move the needle."  | local-seo-basics-central-valley |
| "That's not competition. That's an open field."                       | **RETIRED** (dubious stat)      |
| "They're winning because the rest haven't shown up yet."              | **RETIRED**                     |

### CTAs (Insights)

| CTA Text   | Where                       |
| ---------- | --------------------------- |
| Let's Talk | All post pages (bottom CTA) |

---

### Service Menu (`app/menu/`)

Private page (noindex). Sent to clients directly.

| Section              | Headline / Key Line                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------ |
| Header H1            | Service Menu                                                                                                 |
| Header body          | Three tiers. Pick the one that fits where your business is now — you can always move up.                     |
| Tier 1 title         | Small Business Kickstart                                                                                     |
| Tier 1 tagline       | A real website built by someone who understands search. Not a template you're left to figure out on your own. |
| Tier 1 goal          | Get a clean, professional site that shows up when customers search your business name.                       |
| Tier 2 title         | Standard Growth                                                                                              |
| Tier 2 tagline       | You're past the basics. Now you need to show up for the specific things you do — and rank higher than the other guys. |
| Tier 2 goal          | Rank on Google for the specific services you offer, not just your business name.                             |
| Tier 3 title         | Market Dominator                                                                                             |
| Tier 3 tagline       | You serve multiple cities. This makes sure every one of them finds you first.                                |
| Tier 3 goal          | Show up first in every city you serve. Convert more of the traffic that finds you.                           |
