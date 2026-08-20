import Reveal from "./Reveal";

const programs = [
  {
    emoji: "💼",
    tint: "bg-blush",
    name: "Business English & Workplace Communication",
    tag: "Most popular",
    blurb:
      "Speak up in meetings, write emails that get answered, present without panic. Built for working professionals who know English but want to own the room.",
    points: ["Meetings & negotiation", "Email & business writing", "Presentations & small talk"],
  },
  {
    emoji: "☕",
    tint: "bg-sage",
    name: "Everyday English Fluency",
    tag: null,
    blurb:
      "Conversation-first classes that turn hesitant English into natural, flowing speech — for daily life, travel and everything in between.",
    points: ["Speaking-focused sessions", "Real-life scenarios", "Pronunciation & rhythm"],
  },
  {
    emoji: "🌱",
    tint: "bg-butter",
    name: "English for New Beginnings",
    tag: null,
    blurb:
      "For newcomers building a life in a new country — the practical, human English of interviews, appointments, paperwork and first friendships.",
    points: ["Settlement & workplace basics", "Interview preparation", "Patient, judgment-free pace"],
  },
  {
    emoji: "🎯",
    tint: "bg-lavender",
    name: "One-on-One Coaching",
    tag: "Personalised",
    blurb:
      "A private program designed around you — your goals, your gaps, your calendar. Ideal before a big interview, a move abroad or a promotion.",
    points: ["Fully customised plan", "Flexible scheduling", "Rapid, focused progress"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="script-eyebrow mb-3 text-3xl text-moss">
            what I teach
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Pick the English
            <br />
            <span className="script-accent text-moss">your life</span> needs.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            I teach live over Zoom / Google Meet, in small groups only —
            everyone speaks in every class.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120}>
              <article className="group relative flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10">
                {p.tag && (
                  <span className="absolute -top-3 right-8 rounded-full bg-terracotta px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-terracotta/30">
                    {p.tag}
                  </span>
                )}
                <div
                  className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${p.tint} text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {p.emoji}
                </div>
                <h3 className="font-display text-2xl font-semibold leading-snug">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.blurb}</p>
                <ul className="mt-6 space-y-2.5 border-t border-ink/5 pt-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm font-medium">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage text-[10px] text-moss">
                        ✔
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-ink-soft">
            Not sure which fits?{" "}
            <a href="#start" className="font-semibold text-terracotta-deep underline decoration-2 underline-offset-4 hover:text-terracotta">
              Start with a free class
            </a>{" "}
            and I&apos;ll point you to the right one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
