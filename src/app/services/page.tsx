import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import { Container, Eyebrow, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Property development, building construction, detailed construction finishes, building maintenance, construction materials and M&E services from Smeatonian BC.",
  alternates: { canonical: "/services" },
};

const servicesFaqs = [
  {
    question: "Can Smeatonian BC handle a project from start to finish?",
    answer:
      "Yes. We handle everything from consultancy and design through construction, detailed finishes, M&E installation, and ongoing building maintenance.",
  },
  {
    question: "Do you supply construction materials for projects you don't build?",
    answer:
      "Yes, we can source and supply quality construction materials independently of a full building contract.",
  },
  {
    question: "What does your M&E service cover?",
    answer:
      "Our mechanical and electrical (M&E) service covers design, installation and commissioning of electrical and mechanical systems within a building.",
  },
  {
    question: "Do you offer maintenance after a project is completed?",
    answer:
      "Yes. Our building maintenance service keeps completed properties in top condition long after handover.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-ink py-14 md:py-16 text-center">
          <Container>
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h1 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
                Our Services
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                Six core services covering the full lifecycle of a property —
                from consultancy and development to construction, finishing
                and long-term maintenance.
              </p>
            </Reveal>
          </Container>
        </section>
        <ServicesGrid />
        <Process />
        <Faq title="Services FAQs" items={servicesFaqs} className="bg-ink" />
      </main>
      <Footer />
    </>
  );
}
