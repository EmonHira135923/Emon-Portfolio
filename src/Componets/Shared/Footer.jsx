import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import {
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/hawladar76/",
      label: "Instagram",
      hover:
        "hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-500/[0.07]",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/emon135923/",
      label: "LinkedIn",
      hover:
        "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/[0.07]",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/Emon1359",
      label: "Facebook",
      hover:
        "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-500/[0.07]",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/hira_bd",
      label: "Twitter",
      hover:
        "hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/[0.07]",
    },
  ];

  const platforms = [
    {
      icon: <SiCodeforces />,
      href: "https://codeforces.com/profile/Emon_135923",
      label: "Codeforces",
      hover:
        "hover:text-orange-400 hover:border-orange-400/30 hover:bg-orange-500/[0.07]",
    },
    {
      icon: <SiCodechef />,
      href: "https://www.codechef.com/users/emonhira135923",
      label: "CodeChef",
      hover:
        "hover:text-amber-500 hover:border-amber-400/30 hover:bg-amber-500/[0.07]",
    },
    {
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/EmonHira135923/",
      label: "LeetCode",
      hover:
        "hover:text-yellow-400 hover:border-yellow-400/30 hover:bg-yellow-500/[0.07]",
    },
    {
      icon: <SiHackerrank />,
      href: "https://www.hackerrank.com/profile/emonhossainhira1",
      label: "HackerRank",
      hover:
        "hover:text-yellow-400 hover:border-yellow-400/30 hover:bg-yellow-500/[0.07]",
    },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative w-full bg-[#050508] overflow-hidden border-t border-white/[0.06]">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Glass layer */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-2xl pointer-events-none" />

      {/* Ambient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-baseline">
              <span className="text-2xl font-black tracking-tighter text-white/90">
                Emon
              </span>
              <span className="text-2xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]">
                .io
              </span>
            </Link>
            <p className="text-white/30 text-xs leading-relaxed max-w-[200px]">
              Full Stack Developer crafting fast, modern web experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">
                Available for work
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 text-sm font-medium hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:bg-cyan-400/60 group-hover:w-4 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Problem Solving */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              Problem Solving
            </p>
            <div className="flex flex-col gap-2">
              {platforms.map(({ icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-3 py-2 rounded-lg border border-white/[0.07] bg-white/[0.03] text-white/40 text-sm transition-all duration-200 w-fit ${hover}`}
                >
                  <span className="text-base">{icon}</span>
                  <span className="text-xs font-semibold">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              Social Connect
            </p>
            <div className="flex flex-col gap-2">
              {socials.map(({ icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-3 py-2 rounded-lg border border-white/[0.07] bg-white/[0.03] text-white/40 text-sm transition-all duration-200 w-fit ${hover}`}
                >
                  <span className="text-base">{icon}</span>
                  <span className="text-xs font-semibold">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[11px] tracking-widest uppercase">
            &copy; {currentYear} Emon Hossain Hira. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px] tracking-widest uppercase">
            Built with MERN Stack &bull; Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
