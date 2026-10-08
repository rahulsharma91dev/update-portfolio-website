import type { ReactNode } from "react";

const PATHS: Record<string, ReactNode> = {
  home: <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>),
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />,
  grid: (<><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  linkedin: <path d="M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M10 9h4v2c1-2 6-3 6 2v7h-4v-6c0-3-2-2-2 0v6h-4z" />,
  github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.5-1.6 6.5-7.1A5.5 5.5 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.5 5.5 0 0 0-1.5 3.8c0 5.5 3.3 6.7 6.5 7.1a3.4 3.4 0 0 0-1 2.6V22" />,
  download: <path d="M12 3v12m-5-5l5 5 5-5M5 21h14" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({ name, size = 18 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
