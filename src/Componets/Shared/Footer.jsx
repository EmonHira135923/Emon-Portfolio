import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaCode,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/20 backdrop-blur-xl text-white pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter">
              Emon<span className="text-cyan-500">.io</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              &copy; {currentYear} Emon. All rights reserved.
            </p>
          </div>

          {/* Programming Platforms */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              Problem Solving
            </span>
            <div className="flex gap-5 text-xl text-gray-400">
              <a
                href="#"
                target="_blank"
                className="hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="Codeforces"
              >
                <SiCodeforces />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-amber-600 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="CodeChef"
              >
                <SiCodechef />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="LeetCode"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              Social Connect
            </span>
            <div className="flex gap-5 text-xl">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-pink-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-[12px] text-gray-500 tracking-wide uppercase">
            Built with Passion • MERN Stack • Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
