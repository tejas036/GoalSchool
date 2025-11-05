import React from "react";
import timeline from "../../assets/members/timeline.jpg";
/**
 * Exact-look timeline/roadmap component (JSX + Tailwind)
 * - Preserves original horizontal layout
 * - Small screens: horizontal scroll (no stacking/reshuffle)
 */

const milestones = [
  { n: 1, year: "2017", side: "bottom", dotColor: "#9F7AEA", title: "Beginning",
    text: "Our entrepreneurial story begins with a creative idea from three tech entrepreneurs." },
  { n: 2, year: "2018", side: "top", dotColor: "#C084FC", title: "Investigation",
    text: "Stage where we focus on a process of research, analysis, study of the market and the target audience." },
  { n: 3, year: "2020", side: "bottom", dotColor: "#F0ABFC", title: "Planning",
    text: "Team building and training phase, brainstorming, company objectives, and roadmap." },
  { n: 4, year: "2023", side: "top", dotColor: "#FB7185", title: "Innovation",
    text: "Launch of the first local technology project dedicated to universities and higher education centers." },
  { n: 5, year: "2025", side: "bottom", dotColor: "#F59E0B", title: "Creativity",
    text: "Development of a digital solution focused on enhancing creativity in children at an early age." },
  { n: 6, year: "2026", side: "top", dotColor: "#FDE047", title: "Recognition",
    text: "We received the Grand Prize for Software Development awarded by Borcelle for the best health app." },
  { n: 7, year: "2027", side: "bottom", dotColor: "#86EFAC", title: "Education",
    text: "The team is expanding and we begin developing applications for the education sector." },
  { n: 8, year: "2028", side: "top", dotColor: "#6EE7F9", title: "Developments",
    text: "The first solutions for schools, playrooms, and childcare centers are launched on the market." },
  { n: 9, year: "2030", side: "bottom", dotColor: "#93C5FD", title: "News",
    text: "Data analysis processes are introduced and artificial intelligence algorithms begin to be used." },
];

// wave Y positions to mimic the dashed curve heights
const waveY = [210, 170, 235, 195, 225, 195, 210, 190, 210];

// export default function RoadmapTimeline() {
//   const stepX = 170;       // distance between milestones
//   const leftPad = 60;      // left padding for the path
//   const width = leftPad + stepX * (milestones.length - 1) + 80;
//   const height = 440;      // ↑ bigger so year labels never clip

//   // Smooth path across the wave points
//   const pathD = milestones.map((_, i) => {
//     const x = leftPad + i * stepX;
//     const y = waveY[i];
//     if (i === 0) return `M ${x},${y}`;
//     const px = leftPad + (i - 1) * stepX;
//     const py = waveY[i - 1];
//     const cx1 = px + stepX / 2;
//     const cy1 = py;
//     const cx2 = px + stepX / 2;
//     const cy2 = y;
//     return `C ${cx1},${cy1} ${cx2},${cy2} ${x},${y}`;
//   }).join(" ");

//   return (
//     <div className="w-full bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 min-h-screen py-12">
//       <div className="mx-auto max-w-[1400px] px-4">
//         {/* Preserve exact horizontal layout; enable horizontal scroll on small screens */}
//         <div className="relative overflow-x-auto pb-28">
//           <div
//             className="relative mx-auto"
//             style={{ width: width + 120, height: height + 380 }} // extra bottom space
//           >
//             {/* Curved dashed track */}
//             <svg
//               width={width + 120}
//               height={height}
//               className="absolute left-0 top-20"  // slight top offset
//               role="img"
//               aria-label="timeline path"
//             >
//               <path
//                 d={pathD}
//                 fill="none"
//                 stroke="#CBD5E1"
//                 strokeWidth="6"
//                 strokeDasharray="10 10"
//                 strokeLinecap="round"
//               />
//               {/* Dots + years */}
//               {milestones.map((m, i) => {
//                 const x = leftPad + i * stepX;
//                 const y = waveY[i];
//                 return (
//                   <g key={`dot-${i}`}>
//                     <circle cx={x} cy={y} r="10" fill={m.dotColor} />
//                     <text
//                       x={x}
//                       y={m.side === "top" ? y - 78 : y + 84} // more offset so labels are fully visible
//                       textAnchor="middle"
//                       fontWeight="700"
//                       fontFamily="Inter, ui-sans-serif, system-ui"
//                       fontSize="22"
//                       fill="#8B5CF6"
//                     >
//                       {m.year}
//                     </text>
//                   </g>
//                 );
//               })}
//             </svg>

//             {/* Cards */}
//             {milestones.map((m, i) => {
//               const x = leftPad + i * stepX;
//               const top = m.side === "top" ? 0 : height - 8;
//               return (
//                 <div
//                   key={m.n}
//                   className="absolute flex flex-col items-center"
//                   style={{ left: x - 110, top }}
//                 >
//                   <div
//                     className="z-10 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold shadow-md"
//                     style={{ backgroundColor: m.side === "top" ? "#D8B4FE" : "#BFDBFE" }}
//                   >
//                     {m.n}
//                   </div>

//                   <div
//                     className="mt-[-18px] w-[220px] rounded-2xl bg-white p-6 text-center shadow border border-slate-100"
//                     style={{
//                       clipPath:
//                         "polygon(0 12%, 12% 0, 88% 0, 100% 12%, 100% 100%, 0 100%)",
//                     }}
//                   >
//                     <div className="text-lg font-semibold text-slate-800">{m.title}</div>
//                     <p className="mt-3 text-sm leading-5 text-slate-500">{m.text}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function RoadmapTimeline() {
  return (
    <div className="">
      <img src={timeline} alt="Roadmap Timeline" className="w-full h-auto "/>
   
    </div>
  );
}
