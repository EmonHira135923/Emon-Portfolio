"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide rounded-lg transition-all duration-200 group
        ${
          isActive
            ? "text-white bg-gradient-to-br from-cyan-500/10 to-purple-500/5 border border-cyan-400/20"
            : "text-white/40 hover:text-white/80 hover:bg-white/[0.04]"
        }`}
    >
      {isActive && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-px bg-cyan-400/70 rounded-full" />
      )}
      {children}
    </Link>
  );
};

export default NavLink;
