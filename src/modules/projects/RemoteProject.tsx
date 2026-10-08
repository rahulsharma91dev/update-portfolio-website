import type { RemoteProject as Remote } from "@/data/remote-projects";

/** Micro-frontend slot: loads a separately deployed app by URL. */
export default function RemoteProject({ project }: { project?: Remote }) {
  if (!project) {
    return (
      <div className="remote-slot" data-reveal>
        <h3 className="card__title">Remote module slot</h3>
        <p className="card__meta">
          Your separate project loads here. Set NEXT_PUBLIC_PROJECTS_REMOTE_URL to its deployed URL.
        </p>
      </div>
    );
  }
  return (
    <div className="remote-slot remote-slot--live" data-reveal>
      <h3 className="card__title">{project.title}</h3>
      <iframe
        className="remote-slot__frame"
        src={project.url}
        title={project.title}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
}
