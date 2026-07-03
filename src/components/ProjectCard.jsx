"use client";
import React, { forwardRef, useRef, useState } from "react";
import useViewTransition from "@/hooks/useViewTransition";

const ProjectCard = forwardRef(
  ({ project, showCursor, hideCursor, handleMouseMove }, ref) => {
    const { navigateTo } = useViewTransition();
    const handleClick = () => {
      navigateTo(`project/${project.slug}`);
    };

    return (
      <div
        onClick={handleClick}
        onMouseEnter={showCursor}
        onMouseLeave={hideCursor}
        onMouseMove={handleMouseMove}
        className="project-card-wrapper flex items-center justify-center hover:scale-[1.05] *:transition-transform duration-300 cursor-pointer"
      >
        <div
          ref={ref}
          // bg-gradient-to-br from-[#c5edf8] via-[#d8f3fb] to-[#eefafe]
          className="project-card h-[60vh] w-[66vw] bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden flex flex-col items-center shadow-lg"
        >
          <div className="card-top w-full h-[18%]">
            <h1 className="uppercase text-[1rem] font-sans text-neutral-500 tracking-wider px-[3rem] py-[2rem]">
              {project.id} | {project.role}
            </h1>
          </div>

          <div className="card-main w-full h-[82%] flex items-center">
            <div className="card-left w-[40%] h-full">
              <img
                className="h-full w-full object-cover rounded-tr-3xl"
                src={project.coverImage}
                alt=""
              />
            </div>

            <div className="card-right h-full w-[60%] flex flex-col justify-start px-[3rem] py-[3rem]">
              <h1 className="text-[2.4rem] font-medium text-white">
                {project.title}
              </h1>

              <h3 className="text-[1.2rem] font-extralight text-neutral-400">
                {project.subtitle}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
