/** Copenhagen-style silhouette: church spires, a harbour crane and offshore wind turbines. */
const CITY =
  "M0 240 V170 H70 V140 H120 V185 H170 V110 H215 V155 H250 V100 H268 L280 24 L292 100 H312 V150 H370 V130 H430 V175 H480 V105 H540 V145 H600 V80 H655 V160 H710 V130 H770 V185 H815 V120 H870 V150 H900 V90 H912 L922 40 L932 90 H945 V160 H1000 V175 H1060 V130 H1110 V165 H1160 V200 H1440 V240 Z";

/** [x, hub y] of each wind turbine on the horizon. */
const TURBINES = [
  [1230, 140],
  [1320, 150],
] as const;

const GOLD_WINDOWS = [
  [182, 130],
  [196, 150],
  [492, 120],
  [612, 100],
  [630, 130],
  [826, 140],
  [1070, 150],
] as const;

const TEAL_WINDOWS = [
  [84, 156],
  [382, 146],
  [720, 148],
  [958, 170],
] as const;

export function Skyline({
  fill,
  turbineColor,
  windows = false,
  className,
}: {
  fill: string;
  /** Leave out to hide the wind turbines. */
  turbineColor?: string;
  /** Lit windows, for night scenes. */
  windows?: boolean;
  className?: string;
}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 240" preserveAspectRatio="xMidYMax slice" className={className}>
      {turbineColor && (
        <g stroke={turbineColor} strokeWidth={3} strokeLinecap="round">
          {TURBINES.map(([x, hub]) => (
            <g key={x}>
              <line x1={x} y1={200} x2={x} y2={hub} />
              <line x1={x} y1={hub} x2={x} y2={hub - 34} />
              <line x1={x} y1={hub} x2={x + 30} y2={hub + 17} />
              <line x1={x} y1={hub} x2={x - 30} y2={hub + 17} />
            </g>
          ))}
        </g>
      )}
      <path fill={fill} d={CITY} />
      {windows && (
        <>
          <g fill="#FFC56B">
            {GOLD_WINDOWS.map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x} y={y} width={6} height={8} />
            ))}
          </g>
          <g fill="#2FD6C9">
            {TEAL_WINDOWS.map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x} y={y} width={6} height={8} />
            ))}
          </g>
        </>
      )}
    </svg>
  );
}
