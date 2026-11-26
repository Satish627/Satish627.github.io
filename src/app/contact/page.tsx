import type { Metadata } from "next";
import { ContactForm } from "@/src/components/trailer/ContactForm";
import { Skyline } from "@/src/components/trailer/Skyline";
import { profile } from "@/src/content/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Satish Gurung.",
};

const NIGHT = "linear-gradient(180deg, #050510 0%, #120A2E 45%, #2A0F3E 78%, #4A1A66 100%)";
const WATER =
  "repeating-linear-gradient(180deg, rgba(255, 197, 107, 0.22) 0 2px, transparent 2px 13px), linear-gradient(180deg, #120A2E 0%, #050510 100%)";
const STARS = [
  { top: 60, left: "8%", size: 3, gold: false },
  { top: 130, left: "26%", size: 4, gold: true },
  { top: 90, left: "47%", size: 3, gold: false },
  { top: 44, left: "66%", size: 4, gold: false },
  { top: 170, left: "82%", size: 3, gold: true },
  { top: 70, left: "93%", size: 3, gold: false },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden" style={{ background: NIGHT }}>
      {STARS.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          aria-hidden="true"
          className={`absolute ${star.gold ? "bg-gold" : "bg-white"}`}
          style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
        />
      ))}
      <Skyline fill="#0B0B1E" turbineColor="#1A0F33" windows className="absolute inset-x-0 bottom-[90px] h-[220px] w-full" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[90px]" style={{ background: WATER }} />

      <div className="relative mx-auto flex max-w-[1280px] flex-wrap gap-12 px-5 pb-[320px] pt-24 sm:px-10">
        <div className="min-w-0 flex-[999_1_520px]">
          <p className="kicker text-pink-text">CONTACT</p>
          <h1 className="text-hard mt-3.5 font-display text-[clamp(56px,8vw,112px)] leading-[0.9]">
            START A
            <br />
            CO-OP MISSION
          </h1>
          <p className="mt-5.5 max-w-[520px] text-xl leading-normal text-mist">
            Want to collaborate, talk tech or just say hi? Send me a message.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-block break-all text-[clamp(22px,3vw,34px)] font-extrabold underline decoration-pink decoration-4 underline-offset-8 hover:text-teal"
          >
            {profile.email}
          </a>
          <dl className="mt-8 flex flex-col gap-3">
            {profile.links.map((link) => (
              <div key={link.label} className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <dt className="w-28 text-xs font-extrabold tracking-[0.22em] text-haze">{link.label}</dt>
                <dd>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-lg font-bold underline underline-offset-4 hover:text-teal"
                  >
                    {link.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="min-w-0 flex-[1_1_380px] self-start">
          <ContactForm email={profile.email} />
        </div>
      </div>
    </section>
  );
}
