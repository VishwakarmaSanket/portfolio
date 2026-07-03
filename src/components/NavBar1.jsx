import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full h-[4.5rem] bg-[#121212] flex items-center justify-center gap-[4rem] px-[6rem]">
      <div className="nav-left w-fit h-fit flex-1/6 items-center justify-center ">
        <Image
          src="/SV1.png"
          alt="SV Logo"
          width={40}
          height={40}
          className="h-10 w-10 invert opacity-80"
        />
      </div>
      <div className="nav-mid flex-4/6 flex items-center justify-center gap-[1.6rem]">
        <h1 className="nav-text">Work</h1>
        <h1 className="nav-text">About</h1>
        <h1 className="nav-text">Resume</h1>
      </div>
      <div className="nav-right flex-1/6 flex items-center justify-center border border-zinc-600 py-[0.4rem] rounded-full">
        <h1 className="nav-text">Let's connect</h1>
      </div>
    </nav>
  );
};

export default Navbar;
