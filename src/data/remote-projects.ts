// Micro-frontend registry: every entry is a separately built and deployed app.
// Add more entries later; the Projects section renders each one.
export interface RemoteProject {
  id: string;
  title: string;
  url: string; // full URL of the deployed remote
}
const remoteUrl = process.env.NEXT_PUBLIC_PROJECTS_REMOTE_URL;
export const remoteProjects: RemoteProject[] = remoteUrl
  ? [{ id: "main-project", title: "Featured project", url: remoteUrl }]
  : [];
