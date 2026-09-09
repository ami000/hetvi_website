import Reveal from "./Reveal";

const stats = [
  { value: "CELTA", label: "University of Cambridge" },
  { value: "MA", label: "English Literature" },
  { value: "2", label: "Continents taught on" },
  { value: "20+", label: "Nationalities in my classes" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-blush/40 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-butter opacity-60 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="script-eyebrow mb-3 text-3xl text-rose">
                a little about me
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                A trainer, a painter,
                <br />
                a builder of{" "}
                <span className="script-accent text-rose">confidence.</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-ink/5 ${
                      i % 2 === 1 ? "translate-y-3" : ""
                    }`}
                  >
                    <p className="font-display text-3xl font-semibold text-terracotta-deep">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink-soft">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <Reveal>
              <p>
                I fell in love with the English language twice — first as a
                student of literature, and again in a classroom in Ontario,
                Canada, watching adults from twenty different countries find the
                words to restart their lives.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Trained by the{" "}
                <strong className="font-semibold text-ink">
                  University of Cambridge (CELTA)
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-ink">
                  Sheridan College (TESOL Plus)
                </strong>
                , I&apos;ve taught English to newcomers, professionals and
                refugees — people for whom language wasn&apos;t an academic
                exercise but the key to a job interview, a doctor&apos;s
                appointment, a first friend in a new country.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Outside the classroom I paint, grow a small jungle of plants,
                and bring that same artist&apos;s patience to my teaching:
                every learner is a work in progress, and progress is beautiful.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <blockquote className="rounded-3xl border-l-4 border-terracotta bg-white/70 p-6 font-display text-xl italic leading-relaxed text-ink shadow-sm">
                “Fluency isn&apos;t about perfect grammar. It&apos;s about the
                courage to speak — and a classroom kind enough to let you.”
                <footer className="script-eyebrow mt-4 text-right text-3xl not-italic text-terracotta-deep">
                  — Hetvi
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
