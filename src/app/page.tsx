import LeftPanel from "@/shell/LeftPanel";
import RightNav from "@/shell/RightNav";
import Home from "@/modules/home/Home";
import About from "@/modules/about/About";
import Skills from "@/modules/skills/Skills";
import Projects from "@/modules/projects/Projects";
import Contact from "@/modules/contact/Contact";

export default function Page() {
  return (
    <>
      <div className="wedge" aria-hidden="true" />
      <LeftPanel />
      <main className="content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <RightNav />
    </>
  );
}
