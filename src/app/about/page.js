import AboutMe from "@/components/about/AboutMe/AboutMe";
import styles from "./styles.module.css";
import AboutInfo from "@/components/about/AboutInfo/AboutInfo";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <AboutInfo />
        <AboutMe />
      </div>
    </main>
  );
}
