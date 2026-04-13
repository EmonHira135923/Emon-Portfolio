// SkillsOverview.jsx
"use client";
import { FiGrid } from "react-icons/fi";
import { SKILLS_OVERVIEW } from "./SkillsOverviewData";

const SectionLabel = ({ icon, text }) => (
  <div className="flex items-center gap-3 mb-10 md:mb-14">
    <span className="text-cyan-400 text-xl md:text-2xl">{icon}</span>
    <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white/30">
      {text}
    </span>
    <span className="flex-1 h-px bg-white/[0.06]" />
  </div>
);

const SkillOverviewCard = ({ icon, label, color, desc }) => (
  <div
    className="
      flex flex-col gap-3
      p-5 md:p-6
      rounded-2xl
      border border-white/[0.07] bg-white/[0.025]
      hover:border-cyan-400/25 hover:bg-cyan-500/[0.06]
      hover:scale-[1.025]
      transition-all duration-200 group
    "
  >
    <div className="flex items-center gap-3">
      <span
        className={`text-3xl md:text-4xl ${color} group-hover:scale-110 transition-transform duration-200`}
      >
        {icon}
      </span>
      <span className="text-white/85 text-base md:text-[17px] font-semibold tracking-wide">
        {label}
      </span>
    </div>
    <p className="text-white/35 text-sm md:text-[15px] leading-relaxed">
      {desc}
    </p>
  </div>
);

const SkillsOverview = () => (
  <div>
    <SectionLabel icon={<FiGrid />} text="Skills Overview" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {SKILLS_OVERVIEW.map((skill) => (
        <SkillOverviewCard key={skill.label} {...skill} />
      ))}
    </div>
  </div>
);

export default SkillsOverview;
