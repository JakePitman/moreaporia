import React from "react";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
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
