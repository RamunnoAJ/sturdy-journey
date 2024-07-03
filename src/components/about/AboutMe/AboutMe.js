import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>Sobre mí</h2>
      <p className={styles.about__paragraph}>
        Hola! Soy Agustín, estoy cursando la carrera de Licenciatura en Sistemas
        en la Universidad CAECE, y cuento con experiencia en el desarrollo de
        software. Considero que tengo una actitud proactiva y me esfuerzo por
        mantener una excelente presencia en todas mis interacciones.
      </p>
      <h3 className={styles.about__title}>¿Qué hago?</h3>
      <div className={styles.about__cards__container}>
        <article className={styles.about__card}>
          <h4 className={styles.about__subtitle}>Desarrollo frontend</h4>
          <p className={styles.about__paragraph}>
            Transfomo ideas y diseños en código interactivo y accesible,
            utilizando tecnologías como HTML, CSS y JavaScript.
          </p>
        </article>
        <article className={styles.about__card}>
          <h4 className={styles.about__subtitle}>Desarrollo backend</h4>
          <p className={styles.about__paragraph}>
            Construyo y mantengo la estructura que permite a las aplicaciones
            funcionar correctamente, utilizando principalmente Node.js.
          </p>
        </article>
      </div>
    </section>
  );
}
