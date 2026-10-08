export const profile = {
  name: "Rahul Sharma",
  firstName: "Rahul",
  role: "Senior Frontend Developer",
  location: "New Delhi, India",
  email: "rahulsharma91.dev@gmail.com",
  phone: "+91-7503528883",
  linkedin: "https://www.linkedin.com/in/rahulsharmafe",
  github: "https://github.com/rahulsharma91dev",
  website: "https://www.itsrahulsharma.com",
  cvUrl: "/rahul-sharma-resume.pdf",
  photo: "/rs-image.jpg",
  availability: "Available for Work",
  tagline:
    "Senior Frontend Developer building scalable, responsive UI interfaces with React.js.",
  typing: ["Hey, I'm Rahul", "Senior Frontend Developer", "React.js · TypeScript · Redux"],
  heroIntro:
    "9+ years of frontend experience, including 3+ years of hands-on React.js. I build enterprise healthcare applications and scalable, responsive user interfaces with React.js, TypeScript and Redux.",
  stats: [
    { value: 9, suffix: "+", label: "Years in frontend" },
    { value: 3, suffix: "+", label: "Years in React.js" },
    { value: 5, suffix: "", label: "Developers led" },
  ],
  about: {
    summary:
      "Worked on a large-scale healthcare application for about 5 years, starting with Figma-to-HTML/SCSS implementation and responsive design, then moving into React-based frontend development: reusable functional components, state management, dynamic forms, REST API integration and performance optimization. Comfortable collaborating with development, QA, UX and product teams in Agile/Scrum, and using Generative AI for AI-assisted development.",
    roles: [
      { title: "Associate Consultant", org: "GlobalLogic", note: "ECP 360+", period: "Mar 2023 – Jun 2026" },
      { title: "Senior Software Engineer", org: "GlobalLogic", note: "ECP 360+", period: "Oct 2020 – Feb 2023" },
      { title: "Senior Software Engineer", org: "Chetu India", note: "UI / Frontend", period: "Dec 2016 – Jun 2020" },
    ],
    education: [
      "BA (Arts), School of Open Learning, 2010–2013",
      "Diploma in Multimedia & Animation, Oxford Institute, 2012–2013",
    ],
    awards: [
      "Victor of the Week and Spot Award, GlobalLogic, 2020–2022",
      "Employee of the Quarter, Chetu, 2017 and 2018",
    ],
    languages: ["English — Fluent", "Hindi — Native"],
  },
  skills: [
    { title: "Frontend", items: ["React.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SASS/SCSS", "Responsive Design"] },
    { title: "State Management", items: ["Redux", "React Hooks", "Context API"] },
    { title: "UI & Components", items: ["Reusable Components", "Material UI", "Bootstrap", "BEM"] },
    { title: "API & Integration", items: ["REST APIs", "JSON", "Async JavaScript"] },
    { title: "Performance & Engineering", items: ["Performance Optimization", "Cross-Browser", "Accessibility"] },
    { title: "Development & Collaboration", items: ["Git", "GitHub", "JIRA", "Agile / Scrum", "CI/CD"] },
    { title: "AI / Generative AI", items: ["Generative AI", "Prompt Engineering", "AI-Assisted Development"] },
    { title: "Also Working With", items: ["Next.js", "Redux Toolkit", "Docker", "AWS", "Python", "SQL"] },
  ],
  projects: [
    { no: "001", title: "Enterprise Healthcare Application", text: "ECP 360+ at GlobalLogic: reusable React components, dynamic forms and REST API integration.", tags: ["React.js", "TypeScript", "Redux", "SCSS"] },
    { no: "002", title: "Airport Shuttle POS", text: "Responsive pickup and drop-off booking workflows.", tags: ["HTML", "CSS", "JavaScript", "jQuery"] },
    { no: "003", title: "Casino Gaming UI", text: "Fluid, responsive game interfaces with sprites and assets.", tags: ["HTML5 Canvas", "JavaScript", "CSS3"] },
    { no: "004", title: "NBA Sports Gaming App", text: "Adobe XD designs converted into responsive interfaces.", tags: ["HTML5", "CSS3", "jQuery"] },
  ],
};
export type Profile = typeof profile;
