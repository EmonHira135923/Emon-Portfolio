"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

      {/* Glass layer */}
      <div
        className={`absolute inset-0 transition-all duration-300 border-b border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.5)] ${isOpen ? "bg-[#050508]" : "bg-[#050508]/80 backdrop-blur-2xl"}`}
      />

      {/* ── Desktop + Tablet nav bar ── */}
      <nav className="relative z-10 flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-3 sm:py-3.5 md:py-4 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          className="group flex items-baseline flex-shrink-0"
        >
          <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-black tracking-tighter text-white/90 group-hover:text-white transition-colors duration-200">
            Emon
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,200,255,0.6)] group-hover:drop-shadow-[0_0_18px_rgba(0,200,255,0.9)] transition-all duration-200">
            .io
          </span>
        </Link>

        {/* Desktop links — hidden below md */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right: GitHub + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub — hidden on xs, shown sm+ */}
          <Link
            href="https://github.com/EmonHira135923"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 md:gap-2
              px-3 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-2.5
              text-[11px] sm:text-xs md:text-sm lg:text-[15px]
              font-semibold rounded-lg
              text-white/70 border border-white/10 bg-white/[0.03]
              hover:text-white hover:border-cyan-400/30 hover:bg-cyan-500/[0.07]
              transition-all duration-200"
          >
            <FaGithub className="text-sm md:text-base" />
            <span>GitHub</span>
          </Link>

          {/* Hamburger — shown below md */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 bg-white/[0.04] text-white/70 hover:text-cyan-400 hover:border-cyan-400/20 transition-all duration-200"
          >
            {isOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#050508] border-b border-white/[0.07]
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        {/* Inner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />

        <div className="flex flex-col px-5 sm:px-8 py-5 gap-1.5">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={close}
                className={`px-4 py-3.5 sm:py-4 rounded-xl
                  text-sm sm:text-base
                  font-semibold text-center tracking-wide
                  transition-all duration-200
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-cyan-500/10 to-purple-500/5 border border-cyan-400/15"
                      : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                  }`}
              >
                {label}
              </Link>
            );
          })}

          {/* GitHub inside mobile menu */}
          <Link
            href="https://github.com/EmonHira135923"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-2 flex items-center justify-center gap-2
              px-4 py-3 sm:py-3.5 rounded-xl
              border border-white/10 bg-white/[0.03]
              text-white/60 text-sm sm:text-base font-semibold
              hover:border-cyan-400/25 hover:text-white
              transition-all duration-200"
          >
            <FaGithub className="text-base sm:text-lg" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
