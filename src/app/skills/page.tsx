import type { Metadata } from "next";
import { Banner } from "@/src/components/trailer/Banner";
import { bonusPerks, skillGroups } from "@/src/content/portfolio";

export const metadata: Metadata = {
  title: "Skills",
  description: "The technologies Satish Gurung works with, and where he has used them.",
};

export default function SkillsPage() {
  return (
    <>
      <Banner
        kicker="SKILLS"
        title="SKILLS UNLOCKED"
        sub="What I work with, and where I've used it."
        sky="linear-gradient(180deg, #1A1036 0%, #5B2A86 50%, #FF3D8B 100%)"
        city="#140A2C"
        kickerColor="#FFD3E6"
      />

      <section className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-5 px-5 pt-18 sm:px-10">
        {skillGroups.map((group) => (
          <article
            key={group.name}
            className="hard-shadow border-2 border-t-[6px] border-white/12 bg-panel"
            style={{ borderTopColor: group.accent }}
          >
            <h2 className="px-6 pb-1.5 pt-5.5 font-display text-4xl leading-none">{group.name}</h2>
            <ul className="px-6 pb-5.5 pt-2">
              {group.items.map((skill) => (
                <li key={skill.name} className="border-b border-white/8 py-3 last:border-b-0">
                  <span className="block text-lg font-extrabold">{skill.name}</span>
                  <span className="mt-0.5 block text-sm text-haze">{skill.used}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-26 pt-10 sm:px-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-2 border-dashed border-white/20 px-6.5 py-5.5">
          <span className="text-[13px] font-extrabold tracking-[0.24em] text-gold">BONUS PERKS</span>
          {bonusPerks.map((perk) => (
            <span key={perk} className="bg-white/8 px-3 py-1.5 text-[15px] font-bold">
              {perk}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
