import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Career from "@/components/Career";
export default function Home() {
  return (
    <main>
      <Hero />
      <section id="career" className="h-screen flex justify-center items-center bg-background text-text">
        <Career/>
      </section>
      <section id="projects" className="h-screen flex justify-center items-center bg-foreground text-text">
        
      </section>
      <section id="contact" className="h-screen flex justify-center items-center bg-background text-text">
        <Contact/>
      </section>
    </main>
  );
}

