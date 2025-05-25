import HomeHero from "@/components/organisms/Hero";
import HomeContact from "@/components/organisms/Contact/curriculum";
import HomeWorkExperience from "@/components/organisms/WorkExperience";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (<>
    <main>
      <HomeHero />
      <HomeWorkExperience />
      <HomeContact />
    </main>
    <Footer />
  </>);
}
