import type { Metadata } from "next";
import { Banner } from "@/src/components/trailer/Banner";
import { projects, thesis } from "@/src/content/portfolio";

export const metadata: Metadata = {
  title: "Missions",
  description: "Satish Gurung's master's thesis and projects.",
};

const STRIPES = "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 2px, transparent 2px 12px)";

export default function MissionsPage() {
  return (
    <>
      <Banner
        kicker="WORK & PROJECTS"
        title="MISSIONS"
        sub="One thesis and nine projects, from course work to full-stack apps."
        sky="linear-gradient(180deg, #1A1036 0%, #4A1A66 40%, #C8366F 75%, #FF7E3D 100%)"
        city="#120A24"
      />

      <section className="mx-auto max-w-[1280px] px-5 pt-18 sm:px-10">
        <article className="hard-shadow flex flex-wrap border-2 border-gold bg-panel">
          <div
            className="relative flex min-h-[340px] flex-[1_1_460px] flex-col justify-end overflow-hidden p-8"
            style={{ background: "linear-gradient(180deg, #2A1050 0%, #8E2A6E 55%, #FF7E3D 100%)" }}
          >
            <svg aria-hidden="true" className="absolute -right-8 top-6 h-[230px] w-[380px] opacity-35" viewBox="0 0 160 100">
              <path d="M10 50 Q 80 -10 150 50 Q 80 110 10 50 Z" fill="none" stroke="#fff" strokeWidth={4} />
              <circle cx={80} cy={50} r={22} fill="none" stroke="#fff" strokeWidth={4} />
              <circle cx={80} cy={50} r={9} fill="#fff" />
            </svg>
            <p className="relative self-start bg-ink px-2.5 py-1 text-xs font-extrabold tracking-[0.2em] text-gold">{thesis.tag}</p>
            <h2 className="text-hard relative mt-3.5 font-display text-[clamp(48px,6vw,88px)] leading-[0.92]">{thesis.title}</h2>
          </div>
          <div className="flex flex-[1_1_420px] flex-col gap-4.5 p-8">
            <p className="text-[13px] font-extrabold tracking-[0.24em] text-teal">{thesis.meta}</p>
            <p className="text-lg leading-relaxed text-mist">{thesis.summary}</p>
            <dl className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
              <div>
                <dt className="text-xs font-extrabold tracking-[0.22em] text-haze">GRADE</dt>
                <dd className="mt-1 font-display text-[44px] leading-none text-gold">12</dd>
                <dd className="mt-0.5 text-sm text-haze">Top Danish mark</dd>
              </div>
              <div>
                <dt className="text-xs font-extrabold tracking-[0.22em] text-haze">STACK</dt>
                <dd className="mt-1.5 text-[17px] font-bold leading-snug">{thesis.stack}</dd>
              </div>
            </dl>
            <a href={thesis.href} target="_blank" rel="noreferrer" className="skew-btn hard-shadow-sm self-start bg-pink">
              VIEW THESIS REPO
            </a>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-26 pt-20 sm:px-10">
        <p className="kicker text-pink-text">MORE PROJECTS</p>
        <h2 className="mt-2.5 font-display text-[56px] leading-none">SIDE MISSIONS</h2>
        <p className="mt-2.5 text-lg text-lilac">Course work, team projects and things I built for fun.</p>
        <ul className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-5">
          {projects.map((project, index) => (
            <li key={project.title} className="flex flex-col border-2 border-white/12 bg-panel">
              <div className="flex h-[120px] items-start justify-between p-4" style={{ background: `${STRIPES}, ${project.art}` }}>
                <span className="font-display text-2xl [text-shadow:3px_3px_0_var(--color-ink)]">
                  M{String(index + 1).padStart(2, "0")}
                </span>
                <span className="bg-ink px-2 py-1 text-[11px] font-extrabold tracking-[0.16em]">{project.category}</span>
              </div>
              <div className="flex grow flex-col gap-2.5 px-4.5 pb-5 pt-5">
                <h3 className="font-display text-3xl uppercase leading-[1.02]">{project.title}</h3>
                <p className="grow text-[15px] leading-normal text-lilac">{project.summary}</p>
                <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="border border-white/20 bg-white/8 px-2 py-1 text-[13px] font-bold">
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center self-start text-[13px] font-extrabold tracking-[0.18em] text-teal no-underline hover:text-white"
                  >
                    VIEW ON GITHUB →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
