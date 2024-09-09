import { GridBackground } from "@/components/GridBackground";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <GridBackground>
      <main className="flex flex-col items-center ">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </GridBackground>
  );
}
