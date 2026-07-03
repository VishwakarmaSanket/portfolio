"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextReveal from "@/components/TextReveal";

const Title = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Fade in and bounce the scroll indicator after the text reveal
      gsap.fromTo(
        ".gsap-scroll-indicator",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" },
      );

      // Subtle pulse on the glow
      gsap.to(".gsap-glow", {
        scale: 1.1,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="gsap-glow w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-teal-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
      </div>

      {/* Main Text Content */}
      <div className="relative z-10 flex flex-col items-center">
        <TextReveal
          className="text-[4rem] md:text-[6rem] lg:text-[6rem] leading-none text-white font-sans uppercase tracking-tight font-black text-center"
          style={{
            WebkitTextStroke: "1px currentColor",
          }}
          splitBy="words"
          duration={0.8}
        >
          Sanket Vishwakarma
        </TextReveal>
        <TextReveal
          className="text-[1rem] md:text-[1.3rem] tracking-[0.1em] md:tracking-[0.2em] font-normal text-neutral-400 leading-none mt-6 font-sans font-regular uppercase text-center"
          splitBy="words"
          duration={0.8}
        >
          UX/UI Designer • Creative Full-Stack Developer
        </TextReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="gsap-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500">
          Scroll to explore
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default Title;
