import { useRef, useEffect } from "react";

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to a ref and animates the element
 * in when it enters the viewport.
 *
 * @param {"up" | "left" | "right" | "fade"} direction - Initial transform direction
 * @param {number} delay - Transition delay in seconds
 * @returns {React.RefObject} - Attach to the element you want to animate
 */
function useScrollReveal(direction = "up", delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const transforms = {
      up:    "translateY(44px)",
      left:  "translateX(-44px)",
      right: "translateX(44px)",
      fade:  "scale(.97)",
    };

    el.style.opacity   = "0";
    el.style.transform = transforms[direction] ?? transforms.up;
    el.style.transition = [
      `opacity .75s cubic-bezier(.22,.61,.36,1) ${delay}s`,
      `transform .75s cubic-bezier(.22,.61,.36,1) ${delay}s`,
    ].join(", ");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);

  return ref;
}

export default useScrollReveal;
