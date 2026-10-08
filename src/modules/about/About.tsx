import { profile } from "@/data/profile";
import { Section, SectionHead } from "@/shared/Section";

export default function About() {
  const a = profile.about;
  return (
    <Section id="about">
      <SectionHead id="about" index="01" label="About Me" title="Who I" accent="am" />
      <p className="lead" data-reveal>{a.summary}</p>
      <ol className="grid" data-reveal>
        {a.roles.map((r) => (
          <li className="card" key={r.period}>
            <h3 className="card__title">{r.title}</h3>
            <p className="card__meta">{r.org} · {r.note}</p>
            <p className="card__meta card__meta--accent">{r.period}</p>
          </li>
        ))}
      </ol>
      <div className="grid" data-reveal>
        <div className="card"><h3 className="card__label">Education</h3>{a.education.map((x) => (<p className="card__meta" key={x}>{x}</p>))}</div>
        <div className="card"><h3 className="card__label">Awards</h3>{a.awards.map((x) => (<p className="card__meta" key={x}>{x}</p>))}</div>
        <div className="card"><h3 className="card__label">Languages</h3>{a.languages.map((x) => (<p className="card__meta" key={x}>{x}</p>))}</div>
      </div>
    </Section>
  );
}
