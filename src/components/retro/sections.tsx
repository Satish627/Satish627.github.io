import type { ReactNode } from "react";
import { ContactForm } from "@/src/components/retro/ContactForm";
import {
  ARROW,
  CLOUD,
  CLOUD_PALETTE,
  DOWNLOAD,
  EYE,
  EYE_IRIS,
  EYE_PALETTE,
  FLAG,
  FLAG_PALETTE,
  INK,
  PLAYER_PALETTE,
  PLAYER_STANDING,
  PixelArt,
  SUN,
  SUN_PALETTE,
  pixelRects,
} from "@/src/components/retro/pixel";
import { CoinCounter } from "@/src/components/retro/scroll";
import { jobs, profile, projects, schools, skillGroups, thesis } from "@/src/content/portfolio";

const NAV = [
  { label: "WORK", href: "#work" },
  { label: "XP", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "SCHOOL", href: "#education" },
];

const RUST_ARROW = { D: "#C2410C" };
const INK_ICON = { D: INK };

export function Hud() {
  return (
    <header className="top-0 z-50 border-b-4 border-ink bg-white sm:sticky">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-2">
        <a href="#top" className="inline-flex min-h-11 items-center font-pixel text-sm no-underline">
          SATISH GURUNG
        </a>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xl tracking-[0.04em]">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center no-underline hover:text-rust max-sm:hidden"
            >
              {item.label}
            </a>
          ))}
          <CoinCounter />
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center border-[3px] border-ink bg-coin px-3.5 no-underline hover:bg-white"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}

