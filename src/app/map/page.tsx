import type { Metadata } from "next";
import Link from "next/link";
import { Banner } from "@/src/components/trailer/Banner";
import { jobs, missionLog, profile } from "@/src/content/portfolio";

export const metadata: Metadata = {
  title: "Career map",
  description: "Satish Gurung's experience, from Horsens to Copenhagen.",
};

/** Stylised Denmark: Jutland, Funen, Zealand, Lolland and Falster. */
const LAND = [
  "M330 18 L300 40 L255 70 L215 105 L185 150 L175 200 L168 260 L172 320 L180 380 L190 440 L198 500 L290 500 L300 460 L318 420 L312 380 L330 345 L322 318 L338 290 L350 255 L342 225 L320 200 L300 175 L305 140 L290 110 L300 80 Z",
  "M352 360 L395 345 L428 362 L432 398 L410 425 L368 422 L348 395 Z",
  "M470 255 L520 240 L552 262 L568 300 L572 338 L556 372 L560 410 L528 430 L488 420 L462 395 L450 355 L458 320 L448 290 Z",
  "M470 450 L520 445 L528 462 L480 470 Z",
  "M535 440 L552 438 L556 470 L540 476 Z",
];
const ROUTE = "M322 330 L346 262 Q 450 214 556 298 L566 326";
const STOPS = [
  { x: 322, y: 330, label: "01 · HORSENS", lx: 306, ly: 334 },
  { x: 346, y: 262, label: "02 · AARHUS", lx: 330, ly: 258 },
  { x: 556, y: 298, label: "03 · LYNGBY", lx: 540, ly: 290 },
];

