"use client";
import { sections, SECTION_IDS } from "@/data/sections";
import Icon from "@/shared/Icon";
import { scrollToSection } from "@/shared/scroll";
import { useScrollEngine } from "@/shared/useScrollEngine";

export default function RightNav() {
  const { active } = useScrollEngine(SECTION_IDS);
  return (
    <>
      <div className="progress" aria-hidden="true"><div className="progress__bar" /></div>
      <nav className="nav-dock" aria-label="Page sections">
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`nav-dock__btn${active === s.id ? " nav-dock__btn--active" : ""}`}
            aria-label={s.label}
            aria-current={active === s.id ? "true" : undefined}
            onClick={() => scrollToSection(s.id)}
          >
            <Icon name={s.icon} />
            <span className="nav-dock__tip">{s.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
