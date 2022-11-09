import React from "react";
import { motion } from "framer-motion";

import styles from "./ContactForm.module.scss";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  slideFormFields: {
    opacity: 1,
  },
  expandForm: {
    scale: 1,
  },
};

const subsectionVariants = {
  hidden: {
    translateX: -100,
  },
  slideFormFields: {
    translateX: 0,
  },
  expandForm: {
    margin: 2,
  },
};

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <motion.form
        variants={variants}
        transition={{
          staggerChildren: 0.1,
        }}
        className={styles.form}
        action="https://formspree.io/f/xdojpqba"
        method="POST"
      >
        <motion.h2 variants={subsectionVariants} className={styles.heading}>
          Contact me
        </motion.h2>
        <label>
          <motion.input
            variants={subsectionVariants}
            className={styles.inputField}
            type="username"
            name="username"
            placeholder="Your name..."
          />
        </label>
        <label>
          <motion.input
            variants={subsectionVariants}
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Your email..."
          />
        </label>
        <label>
          <motion.textarea
            variants={subsectionVariants}
            className={styles.textArea}
            name="message"
            placeholder="Your message..."
          />
        </label>
        <motion.div
          className={styles.submitButtonContainer}
          variants={subsectionVariants}
        >
          <div className={styles.submitButtonBackground} />
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