function CareerMap() {
  return (
    <svg
      role="img"
      aria-label="Map of Denmark with the route from Horsens to Aarhus, Lyngby and Copenhagen"
      className="absolute inset-x-0 bottom-14 top-6 h-[calc(100%-80px)] w-full"
      viewBox="140 0 460 520"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="#1C1A3D" stroke="#2FD6C9" strokeOpacity={0.7} strokeWidth={1.5} strokeLinejoin="round">
        {LAND.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={ROUTE} fill="none" stroke="#FF3D8B" strokeOpacity={0.25} strokeWidth={12} strokeLinecap="round" />
      <path d={ROUTE} fill="none" stroke="#FF3D8B" strokeWidth={3.5} strokeDasharray="10 8" strokeLinecap="round" />
      <g fontFamily="var(--font-inter), sans-serif" fontSize={12} fontWeight={800} letterSpacing={1.2}>
        {STOPS.map((stop) => (
          <g key={stop.label}>
            <circle cx={stop.x} cy={stop.y} r={14} fill="#2FD6C9" opacity={0.25} />
            <circle cx={stop.x} cy={stop.y} r={6.5} fill="#2FD6C9" />
            <text x={stop.lx} y={stop.ly} textAnchor="end" fill="#FFFFFF">
              {stop.label}
            </text>
          </g>
        ))}
        <circle cx={566} cy={326} r={20} fill="#FFC56B" opacity={0.25} />
        <circle cx={566} cy={326} r={9} fill="#FFC56B" stroke="#050510" strokeWidth={2} />
        <text x={552} y={356} textAnchor="end" fill="#FFC56B">
          04–05 · COPENHAGEN
        </text>
      </g>
    </svg>
  );
}

export default function MapPage() {
  return (
    <>
      <Banner
        kicker="EXPERIENCE"
        title="CAREER MAP"
        sub="Five missions across Denmark, from Horsens to Copenhagen."
        sky="linear-gradient(180deg, #0E1E36 0%, #1B5E6B 45%, #C8366F 85%, #FF7E3D 100%)"
        city="#0A1424"
        turbineColor="#0A1424"
        kickerColor="#BFF3EE"
      />

      <section className="mx-auto flex max-w-[1280px] flex-wrap gap-7 px-5 pt-14 sm:px-10">
        <div className="map-grid relative min-h-[520px] min-w-0 flex-[999_1_620px] overflow-hidden border-2 border-teal/35 sm:min-h-[640px]">
          <p className="absolute left-6 top-5 text-[13px] font-extrabold tracking-[0.3em] text-teal">DENMARK</p>
          <CareerMap />
          <ul className="absolute bottom-4.5 left-6 flex flex-wrap gap-4.5 text-[13px] font-extrabold tracking-[0.14em]" aria-label="Legend">
            <li className="inline-flex items-center gap-2">
              <span className="size-3 rounded-full bg-teal" />
              COMPLETE
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="size-3 rounded-full bg-gold" />
              ACTIVE
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="w-5.5 border-t-[3px] border-dashed border-pink" />
              ROUTE
            </li>
          </ul>
        </div>

        <section aria-labelledby="log" className="min-w-0 flex-[1_1_360px] lg:max-w-[440px]">
          <h2 id="log" className="mb-3 font-display text-4xl leading-none">
            MISSION LOG
          </h2>
          <ol className="flex flex-col gap-2">
            {missionLog.map((mission) => (
              <li key={mission.id}>
                <Link
                  href={mission.href}
                  className={`grid min-h-15 grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 border-2 px-3.5 py-2 no-underline ${
                    mission.active ? "border-gold bg-gold/12" : "border-white/10 bg-panel-2 hover:border-teal"
                  }`}
                >
                  <span className={`font-display text-xl ${mission.active ? "text-gold" : "text-teal"}`}>{mission.id}</span>
                  <span>
                    <span className="block font-bold">{mission.title}</span>
                    <span className="block text-sm text-lilac">{mission.meta}</span>
                  </span>
                  <span className={`text-xs font-extrabold tracking-[0.14em] ${mission.active ? "text-gold" : "text-teal"}`}>
                    {mission.active ? "ACTIVE" : "COMPLETE"}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </section>

      <section id="briefings" className="mx-auto max-w-[1280px] scroll-mt-6 px-5 pt-20 sm:px-10">
        <p className="kicker text-pink-text">IN DETAIL</p>
        <h2 className="mb-8 mt-2.5 font-display text-[clamp(44px,5vw,56px)] leading-none">MISSION BRIEFINGS</h2>
        <ol className="flex flex-col gap-8">
          {jobs.map((job) => (
            <li key={job.mission} className="flex flex-wrap gap-x-10 gap-y-5">
              <div className="flex-[1_1_240px] sm:max-w-[300px]">
                <p className="font-display text-5xl leading-[0.95]">{job.from}</p>
                <p className="mt-0.5 font-display text-5xl leading-[0.95] text-haze">— {job.to}</p>
                <p
                  className={`mt-3.5 inline-block px-2.5 py-1 text-xs font-extrabold tracking-[0.18em] text-ink ${
                    job.active ? "bg-gold" : "bg-teal"
                  }`}
                >
                  {job.active ? "ACTIVE" : "COMPLETE"}
                </p>
              </div>
              <article
                className={`hard-shadow min-w-0 flex-[999_1_600px] border-2 bg-panel px-6 py-7 sm:px-8 ${
                  job.active ? "border-gold" : "border-white/12"
                }`}
              >
                <p className="text-[13px] font-extrabold tracking-[0.22em] text-teal">{job.mission}</p>
                <h3 className="mt-2.5 font-display text-[clamp(36px,4vw,48px)] uppercase leading-none">{job.role}</h3>
                <p className="mt-3.5 text-lg leading-relaxed text-mist">{job.summary}</p>
                <p className="mb-2 mt-4.5 text-xs font-extrabold tracking-[0.24em] text-gold">OBJECTIVES</p>
                <ul className="flex flex-col gap-2.5">
                  {job.objectives.map((objective) => (
                    <li key={objective} className="flex gap-3 leading-normal text-lilac">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2FD6C9" strokeWidth={3} className="mt-0.5 flex-none" aria-hidden="true">
                        <polyline points="4 12 10 18 20 6" />
                      </svg>
                      {objective}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-26 pt-14 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-5 bg-[linear-gradient(90deg,#C8366F,#FF7E3D)] px-7 py-6">
          <p className="font-display text-[32px] leading-tight [text-shadow:3px_3px_0_var(--color-ink)]">WANT THE SHORT VERSION?</p>
          <a href={profile.cv} download className="skew-btn bg-ink">
            DOWNLOAD CV
          </a>
        </div>
      </section>
    </>
  );
}
