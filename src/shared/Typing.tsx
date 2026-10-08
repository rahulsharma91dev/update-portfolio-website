"use client";
import { useEffect, useState } from "react";

export default function Typing({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0]);
      return;
    }
    let i = 0;
    let j = 0;
    let deleting = false;
    let timer = 0;
    const loop = () => {
      const full = phrases[i];
      j += deleting ? -1 : 1;
      setText(full.slice(0, j));
      let delay = deleting ? 35 : 70;
      if (!deleting && j === full.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % phrases.length;
        delay = 350;
      }
      timer = window.setTimeout(loop, delay);
    };
    timer = window.setTimeout(loop, 500);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return (
    <span className="typing" aria-label={phrases[0]}>
      <span aria-hidden="true">{text}</span>
      <span className="typing__cursor" aria-hidden="true">|</span>
    </span>
  );
}
