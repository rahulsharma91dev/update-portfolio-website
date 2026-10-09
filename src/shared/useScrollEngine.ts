"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { registerLenis } from "./scroll";

/**
 * Third-party animation layer (scroll only):
 *  - Lenis  -> smooth scrolling + animated jump when a nav icon is clicked
 *  - GSAP ScrollTrigger -> active-section tracking, progress bar, reveal-on-scroll
 */
export function useScrollEngine(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    // single-page site: never keep a #section in the address bar
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) setActive(id);
        },
      });
    });

    const bar = document.querySelector<HTMLElement>(".progress__bar");
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (bar) bar.style.transform = `scaleX(${self.progress})`;
      },
    });

    if (reduce) {
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }

    document.documentElement.classList.add("js-anim");

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    registerLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.batch("[data-reveal]", {
      start: "top 88%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          overwrite: true,
        }),
    });
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      registerLenis(null);
      document.documentElement.classList.remove("js-anim");
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [ids]);

  return { active };
}
