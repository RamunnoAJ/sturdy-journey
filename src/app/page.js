"use client";

import styles from "./page.module.css";
import InterestsItem from "@/components/interests/InterestsItem/InterestsItem";
import InterestsForm from "@/components/interests/InterestsForm/InterestsForm";
import useInterests from "@/hooks/useInterests";

export default function Home() {
  const { items, newItem, setNewItem, deleteItem, editItem, handleSubmit } =
    useInterests();

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h2 className={styles.title}>Intereses</h2>
        <InterestsForm
          onSubmit={handleSubmit}
          onChange={setNewItem}
          value={newItem}
          placeholder={"Nuevo interés"}
        />
        <ul className={styles.list}>
          {items.map((item, index) => (
            <InterestsItem
              index={index}
              onChange={editItem}
              onDelete={deleteItem}
              value={item}
              key={index}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
