import Hero from "@/sources/pages/freelancing/hero";
import Projects from "@/sources/pages/freelancing/projects";
import About from "@/sources/pages/freelancing/about";
import Contact from "@/sources/pages/freelancing/contact";
import { getPosts } from "@/lib/notion";
import { ViewProjectDto } from "@/sources/pages/freelancing/projects/type";

export const revalidate = 60; 

async function getProjects(): Promise<ViewProjectDto[]> {
  const posts = await getPosts();
  return posts.map((post) => ({
    title: post.title,
    subtitle: post.subtitle,
    image: post.image || "",
    description: post.description,
    tags: post.tags,
    link: `/projetos/${post.slug}`,
  }));
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Hero />
      <Projects projects={projects} />
      <About />
      <Contact />
    </main>
  );
}
