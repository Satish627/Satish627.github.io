"use client";

import { useSyncExternalStore } from "react";
import {
  COIN,
  COIN_PALETTE,
  PLAYER_BODY,
  PLAYER_LEGS,
  PLAYER_PALETTE,
  PixelArt,
} from "@/src/components/retro/pixel";

/** Each of these sections holds one coin on the scroll track, in page order. */
const LEVEL_IDS = ["work", "experience", "skills", "education", "contact"];

type ScrollState = {
  /** 0 at the top of the page, 1 at the bottom. */
  progress: number;
  direction: 1 | -1;
  walking: boolean;
  step: number;
  /** Progress value at which each level's coin is collected. */
  marks: readonly number[];
};

const INITIAL: ScrollState = {
  progress: 0,
  direction: 1,
  walking: false,
  step: 0,
  marks: [0.16, 0.42, 0.62, 0.76, 0.9],
};

let state = INITIAL;
const listeners = new Set<() => void>();
let lastTop = 0;
let frame = 0;
let idleTimer: number | undefined;
let resizeObserver: ResizeObserver | undefined;

function update(next: Partial<ScrollState>) {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

function scrollRange() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function readProgress() {
  const max = scrollRange();
  return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
}

/** A coin is collected once its section is ~60% of the way up the screen. */
function measureMarks() {
  const max = scrollRange();
  if (max === 0) return;
  const marks = LEVEL_IDS.map((id, index) => {
    const section = document.getElementById(id);
    if (!section) return state.marks[index];
    const top = section.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.6;
    return Math.min(0.98, Math.max(0.04, top / max));
  });
  update({ marks, progress: readProgress() });
}

function handleScroll() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    const top = window.scrollY;
    const direction = top > lastTop ? 1 : top < lastTop ? -1 : state.direction;
    lastTop = top;
    update({ progress: readProgress(), direction, walking: true, step: Math.floor(top / 40) % 2 });
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(() => update({ walking: false }), 180);
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    lastTop = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    resizeObserver = new ResizeObserver(measureMarks);
    resizeObserver.observe(document.body);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size > 0) return;
    window.removeEventListener("scroll", handleScroll);
    resizeObserver?.disconnect();
    window.clearTimeout(idleTimer);
    cancelAnimationFrame(frame);
    frame = 0;
  };
}

function useScrollState() {
  return useSyncExternalStore(subscribe, () => state, () => INITIAL);
}

/** HUD counter: how many level coins the walker has collected so far. */
export function CoinCounter() {
  const { progress, marks } = useScrollState();
  const collected = marks.filter((mark) => progress >= mark).length;

  return (
    <span className="inline-flex items-center gap-2" aria-label={`${collected} of ${marks.length} coins collected`}>
      <PixelArt rows={COIN} palette={COIN_PALETTE} scale={2} />
      <span aria-hidden="true">×{String(collected).padStart(2, "0")}</span>
    </span>
  );
}

/** Mini player that walks along a brick strip at the bottom as the page scrolls. */
export function ScrollWalker() {
  const { progress, direction, walking, step, marks } = useScrollState();
  const legs = !walking ? PLAYER_LEGS.stand : step === 0 ? PLAYER_LEGS.stride : PLAYER_LEGS.pass;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[84px]">
      <div className="track-bricks absolute inset-x-0 bottom-0 h-3 border-t-[3px] border-ink" />
      {marks.map((mark, index) => {
        const collected = progress >= mark;
        return (
          <PixelArt
            key={LEVEL_IDS[index]}
            rows={COIN}
            palette={COIN_PALETTE}
            scale={2}
            className="absolute bottom-[30px] transition-[opacity,transform] duration-300"
            style={{
              left: `calc(26px + (100% - 64px) * ${mark.toFixed(4)})`,
              opacity: collected ? 0 : 1,
              transform: `translateY(${collected ? -28 : 0}px)`,
            }}
          />
        );
      })}
      <div
        className="absolute bottom-3"
        style={{
          left: `calc(12px + (100% - 64px) * ${progress.toFixed(4)})`,
          transform: `scaleX(${direction})`,
        }}
      >
        <PixelArt rows={[...PLAYER_BODY, ...legs]} palette={PLAYER_PALETTE} scale={2.5} />
      </div>
    </div>
  );
}
