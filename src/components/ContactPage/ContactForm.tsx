import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    !!form.current &&
      emailjs
        .sendForm(
          "service_gx64k3o",
          "template_271ff3n",
          form.current,
          "QOhQB3wxWY6ZH6HRc"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        action="https://formspree.io/f/xdojpqba"
        method="POST"
      >
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
