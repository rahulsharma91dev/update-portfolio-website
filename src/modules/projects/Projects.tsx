import { profile } from "@/data/profile";
import { remoteProjects } from "@/data/remote-projects";
import { Chips, Section, SectionHead } from "@/shared/Section";
import RemoteProject from "./RemoteProject";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHead id="projects" index="03" label="Projects" title="Things I've" accent="built" />
      <div className="grid" data-reveal>
        {profile.projects.map((p) => (
          <article className="card card--project" key={p.no}>
            <p className="card__label">{p.no}</p>
            <h3 className="card__title">{p.title}</h3>
            <p className="card__meta">{p.text}</p>
            <Chips items={p.tags} />
          </article>
        ))}
      </div>
      {remoteProjects.length === 0 ? <RemoteProject /> : remoteProjects.map((r) => <RemoteProject key={r.id} project={r} />)}
    </Section>
  );
}
