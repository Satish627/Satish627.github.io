import { Skyline } from "@/src/components/trailer/Skyline";

/** Page title card: a sky gradient over the skyline, game word big, plain word as the kicker. */
export function Banner({
  kicker,
  title,
  sub,
  sky,
  city,
  turbineColor,
  kickerColor = "#FFE3B8",
}: {
  kicker: string;
  title: string;
  sub: string;
  sky: string;
  city: string;
  turbineColor?: string;
  kickerColor?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: sky }}>
      <Skyline fill={city} turbineColor={turbineColor} className="absolute inset-x-0 bottom-0 h-[170px] w-full" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,16,0.75)_0%,rgba(5,5,16,0.25)_60%,rgba(5,5,16,0)_100%)]"
      />
      <div className="relative mx-auto max-w-[1280px] px-5 pb-[76px] pt-20 sm:px-10">
        <p className="kicker" style={{ color: kickerColor }}>
          {kicker}
        </p>
        <h1 className="text-hard mt-3 font-display text-[clamp(56px,9vw,120px)] leading-[0.9]">{title}</h1>
        <p className="mt-4 text-xl text-[#FFF5E8]">{sub}</p>
      </div>
    </section>
  );
}
