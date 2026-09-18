import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import ConsultGallery from "@/components/ConsultGallery";
import Testimonials from "@/components/Testimonials";
import { Container, Reveal } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeShowcase />
        <About />
        <WhyChooseUs />
        <Gallery />
        <ConsultGallery />
        <Testimonials />

        <section className="bg-charcoal py-16 md:py-20 border-t border-paper/10">
          <Container className="text-center">
            <Reveal>
              <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
                Ready to build with us?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                Let Smeatonian BC bring your real estate, consultancy or construction project to life.
              </p>
            </Reveal>
            <Reveal variant="pop" delay={0.2}>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
              >
                Request a Quote
              </a>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
