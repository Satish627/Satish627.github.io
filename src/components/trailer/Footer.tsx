import { Fragment } from "react";
import { profile } from "@/src/content/portfolio";

const CREDITS = [
  ["DIRECTED BY", "Satish Gurung"],
  ["STARRING", "Next.js · TypeScript · React"],
  ["FILMED IN", "Copenhagen, Denmark"],
  ["SPECIAL THANKS", "DTU · VIA University College"],
] as const;

/** End credits, shown under every page. */
export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-22 pt-18 text-center sm:px-10">
      <p className="kicker text-haze">A SATISH GURUNG PRODUCTION</p>
      <p className="mt-3 font-display text-5xl leading-none">THANKS FOR WATCHING</p>
      <dl className="mx-auto mt-9 grid max-w-[640px] grid-cols-2 gap-x-7 gap-y-3 text-[15px]">
        {CREDITS.map(([role, name]) => (
          <Fragment key={role}>
            <dt className="text-right font-extrabold tracking-[0.2em] text-haze">{role}</dt>
            <dd className="text-left font-bold">{name}</dd>
          </Fragment>
        ))}
      </dl>
      <p className="mt-10 text-[13px] text-[#A9A2C9]">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
