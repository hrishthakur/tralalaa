import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Remote Work Stays",
  description:
    "Get in touch with Remote Work Stays. Reach us via email or phone for bookings, partnerships, or general enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ================= INTRO ================= */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Contact
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-light leading-tight">
              Get in touch
            </h1>

            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Questions about a stay, partnerships, or something else?
              We’re happy to help and usually respond within a day.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* ================= CONTACT METHODS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* EMAIL CARD */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-xl font-medium">
                    Email us
                  </h2>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground max-w-md">
                  For booking enquiries, general questions, or support,
                  reach out to us via email.
                </p>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">
                      Bookings & support
                    </p>
                    <a
                      href="mailto:pthakur3320@gmail.com"
                      className="font-medium hover:underline"
                    >
                      pthakur3320@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-muted-foreground">
                      Partnerships
                    </p>
                    <a
                      href="mailto:partners@remoteworkstays.com"
                      className="font-medium hover:underline"
                    >
                      partners@remoteworkstays.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PHONE CARD */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-xl font-medium">
                    Call us
                  </h2>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground max-w-md">
                  Prefer to speak directly? You can reach us on the numbers
                  below during business hours.
                </p>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">
                      Primary contact
                    </p>
                    <a
                      href="tel:+919882131002"
                      className="font-medium hover:underline"
                    >
                      +91 98821 31002
                    </a>
                  </div>

                  <div>
                    <p className="text-muted-foreground">
                      Alternate contact
                    </p>
                    <a
                      href="tel:+91YYYYYYYYYY"
                      className="font-medium hover:underline"
                    >
                      +91 YYYYY YYYYY
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= FOOT NOTE ================= */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-muted">
            <CardContent className="p-6 md:p-8">
              <p className="text-sm text-muted-foreground max-w-3xl">
                We typically respond to emails within 24 hours.
                For urgent booking-related matters, calling us is the
                fastest way to connect.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
