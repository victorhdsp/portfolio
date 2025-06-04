import HomeHero from "@/components/organisms/Hero";
import HomeContact from "@/components/organisms/Contact/portfolio";
import Footer from "@/components/organisms/Footer";
import HomeProjects from "@/components/organisms/Projects";
import css from "./home.module.scss"

export default function Home() {
  return (<>
    <main className={css.root}>
      <HomeHero />
      <HomeProjects />
      <HomeContact />
    </main>
    <Footer />
  </>);
}
