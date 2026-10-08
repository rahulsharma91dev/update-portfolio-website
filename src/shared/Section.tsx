import type { ReactNode } from "react";

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section__inner">{children}</div>
    </section>
  );
}

export function SectionHead({ id, index, label, title, accent }: {
  id: string; index: string; label: string; title: string; accent: string;
}) {
  return (
    <header className="section-head" data-reveal>
      <p className="section-head__label">{index} — {label}</p>
      <h2 id={`${id}-title`} className="section-head__title">
        {title} <span className="u-accent">{accent}</span>
      </h2>
    </header>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((x) => (<li key={x} className="chips__item">{x}</li>))}
    </ul>
  );
}
