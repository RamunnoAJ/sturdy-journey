import styles from "./InterestsForm.module.css";

/**
 * @component
 * @param {Object} param0
 * @param {function} param0.onSubmit
 * @param {function} param0.onChange
 * @param {string} param0.value
 * @param {placeholder} param0.placeholder
 * @returns {JSX.Element}
 */
export default function InterestsForm({
  onSubmit,
  onChange,
  value,
  placeholder,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
      data-testid="interests-form"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Agregar
      </button>
    </form>
  );
}
