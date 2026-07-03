"use client";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import TextReveal from "./TextReveal";
import useViewTransition from "@/hooks/useViewTransition";
import { projects } from "@/data/projects";

const CARD_W = 300;
const CARD_H = 420;
const CARD_SCALE = 1.35;

const CarouselCard = ({ project, onHoverStart, onHoverEnd }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);

  const onEnter = () => {
    onHoverStart?.();

    gsap.killTweensOf(cardRef.current);

    gsap.to(cardRef.current, {
      height: CARD_H * CARD_SCALE,
      width: CARD_W * CARD_SCALE,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power3.in",
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.killTweensOf(cardRef.current);

    gsap.to(cardRef.current, {
      height: CARD_H,
      width: CARD_W,
      duration: 0.25,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.6,
      duration: 0.3,
      ease: "power3.out",
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  const { navigateTo } = useViewTransition();

  const handleClick = () => {
    navigateTo(`project/${project.slug}`);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: "visible",
        cursor: "pointer",
        willChange: "transform",
      }}
      className="relative"
    >
      {/* Title Panel         */}
      <div
        style={{
          bottom: "calc(100% + 3rem)",
        }}
        className="title_panel absolute z-20  left-0 pointer-events-none flex flex-col gap-[0.6rem]"
      >
        <TextReveal ref={numberRef} trigger="manual" splitBy="chars">
          <h3 className="font-mono text-[1.5rem] text-white">
            {project.number}
          </h3>
        </TextReveal>
        <TextReveal ref={titleRef} trigger="manual" splitBy="lines">
          <h3 className="font-mono text-[1rem] text-white">{project.title}</h3>
        </TextReveal>
      </div>

      {/* Image */}
      <div className="imageDiv absolute inset-0 z-10  h-full w-full overflow-hidden">
        <Image
          ref={imageRef}
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default CarouselCard;
