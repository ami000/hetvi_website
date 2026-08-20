import Reveal from "./Reveal";

const principles = [
  {
    emoji: "🗣️",
    tint: "bg-blush",
    title: "Speaking first, grammar second",
    body: "Language is a skill, not a subject. You'll spend classes talking about your real life and real work — grammar arrives quietly, in context, when you need it.",
  },
  {
    emoji: "🎨",
    tint: "bg-lavender",
    title: "Taught like an art",
    body: "I'm a painter, and it shows in my classes: role-plays, stories, images and play instead of drills. Classes you look forward to are classes you don't quit.",
  },
  {
    emoji: "🤝",
    tint: "bg-butter",
    title: "Small groups, zero judgment",
    body: "Mistakes are the raw material of fluency. I keep classes small so every voice is heard, every error is safe, and shyness melts fast.",
  },
  {
    emoji: "🧭",
    tint: "bg-sage",
    title: "A map for every learner",
    body: "We start with a friendly level check and you leave with a personal plan — clear goals, honest feedback and progress you can actually see.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="float-slower absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-blush opacity-60 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="script-eyebrow mb-3 text-3xl text-terracotta-deep">
                how I teach
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Less textbook.
                <br />
                More <span className="script-accent text-terracotta-deep">you.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                I teach the communicative way, with an artist&apos;s eye:
                real conversations, gentle correction and classes shaped around
                the life you&apos;re building in English.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div
                  className={`h-full rounded-[2rem] p-7 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 ${p.tint} ${
                    i % 2 === 1 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
