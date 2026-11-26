import type { Metadata } from "next";
import { Banner } from "@/src/components/trailer/Banner";
import { schools } from "@/src/content/portfolio";

export const metadata: Metadata = {
  title: "Training",
  description: "Satish Gurung's education: MSc from DTU and BEng from VIA University College.",
};

const STRIPES = "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0 2px, transparent 2px 12px)";

export default function TrainingPage() {
  return (
    <>
      <Banner
        kicker="EDUCATION"
        title="TRAINING"
        sub="Two degrees, both completed."
        sky="linear-gradient(180deg, #2A1050 0%, #C8366F 55%, #FFC56B 100%)"
        city="#1A0B2E"
      />

      <section className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] gap-6 px-5 pb-26 pt-18 sm:px-10">
        {schools.map((school) => (
          <article
            key={school.school}
            className={`hard-shadow relative flex min-h-[480px] flex-col justify-end overflow-hidden border-2 p-8 ${
              school.featured ? "border-gold" : "border-white/12"
            }`}
            style={{ background: `${STRIPES}, ${school.background}` }}
          >
            <p aria-hidden="true" className="absolute -right-2.5 top-4.5 font-display text-[clamp(96px,11vw,150px)] leading-none text-white/7">
              {school.watermark}
            </p>
            <ul className="relative flex flex-wrap gap-2">
              {school.badges.map((badge, index) => (
                <li
                  key={badge}
                  className={`px-2.5 py-1 text-xs font-extrabold tracking-[0.18em] text-ink ${index === 0 ? "bg-teal" : "bg-gold"}`}
                >
                  {badge}
                </li>
              ))}
            </ul>
            <p className="relative mt-4.5 text-sm font-extrabold tracking-[0.22em] text-haze">{school.savePoint}</p>
            <h2 className="relative mt-2 font-display text-[clamp(36px,4vw,46px)] uppercase leading-none">{school.degree}</h2>
            <p className="relative mt-2 text-lg font-bold">{school.school}</p>
            <p className="relative mt-3 leading-relaxed text-mist">{school.summary}</p>
            <ul className="relative mt-4 flex flex-wrap gap-1.5" aria-label="Focus areas">
              {school.focus.map((item) => (
                <li key={item} className="bg-white/10 px-2.5 py-1 text-[13px] font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
