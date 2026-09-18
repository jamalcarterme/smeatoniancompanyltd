import type { Metadata } from "next";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or send your details to Smeatonian BC for a real estate, consultancy or construction quote.",
  alternates: { canonical: "/contact" },
};

const contactFaqs = [
  {
    question: "How quickly will I get a response?",
    answer:
      "We aim to respond to WhatsApp messages and calls within one business day during our working hours.",
  },
  {
    question: "Do I need to visit your office to get a quote?",
    answer:
      "Not necessarily. Many enquiries can be assessed remotely first; a site visit is then scheduled where needed.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Let us know the type of project, your location, and a rough scope or budget — this helps us respond with useful guidance faster.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/consult-boardroom.jpg"
          eyebrow="Get in touch"
          title="Our Contacts"
          subtitle="Reach us by phone, WhatsApp or email — our office is in Victoria Island, Lagos."
        />

        <Contact />
        <ContactForm />

        <div className="bg-ink">
          <Container className="py-16 md:py-20">
            <div className="overflow-hidden rounded-2xl border border-paper/10">
              <iframe
                title="Smeatonian BC location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Container>
        </div>

        <Faq title="Contact FAQs" items={contactFaqs} className="bg-charcoal" />
      </main>
      <Footer />
    </>
  );
}
