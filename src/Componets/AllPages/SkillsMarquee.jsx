"use client";

import { FaCss3Alt } from "react-icons/fa";
import {
  PiMicrosoftExcelLogo,
  PiMicrosoftPowerpointLogo,
  PiMicrosoftWordLogo,
} from "react-icons/pi";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiLaravel,
  SiFirebase,
  SiGit,
  SiGithub,
  SiCanva,
  SiNotion,
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
} from "react-icons/si";

const SKILLS = [
  { icon: <SiC />, label: "C", color: "text-blue-400" },
  { icon: <SiCplusplus />, label: "C++", color: "text-blue-500" },
  { icon: <SiPython />, label: "Python", color: "text-yellow-400" },
  { icon: <SiPhp />, label: "PHP", color: "text-indigo-400" },
  { icon: <SiJavascript />, label: "JavaScript", color: "text-yellow-300" },
  { icon: <SiHtml5 />, label: "HTML5", color: "text-orange-400" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "text-sky-400" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-400" },
  { icon: <SiReact />, label: "React", color: "text-cyan-300" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "text-white" },
  { icon: <SiNodedotjs />, label: "Node.js", color: "text-green-400" },
  { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
  { icon: <SiLaravel />, label: "Laravel", color: "text-red-400" },
  { icon: <SiFirebase />, label: "Firebase", color: "text-amber-400" },
  { icon: <SiGit />, label: "Git", color: "text-orange-500" },
  { icon: <SiGithub />, label: "GitHub", color: "text-white" },
  { icon: <SiCanva />, label: "Canva", color: "text-cyan-500" },
  { icon: <SiNotion />, label: "Notion", color: "text-white" },
  { icon: <PiMicrosoftExcelLogo />, label: "Excel", color: "text-green-400" },
  { icon: <PiMicrosoftWordLogo />, label: "Word", color: "text-blue-400" },
  {
    icon: <PiMicrosoftPowerpointLogo />,
    label: "PowerPoint",
    color: "text-orange-500",
  },
  { icon: <SiCodeforces />, label: "Codeforces", color: "text-orange-400" },
  { icon: <SiCodechef />, label: "CodeChef", color: "text-amber-500" },
  { icon: <SiLeetcode />, label: "LeetCode", color: "text-yellow-400" },
];

const SkillCard = ({ icon, label, color }) => (
  <div
    className="
    flex-shrink-0 flex items-center gap-3
    px-4 py-3
    sm:px-5 sm:py-3.5
    md:px-6 md:py-4
    rounded-xl border border-white/[0.07] bg-white/[0.03]
    hover:border-cyan-400/25 hover:bg-cyan-500/[0.06]
    transition-all duration-200 group mx-2 md:mx-2.5
  "
  >
    <span
      className={`
      text-2xl sm:text-3xl md:text-4xl
      ${color}
      group-hover:scale-110 transition-transform duration-200
    `}
    >
      {icon}
    </span>
    <span
      className="
      text-white/50 text-sm sm:text-base md:text-[17px]
      font-semibold tracking-wide
      group-hover:text-white/85 transition-colors duration-200
      whitespace-nowrap
    "
    >
      {label}
    </span>
  </div>
);

const SkillsMarquee = () => {
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <div className="w-full overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      {/* Row 1 — scrolls left */}
      <div
        className="flex mb-3 md:mb-4"
        style={{ animation: "marquee-left 35s linear infinite" }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`r1-${i}`} {...skill} />
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="flex"
        style={{ animation: "marquee-right 35s linear infinite" }}
      >
        {[...doubled].reverse().map((skill, i) => (
          <SkillCard key={`r2-${i}`} {...skill} />
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .skills-row-1:hover { animation-play-state: paused; }
        .skills-row-2:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default SkillsMarquee;
