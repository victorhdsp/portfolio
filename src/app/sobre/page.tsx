import css from "./styles.module.scss";

import Aside from "@/components/Pages/AboutUs/Aside";
import Resume from "@/components/Pages/AboutUs/Resume";

export default function AboutMe() {
  return (
    <main className={css["aboutMe"]}>
      <div className="container">
        <Aside />
        <Resume />
      </div>
    </main>
  );
}
