import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar h-[9vh] border border-black/30 flex-center">
      <div className="nav w-[24%] flex items-center justify-between gap-5">
        <h1 className="nav-text">Work</h1>
        <h1 className="nav-text">About</h1>
        <h1 className="nav-text">And?</h1>
        <h1 className="nav-text">Resume</h1>
      </div>
    </div>
  );
};

export default Navbar;
