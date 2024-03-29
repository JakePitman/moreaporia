import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import * as EmailValidator from "email-validator";

import BrowserContext from "../../shared/browserContext";
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
};

const validateUsername = (value: string) => value.length > 0;
const validateEmail = (value: string) => EmailValidator.validate(value);
const validateMessage = (value: string) => value.length > 20;
const fieldDefaults = {
  value: "",
  isValid: false,
  hasBeenBlurred: false,
};

const ContactForm = () => {
  const { isLandscape } = useContext(BrowserContext);
  const [usernameField, setUsernameField] = useState(fieldDefaults);
  const [emailField, setEmailField] = useState(fieldDefaults);
  const [messageField, setMessageField] = useState(fieldDefaults);
  const [formIsValidated, setFormIsValidated] = useState(false);
  const [hasBeenTouched, setHasBeenTouched] = useState(false);

  useEffect(() => {
    setFormIsValidated(
      usernameField.isValid && emailField.isValid && messageField.isValid
    );
  }, [usernameField.isValid, emailField.isValid, messageField.isValid]);

  return (
    <div
      className={
        isLandscape ? styles.containerLandscape : styles.containerPortrait
      }
      onClick={() => setHasBeenTouched(true)}
    >
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
            className={classNames({
              [styles.inputField]: true,
              [styles.invalidField]:
                usernameField.hasBeenBlurred && !usernameField.isValid,
            })}
            type="username"
            name="username"
            placeholder="Your name..."
            onBlur={() =>
              setUsernameField({ ...usernameField, hasBeenBlurred: true })
            }
            onChange={(e) =>
              setUsernameField({
                ...usernameField,
                isValid: validateUsername(e.target.value),
              })
            }
          />
        </label>
        <label>
          <motion.input
            variants={subsectionVariants}
            className={classNames({
              [styles.inputField]: true,
              [styles.invalidField]:
                emailField.hasBeenBlurred && !emailField.isValid,
            })}
            type="email"
            name="email"
            placeholder="Your email..."
            onBlur={() =>
              setEmailField({ ...emailField, hasBeenBlurred: true })
            }
            onChange={(e) =>
              setEmailField({
                ...emailField,
                isValid: validateEmail(e.target.value),
              })
            }
          />
        </label>
        <label>
          <motion.textarea
            variants={{
              ...subsectionVariants,
              expandFormFields: {
                height: "20vh",
                transition: { type: "tween", duration: 0.2 },
              },
            }}
            className={classNames({
              [styles.textArea]: true,
              [styles.invalidField]:
                messageField.hasBeenBlurred && !messageField.isValid,
            })}
            name="message"
            placeholder="Your message..."
            onBlur={() =>
              setMessageField({ ...messageField, hasBeenBlurred: true })
            }
            onChange={(e) =>
              setMessageField({
                ...messageField,
                isValid: validateMessage(e.target.value),
              })
            }
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
          <button
            className={styles.submitButton}
            type="submit"
            disabled={!formIsValidated}
          >
            Send
          </button>
        </motion.div>
      </motion.form>
      )
    </div>
  );
};

export default ContactForm;
