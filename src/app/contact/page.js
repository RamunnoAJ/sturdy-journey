import styles from "./styles.module.css";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import ContactText from "@/components/contact/ContactText/ContactText";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner__container}>
          <ContactForm />
        </div>
        <div className={styles.inner__container}>
          <ContactText title="Hablemos de lo que sea." />
        </div>
      </div>
    </main>
  );
}
