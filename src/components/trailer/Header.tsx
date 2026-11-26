"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "MISSIONS", href: "/missions/" },
  { label: "MAP", href: "/map/" },
  { label: "SKILLS", href: "/skills/" },
  { label: "TRAINING", href: "/training/" },
  { label: "CONTACT", href: "/contact/" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10 bg-ink">
      <div className="mx-auto flex min-h-18 max-w-[1280px] flex-wrap items-center justify-between gap-x-8 gap-y-1 px-5 sm:px-10">
        <Link href="/" className="font-display text-[26px] tracking-[0.04em] no-underline">
          SATISH GURUNG
        </Link>
        <nav aria-label="Main" className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] font-bold tracking-[0.12em] sm:gap-x-7 sm:text-sm sm:tracking-[0.16em]">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname === item.href.slice(0, -1);
            const color = active || item.label === "CONTACT" ? "text-pink-text" : "";
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center no-underline hover:text-teal ${color} ${
                  active ? "shadow-[inset_0_-3px_0_var(--color-pink)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
