import Link from "next/link";
import styles from "./AboutInfo.module.css";
import {
  SVGIconEmail,
  SVGIconGithub,
  SVGIconLinkedin,
  SVGIconLocation,
  SVGIconPhone,
} from "@/components/Icons";

export default function AboutInfo() {
  return (
    <section className={styles.profile}>
      <h2 className={styles.profile__title}>Agustín Ramunno</h2>
      <p className={styles.profile__subtitle}>Web Developer</p>
      <div className={styles.profile__social}>
        <Link
          href="https://www.linkedin.com/in/agustinramunno-dev/"
          target="_blank"
          className={styles.profile__social__link}
        >
          <SVGIconLinkedin width={32} height={32} />
        </Link>
        <Link
          href="https://github.com/RamunnoAJ"
          target="_blank"
          className={styles.profile__social__link}
        >
          <SVGIconGithub width={32} height={32} />
        </Link>
      </div>
      <div className={styles.contact}>
        <ul className={styles.contact__list}>
          <li className={styles.contact__list__item}>
            <SVGIconEmail width={24} height={24} />
            <p>agustinramunno@gmail.com</p>
          </li>
          <li className={styles.contact__list__item}>
            <SVGIconPhone width={24} height={24} />
            <p>+54 1160195533</p>
          </li>
          <li className={styles.contact__list__item}>
            <SVGIconLocation width={24} height={24} />
            <p>Mar del Plata, Buenos Aires</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
