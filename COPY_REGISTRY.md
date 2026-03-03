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

| Section         | Headline                                                |
| --------------- | ------------------------------------------------------- |
| Hero            | Websites built **to outperform.**                       |
| Pain Points     | Your competitors made **this easy.**                    |
| Solutions       | How you take the **lead.**                              |
| Web Development | Ranks higher. Loads faster. Converts more.              |
| Growth Strategy | A great site is just the foundation.                    |
| Automation      | Automate what slows you down.                           |
| About           | One person. **The whole picture.**                      |
| CTA             | **Your competition** isn't waiting. Neither should you. |

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

---

## CTA Button Text

Each entry is the exact button label and where it appears. Reusing the same CTA text across pages is intentional only if it's the _same action in the same context_. Different pages should vary their CTA language.

| CTA Text                  | Page                      | Notes                        |
| ------------------------- | ------------------------- | ---------------------------- |
| Book a Free Strategy Call | Homepage hero             | Primary homepage conversion  |
| See Selected Work         | Homepage hero             | Secondary / scroll link      |
| Start a Conversation      | Homepage bottom CTA       | Softer close after full page |
| See What You'd Save       | Automation hero           | Service page primary         |
| Get a Free Site Review    | Web Development hero      | Service page primary         |
| Get a Free Consultation   | Growth Strategy hero      | Service page primary         |
| Map Out Your Savings      | Automation final CTA      | Service page close           |
| Get Your Free Plan        | Web Dev final CTA         | Service page close           |
| Start a Conversation      | Growth Strategy final CTA | Service page close           |
| Explore web development   | Homepage solutions        | Service cross-link           |
| Explore growth strategy   | Homepage solutions        | Service cross-link           |
| Explore automation        | Homepage solutions        | Service cross-link           |
| Send Message              | Contact form              | Form submit                  |

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
| "untouched after launch"                  | PainPoints.tsx                      | **Consolidated** — was 2×, now 1× in PainPoints               |
| "built to [verb] from day one"            | growth-strategy/FinalCTA.tsx        | **Consolidated** — was 2×, now 1× (headline only)             |
| "repetitive work"                         | Automation.tsx, automation/Hero.tsx | Acceptable — same service, different pages                    |
| "what's slowing you down"                 | automation/FinalCTA.tsx             | **Consolidated** — was 2×, now 1× (form placeholder reworded) |
| "paying customers"                        | WebDevelopment.tsx                  | Removed — replaced with "pick up the phone"                   |
| "your competition"                        | CTA.tsx, Solutions/index.tsx        | Acceptable — close proximity on same page, tracks             |
| "within 24 hours"                         | contact/page.tsx, ContactForm.tsx   | **Reduced** — was 5×, now 2× (header + form success)          |
| "no pressure"                             | contact/page.tsx                    | **Reduced** — was 3×, now 1× (header only)                    |

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

---

## Structural Patterns to Vary

These aren't word-for-word duplicates but _skeleton reuse_ — same sentence structure, swapped nouns.

| Pattern                                                                    | Where it appears                                 | Status       |
| -------------------------------------------------------------------------- | ------------------------------------------------ | ------------ |
| "[Built/Designed] to [verb] from [day one / the first click]"              | growth-strategy FinalCTA (headline only)         | **Resolved** |
| "I don't [walk away / build and walk away] [after launch / until…]"        | About.tsx only                                   | **Resolved** |
| "A [website/site] that [sits/goes] untouched after launch [loses/drops]"   | PainPoints only                                  | **Resolved** |
| FinalCTA: dark card → H2 with accent → body → CTA button → two cross-links | All 3 service pages (same skeleton, varied copy) | Acceptable   |
| Service Hero: grid → H1 with gradient → body → CTA button                  | All 3 service pages (same skeleton, varied CTAs) | Acceptable   |
