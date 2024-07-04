"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import InterestsItem from "@/components/interests/InterestsItem/InterestsItem";
import InterestsForm from "@/components/interests/InterestsForm/InterestsForm";

export default function Home() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));
  const [newItem, setNewItem] = useState("");

  function addItem() {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  }

  function deleteItem(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  function editItem(index, newValue) {
    const newItems = items.map((item, i) => (i === index ? newValue : item));

    setItems(newItems);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addItem();
  }

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

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
