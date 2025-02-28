import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Career from "@/components/Career";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="career" className="flex justify-center items-center bg-background text-text">
        <Career />
      </section>

      <section id="projects" className="scroll-mt-10 h-screen justify-center items-center bg-background text-text">
        <Projects/>
      </section>

      <section id="contact" className="h-screen flex justify-center items-center overflow-y-auto bg-background text-text">
        <Contact />
      </section>
    </main>
  );
}


