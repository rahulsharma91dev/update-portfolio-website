import { profile } from "@/data/profile";
import { Chips, Section, SectionHead } from "@/shared/Section";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHead id="skills" index="02" label="Skills" title="What I" accent="work with" />
      <div className="row g-3" data-reveal>
        {profile.skills.map((g) => (
          <div className="col-12 col-sm-6 col-xl-4" key={g.title}><div className="card">
            <h3 className="card__label">{g.title}</h3>
            <Chips items={g.items} />
          </div></div>
        ))}
      </div>
    </Section>
  );
}
