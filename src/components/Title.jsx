"use client";
import React, { useRef } from "react";
import TextReveal from "@/components/TextReveal";

const Title = () => {
  // const triggerRef = useRef(null);

  // const handleHoverEnter = () => {
  //   triggerRef.current?.play();
  // };

  // const handleHoverLeave = () => {
  //   triggerRef.current?.reverse();
  // };

  return (
    <div className="h-[60vh] w-full flex items-center justify-center border=[0.4px] ">
      <div
        // onPointerEnter={handleHoverEnter}
        // onPointerLeave={handleHoverLeave}
        className="flex flex-col items-center"
      >
        <TextReveal
          className="text-[6rem]  leading-none text-[#494949] font-sans uppercase tracking-tight font-black text-8xl"
          style={{
            WebkitTextStroke: "1px currentColor",
          }}
          splitBy="words"
          duration={0.8}
        >
          Sanket Vishwakarma
        </TextReveal>
        <TextReveal
          className="text-[1.3rem] tracking-[0.08em] font-normal text-zinc-600 leading-none mt-5  font-sans font-regular uppercase"
          splitBy="words"
          duration={0.8}
        >
          UX/UI Designer • Creative Full-Stack Developer
        </TextReveal>
      </div>
    </div>
  );
};

export default Title;
