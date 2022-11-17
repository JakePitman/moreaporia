import React, { useState } from "react";
import { motion } from "framer-motion";
import colors from "../../shared/_colors.module.scss";
import classNames from "classnames";
import { Formik } from "formik";

import styles from "./ContactForm.module.scss";

const variants = {
  hidden: {
    opacity: 0,
  },
  slideFormFields: {
    opacity: 1,
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
    borderColor: colors.boldBlue,
  },
};

type Errors = {
  email?: string;
};

const ContactForm = () => {
  const [formIsValidated, setFormIsValidated] = useState(false);
  const [hasBeenTouched, setHasBeenTouched] = useState(false);

  return (
    <div className={styles.container} onClick={() => setHasBeenTouched(true)}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: Errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <motion.form
            variants={variants}
            transition={{
              staggerChildren: 0.1,
            }}
            className={classNames({
              [styles.form]: true,
              [styles.touched]: hasBeenTouched,
            })}
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
              className={classNames({
                [styles.submitButtonContainer]: true,
                [styles.validated]: formIsValidated,
              })}
              variants={subsectionVariants}
            >
              <div className={styles.submitButtonBackgroundDisabled} />
              <div className={styles.submitButtonBackgroundActive} />
              <button className={styles.submitButton} type="submit">
                Send
              </button>
            </motion.div>
          </motion.form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
