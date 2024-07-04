import Link from "next/link";
import styles from "./ContactText.module.css";

/**
 * @component
 * @param {Object} param0
 * @param {string} [param0.text]
 * @param {string} [param0.title]
 * @returns {JSX.Element}
 */
export default function ContactText({
  text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil  deleniti itaque similique magni. Magni, laboriosam perferendis   maxime!",
  title,
}) {
  return (
    <>
      <h3 className={styles.contact__title}>{title}</h3>
      <p className={styles.contact__paragraph}>{text}</p>
      <p>
        <Link href="#">Leer más</Link>
      </p>
    </>
  );
}
