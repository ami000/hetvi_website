const items = [
  "Cambridge CELTA certified",
  "MA in English Literature",
  "TESOL Plus · Sheridan College, Canada",
  "Business communication for professionals",
  "Taught ESL across two continents",
  "Small classes, big conversations",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/5 bg-ink py-4">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-8"
          >
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-8 text-sm font-medium tracking-wide text-cream/90"
              >
                {item}
                <span className="text-blush-deep">✿</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
