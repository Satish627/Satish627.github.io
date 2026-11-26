import Image from "next/image";
import Link from "next/link";
import { Skyline } from "@/src/components/trailer/Skyline";
import { episodes, profile } from "@/src/content/portfolio";

const HERO_SKY = "linear-gradient(180deg, #1A1036 0%, #4A1A66 32%, #C8366F 58%, #FF7E3D 76%, #FFC56B 88%)";
const WATER =
  "repeating-linear-gradient(180deg, rgba(255, 126, 61, 0.28) 0 2px, transparent 2px 13px), linear-gradient(180deg, #2A0F3E 0%, #0B0B1E 100%)";
const POSTER_CLIP = "polygon(12% 0, 100% 0, 88% 100%, 0 100%)";

/** Slanted key-art panel: the photo in a pink-to-orange duotone over a teal offset. */
function Poster({ className }: { className: string }) {
  return (
    <div className={className}>
      <div aria-hidden="true" className="absolute inset-0 -translate-x-[22px] -translate-y-[22px] bg-teal" style={{ clipPath: POSTER_CLIP }} />
      <div
        className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,#FF3D8B_0%,#FF8A3D_100%)]"
        style={{ clipPath: POSTER_CLIP }}
      >
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          priority
          sizes="400px"
          className="object-cover mix-blend-multiply [filter:grayscale(1)_contrast(1.15)_brightness(1.08)]"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: HERO_SKY }}>
        <div
          aria-hidden="true"
          className="absolute bottom-[140px] left-1/2 size-[420px] rounded-full bg-[radial-gradient(circle,#FFF1C2_0%,#FFC56B_38%,rgba(255,138,61,0)_70%)]"
        />
        <Skyline fill="#120A24" turbineColor="#2A1240" className="absolute inset-x-0 bottom-[118px] h-[240px] w-full" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[120px]" style={{ background: WATER }} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,16,0.7)_0%,rgba(5,5,16,0.3)_45%,rgba(5,5,16,0)_70%)]"
        />
        <Poster className="absolute bottom-12 right-[6%] hidden h-[580px] w-[400px] lg:block" />

        <div className="relative mx-auto max-w-[1280px] px-5 pb-[200px] pt-20 sm:px-10 sm:pt-26">
          <div className="max-w-[640px]">
            <p className="kicker text-[#FFE3B8]">{profile.kicker}</p>
            <h1 className="text-hard mt-4.5 font-display text-[clamp(80px,12vw,176px)] leading-[0.86] tracking-[0.01em]">
              SATISH
              <br />
              GURUNG
            </h1>
            <p className="mt-5 font-display text-[32px] leading-none sm:text-[40px] tracking-[0.04em] text-teal [text-shadow:3px_3px_0_var(--color-ink)]">
              {profile.role}
            </p>
            <p className="mt-5.5 max-w-[520px] text-xl leading-normal text-[#FFF5E8]">{profile.intro}</p>
            <div className="mt-8.5 flex flex-wrap gap-4">
              <Link href="/missions/" className="skew-btn min-h-14 bg-pink px-7 text-xl shadow-[6px_6px_0_var(--color-ink)]">
                PRESS START
              </Link>
              <a href={profile.cv} download className="skew-btn min-h-14 border-[3px] border-white bg-ink/35 px-7 text-xl">
                DOWNLOAD CV
              </a>
            </div>
            <Poster className="relative mt-14 h-[340px] w-[250px] lg:hidden" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-center gap-5 overflow-hidden whitespace-nowrap bg-ink px-5 py-3.5 sm:px-10">
          <span className="flex-none bg-teal px-2.5 py-1 font-display text-base tracking-[0.06em] text-ink">NOW PLAYING</span>
          <span className="text-[15px] font-bold tracking-[0.14em]">{profile.nowPlaying}</span>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-26 pt-24 sm:px-10">
        <p className="kicker text-pink-text">STORY MODE</p>
        <h2 className="mt-2.5 font-display text-[clamp(48px,6vw,72px)] leading-none">THE STORY SO FAR</h2>
        <p className="mt-3 text-xl text-lilac">Four cities, one route: from Horsens to Copenhagen.</p>
        <ol className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className={`flex min-h-[420px] flex-col justify-between border-2 p-6 ${
                episode.current ? "border-gold" : "border-white/12"
              }`}
              style={{
                background: `repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0 2px, transparent 2px 12px), ${episode.background}`,
              }}
            >
              <div className="flex justify-between text-sm font-extrabold tracking-[0.16em]">
                <span className="font-display text-lg tracking-[0.06em]">{episode.id}</span>
                <span>{episode.years}</span>
              </div>
              <div>
                <h3 className="font-display text-[clamp(44px,4.5vw,58px)] leading-[0.9] [text-shadow:4px_4px_0_var(--color-ink)]">
                  {episode.city}
                </h3>
                <p className="mt-3.5 text-lg font-bold">{episode.title}</p>
                <p className="mt-1.5 text-base leading-normal text-mist">{episode.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/map/" className="skew-btn hard-shadow-sm bg-pink">
            OPEN THE CAREER MAP
          </Link>
          <Link href="/missions/" className="skew-btn border-[3px] border-white">
            SEE THE MISSIONS
          </Link>
        </div>
      </section>
    </>
  );
}
