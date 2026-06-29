import { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap from "gsap";

const CARD_W = 200;
const CARD_H = 320;
const CARD_SCALE = 1.35;

const CarouselCard = ({ project, onHoverStart, onHoverEnd }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);

  const onEnter = () => {
    onHoverStart?.();

    gsap.to(cardRef.current, {
      width: CARD_W * CARD_SCALE,
      height: CARD_H * CARD_SCALE,
      duration: 0.45,
      ease: "power3.out",
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.25,
      ease: "power3.out",
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: visible,
        cursor: pointer,
      }}
      className="relative"
    >
      {/* Title Panel         */}
      <div
        style={{
          bottom: "calc(100% + 3rem)",
        }}
        className="title_panel absolute left-0 pointer-events-none flex flex-col gap-[1rem]"
      >
        <TextReveal ref={numberRef} trigger="manual" splitBy="chars">
          <h3 classname="font-mono text-[1rem] text-black">{project.number}</h3>
        </TextReveal>
        <TextReveal ref={titleRef} trigger="manual" splitBy="lines">
          <h3 classname="font-mono text-[1rem] text-black">{project.title}</h3>
        </TextReveal>
      </div>

      {/* Image */}
      <div className="imageDiv absolute h-full w-full overflow-hidden">
        <img
          style={{ transformOrigin: "center center", userSelect: "none" }}
          className="h-full w-full object-cover"
          ref={imageRef}
          src={project.coverImage}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
