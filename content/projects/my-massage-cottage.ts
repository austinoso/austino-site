import { Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/content/projects/stake-sight";

const myMassageCottage: Project = {
  slug: "my-massage-cottage",
  title: "My Massage Cottage: Digital Foundation for a New Business",
  excerpt:
    "A complete digital launch solution for a new massage therapy business—from booking platform integration to professional website deployment, enabling a stress-free opening day.",
  category: "Business Launch",
  readTime: "6 min read",
  icon: Sparkles,
  image: "/assets/my-massage-cottage-demo.jpg",
  publishedDate: "January 15, 2026",
  link: "http://mymassagecottage.austino.dev/",
  challenge:
    "Launch a new massage therapy business with a complete digital presence that handles bookings, payments, and customer notifications automatically—allowing the owner to focus entirely on their clients instead of managing technology.",
  solution:
    "Researched and integrated a booking platform tailored to the business's workflow, built a fast and professional website optimized for local discovery, and connected all systems to automate scheduling, payments, and customer communications.",
  results: [
    "Professional online presence that builds immediate customer trust",
    "Automated booking and payment system that saves hours of manual work weekly",
    "Seamless scheduling with automatic customer notifications and reminders",
    "Mobile-optimized website for easy booking on any device",
    "Stress-free technical launch that was ready for customers from day one",
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
      heading: "The Launch: Building a Digital Foundation",
      content:
        "When My Massage Cottage was preparing to open, they needed a technical partner to handle their digital launch so they could stay focused on their clients. My goal was to take the stress out of their tech setup and build a professional presence from day one. Every decision was made to ensure the owner could concentrate on what they do best—providing excellent massage therapy—while the technology handled the operational details seamlessly in the background.",
    },
    {
      heading: "Finding the Right Fit",
      content:
        "Instead of just picking common software, I researched and selected a booking platform that matched exactly how they wanted to handle their appointments and payments. This wasn't about choosing the most popular option—it was about finding the system that would work naturally with their business model. I evaluated multiple platforms based on their scheduling flexibility, payment processing capabilities, notification systems, and ease of use for both the business owner and their clients. The right choice meant less friction from the start.",
    },
    {
      heading: "Professional Website",
      content:
        "I built a fast, clean website that makes it easy for local customers to find the business, view services, and book an appointment on any device. The site is optimized for mobile users since many clients book on their phones, and it loads quickly to prevent potential customers from bouncing. Every page is designed with clarity and simplicity in mind—showing service offerings, pricing, and location details without overwhelming visitors. The design establishes trust and professionalism, which is critical for a service-based business where clients need to feel comfortable before their first visit.",
    },
    {
      heading: "Connecting the Systems",
      content:
        "I linked the website and the booking software together so that scheduling, customer notifications, and payments happen automatically without the owner having to lift a finger. When a customer books an appointment through the website, the system handles everything: adds it to the calendar, sends confirmation emails, processes payment, and sends reminders before the appointment. This integration eliminates double-entry work and reduces the risk of missed appointments or payment issues. The owner gets a unified view of their schedule without juggling multiple disconnected tools.",
    },
    {
      heading: "A Complete Online Storefront",
      content:
        "The website serves as a complete digital storefront that establishes trust with new customers immediately. First impressions matter in the wellness industry, and a polished online presence signals professionalism and attention to detail. The site showcases the services offered, provides clear pricing, and makes booking as simple as possible. For local SEO, the site is optimized to appear in search results when potential customers look for massage services in the area. This digital foundation allows My Massage Cottage to compete effectively with established businesses.",
    },
    {
      heading: "Automated Scheduling",
      content:
        "The integrated booking system handles the 'boring stuff' like calendar management and reminders, saving the owner hours of manual work every week. Customers can see real-time availability, book their preferred time slot, and receive automatic confirmations and reminders. The owner doesn't need to manually update calendars, send reminder texts, or chase down payments—the system does it all. This automation reduces no-shows, improves customer satisfaction, and frees up mental bandwidth that the owner can dedicate to their craft instead of administrative tasks.",
    },
    {
      heading: "Stress-Free Launch",
      content:
        "The business opened with a reliable technical setup that was ready for customers from the very first minute. There were no scrambling moments trying to figure out how to take a booking or process a payment—everything just worked. This allowed the owner to focus entirely on delivering excellent service rather than troubleshooting technology. The confidence that comes from having solid systems in place from day one is invaluable for any new business owner. My Massage Cottage launched smoothly and has been able to scale their operations as their client base grows.",
    },
  ],
};

export default myMassageCottage;
