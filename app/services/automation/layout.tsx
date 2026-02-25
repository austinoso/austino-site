import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation | austino",
  description:
    "Custom automation that connects your tools, eliminates repetitive tasks, and runs 24/7 — so you can focus on growing your business.",
  alternates: {
    canonical: "https://austino.dev/services/automation",
  },
  openGraph: {
    title: "Automation | austino",
    description:
      "Custom automation that connects your tools, eliminates repetitive tasks, and runs 24/7 — so you can focus on growing your business.",
    url: "https://austino.dev/services/automation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I'm not a tech person. Is this going to be complicated for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. You won't touch any code. Once everything's built, it just runs in the background. If it connects to tools you already use (Calendly, Sheets, email), it'll feel invisible — like things just started working better on their own.",
      },
    },
    {
      "@type": "Question",
      name: "What if my business processes change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automations can be adjusted. If you add a new service, change your pricing, or switch tools, I update the workflows to match. Everything's built to adapt to you, not the other way around.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only build custom-coded automations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. I use whatever gets the job done fastest and works best for your situation — that might be Zapier, Make, custom scripts, or a combination. The point isn't the tool. It's that the problem gets solved and you stop doing it manually.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple automations (like booking → confirmation → reminder) can be done in a week. More complex workflows with multiple integrations usually take 2–4 weeks. I'll scope it clearly before we start.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if something breaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I build in error handling and monitoring. If something fails, the system retries automatically and I get notified. If you're on a growth strategy plan, I'll fix it before you even know it happened.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Automation",
  description:
    "Custom automation that connects your tools, eliminates repetitive tasks, and runs 24/7 — so you can focus on growing your business.",
  provider: {
    "@type": "ProfessionalService",
    name: "austino",
    url: "https://austino.dev",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  url: "https://austino.dev/services/automation",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://austino.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Automation",
      item: "https://austino.dev/services/automation",
    },
  ],
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
