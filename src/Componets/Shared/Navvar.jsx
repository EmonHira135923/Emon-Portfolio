"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";

const Navvar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Glass layer - Desktop-e transparent, kintu Mobile menu open thakle dark hoye jabe */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${isOpen ? "bg-[#050508]" : "bg-[#050508]/80 backdrop-blur-2xl"} border-b border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.5)]`}
      />

      <nav className="relative z-10 flex items-center justify-between px-6 py-3.5 max-w-6xl mx-auto">
        <Link href="/" className="group flex items-baseline">
          <span className="text-xl font-black tracking-tighter text-white/90 group-hover:text-white transition-colors duration-200">
            Emon
          </span>
          <span className="text-xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,200,255,0.6)] group-hover:drop-shadow-[0_0_18px_rgba(0,200,255,0.9)] transition-all duration-200">
            .io
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/EmonHira135923"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-lg text-white/70 border border-white/10 bg-white/[0.03] hover:text-white hover:border-cyan-400/30 hover:bg-cyan-500/[0.07] transition-all duration-200"
          >
            <FaGithub className="text-sm" />
            <span>GitHub</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-cyan-400 transition-colors p-1"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Added Solid Background */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full min-h-fit bg-[#050508] border-b border-white/10 animate-in fade-in slide-in-from-top-2 duration-300 z-50">
          <div className="flex flex-col p-8 gap-6 items-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-cyan-400 text-xl font-medium border-b border-white/5 w-full text-center pb-4"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-cyan-400 text-xl font-medium border-b border-white/5 w-full text-center pb-4"
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-cyan-400 text-xl font-medium border-b border-white/5 w-full text-center pb-4"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-cyan-400 text-xl font-medium border-b border-white/5 w-full text-center pb-4"
            >
              Contact
            </Link>

            <Link
              href="https://github.com/EmonHira135923"
              className="sm:hidden flex items-center gap-2 text-cyan-400 mt-4 text-lg"
            >
              <FaGithub /> GitHub
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navvar;
