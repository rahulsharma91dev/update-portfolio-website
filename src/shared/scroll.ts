import type Lenis from "lenis";

// Single place that knows how to scroll to a section (no URL hash is ever added).
let instance: Lenis | null = null;

export function registerLenis(l: Lenis | null) {
  instance = l;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (instance) {
    instance.scrollTo(el, { duration: 1.4, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
