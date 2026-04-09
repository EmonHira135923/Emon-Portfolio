"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Engineer",
  "Competitive Programmer",
  "Diploma Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed((p) => p + current[charIndex]);
          setCharIndex((c) => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed((p) => p.slice(0, -1));
          setCharIndex((c) => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#050508] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-15%] w-[600px] h-[600px] bg-cyan-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/[0.07] rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-cyan-400/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-28">
        {/* LEFT */}
        <div className="flex-1 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-cyan-400 text-[11px] font-bold tracking-[0.18em] uppercase">
              Open to Work — Omni Katalyst
            </span>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <p className="text-white/30 text-xs font-semibold tracking-[0.25em] uppercase">
              👋 Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.95]">
              <span className="text-white">Emon Hossain</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Hira
              </span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="flex items-center gap-2 h-8">
            <span className="text-base md:text-lg font-semibold text-white/60 font-mono tracking-wide">
              {displayed}
            </span>
            <span className="w-[2px] h-5 bg-cyan-400 rounded-full animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-white/35 text-sm leading-[1.85] max-w-[480px]">
            Diploma student in Computer Science & Technology with a strong
            foundation in C, C++, Python, basic Data Structures, PHP,
            JavaScript, HTML, CSS, Tailwind, and React. Currently advancing
            full-stack skills in Node.js, MongoDB, Laravel, Firebase, and
            Next.js. Prior experience in problem-solving on Codechef,
            Codeforces, and HackerRank. Working at Omni Katalyst with 5 months
            of professional experience. Highly motivated, committed to
            continuous learning, and passionate about building real-world
            projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/projects"
              className="group relative px-7 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold overflow-hidden hover:shadow-[0_0_32px_rgba(0,200,255,0.3)] transition-all duration-300"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>

            <Link
              href="https://drive.google.com/file/d/1WeBzAAhZqlTyX9jS908D1vE_jNItkgji/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white/60 text-sm font-bold hover:border-cyan-400/25 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          {/* Spinning dashed ring */}
          <div
            className="absolute w-[310px] h-[310px] md:w-[370px] md:h-[370px] rounded-full border border-dashed border-cyan-500/15 animate-spin"
            style={{ animationDuration: "20s" }}
          />

          {/* Static outer ring */}
          <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-white/[0.06]" />

          {/* Glow */}
          <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-cyan-500/15 to-purple-500/15 blur-2xl" />

          {/* Photo */}
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/[0.08] shadow-[0_0_80px_rgba(0,200,255,0.12)]">
            <Image
              src="/Emon-image.jpeg"
              alt="Emon Hossain Hira"
              fill
              className="object-cover object-top scale-105"
              priority
            />
          </div>

          {/* Available badge */}
          <div className="absolute -bottom-1 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0c0c18] border border-cyan-400/20 shadow-[0_0_20px_rgba(0,200,255,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70 text-[11px] font-semibold">
              Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
