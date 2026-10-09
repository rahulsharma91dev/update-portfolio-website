"use client";
import type { ReactNode } from "react";
import { scrollToSection } from "./scroll";

/** Button that smooth-scrolls to a section. Uses no href, so the URL never gets a #hash. */
export default function ScrollLink({ to, className, label, children }: {
  to: string; className?: string; label?: string; children: ReactNode;
}) {
  return (
    <button type="button" className={className} aria-label={label} onClick={() => scrollToSection(to)}>
      {children}
    </button>
  );
}
