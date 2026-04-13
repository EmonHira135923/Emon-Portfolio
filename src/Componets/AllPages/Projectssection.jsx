"use client";
import { useState, useMemo } from "react";
import { FiFolder, FiGrid } from "react-icons/fi";
import { PROJECT_CATEGORIES } from "./Projectsdata";
import ProjectCard from "./Projectcard";
import CategoryFilter from "./Categoryfilter";

// ── Reuse the same SectionLabel style as the rest of the About page ────────
const SectionLabel = ({ icon, text }) => (
  <div className="flex items-center gap-3 mb-10 md:mb-14">
    <span className="text-cyan-400 text-xl md:text-2xl">{icon}</span>
    <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white/30">
      {text}
    </span>
    <span className="flex-1 h-px bg-white/[0.06]" />
  </div>
);

// ── Category header rendered above each group when showing "All" ──────────
const CategoryHeader = ({ label, accentColor, count }) => {
  const dot =
    {
      cyan: "bg-cyan-400",
      purple: "bg-purple-400",
      green: "bg-green-400",
      amber: "bg-amber-400",
    }[accentColor] ?? "bg-cyan-400";

  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className={`w-2 h-2 rounded-full ${dot} shadow-[0_0_8px_currentColor]`}
      />
      <h3 className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">
        {label}
      </h3>
      <span className="text-white/20 text-xs font-mono">
        {count} project{count !== 1 ? "s" : ""}
      </span>
      <span className="flex-1 h-px bg-white/[0.05]" />
    </div>
  );
};

// ── Main section ─────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projectsPerCategory, setProjectsPerCategory] = useState({});

  // Initialize projects per category to 6
  useMemo(() => {
    const initial = {};
    PROJECT_CATEGORIES.forEach((cat) => {
      initial[cat.id] = 6;
    });
    setProjectsPerCategory(initial);
  }, []);

  // Derive which categories / projects to render
  const visibleCategories = useMemo(() => {
    if (activeCategory === "all") return PROJECT_CATEGORIES;
    return PROJECT_CATEGORIES.filter((c) => c.id === activeCategory);
  }, [activeCategory]);

  const totalProjects = PROJECT_CATEGORIES.reduce(
    (acc, cat) => acc + cat.projects.length,
    0,
  );

  // Load more projects for a specific category
  const loadMoreProjects = (categoryId) => {
    setProjectsPerCategory((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] + 6,
    }));
  };

  return (
    <section aria-labelledby="projects-heading">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-0 sm:justify-between mb-10 md:mb-14">
        <SectionLabel icon={<FiFolder />} text="Projects" />
        <span className="text-white/20 text-xs font-mono tracking-widest self-end mb-[3.5rem] md:mb-[3.75rem]">
          {totalProjects} projects · {PROJECT_CATEGORIES.length} categories
        </span>
      </div>

      {/* Category filter tabs */}
      <div className="mb-10">
        <CategoryFilter
          categories={PROJECT_CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {/* Render each visible category group */}
      <div className="space-y-16 md:space-y-20">
        {visibleCategories.map((category) => {
          const projectsToShow = projectsPerCategory[category.id] || 6;
          const currentProjects = category.projects.slice(0, projectsToShow);
          const hasMoreProjects = category.projects.length > projectsToShow;

          return (
            <div key={category.id}>
              {/* Only show category header when "All" is selected */}
              {activeCategory === "all" && (
                <CategoryHeader
                  label={category.label}
                  accentColor={category.accentColor}
                  count={category.projects.length}
                />
              )}

              {/* Responsive card grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {currentProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    accentColor={category.accentColor}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreProjects && (
                <div className="text-center mt-8 md:mt-10">
                  <button
                    onClick={() => loadMoreProjects(category.id)}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-500/[0.08] transition-all duration-200 group"
                  >
                    <span className="text-sm md:text-base font-semibold tracking-wide">
                      Load More Projects
                    </span>
                    <FiGrid className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
