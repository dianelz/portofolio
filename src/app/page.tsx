import Hero from "@/components/Hero";

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
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </section>
    </main>
  );
}

