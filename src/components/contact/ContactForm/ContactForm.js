"use client";

import { useState } from "react";
import ContactInput from "../ContactInput/ContactInput";
import ContactTextarea from "../ContactTextarea/ContactTextarea";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccessMessage("");
    setErrors([]);

    const isValid = validateForm();

    if (isValid) {
      setSuccessMessage("El formulario se ha enviado correctamente");
      e.target.reset();
    }

    await new Promise((resolve, _) => setTimeout(resolve, 3000));
    setSuccessMessage("");
    setErrors([]);
  }

  function validateForm() {
    let isValid = true;
    /** @type {string[]}  */
    const newErrors = [];

    if (!formData.name.trim()) {
      newErrors.push("El nombre es obligatorio.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.push("El correo electrónico es obligatorio.");
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.push("El correo electrónico no es válido.");
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.push("El mensaje es obligatorio.");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  return (
    <>
      <h2 className={styles.form__title}>
        Llena el formulario. <br />
        Contáctame.
      </h2>
      <form className={styles.form} method="post" onSubmit={handleSubmit}>
        <ContactInput
          placeholder={"Nombre"}
          type={"text"}
          id={"name"}
          onChange={handleChange}
        />
        <ContactInput
          onChange={handleChange}
          placeholder={"Correo electrónico"}
          type={"email"}
          id={"email"}
        />
        <ContactTextarea
          onChange={handleChange}
          placeholder={"Mensaje"}
          id={"message"}
          cols={30}
          rows={7}
        />
        <div className={styles.form__submit__container}>
          <input
            type="submit"
            value="Enviar mensaje"
            className={styles.form__submit}
          />
          <span className={styles.form__success}>{successMessage}</span>
          {errors.map((error, index) => (
            <span key={index} className={styles.form__error}>
              {error}
            </span>
          ))}
        </div>
      </form>
    </>
  );
}
