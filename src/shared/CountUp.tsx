"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "./gsap";

export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    setN(0);
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 92%",
      once: true,
      onEnter: () => {
        const o = { v: 0 };
        gsap.to(o, { v: value, duration: 1.6, ease: "power2.out", onUpdate: () => setN(Math.round(o.v)) });
      },
    });
    return () => st.kill();
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
}
