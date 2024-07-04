import styles from "./InterestsItem.module.css";

export default function InterestsItem({ value, index, onChange, onDelete }) {
  return (
    <li className={styles.item}>
      <input
        type="text"
        value={value}
        className={styles.input}
        onChange={(e) => onChange(index, e.target.value)}
      />
      <button className={styles.button} onClick={() => onDelete(index)}>
        Eliminar
      </button>
    </li>
  );
}
