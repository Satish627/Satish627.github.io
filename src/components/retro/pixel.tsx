import type { CSSProperties, ReactNode } from "react";

/** Maps each character in a sprite grid to a colour; "." is transparent. */
type Palette = Readonly<Record<string, string>>;

export const INK = "#1B1B2F";

/** Run-length encodes each row into one <rect> per same-coloured stretch. */
export function pixelRects(rows: readonly string[], palette: Palette, keyPrefix = "") {
  const rects: ReactNode[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      if (key === ".") {
        x += 1;
        continue;
      }
      const start = x;
      while (x < row.length && row[x] === key) x += 1;
      rects.push(
        <rect
          key={`${keyPrefix}${y}-${start}`}
          x={start}
          y={y}
          width={x - start}
          height={1}
          fill={palette[key]}
        />,
      );
    }
  });
  return rects;
}

export function PixelArt({
  rows,
  palette,
  scale,
  label,
  className,
  style,
  children,
}: {
  rows: readonly string[];
  palette: Palette;
  scale: number;
  /** Leave out for decoration; the sprite is then hidden from screen readers. */
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const width = rows[0]?.length ?? 0;
  const height = rows.length;

  return (
    <svg
      width={width * scale}
      height={height * scale}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      style={style}
    >
      {pixelRects(rows, palette)}
      {children}
    </svg>
  );
}

/* ---------- Player (Satish): 16 × 22 ---------- */

export const PLAYER_PALETTE: Palette = {
  O: INK, // outline
  H: "#2A1E17", // hair
  h: "#5A4030", // hair highlight
  S: "#C98B5E", // skin
  s: "#A86E45", // skin shadow
  G: "#111111", // sunglasses
  W: "#FFFFFF", // lens glint
  M: "#7A3E2A", // smile
  T: "#F4F4EF", // shirt
  t: "#9AA3AE", // shirt stripe
  P: "#6F8FB3", // jeans
  p: "#5A7699", // jeans shadow
  K: "#F4F4EF", // sneakers
};

export const PLAYER_BODY = [
  "......OO.OO.....",
  ".....OHHOHHO....",
  "...OOHHHHHHHOO..",
  "..OHHHhHHHHHHHO.",
  "..OHHhHHHHhHHHO.",
  "..OHHSSSSSSSHHO.",
  "..OHSSSSSSSSSHO.",
  "..OSGWGGOGWGGSO.",
  "..OSGGGGSGGGGSO.",
  "..OSSSSSSSSSSSO.",
  "...OSSSMMMSSSO..",
  "....OOsSSSsOO...",
  "...OTTtTTTtTTO..",
  "..OTTTtTTTtTTTO.",
  ".OSOTTtTTTtTTOSO",
  ".OSOTTtTTTtTTOSO",
  "..OOPPPPPPPPPOO.",
  "...OPPPPpPPPPO..",
] as const;

/** Bottom four rows of the player: standing, then the two walk-cycle poses. */
export const PLAYER_LEGS = {
  stand: ["...OPPPOOOPPPO..", "...OPPPO.OPPPO..", "..OKKKKO.OKKKKO.", "..OOOOOO.OOOOOO."],
  stride: ["..OPPPOO.OOPPPO.", ".OPPPO....OPPPO.", "OKKKKO....OKKKKO", "OOOOOO....OOOOOO"],
  pass: ["...OPPPPPPPPO...", "....OPPOOPPO....", "...OKKKOOKKKO...", "...OOOOOOOOOO..."],
} as const;

export const PLAYER_STANDING = [...PLAYER_BODY, ...PLAYER_LEGS.stand];

/* ---------- Props ---------- */

export const COIN_PALETTE: Palette = { D: "#D9961A", Y: "#FFC93C", L: "#FFF1B8" };
export const COIN = ["..DD..", ".DYYD.", "DYLYYD", "DYLYYD", "DYLYYD", "DYYYYD", ".DYYD.", "..DD.."];

export const CLOUD_PALETTE: Palette = { W: "#FFFFFF", S: "#DDEFFB" };
export const CLOUD = [
  "....WWWW........",
  "..WWWWWWWW.WWW..",
  ".WWWWWWWWWWWWWW.",
  "WWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWW",
  ".SSSSSSSSSSSSSS.",
];

export const FLAG_PALETTE: Palette = { D: INK, L: "#F27A6E", R: "#E84B3C" };
export const FLAG = [
  ".D......",
  ".DLLLLL.",
  ".DRRRRR.",
  ".DRRRRR.",
  ".DRRRRR.",
  ".D......",
  ".D......",
  ".D......",
  ".D......",
  ".D......",
  ".D......",
  "DDD.....",
];

/** One-colour icons: pass a palette like { D: INK }. */
export const ARROW = ["D...", "DD..", "DDD.", "DDDD", "DDD.", "DD..", "D..."];
export const DOWNLOAD = ["...D...", "...D...", "...D...", ".DDDDD.", "..DDD..", ".......", "DDDDDDD"];

export const SUN_PALETTE: Palette = { A: "#FFD166", B: "#FFB347", C: "#FF9248" };
export const SUN = [
  "...AAAA...",
  ".AAAAAAAA.",
  ".AAAAAAAA.",
  "BBBBBBBBBB",
  "BBBBBBBBBB",
  "BBBBBBBBBB",
  "BBBBBBBBBB",
  ".CCCCCCCC.",
  ".CCCCCCCC.",
  "...CCCC...",
];

export const EYE_PALETTE: Palette = { W: "#F4F4FF", I: "#4FA3E0", P: "#0E0E22", L: "#FFFFFF" };
export const EYE = [
  "................",
  "....WWWWWWWW....",
  "..WWWWWWWWWWWW..",
  ".WWWWWWWWWWWWWW.",
  ".WWWWWWWWWWWWWW.",
  ".WWWWWWWWWWWWWW.",
  ".WWWWWWWWWWWWWW.",
  "..WWWWWWWWWWWW..",
  "....WWWWWWWW....",
  "................",
];
/** Drawn on top of EYE and animated so the pupil glances left and right. */
export const EYE_IRIS = [
  "................",
  "................",
  ".......II.......",
  "......IIII......",
  "......ILPI......",
  "......IPPI......",
  "......IIII......",
  ".......II.......",
  "................",
  "................",
];
