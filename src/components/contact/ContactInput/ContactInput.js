import styles from "./ContactInput.module.css";

/**
 * @component
 * @param {Object} param0
 * @param {string} param0.id
 * @param {string} param0.placeholder
 * @param {string} param0.type
 * @param {function} param0.onChange
 * @returns {JSX.Element}
 */
export default function ContactInput({ id, placeholder, type, onChange }) {
  return (
    <div className={styles.form__input__container}>
      <input
        onChange={onChange}
        type={type}
        id={id}
        name={id}
        className={styles.form__input}
        placeholder={placeholder}
      />
    </div>
  );
}
