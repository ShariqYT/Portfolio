import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Home from "@/Components/Home";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";

export default function home() {
  return (
    <main className="text-white mx-auto">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}