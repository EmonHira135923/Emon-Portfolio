"use client";
import React from "react";
import Navvar from "./Navvar";

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <Navvar />
      </header>
    </div>
  );
};

export default Header;
