import { Hero } from "@/src/pages/freelancing/hero";
import { Projects } from "@/src/pages/freelancing/projects";
import { About } from "@/src/pages/freelancing/about";
import { Contact } from "@/src/pages/freelancing/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
