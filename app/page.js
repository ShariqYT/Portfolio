import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function home() {
  return (
    <main className="text-white mx-auto overflow-x-hidden">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}