
import timeline from "../../assets/members/timeline2.jpg";
/**
 * Exact-look timeline/roadmap component (JSX + Tailwind)
 * - Preserves original horizontal layout
 * - Small screens: horizontal scroll (no stacking/reshuffle)
 */



export default function RoadmapTimeline() {
  return (
    <div className="">
      <img src={timeline} alt="Roadmap Timeline" className="w-full h-auto "/>
   
    </div>
  );
}
