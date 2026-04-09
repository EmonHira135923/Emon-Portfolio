"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import NavLink from "./NavLink";

const Navvar = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top cyan glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Glass layer */}
      <div className="absolute inset-0 bg-[#050508]/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]" />

      <nav className="relative z-10 flex items-center justify-between px-8 py-3.5 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="group flex items-baseline">
          <span className="text-xl font-black tracking-tighter text-white/90 group-hover:text-white transition-colors duration-200">
            Emon
          </span>
          <span className="text-xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,200,255,0.6)] group-hover:drop-shadow-[0_0_18px_rgba(0,200,255,0.9)] transition-all duration-200">
            .io
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* GitHub CTA */}
        <Link
          href="https://github.com/EmonHira135923"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-lg
            text-white/70 border border-white/10 bg-white/[0.03]
            hover:text-white hover:border-cyan-400/30 hover:bg-cyan-500/[0.07]
            hover:shadow-[0_0_20px_rgba(0,200,255,0.08)]
            transition-all duration-200"
        >
          <FaGithub className="text-sm" />
          <span>GitHub</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navvar;
