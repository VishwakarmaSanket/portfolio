"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const fadeElements = gsap.utils.toArray(".gsap-fade-up-footer");
    
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Stagger column links
    gsap.fromTo(
      ".gsap-footer-col",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gsap-footer-links-container",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-24">
          {/* Left Section */}

          <div>
            <h2 className="gsap-fade-up-footer text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-white">
              Let's build
              <br />
              <span className="text-neutral-500">something</span> meaningful.
            </h2>

            <p className="gsap-fade-up-footer mt-8 max-w-lg text-lg text-neutral-500 leading-relaxed">
              Building thoughtful digital experiences through design, code and
              storytelling.
            </p>

            <p className="gsap-fade-up-footer mt-20 text-sm text-neutral-400">
              © Sanket Vishwakarma 2026
            </p>
          </div>

          {/* Right Section */}

          <div className="gsap-footer-links-container grid grid-cols-3 gap-12">
            {/* Navigation */}

            <div className="gsap-footer-col">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-8 font-semibold">
                Navigation
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="group flex items-center gap-2 text-neutral-400 transition-all duration-300 hover:text-white"
                >
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                  <span className="-translate-x-4 transition-all duration-300 group-hover:translate-x-0">
                    Work
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="group flex items-center gap-2 text-neutral-400 transition-all duration-300 hover:text-white"
                >
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                  <span className="-translate-x-4 transition-all duration-300 group-hover:translate-x-0">
                    About
                  </span>
                </Link>

                <Link
                  href="/resume"
                  className="group flex items-center gap-2 text-neutral-400 transition-all duration-300 hover:text-white"
                >
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                  <span className="-translate-x-4 transition-all duration-300 group-hover:translate-x-0">
                    Resume
                  </span>
                </Link>
              </div>
            </div>

            {/* Socials */}

            <div className="gsap-footer-col">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-8 font-semibold">
                Socials
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-neutral-400 transition-all duration-300 hover:text-white"
                >
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    ↗
                  </span>
                  <span className="-translate-x-4 transition-all duration-300 group-hover:translate-x-0">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-neutral-400 transition-all duration-300 hover:text-white"
                >
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    ↗
                  </span>
                  <span className="-translate-x-4 transition-all duration-300 group-hover:translate-x-0">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-neutral-400 transition-all duration-300 hover:text-white"
                >
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    ↗
                  </span>
                  <span className="-translate-x-4 transition-all duration-300 group-hover:translate-x-0">
                    X / Twitter
                  </span>
                </a>
              </div>
            </div>

            {/* Contact */}

            <div className="gsap-footer-col">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-8 font-semibold">
                Contact
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:sanket@example.com"
                  className="group flex items-center gap-2 text-neutral-400 transition-all duration-300 hover:text-white"
                >
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                  <span className="-translate-x-4 transition-all duration-300 group-hover:translate-x-0">
                    Email
                  </span>
                </a>

                <span className="text-neutral-400 pt-2 border-t border-white/5 w-fit">Pune, MH</span>
                <span className="text-neutral-400">Available for freelance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}

        <div className="gsap-fade-up-footer mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            Designed & Developed by Sanket Vishwakarma
          </p>

          <p className="text-sm text-neutral-500">
            Crafted with Next.js, GSAP & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
