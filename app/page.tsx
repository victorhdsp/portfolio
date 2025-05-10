import HomeLayout from "@/components/layout/Home";
import PageHomeContact from "@/components/pages/home/contact";
import PageHomeExperience from "@/components/pages/home/experience";
import PageHomeHero from "@/components/pages/home/hero";
import PageHomeMotivation from "@/components/pages/home/motivation";

export default function Home() {
  return (<>
    <main>
      <HomeLayout>
        <PageHomeHero />
        <PageHomeMotivation />
        <PageHomeExperience />
        { /* <PageHomeProjects /> */}
        <PageHomeContact />
      </HomeLayout>
    </main>
  </>);
}
