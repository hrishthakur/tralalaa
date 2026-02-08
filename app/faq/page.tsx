import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site';

/* ================= METADATA ================= */

export const metadata = {
  title: `FAQs | ${SITE_CONFIG.name}`,
  description:
    'Frequently asked questions about remote work stays, long-term bookings, Wi-Fi, workspaces, and workcation-friendly accommodation.',
};

/* ================= PAGE ================= */

export default function FAQPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Help & Support
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-light leading-tight">
              Frequently asked questions
            </h1>

            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Everything you need to know about staying with us for remote work,
              long-term bookings, and workcation-friendly living.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* ================= FAQ CONTENT ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card>
            <CardContent className="p-6 md:p-10">
              <Accordion type="single" collapsible className="space-y-2">
                <FAQItem
                  value="item-1"
                  question={`What is ${SITE_CONFIG.name}?`}
                  answer={`${SITE_CONFIG.name} is a curated platform offering work-friendly stays in mountain and nature-led destinations. Our properties are designed specifically for remote professionals who need reliable internet, comfortable living spaces, and a calm environment to work from.`}
                />

                <FAQItem
                  value="item-2"
                  question="Who are these stays ideal for?"
                  answer="Our stays are best suited for remote employees, founders, freelancers, and digital nomads who plan to work during their stay. If you’re looking for a quiet, work-ready environment rather than a short-term tourist stay, you’ll feel right at home."
                />

                <FAQItem
                  value="item-3"
                  question="Is the internet reliable for work calls and meetings?"
                  answer="Yes. Reliable internet connectivity is a core requirement for every property we list. While speeds may vary by location, all stays are vetted for stability suitable for video calls, daily work, and professional use."
                />

                <FAQItem
                  value="item-4"
                  question="Can I book for long-term stays?"
                  answer="Absolutely. Many of our guests stay for several weeks or months. Long-term stays often come with better pricing and are encouraged, especially for those looking to settle into a productive routine."
                />

                <FAQItem
                  value="item-5"
                  question="Do I need to make a payment while booking?"
                  answer="No. Submitting a booking request does not require any upfront payment. Once availability is confirmed by the host, payment details and next steps will be shared with you."
                />

                <FAQItem
                  value="item-6"
                  question="Are these stays suitable for vacations or parties?"
                  answer="Not typically. Our properties are curated for calm, focused living and working. They are not designed for parties, large gatherings, or high-noise activities."
                />

                <FAQItem
                  value="item-7"
                  question="What kind of amenities can I expect?"
                  answer="Most stays include a dedicated workspace or work-friendly setup, power backup, comfortable bedding, functional kitchens, and basic daily amenities. Exact amenities vary by property and are clearly listed on each page."
                />

                <FAQItem
                  value="item-8"
                  question="Can I work full-time during my stay?"
                  answer="Yes. Many of our guests work full-time while staying with us. The environment, internet reliability, and overall setup are designed to support daily professional routines."
                />

                <FAQItem
                  value="item-9"
                  question="What locations do you operate in?"
                  answer="We currently focus on select mountain and nature destinations, primarily in regions suitable for long-term living rather than short tourist visits. Available locations are listed on our website and updated regularly."
                />

                <FAQItem
                  value="item-10"
                  question="How quickly will I hear back after submitting a booking request?"
                  answer="We usually respond within 24 hours. Our team works closely with hosts to confirm availability and ensure the stay meets your work requirements."
                />

                <FAQItem
                  value="item-11"
                  question="Can I speak to someone before booking?"
                  answer="Yes. If you have specific questions or requirements, you can reach out to us via the Contact page. We’re happy to help you decide if a stay is the right fit."
                />
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-muted">
            <CardContent className="p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-medium">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  If you’re unsure whether a stay is right for you or have
                  specific work requirements, our team is happy to help.
                </p>
              </div>

              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-lg bg-primary px-6 py-3
                  text-sm font-medium text-primary-foreground
                  transition hover:opacity-90
                "
              >
                Contact us
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

/* ================= SUB ================= */

function FAQItem({
  value,
  question,
  answer,
}: {
  value: string;
  question: string;
  answer: string;
}) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left text-base font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
