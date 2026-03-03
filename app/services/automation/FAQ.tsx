import FAQAccordion from "@/components/ui/FAQAccordion";

const faqs = [
  {
    q: "I\u2019m not a tech person. Is this going to be complicated for me?",
    a: "Not at all. You won\u2019t touch any code. Once everything\u2019s built, it just runs in the background. If it connects to tools you already use (Calendly, Sheets, email), it\u2019ll feel invisible. Like things just started working better on their own.",
  },
  {
    q: "What\u2019s the range of what you can build?",
    a: "Anything from a simple sync between two spreadsheets, to a full custom dashboard that replaces four different tools. Some clients need one integration that saves 30 minutes a day. Others need an entire internal platform. It all comes down to what your business actually needs.",
  },
  {
    q: "What if my business processes change?",
    a: "Everything I build can be adjusted. If you add a new service, change your pricing, or switch tools, I update the workflows to match. It\u2019s built to adapt to you, not the other way around.",
  },
  {
    q: "Do you use Zapier, Make, or only custom code?",
    a: "Whatever gets the job done best. Sometimes that\u2019s a no-code platform like Zapier. Sometimes it\u2019s a custom script. Often it\u2019s a combination. The point isn\u2019t the tool \u2014 it\u2019s that the problem gets solved and stays solved.",
  },
  {
    q: "How long does it take to build?",
    a: "It depends entirely on scope. A small automation like a booking-to-confirmation pipeline can be done in about a week. Dashboards and custom tools usually take a few months. Larger systems take longer. I\u2019ll give you a clear timeline once I understand what you need.",
  },
  {
    q: "What happens if something breaks?",
    a: "I build in error handling and monitoring. If something fails, the system retries automatically and I get notified. Clients on my Growth Strategy service get ongoing monitoring included, so I\u2019ll often fix issues before you even know they happened.",
  },
];

export default function FAQ() {
  return (
    <section data-fade>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-display text-warm-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
        Before you ask.
      </h2>
      <FAQAccordion faqs={faqs} idPrefix="auto-faq" />
    </section>
  );
}
