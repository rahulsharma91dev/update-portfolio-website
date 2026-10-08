import { profile } from "@/data/profile";
import { Chips, Section, SectionHead } from "@/shared/Section";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHead id="skills" index="02" label="Skills" title="What I" accent="work with" />
      <div className="grid" data-reveal>
        {profile.skills.map((g) => (
          <div className="card" key={g.title}>
            <h3 className="card__label">{g.title}</h3>
            <Chips items={g.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
