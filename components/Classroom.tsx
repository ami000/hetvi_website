import Image from "next/image";
import Reveal from "./Reveal";

export default function Classroom() {
  return (
    <section id="classroom" className="relative overflow-hidden bg-sage/40 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sky opacity-70 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="script-eyebrow mb-3 text-3xl text-plum">
            the classroom
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Twenty countries.
            <br />
            One <span className="script-accent text-plum">conversation.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <figure className="relative mx-auto mt-14 max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-1 rounded-[2.5rem] bg-gradient-to-br from-blush-deep via-butter to-lavender-deep opacity-70"
            />
            <div className="relative -rotate-1 overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20 transition duration-500 hover:rotate-0">
              <Image
                src="/classroom.jpg"
                alt="Hetvi with her intermediate ESL class at Sheridan College — students from many countries posing together"
                width={1600}
                height={1333}
                sizes="(max-width: 1024px) 100vw, 896px"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-6 text-center text-sm font-medium text-ink-soft">
              My intermediate ESL class at Sheridan College, Ontario —
              engineers, nurses, parents and dreamers from every corner of the world.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Everyone belongs",
              body: "My classrooms have held expats, students and refugees rebuilding after war. Whatever brings you to English, you'll be welcome.",
            },
            {
              title: "Everyone speaks",
              body: "No hiding at the back. I keep classes small and conversational — the fastest way to fluency is simply talking, a lot.",
            },
            {
              title: "Everyone grows",
              body: "From first hesitant sentences to job offers and friendships — progress you can feel within weeks, not years.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-ink/5">
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
