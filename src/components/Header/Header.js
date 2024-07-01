"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header({ userName, userImage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          <li className={styles.menuItem}>Inicio</li>
          <li className={styles.menuItem}>Sobre mi</li>
          <li className={styles.menuItem}>Contacto</li>
        </ul>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? "X" : "☰ "}
        </div>
        <div className={styles.userSection}>
          <span className={styles.userName}>{userName}</span>
          <img src={userImage} alt="User" className={styles.userImage} />
        </div>
      </nav>
    </header>
  );
}
