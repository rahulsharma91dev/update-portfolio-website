export const sections = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About Me", icon: "user" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "contact", label: "Contact Us", icon: "mail" },
] as const;
export const SECTION_IDS: string[] = sections.map((s) => s.id);
