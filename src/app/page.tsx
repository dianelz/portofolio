import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="career" className="h-screen flex justify-center items-center bg-background text-text">
        <h2 className="text-3xl font-bold">My Career</h2>
      </section>
      <section id="projects" className="h-screen flex justify-center items-center bg-foreground text-text">
        <h2 className="text-3xl font-bold">Projects</h2>
      </section>
      <section id="contact" className="h-screen flex justify-center items-center bg-background text-text">
        <Contact/>
      </section>
    </main>
  );
}

