import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Say hello",
    body: "Book a free trial class — a relaxed conversation where we meet, and I listen to your English and your goals.",
  },
  {
    n: "02",
    title: "Get your map",
    body: "I send you a personal learning plan: your level today, your target, and the program that will take you there.",
  },
  {
    n: "03",
    title: "Start speaking",
    body: "Join your live classes and watch confidence compound — week after week, conversation after conversation.",
  },
];

export default function Steps() {
  return (
    <section className="bg-lavender/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="script-eyebrow mb-3 text-3xl text-plum">
            getting started
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Three <span className="script-accent text-plum">small</span> steps.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-plum/30 sm:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 150} className="relative">
              <div className="text-center">
                <div className="mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-white font-display text-xl font-semibold text-plum shadow-md ring-1 ring-ink/5">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
