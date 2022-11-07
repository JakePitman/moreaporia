import React from "react";
import { motion } from "framer-motion";

import styles from "./ContactForm.module.scss";

const variants = {
  hidden: {
    opacity: 0,
  },
  splineStarted: {
    opacity: 1,
  },
};

const ContactForm = () => {
  return (
    <motion.div className={styles.container} variants={variants}>
      <form
        className={styles.form}
        action="https://formspree.io/f/xdojpqba"
        method="POST"
      >
        <h2 className={styles.heading}>Contact me</h2>
        <label>
          <input
            className={styles.inputField}
            type="username"
            name="username"
            placeholder="Your name..."
          />
        </label>
        <label>
          <input
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Your email..."
          />
        </label>
        <label>
          <textarea
            className={styles.textArea}
            name="message"
            placeholder="Your message..."
          ></textarea>
        </label>
        <div className={styles.submitButtonContainer}>
          <div className={styles.submitButtonBackground} />
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
