import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import classNames from "classnames";

import BrowserContext from "../../shared/browserContext";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  const { isLandscape } = useContext(BrowserContext);
  const controls = useAnimation();
  const openingSequence = async () => {
    await controls.start("draw");
    await controls.start("imagesAppear");
  };

  return (
    <motion.div
      className={styles.pageContainer}
      animate={controls}
      onViewportEnter={() => openingSequence()}
      initial="hidden"
    >
      <div className={styles.textContainer}>
        <div className={styles.textRow}>
          <h3
            className={classNames(styles.highlightedText, styles.spacingRight)}
          >
            Express
          </h3>
          <h3 className={styles.textSegment}>yourself</h3>
        </div>
        <div className={styles.textRow}>
          <h3 className={styles.textSegment}>This is</h3>
          <h3
            className={classNames(
              styles.highlightedText,
              styles.spacingLeft,
              styles.spacingRight
            )}
          >
            your
          </h3>
          <h3 className={styles.textSegment}>chance to stand out</h3>
        </div>
        <div className={styles.textRow}>
          <h3 className={styles.textSegment}>To create a</h3>
          <h3
            className={classNames(
              styles.highlightedText,
              styles.spacingLeft,
              styles.spacingRight
            )}
          >
            unique
          </h3>
          <h3 className={styles.textSegment}>platform</h3>
        </div>
        <div className={styles.textRow}>
          <h3 className={styles.textSegment}>And to make your</h3>
          <h3
            className={classNames(
              styles.highlightedText,
              styles.spacingLeft,
              styles.spacingRight
            )}
          >
            vision
          </h3>
          <h3 className={styles.textSegment}>a reality</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
