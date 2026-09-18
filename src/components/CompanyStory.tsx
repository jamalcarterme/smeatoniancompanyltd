import { Container, Reveal } from "./ui";

export default function CompanyStory() {
  return (
    <section className="bg-gradient-to-r from-ink to-charcoal py-16 md:py-20 border-t border-paper/10">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="balance max-w-3xl text-[32px] font-semibold leading-tight text-paper sm:text-[40px]">
            The Smeatonian BC Story
          </h2>
        </Reveal>

        <Reveal variant="fade" delay={0.1} className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-6 text-[16px] leading-relaxed text-paper/75">
            <p>
              Smeatonian Building Construction Ltd was founded in 2019 out of a
              belief that real estate, consultancy and construction should be
              handled under one dependable, engineering-led roof.
            </p>
            <p>
              As an independent organization, we work across the full lifecycle
              of a property — from civil and structural consultancy at the
              planning stage, through property development and building
              construction, to detailed finishes, M&amp;E installation and
              long-term maintenance.
            </p>
            <p>
              Every project, whether a private residence, an estate development
              or a commercial building, is guided by the same principle: sound
              structural engineering, honest consultancy, and construction work
              we would be proud to put our name on.
            </p>
            <p>
              Today, Smeatonian BC is a trusted construction and real estate
              partner in Lagos, with a growing portfolio of completed and
              ongoing projects built by our own team.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
