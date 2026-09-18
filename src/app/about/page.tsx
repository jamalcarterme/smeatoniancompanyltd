import type { Metadata } from "next";
import About from "@/components/About";
import CompanyStory from "@/components/CompanyStory";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MissionGrid from "@/components/MissionGrid";
import PageHero from "@/components/PageHero";
import WhoWeServe from "@/components/WhoWeServe";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Smeatonian BC is an independent organization providing real estate, consultancy and construction services in civil and structural engineering, based in Victoria Island, Lagos since 2019.",
  alternates: { canonical: "/about" },
};

const aboutFaqs = [
  {
    question: "What services does Smeatonian BC offer?",
    answer:
      "We offer property development, building construction, detailed construction finishes, building maintenance, construction materials supply, and mechanical & electrical (M&E) services.",
  },
  {
    question: "Where is Smeatonian BC located?",
    answer:
      "Our office is in Eti-Osa I Local Government Area, Victoria Island, Lagos. We take on residential, commercial and estate projects across Lagos and beyond.",
  },
  {
    question: "How long has Smeatonian BC been operating?",
    answer:
      "Smeatonian Building Construction Ltd was founded in 2019 and has since delivered residential, commercial and consultancy projects across Lagos.",
  },
  {
    question: "Do you provide consultancy without a full construction contract?",
    answer:
      "Yes. Our civil and structural engineering consultancy is available independently, for feasibility studies, structural reviews, and project planning.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/construction-workers.jpg"
          eyebrow="Smeatonian BC"
          title="About Us"
          subtitle="Real estate, consultancy and construction in civil and structural engineering — building across Lagos since 2019."
        />
        <About />
        <CompanyStory />
        <MissionGrid />
        <WhoWeServe />
        <Faq title="About Smeatonian BC" items={aboutFaqs} className="bg-ink" />
      </main>
      <Footer />
    </>
  );
}
