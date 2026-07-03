"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2,
    });
  }, { scope: headerRef });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
      <nav
        className={`
          grid grid-cols-3 items-center
          rounded-full
          border
          px-6 py-3
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#1A1A1A]/90 border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              : "bg-[#1A1A1A]/75 border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          }
        `}
      >
        {/* Logo — left */}
        <div className="flex items-center">
          <Link href="/" className="group">
            <Image
              src="/SV1.png"
              alt="SV Logo"
              width={36}
              height={36}
              className="h-9 w-9 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 invert opacity-80"
            />
          </Link>
        </div>

        {/* Nav links — center */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="group relative flex flex-col items-center gap-[3px]"
              >
                <span
                  className={`text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 group-hover:text-white"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`h-px bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA — right */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/contact"
            className="
              group hidden md:inline-flex items-center gap-1.5
              rounded-full bg-white
              px-5 py-2 text-xs uppercase tracking-[0.18em] text-black
              border border-zinc-600
              transition-all duration-300
              hover:bg-zinc-200 hover:text-black
              hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]
              hover:scale-[1.03]
            "
          >
            Let's Connect
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-[5px] p-1"
          >
            <span
              className={`block h-[1.5px] w-5 bg-white origin-center transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white origin-center transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`
          md:hidden mt-2 mx-1
          rounded-2xl border border-white/10
          bg-[#1A1A1A]/90 backdrop-blur-2xl
          overflow-hidden
          transition-all duration-500
          ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col px-8 py-5 gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs uppercase tracking-[0.18em] transition-colors duration-200 ${
                pathname === href ? "text-white" : "text-zinc-500"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.18em] text-white font-medium"
            >
              Let's Connect →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
