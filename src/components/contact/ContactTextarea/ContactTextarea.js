import styles from "./ContactTextarea.module.css";

/**
 * @component
 * @param {Object} param0
 * @param {string} param0.id
 * @param {string} param0.placeholder
 * @param {number} param0.cols
 * @param {number} param0.rows
 * @param {function} param0.onChange
 * @returns {JSX.Element}
 */
export default function ContactTextarea({
  id,
  placeholder,
  cols,
  rows,
  onChange,
}) {
  return (
    <div className={styles.form__textarea__container}>
      <textarea
        onChange={onChange}
        id={id}
        name={id}
        placeholder={placeholder}
        className={styles.form__textarea}
        cols={cols}
        rows={rows}
      ></textarea>
    </div>
  );
}
