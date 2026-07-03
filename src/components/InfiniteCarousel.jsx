"use client";
import { useEffect, useRef } from "react";
import CarouselCard from "./CarouselCard";
import gsap from "gsap";

const CARD_W = 300;
const CARD_H = 420;
const CARD_SCALE = 1.35;
const CARD_GAP = 4;

const TRACK_DURATION = 15;
const TRACK_H = CARD_H * CARD_SCALE;

const InfiniteCarousel = ({ projects }) => {
  const doubled = [...projects, ...projects];

  const trackRef = useRef(null);
  const twinRef = useRef(null);

  useEffect(() => {
    const singleWidth = trackRef.current.scrollWidth / 2;

    twinRef.current = gsap.to(trackRef.current, {
      x: -singleWidth,
      ease: "none",
      duration: TRACK_DURATION,
      repeat: -1,
    });

    return () => {
      twinRef.current?.kill();
    };
  }, [projects]);

  return (
    <div
      style={{
        padding: `${TRACK_H * 0.2}px 0 24px`,
      }}
      className="overflow-hidden"
    >
      <div
        style={{
          gap: `${CARD_GAP}px`,
          width: "max-content",
          height: `${TRACK_H}px`,
        }}
        ref={trackRef}
        className="track flex items-center"
      >
        {doubled.map((project, i) => {
          return (
            <CarouselCard
              key={i}
              project={project}
              onHoverStart={() => {
                twinRef.current?.pause();
              }}
              onHoverEnd={() => {
                twinRef.current?.play();
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
