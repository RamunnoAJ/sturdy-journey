import { useState, useEffect } from "react";

export default function useInterests() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  function addItem(newItem) {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
    }
  }

  function deleteItem(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  function editItem(index, newValue) {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return {
    items,
    addItem,
    deleteItem,
    editItem,
  };
}
