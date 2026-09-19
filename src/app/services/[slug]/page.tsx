import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { Container, Eyebrow, PrimaryLink, Reveal } from "@/components/ui";
import { services } from "@/lib/data";
import { serviceDetails } from "@/lib/serviceDetails";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) return {};
  return {
    title: service.title,
    description: `${service.title} by Smeatonian BC. ${detail.tagline}`,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Header />
      <main>
        <PageHero
          image={service.image}
          eyebrow="Our services"
          title={service.title}
          subtitle={detail.tagline}
        >
          <div className="mt-8">
            <PrimaryLink href="/contact">Request a Quote</PrimaryLink>
          </div>
        </PageHero>

        <section className="bg-ink py-16 md:py-20">
          <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
                {service.title}
              </h2>
              {detail.overview.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-[16px] leading-relaxed text-paper/70">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-paper/10 bg-charcoal p-6 sm:p-8">
                <h3 className="font-display text-[20px] font-semibold text-paper">What&apos;s included</h3>
                <ul className="mt-6 flex flex-col gap-5">
                  {detail.included.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <div>
                        <p className="font-display text-[16px] font-semibold text-paper">{item.title}</p>
                        <p className="mt-0.5 text-[14px] leading-relaxed text-paper/65">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>

        <Faq title={`${service.title} FAQs`} items={detail.faqs} />

        <section className="bg-ink py-16 md:py-20">
          <Container>
            <Reveal className="flex flex-col items-center text-center">
              <Eyebrow>More from us</Eyebrow>
              <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
                Explore Our Other Services
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={other.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-paper/10 bg-charcoal p-5 transition-colors hover:border-gold/50"
                >
                  <span className="font-display text-[16px] font-semibold text-paper transition-colors group-hover:text-gold">
                    {other.title}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
              >
                View All Services
              </Link>
            </div>
          </Container>
        </section>

        <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
          <Container className="text-center">
            <Reveal>
              <h2 className="balance text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
                Ready to talk about {service.title.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                Tell us about your project and our team will get back to you.
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
