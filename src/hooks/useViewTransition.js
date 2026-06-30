import { useRouter } from "next/navigation";
import { useCallback } from "react";
import gsap from "gsap";

const STRIP_COUNT = 7;

const createStrips = () => {
  const overlay = document.createElement("div");

  overlay.id = "page-transition-overlay";

  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    display: flex;
  `;

  for (let i = 0; i < STRIP_COUNT; i++) {
    const strip = document.createElement("div");

    strip.style.cssText = `
      flex: 1;
      height: 100%;
      background-color: #010101;
      transform: scaleY(0);
      transform-origin: bottom;
    `;

    overlay.appendChild(strip);
  }

  document.body.appendChild(overlay);

  return overlay;
};

const removeOverlay = () => {
  const element = document.getElementById("page-transition-overlay");

  if (element) {
    element.remove();
  }
};

const useViewTransition = () => {
  const router = useRouter();

  const navigateTo = useCallback(
    (href) => {
      removeOverlay();

      const overlay = createStrips();
      const strips = Array.from(overlay.children);

      gsap.to(strips, {
        scaleY: 1,
        duration: 0.58,
        ease: "power3.inOut",
        stagger: {
          each: 0.06,
          from: "center",
        },
        onComplete: () => {
          router.push(href);

          gsap.to(strips, {
            scaleY: 0,
            duration: 0.67,
            ease: "power3.inOut",
            delay: 0.12,
            stagger: {
              each: 0.06,
              from: "center",
            },
            transformOrigin: "top",
            onComplete: removeOverlay,
          });
        },
      });
    },
    [router],
  );

  return {
    navigateTo,
  };
};

export default useViewTransition;
