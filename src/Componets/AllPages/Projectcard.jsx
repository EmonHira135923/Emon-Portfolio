"use client";

// ProjectCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Interactive card: handles the Read More / Show Less toggle.
// Receives all data as props — no hardcoded content.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import Image from "next/image";
import {
  FiGithub,
  FiExternalLink,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

// ── accent config ─────────────────────────────────────────────────────────────
const ACCENT = {
  cyan: {
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-400/20",
    glow: "hover:border-cyan-400/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.08)]",
    btn: "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10",
    dot: "bg-cyan-400",
  },
  purple: {
    tag: "bg-purple-500/10 text-purple-300 border-purple-400/20",
    glow: "hover:border-purple-400/30 hover:shadow-[0_0_32px_rgba(168,85,247,0.08)]",
    btn: "text-purple-400 hover:text-purple-300 hover:bg-purple-500/10",
    dot: "bg-purple-400",
  },
  green: {
    tag: "bg-green-500/10 text-green-300 border-green-400/20",
    glow: "hover:border-green-400/30 hover:shadow-[0_0_32px_rgba(74,222,128,0.08)]",
    btn: "text-green-400 hover:text-green-300 hover:bg-green-500/10",
    dot: "bg-green-400",
  },
  amber: {
    tag: "bg-amber-500/10 text-amber-300 border-amber-400/20",
    glow: "hover:border-amber-400/30 hover:shadow-[0_0_32px_rgba(251,191,36,0.08)]",
    btn: "text-amber-400 hover:text-amber-300 hover:bg-amber-500/10",
    dot: "bg-amber-400",
  },
};

// ── placeholder gradient shown when no real image is provided ─────────────────
const ImagePlaceholder = ({ title, accent }) => (
  <div
    className="
      w-full h-full flex items-center justify-center
      bg-gradient-to-br from-white/[0.03] to-white/[0.01]
    "
  >
    <span
      className="
        text-4xl font-black tracking-tighter select-none
        text-white/[0.07]
      "
    >
      {title.slice(0, 2).toUpperCase()}
    </span>
  </div>
);

// ── main card ─────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, accentColor }) => {
  const [expanded, setExpanded] = useState(false);
  const a = ACCENT[accentColor] ?? ACCENT.cyan;

  const hasImage =
    project.image &&
    !project.image.startsWith("/projects/") && // treat placeholder paths as missing
    project.image.startsWith("http");

  return (
    <article
      className={`
        flex flex-col
        rounded-2xl border border-white/[0.07] bg-white/[0.025]
        transition-all duration-300 ease-out
        hover:scale-[1.018] ${a.glow}
        overflow-hidden group
      `}
    >
      {/* ── Image ── */}
      <div className="relative w-full h-48 sm:h-52 bg-white/[0.03] overflow-hidden flex-shrink-0">
        {hasImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder title={project.title} accent={accentColor} />
        )}
        {/* top-right accent dot */}
        <span
          className={`
            absolute top-3 right-3 w-2 h-2 rounded-full ${a.dot}
            shadow-[0_0_8px_currentColor] opacity-70
          `}
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5 md:p-6 gap-4">
        {/* Title */}
        <h3 className="text-white font-black text-lg md:text-xl tracking-tight leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <div className="text-white/40 text-sm md:text-[15px] leading-relaxed">
          <p>{project.shortDescription}</p>

          {expanded && (
            <p className="mt-3 text-white/30 leading-relaxed border-t border-white/[0.06] pt-3">
              {project.fullDescription}
            </p>
          )}
        </div>

        {/* Read More toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className={`
            self-start flex items-center gap-1.5
            text-xs font-bold tracking-widest uppercase
            px-3 py-1.5 rounded-lg border border-white/[0.07]
            ${a.btn}
            transition-all duration-200
          `}
        >
          {expanded ? (
            <>
              Show Less <FiChevronUp className="text-sm" />
            </>
          ) : (
            <>
              Read More <FiChevronDown className="text-sm" />
            </>
          )}
        </button>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`
                px-2.5 py-1 rounded-md
                border text-[11px] font-bold tracking-wide
                ${a.tag}
                transition-colors duration-150
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-4 py-2 rounded-xl
              border border-white/[0.1] bg-white/[0.04]
              text-white/60 hover:text-white hover:bg-white/[0.09]
              text-xs font-bold tracking-wide uppercase
              transition-all duration-200
            "
          >
            <FiGithub className="text-base" />
            Source Code
          </a>

          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2
                px-4 py-2 rounded-xl
                border ${a.tag}
                text-xs font-bold tracking-wide uppercase
                transition-all duration-200
                hover:opacity-80
              `}
            >
              <FiExternalLink className="text-base" />
              Live Demo
            </a>
          ) : (
            <span
              className="
                flex items-center gap-2
                px-4 py-2 rounded-xl
                border border-white/[0.05]
                text-white/20 text-xs font-bold tracking-wide uppercase
                cursor-not-allowed select-none
              "
            >
              <FiExternalLink className="text-base" />
              Private
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
