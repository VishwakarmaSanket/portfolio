import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar relative h-[9vh] flex-center">
      <div className="nav_mid w-[20%] flex items-center justify-between gap-5">
        <h1 className="nav-text">Work</h1>
        <h1 className="nav-text">About</h1>
        <h1 className="nav-text">Resume</h1>
      </div>
      <div className="nav_right absolute right-4 px-6 py-2 border border-zinc-700 rounded-full">
        <h1 className="text-[0.8rem]">LET'S CONNECT</h1>
      </div>
    </div>
  );
};

export default Navbar;
