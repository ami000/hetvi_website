import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-cream py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <a href="#top" className="script-eyebrow text-4xl text-ink transition-colors hover:text-terracotta-deep">
          Hetvi Dhimar
          <span className="text-terracotta">.</span>
        </a>

        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          Live online English classes for adults — business communication,
          everyday fluency and one-on-one coaching.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href={`mailto:${site.email}`}
            className="text-ink-soft transition-colors hover:text-ink"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a href="#programs" className="text-ink-soft transition-colors hover:text-ink">
            Programs
          </a>
        </div>

        <p className="text-xs text-ink-soft/70">
          © {new Date().getFullYear()} Hetvi Dhimar · Made with 🎨 and a lot of
          conversation
        </p>
      </div>
    </footer>
  );
}
