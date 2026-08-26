import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";

const FAQS = [
  { q: "Is parking available at the venue?", a: "Yes — the Hyatt Regency Baytown Houston offers free on-site parking for all attendees." },
  { q: "Is the venue accessible?", a: "The conference facility is fully ADA accessible, including elevators, restrooms, and seating accommodations. Please reach out if you need additional support." },
  { q: "How do I get tickets?", a: "Registration is open. Choose Get Priority Tickets anywhere on this site to register securely through Zeffy." },
  { q: "How can my company sponsor?", a: "Choose a sponsorship tier above and complete payment securely through Zeffy, or contact Holly directly for custom partnership agreements." },
  { q: "What is the refund policy?", a: "Tickets are non-refundable but fully transferable. Please contact Holly to transfer your registration to another attendee." },
  { q: "Are there hotel accommodations nearby?", a: "Yes — the Hyatt Regency Baytown Houston and several nearby hotels offer accommodations. A discounted room block will be announced closer to the event." },
  { q: "Are children welcome?", a: "Bridge 2026 is designed primarily for adult attendees. Please contact us regarding family accommodations and accessibility support." },
  { q: "Will meals be provided?", a: "Yes — registration includes refreshments and a full lunch. Dietary accommodations are available upon request." },
];

export const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-background">
    <div className="container-tight max-w-3xl">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Frequently Asked <span className="text-gold">Questions</span></>}
      />
      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-border last:border-b-0"
          >
            <AccordionTrigger className="text-left font-display text-lg md:text-xl text-[hsl(var(--navy))] hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
