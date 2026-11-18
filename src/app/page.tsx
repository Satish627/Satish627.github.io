import { ScrollWalker } from "@/src/components/retro/scroll";
import { Contact, Education, Experience, Footer, Hero, Hud, Skills, Work } from "@/src/components/retro/sections";

export default function Home() {
  return (
    <div className="sky-gradient">
      <Hud />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollWalker />
    </div>
  );
}
