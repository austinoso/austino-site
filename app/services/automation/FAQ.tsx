import FAQAccordion from "@/components/ui/FAQAccordion";

const faqs = [
  {
    q: "I\u2019m not a tech person. Is this going to be complicated for me?",
    a: "Not at all. You won\u2019t touch any code. Once everything\u2019s built, it just runs in the background. If it connects to tools you already use (Calendly, Sheets, email), it\u2019ll feel invisible \u2014 like things just started working better on their own.",
  },
  {
    q: "What if my business processes change?",
    a: "Automations can be adjusted. If you add a new service, change your pricing, or switch tools, I update the workflows to match. Everything\u2019s built to adapt to you, not the other way around.",
  },
  {
    q: "Do you only build custom-coded automations?",
    a: "No. I use whatever gets the job done fastest and works best for your situation \u2014 that might be Zapier, Make, custom scripts, or a combination. The point isn\u2019t the tool. It\u2019s that the problem gets solved and you stop doing it manually.",
  },
  {
    q: "How long does it take to build?",
    a: "Simple automations (like booking \u2192 confirmation \u2192 reminder) can be done in a week. More complex workflows with multiple integrations usually take 2\u20134 weeks. I\u2019ll scope it clearly before we start.",
  },
  {
    q: "What happens if something breaks?",
    a: "I build in error handling and monitoring. If something fails, the system retries automatically and I get notified. If you\u2019re on a growth strategy plan, I\u2019ll fix it before you even know it happened.",
  },
];

export default function FAQ() {
  return (
    <section data-fade>
      <p className="section-label mb-4">Common Questions</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
        Things you might be wondering.
      </h2>
      <FAQAccordion faqs={faqs} idPrefix="auto-faq" />
    </section>
  );
}
