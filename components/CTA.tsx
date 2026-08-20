import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTA() {
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Free trial class"
  )}&body=${encodeURIComponent(
    "Hi Hetvi,\n\nI'd love to book a free trial class. A little about me and my English goals:\n\n"
  )}`;

  const waHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        "Hi Hetvi! I'd love to book a free trial English class."
      )}`
    : null;

  return (
    <section id="start" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush via-butter to-sage p-10 shadow-xl shadow-ink/10 ring-1 ring-ink/5 sm:p-16">
            <div
              aria-hidden="true"
              className="float-slow absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/40 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="float-slower absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-lavender/60 blur-2xl"
            />

            <div className="relative text-center">
              <p className="mb-4 inline-block rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-terracotta-deep">
                ✦ Founding cohort now enrolling
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Your English story
                <br />
                starts with one{" "}
                <span className="script-accent text-terracotta-deep">hello.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                Be among the first students of my new online language studio.
                I keep seats deliberately few — small classes are the whole
                point.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={mailHref}
                  className="w-full rounded-full bg-ink px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-ink/25 transition hover:-translate-y-0.5 hover:bg-ink/90 sm:w-auto"
                >
                  ✉️ &nbsp;Book your free class
                </a>
                {waHref && (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-full border-2 border-ink/20 bg-white/70 px-8 py-4 text-base font-semibold text-ink transition hover:border-ink/40 hover:bg-white sm:w-auto"
                  >
                    💬 &nbsp;WhatsApp me
                  </a>
                )}
              </div>

              <p className="mt-6 text-sm font-medium text-ink/60">
                {site.email} · I reply within a day
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
