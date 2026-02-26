import { Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/content/projects/types";

const myMassageCottage: Project = {
  slug: "my-massage-cottage",
  title: "My Massage Cottage: From New Business to Booked Out",
  seoTitle: "My Massage Cottage Case Study",
  excerpt:
    "Built a fast, professional website with integrated online booking for a new massage therapy business—then stayed on to drive growth through content strategy and performance tracking.",
  seoExcerpt:
    "Built a fast website with integrated online booking for a new massage therapy business — then drove growth through content strategy and optimization.",
  category: "Web + Growth",
  readTime: "4 min read",
  icon: Sparkles,
  image: "/assets/my-massage-cottage-demo.jpg",
  thumbnail: "/assets/mymassagecottage-demo-smaller.PNG",
  publishedDate: "January 15, 2026",
  link: "https://mymassagecottage.com/",
  linkText: "Visit Live Site",
  challenge:
    "A new massage therapy business needed to go from zero online presence to accepting bookings before opening day—without overspending on software that didn't fit their workflow.",
  solution:
    "Researched booking platforms to find the right fit for her budget and business model, built a fast website designed around converting visitors into booked appointments, and now provide ongoing content strategy and site performance monitoring.",
  results: [
    "Ready to accept online bookings from day one",
    "Booking software selected to match her workflow and budget",
    "Fast, mobile-first site that builds trust with new clients",
    "Ongoing content strategy to drive local search traffic",
  ],
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Booking Platform API",
    "Responsive Design",
  ],
  sections: [
    {
      heading: "Picking the Right Tools",
      content:
        "Before writing any code, I researched booking platforms to find one that actually matched how she wanted to run her business. Most developers would just pick the popular option—I evaluated several based on scheduling flexibility, payment processing, client notifications, and cost. The right choice meant she wasn't paying for features she'd never use, and the software worked with her workflow instead of against it.",
    },
    {
      heading: "A Website Built to Book",
      content:
        "The site was designed with one goal: make it effortless for someone to find the business, see what's offered, and book an appointment. It loads fast, looks great on phones (where most of her clients browse), and connects directly to her booking system. Services, pricing, and location are all clear and easy to find—no digging through pages. For a service business, that first impression is everything.",
    },
    {
      heading: "What's Happening Now",
      content:
        "This isn't a build-and-disappear project. I'm actively working with her on content strategy—figuring out what to publish, how to show up in local search results, and tracking how the site is actually performing. We look at where visitors come from, what pages they land on, and where they drop off. The goal is steady, organic growth that keeps her calendar full without relying on ads.",
    },
  ],
};

export default myMassageCottage;
