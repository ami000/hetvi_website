import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* watercolor blobs */}
      <div
        aria-hidden="true"
        className="float-slower absolute -left-32 -top-24 h-96 w-96 rounded-full bg-blush opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="float-slow absolute -right-24 top-16 h-80 w-80 rounded-full bg-lavender opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="float-slower absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-sage opacity-60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-soft backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-moss" />
              Cambridge CELTA-certified · Live online classes
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Find your{" "}
              <em className="script-accent not-italic text-terracotta-deep">
                voice
              </em>
              <br />
              in English.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Hi, I&apos;m Hetvi — a Cambridge-certified English teacher.
              I run live, small-group classes for adults — business
              communication, everyday fluency and one-on-one coaching — and
              I&apos;ve helped learners from over twenty countries speak with
              confidence.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#start"
                className="rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-terracotta/30 transition hover:-translate-y-0.5 hover:bg-terracotta-deep"
              >
                Book a free trial class
              </a>
              <a
                href="#programs"
                className="rounded-full border-2 border-ink/15 bg-white/50 px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink/30 hover:bg-white"
              >
                Explore programs
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-8 text-sm text-ink-soft">
              <span className="font-semibold text-ink">Your first class is free.</span>{" "}
              No forms, no pressure — just a conversation with me.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="blob-morph absolute -inset-4 bg-gradient-to-br from-blush-deep via-butter to-sage-deep opacity-80"
            />
            <div className="blob-morph relative aspect-[4/5] overflow-hidden">
              <Image
                src="/hetvi.jpg"
                alt="Hetvi Dhimar, English language instructor"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="wiggle absolute -left-6 -top-5 rounded-2xl bg-white px-4 py-2.5 shadow-lg ring-1 ring-ink/5 sm:-left-10">
              <p className="text-xs font-semibold text-ink-soft">🎓 CELTA</p>
              <p className="text-sm font-bold">University of Cambridge</p>
            </div>

            <div className="float-slow absolute -bottom-6 -right-4 rounded-2xl bg-white px-4 py-2.5 shadow-lg ring-1 ring-ink/5 sm:-right-8">
              <p className="text-xs font-semibold text-ink-soft">🌍 Students from</p>
              <p className="text-sm font-bold">20+ countries</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
