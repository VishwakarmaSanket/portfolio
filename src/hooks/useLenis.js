"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Keep ScrollTrigger in sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker instead of requestAnimationFrame
    const update = (time) => {
      lenis.raf(time * 1000); // GSAP time is in seconds, Lenis expects milliseconds
    };

    gsap.ticker.add(update);

    // Prevent GSAP lag smoothing from affecting Lenis
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger positions
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}
