import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ConsultGallery from "@/components/ConsultGallery";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "A look at residential, commercial and estate projects completed and under construction by Smeatonian BC across Lagos.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero
          image="/images/construction-crane-highrise.jpg"
          eyebrow="Our projects"
          title="From Ideas to Reality"
          subtitle="Completed developments and active construction sites, built by our own team of engineers and technicians."
        />
        <Gallery />
        <ConsultGallery />
      </main>
      <Footer />
    </>
  );
}
