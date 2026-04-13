"use client";

// LatestProjectsSection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Showcases the top 3 featured projects on the home page.
// Reuses the same ProjectCard component and data structure.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo } from "react";
import Link from "next/link";
import { FiArrowRight, FiGrid } from "react-icons/fi";
import { PROJECT_CATEGORIES } from "./Projectsdata";
import Projectcard from "./Projectcard";

// ── Reuse the same SectionLabel style as the rest of the site ───────────────
const SectionLabel = ({ icon, text }) => (
  <div className="flex items-center gap-3 mb-10 md:mb-14">
    <span className="text-cyan-400 text-xl md:text-2xl">{icon}</span>
    <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white/30">
      {text}
    </span>
    <span className="flex-1 h-px bg-white/[0.06]" />
  </div>
);

// ── Main section ─────────────────────────────────────────────────────────────
const LatestProjectsSection = () => {
  const featuredProjects = useMemo(() => {
    const allProjects = PROJECT_CATEGORIES.flatMap((category) =>
      category.projects.map((project) => ({
        ...project,
        accentColor: category.accentColor,
      })),
    );

    return allProjects.filter((project) => project.featured).slice(0, 3);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#0d1118]/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute left-[-10%] top-8 w-[360px] h-[360px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-[-8%] bottom-10 w-[320px] h-[320px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mb-16 md:mb-20 text-center">
          <SectionLabel icon={<FiGrid />} text="Latest Projects" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-5">
            Latest
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              {" "}
              Work
            </span>
          </h2>
          <p className="text-white/30 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The most recent featured projects, built with modern web
            technologies and polished for a premium dark UI experience.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {featuredProjects.map((project) => (
              <Projectcard
                key={project.id}
                project={project}
                accentColor={project.accentColor}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm md:text-base font-semibold tracking-wide text-white/80 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-500/[0.12] hover:text-white"
            >
              View All Projects
              <FiArrowRight className="text-lg transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;
