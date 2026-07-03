"use client";

import { useRef, useState } from "react";
import gsap from "@/libs/gsap";
import { useGSAP } from "@/libs/gsap";
import ProjectCard from "./ProjectCard";

const CardWrapper = ({ projects }) => {
  const wrapperRef = useRef(null);
  const cursorRef = useRef(null);

  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (e) => {
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.15,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const showCursor = () => {
    setCursorVisible(true);
  };

  const hideCursor = () => {
    setCursorVisible(false);
  };

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.5,
            opacity: 0.2,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: wrapperRef },
  );

  return (
    <section
      ref={wrapperRef}
      className="min-h-screen py-[4rem] flex flex-col items-center justify-center bg-[#121212] mt-[4rem]"
    >
      {cursorVisible && (
        <div
          ref={cursorRef}
          className="
            fixed
            top-0
            left-0
            z-[99999]
            pointer-events-none
            h-fit
            w-fit
            py-[0.3rem]
            px-[1rem]
            rounded-full
            bg-black/90
            text-white
            flex
            items-center
            justify-center
            text-xs
            uppercase
            tracking-[0.15em]
            font-medium
            -translate-x-1/2
            -translate-y-1/2
            shadow-[0_10px_30px_rgba(197,237,248,0.6)]
          "
        >
          ↗ View Project
        </div>
      )}

      <h1 className="uppercase text-[1.8rem] font-heading tracking-wider font-medium text-neutral-400 mb-16">
        My Projects
      </h1>

      <div className="stage relative w-full h-full flex flex-col items-center justify-center gap-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            showCursor={showCursor}
            hideCursor={hideCursor}
            handleMouseMove={handleMouseMove}
          />
        ))}
      </div>
    </section>
  );
};

export default CardWrapper;
