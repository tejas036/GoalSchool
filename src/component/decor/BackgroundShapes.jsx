import React from "react";

/**
 * BackgroundShapes
 * - Fixed, page-wide decorative SVG background for long pages
 * - Slightly darker strokes for better visibility
 * - Super-light tiling line pattern across full page height
 *
 * Props let you reposition/resize the accent shapes per page.
 */
export default function BackgroundShapes({
  // accent positions/sizes (tailwind classes)
  spiralClass = "absolute -left-20 -top-16 w-[460px] h-[460px] opacity-45",
  gridClass   = "absolute right-[-120px] top-[12%] w-[560px] h-[560px] opacity-28",
  triClass    = "absolute -bottom-24 -left-4 w-[460px] h-[360px] opacity-45",

  // overall opacity of the tiled pattern
  patternOpacity = 0.06,
  // set to "absolute" if you only want it under a section; default "fixed" covers whole page
  mode = "fixed",
}) {
  const wrapperPos = mode === "fixed" ? "fixed" : "absolute";
  return (
    <div className={`pointer-events-none ${wrapperPos} inset-0 -z-10 overflow-hidden`}>
      {/* Tiled line pattern (covers full page for long content) */}
      <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Diagonal line pattern */}
          <pattern id="bg-lines" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
            {/* vertical */}
            <line x1="0" y1="0" x2="0" y2="48" stroke="#64748B" strokeWidth="0.8" opacity={patternOpacity} />
            {/* horizontal */}
            <line x1="0" y1="0" x2="48" y2="0" stroke="#64748B" strokeWidth="0.8" opacity={patternOpacity} />
          </pattern>
          {/* soft vignette */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="60%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* base pattern fill */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-lines)" />
        {/* slight vignette to keep edges soft */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#vignette)" />
      </svg>

      {/* Spiral (top-left) — darker indigo */}
      <svg className={spiralClass} viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <path
          d={makeSpiralPath(200, 200, { turns: 3.4, step: 3.8 })}
          stroke="#6366F1"         /* indigo-500 */
          strokeWidth="1.6"
          strokeDasharray="5 7"
          opacity="0.85"
        />
      </svg>

      {/* Soft grid (center-right) — darker blue */}
      <svg className={gridClass} viewBox="0 0 560 560" fill="none" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={20 + i * 38}
            y1="20"
            x2={20 + i * 38}
            y2="540"
            stroke="#60A5FA"        /* blue-400 */
            strokeWidth="1.2"
            opacity="0.55"
          />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="20"
            y1={20 + i * 38}
            x2="540"
            y2={20 + i * 38}
            stroke="#60A5FA"
            strokeWidth="1.2"
            opacity="0.55"
          />
        ))}
      </svg>

      {/* Triangle (bottom-left) — darker emerald */}
      <svg className={triClass} viewBox="0 0 460 360" fill="none" aria-hidden="true">
        <polygon
          points="20,340 230,30 440,340"
          stroke="#10B981"         /* emerald-500 */
          strokeWidth="2"
          fill="none"
          opacity="0.9"
        />
        {Array.from({ length: 12 }).map((_, i) => {
          const t = (i + 1) / 13;
          const x1 = 20 + 210 * t;
          const y1 = 340 - 310 * t;
          const x2 = 20 + 420 * t;
          const y2 = 340;
          return (
            <line
              key={`tri-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#10B981"
              strokeWidth="1.1"
              opacity={0.9 - i * 0.06}
            />
          );
        })}
      </svg>
    </div>
  );
}

/** Archimedean spiral path helper */
function makeSpiralPath(cx, cy, { turns = 3, step = 4, points = 1200 }) {
  const a = 0, b = step, maxTheta = turns * Math.PI * 2;
  let d = "";
  for (let i = 0; i <= points; i++) {
    const t = (i / points) * maxTheta;
    const r = a + b * t;
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    d += i === 0 ? `M ${x},${y}` : ` L ${x},${y}`;
  }
  return d;
}
