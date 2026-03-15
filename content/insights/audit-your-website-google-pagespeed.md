---
title: "How to Audit Your Own Website with Google PageSpeed Insights"
excerpt: "PageSpeed Insights is free, takes 30 seconds, and breaks down how your site performs. Here's how to read the report and what you can fix yourself."
date: "2026-03-14"
category: "Web Performance"
readTime: "6 min read"
relatedSlugs:
  - google-eeat-what-business-owners-should-know
  - local-seo-basics-central-valley
---

Google built a free tool called [PageSpeed Insights](https://pagespeed.web.dev/) that scores your website on performance, accessibility, best practices, and SEO. Drop in your URL, hit Analyze, and you get a full report in about 30 seconds.

It's a developer tool, but the results are readable enough that anyone can get something useful out of it. This walks through what the scores mean and where a non-developer can make real improvements.

<figure>
  <img src="/assets/articles/pagespeed-loudbark.PNG" alt="Google PageSpeed Insights report for loudbark.dev showing performance, accessibility, best practices, and SEO scores" />
  <figcaption>What a PageSpeed report looks like. This is the one for my own site.</figcaption>
</figure>

## Performance: start with the mobile tab

You'll see two tabs: Mobile and Desktop. Look at mobile first.

[Google uses mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing), so it evaluates the mobile version of your site when deciding where you rank. A desktop score of 95 doesn't help if your mobile score is 40.

For most business sites, mobile performance in the 70s or above is solid. Below 50, there's real room to improve. But any jump matters. Going from 35 to 55 is a noticeable difference for people loading your site on their phones.

### Why speed matters

[Google's research](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/) found that 53% of mobile visitors leave a site that takes longer than 3 seconds to load. Half your traffic, gone before they see anything.

The people who do stick around on a fast site are more likely to call, fill out a form, or buy something. And Google has used page speed as a ranking factor [since 2018](https://developers.google.com/search/blog/2018/01/using-page-speed-in-mobile-search). So a slow site loses visitors *and* makes it harder for new ones to find you.

### FCP and LCP: what's actually slow

PageSpeed shows a handful of timing metrics. Two are worth knowing.

**First Contentful Paint (FCP)** is when the first thing appears on screen. Some text, a logo, a background color. It's when your visitor knows the site is responding. Slow FCP feels like nothing is happening, and people leave.

**Largest Contentful Paint (LCP)** is when the biggest element finishes loading. Usually your hero image or main heading. This is when the page feels *done*. Google considers LCP under 2.5 seconds good. Over 4 seconds is poor.

If FCP fires fast but LCP is slow, your visitor sees a flash of text and then stares at an empty box while a huge image downloads. That pattern is the most common performance problem on business sites, and it leads to the easiest fix.

### The fix: compress your images

Scroll past the scores and PageSpeed lists specific issues by impact. On most business sites, oversized images are near the top.

A 4MB hero photo from your photographer looks great, but every visitor's phone has to download all 4MB before the page feels loaded. That's usually your slow LCP.

Go to [TinyPNG](https://tinypng.com/), drag your images in, download the compressed versions. It typically cuts file size by 60–80% with no visible quality loss. Swap the originals on your site for the smaller files.

This one change can move a mobile score from the 30s into the 60s. No code required.

## Accessibility

PageSpeed runs a basic accessibility audit too. For a deeper check, [Accessibility Checker](https://www.accessibilitychecker.org/) is a good free companion. But PageSpeed catches two things that show up on almost every business site.

**Missing alt text on images.** Alt text is what displays when an image can't load and what screen readers read aloud for visually impaired visitors. PageSpeed flags images where it's missing. Add a short description of what the image actually shows. Not "IMG_4392.jpg." Something like "Front desk of our Modesto dental office." You're describing the image for someone who can't see it.

**Low-contrast text.** Light gray text on a white background looks clean in a mockup but is genuinely hard to read. PageSpeed points out the specific elements that fail and tells you the current contrast ratio vs. what it should be. Fix: darken the text or lighten the background.

<div role="img" aria-label="Demonstration of text contrast: the failing example shows light gray text on white with a 1.9 to 1 contrast ratio, which is hard to read. The passing example shows dark text on white with a 12.4 to 1 ratio, which is easy to read." style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5em 0;">
  <div aria-hidden="true" style="background: #ffffff; border: 1px solid #E7E5E4; border-radius: 0.75rem; padding: 1.25rem;">
    <span style="display: inline-block; font-size: 0.625rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: #dc2626; margin-bottom: 0.5rem;">✕ Fail</span>
    <p style="color: #c8c5c2; font-size: 1rem; line-height: 1.6; margin: 0;">Most visitors will have a hard time reading this text.</p>
    <span style="display: block; font-size: 0.6875rem; color: #a8a29e; margin-top: 0.75rem;">Contrast ratio: 1.9:1</span>
  </div>
  <div aria-hidden="true" style="background: #ffffff; border: 1px solid #E7E5E4; border-radius: 0.75rem; padding: 1.25rem;">
    <span style="display: inline-block; font-size: 0.625rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: #16a34a; margin-bottom: 0.5rem;">✓ Pass</span>
    <p style="color: #292524; font-size: 1rem; line-height: 1.6; margin: 0;">Most visitors should be able to read this text.</p>
    <span style="display: block; font-size: 0.6875rem; color: #a8a29e; margin-top: 0.75rem;">Contrast ratio: 12.4:1</span>
  </div>
</div>

## SEO: what a 100 actually means

This trips people up. A 100/100 SEO score does *not* mean your SEO is good. It means your site has the basic structural elements for Google to crawl and understand your pages. Title tags, meta descriptions, valid links, crawlable content, legible fonts.

Think building inspection. Passing means the doors open and the address is posted. It doesn't mean anyone wants to walk in.

The work that actually moves rankings — content strategy, backlinks, local signals, domain authority — none of that shows up here. A site can score 100 and still sit on page five. This score confirms the foundation exists. What you build on it is separate.

## What green scores get you

All 100s won't automatically push you up in rankings. But Google wants to serve quality sites to its users, and strong PageSpeed scores are one signal that yours is fast and usable. It improves the experience for visitors who do find you, and those visitors are more likely to convert.

PageSpeed doesn't tell you if your site is good. It tells you if anything is actively working against you. Fix what it flags and you remove friction for your visitors and reasons for Google to rank you lower.