function Level({
  id,
  level,
  title,
  last = false,
  children,
}: {
  id: string;
  level: string;
  title: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto max-w-[1120px] px-6 pt-28 ${last ? "pb-28" : ""}`}>
      <div className="mb-9 flex flex-wrap items-center gap-x-5 gap-y-3">
        <span className="bg-ink px-3 py-1.5 text-[21px] tracking-[0.06em] text-white">{level}</span>
        <h2 className="font-pixel text-[clamp(20px,3vw,30px)] leading-[1.3]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <PixelArt rows={CLOUD} palette={CLOUD_PALETTE} scale={8} className="absolute left-[5%] top-10" />
      <PixelArt rows={CLOUD} palette={CLOUD_PALETTE} scale={6} className="absolute right-[6%] top-40" />
      <PixelArt rows={CLOUD} palette={CLOUD_PALETTE} scale={5} className="absolute left-[52%] top-7" />

      <div className="relative mx-auto flex max-w-[1120px] flex-wrap items-end gap-12 px-6 pt-20 sm:pt-24">
        <div className="min-w-0 flex-[999_1_520px]">
          <p className="inline-flex items-center gap-3 border-[3px] border-ink bg-white px-3.5 py-2 text-xl tracking-[0.04em]">
            <span className="size-2.5 animate-blink bg-rust" />
            {profile.badge}
          </p>
          <h1 className="title-outline mt-9 font-pixel text-[clamp(34px,6vw,68px)] leading-[1.2]">
            SATISH
            <br />
            GURUNG
          </h1>
          <p className="mt-8 max-w-[580px] text-[28px] leading-[1.2] sm:text-[35px]">{profile.headline}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
            <a href="#work" className="pixel-button bg-coin">
              <PixelArt rows={ARROW} palette={INK_ICON} scale={2} className="animate-blink" />
              PRESS START
            </a>
            <a href={profile.cv} download className="pixel-button bg-white">
              <PixelArt rows={DOWNLOAD} palette={INK_ICON} scale={2} />
              SAVE CV
            </a>
            {profile.links
              .filter((link) => link.label !== "PHONE")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center text-xl tracking-[0.04em] underline underline-offset-4 hover:text-rust"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>

        <div className="flex flex-[1_1_260px] flex-col items-center">
          <p className="relative mb-7 max-w-60 border-4 border-ink bg-white px-4 py-3 text-[25px] leading-[1.1]">
            {profile.greeting}
            <span
              aria-hidden="true"
              className="absolute -bottom-[10px] left-1/2 -ml-2 size-4 rotate-45 border-b-4 border-r-4 border-ink bg-white"
            />
          </p>
          <PixelArt
            rows={PLAYER_STANDING}
            palette={PLAYER_PALETTE}
            scale={8}
            label="Pixel-art avatar of Satish in sunglasses and a striped shirt"
            className="animate-bob"
          />
          <div aria-hidden="true" className="bricks h-10 w-48 border-4 border-ink" />
        </div>
      </div>

      <div className="relative mx-auto mt-18 max-w-[1120px] px-6">
        <dl className="pixel-card grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 p-6">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xl tracking-[0.04em] text-rust">{stat.label}</dt>
              <dd className="mt-2 text-[25px] leading-[1.1]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <Level id="work" level="LEVEL 1" title="SELECTED WORK">
      <article className="mb-11 flex flex-wrap items-center gap-8 border-4 border-ink bg-ink p-6 text-[#F4F4FF] shadow-[8px_8px_0_var(--color-coin)] sm:p-8">
        <div className="min-w-0 flex-[999_1_460px]">
          <p className="inline-block bg-coin px-3 py-1.5 text-[21px] tracking-[0.06em] text-ink">
            BOSS LEVEL · MASTER&apos;S THESIS
          </p>
          <h3 className="mt-6 font-pixel text-[clamp(22px,3.2vw,34px)] leading-[1.35]">{thesis.title}</h3>
          <p className="mt-4 max-w-[600px] text-[26px] leading-[1.2] text-moon">{thesis.summary}</p>
          <dl className="mt-6 flex flex-wrap gap-3">
            {thesis.stats.map((stat) => (
              <div key={stat.label} className="border-[3px] border-[#F4F4FF] px-3.5 py-2.5">
                <dt className="text-lg tracking-[0.06em] text-haze">{stat.label}</dt>
                <dd className={`mt-1 text-[28px] leading-none ${stat.highlight ? "text-coin" : ""}`}>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={thesis.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2.5 text-[21px] tracking-[0.06em] text-coin underline underline-offset-4 hover:text-white"
          >
            <PixelArt rows={ARROW} palette={{ D: "#FFC93C" }} scale={2} />
            VIEW THESIS REPO
          </a>
        </div>
        <div className="flex flex-[1_1_200px] justify-center">
          <PixelArt rows={EYE} palette={EYE_PALETTE} scale={12} label="Pixel-art eye looking around">
            <g className="animate-look">{pixelRects(EYE_IRIS, EYE_PALETTE, "iris-")}</g>
          </PixelArt>
        </div>
      </article>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-7">
        {projects.map((project, index) => (
          <li key={project.title} className="pixel-card flex flex-col gap-3 p-[22px]">
            <div className="flex items-start justify-between gap-3 text-xl leading-tight tracking-[0.04em]">
              <span className="whitespace-nowrap text-rust">STAGE {String(index + 1).padStart(2, "0")}</span>
              <span className="text-right text-muted-ink">{project.category}</span>
            </div>
            <h3 className="text-[31px] leading-none">{project.title}</h3>
            <p className="grow text-[23px] leading-[1.15] text-body-ink">{project.summary}</p>
            <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li key={tech} className="chip text-[19px] leading-tight">
                  {tech}
                </li>
              ))}
            </ul>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2.5 self-start text-xl tracking-[0.04em] no-underline hover:text-rust"
              >
                <PixelArt rows={ARROW} palette={RUST_ARROW} scale={2} />
                VIEW ON GITHUB
              </a>
            )}
          </li>
        ))}
      </ul>
    </Level>
  );
}

export function Experience() {
  return (
    <Level id="experience" level="LEVEL 2" title="EXPERIENCE">
      <ol className="flex flex-col gap-8">
        {jobs.map((job) => (
          <li key={`${job.where}-${job.period}`} className="flex flex-wrap gap-x-8 gap-y-5">
            <div className="flex flex-[1_1_220px] items-start gap-3.5 pt-1.5">
              <PixelArt rows={FLAG} palette={FLAG_PALETTE} scale={3} />
              <div className="text-xl leading-snug tracking-[0.04em]">
                <p>{job.period}</p>
                <p className="mt-1 text-rust">{job.type}</p>
              </div>
            </div>
            <article className="pixel-card min-w-0 flex-[999_1_520px] p-6">
              <h3 className="text-[35px] leading-none">{job.role}</h3>
              <p className="mt-1.5 text-[23px] text-muted-ink">{job.where}</p>
              <p className="mt-4 text-2xl leading-[1.2]">{job.summary}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3.5 text-[23px] leading-[1.15] text-body-ink">
                    <span aria-hidden="true" className="mt-1.5 size-3 shrink-0 border-2 border-ink bg-coin" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Level>
  );
}

export function Skills() {
  return (
    <Level id="skills" level="LEVEL 3" title="INVENTORY">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-7">
        {skillGroups.map((group) => (
          <div key={group.name} className="pixel-card p-[22px]">
            <h3 className="mb-4 text-[21px] tracking-[0.06em] text-rust">{group.name}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <li key={skill} className="border-[3px] border-ink bg-chip px-3 py-2 text-2xl leading-none">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Level>
  );
}

export function Education() {
  return (
    <Level id="education" level="LEVEL 4" title="SAVE POINTS" last>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-7">
        {schools.map((school) => (
          <article key={school.school} className="pixel-card flex flex-col gap-3 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2.5 text-xl tracking-[0.04em]">
              <span>{school.period}</span>
              <span className="border-2 border-ink bg-[#A6E3A1] px-2 py-0.5">{school.status}</span>
            </div>
            <h3 className="mt-1 text-[35px] leading-none">{school.school}</h3>
            <p className="text-[23px] text-muted-ink">{school.program}</p>
            <p className="text-[23px] leading-[1.15] text-body-ink">{school.summary}</p>
            <ul className="mt-1 flex flex-wrap gap-1.5" aria-label="Focus areas">
              {school.focus.map((item) => (
                <li key={item} className="chip text-[19px] leading-tight">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Level>
  );
}

const STARS = [
  { top: 48, left: "7%", size: 4, gold: false },
  { top: 120, left: "22%", size: 6, gold: true },
  { top: 72, left: "41%", size: 4, gold: false },
  { top: 36, left: "63%", size: 6, gold: false },
  { top: 140, left: "78%", size: 4, gold: true },
  { top: 60, left: "92%", size: 4, gold: false },
  { top: 260, left: "4%", size: 4, gold: false },
  { top: 330, left: "52%", size: 4, gold: false },
];

export function Contact() {
  return (
    <>
      <div aria-hidden="true" className="dusk relative h-[220px] overflow-hidden">
        <PixelArt rows={SUN} palette={SUN_PALETTE} scale={9} className="absolute -bottom-11 right-[14%]" />
      </div>
      <section id="contact" className="relative overflow-hidden bg-night text-[#F4F4FF]">
        {STARS.map((star) => (
          <span
            key={`${star.top}-${star.left}`}
            aria-hidden="true"
            className={`absolute ${star.gold ? "bg-coin" : "bg-white"}`}
            style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
          />
        ))}
        <div className="relative mx-auto flex max-w-[1120px] flex-wrap gap-12 px-6 pb-24 pt-28">
          <div className="min-w-0 flex-[999_1_460px]">
            <span className="inline-block bg-coin px-3 py-1.5 text-[21px] tracking-[0.06em] text-ink">FINAL LEVEL</span>
            <h2 className="mt-7 font-pixel text-[clamp(24px,4vw,40px)] leading-[1.35]">READY, PLAYER 2?</h2>
            <p className="mt-6 max-w-[520px] text-[28px] leading-[1.2] text-moon">
              Want to collaborate, talk tech or just say hi? Send me a message.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block break-all text-[26px] leading-none sm:text-[38px] text-white underline decoration-coin decoration-4 underline-offset-8 hover:text-coin"
            >
              {profile.email}
            </a>
            <dl className="mt-9 flex flex-col gap-3.5">
              {profile.links.map((link) => (
                <div key={link.label} className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <dt className="w-28 text-[19px] tracking-[0.06em] text-haze">{link.label}</dt>
                  <dd>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="text-[25px] text-white hover:text-coin"
                    >
                      {link.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-w-0 flex-[1_1_340px]">
            <ContactForm email={profile.email} />
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="night-ground flex h-28 items-center justify-center border-t-4 border-[#0E0E22] px-4 pt-6">
      <p className="bg-night px-3.5 py-2 text-center text-[19px] tracking-[0.06em] text-white">
        © {new Date().getFullYear()} {profile.name.toUpperCase()} · THANKS FOR PLAYING
      </p>
    </footer>
  );
}
