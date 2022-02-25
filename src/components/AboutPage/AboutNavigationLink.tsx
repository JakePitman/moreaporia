import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutNavigationLink.module.scss";

type Props = {
  title: string;
  handleClick: () => void;
  variants: { container: {}; minorBorder: {} };
};

const AboutNavigationLink = ({ title, handleClick, variants }: Props) => {
  return (
    <motion.div variants={variants.container} className={styles.container}>
      <div className={styles.textWrapper}>
        <motion.div
          className={styles.minorBorderContainer}
          variants={variants.minorBorder}
        >
          <div className={styles.minorBorderUpperLeft} />
          <div className={styles.minorBorderLowerRight} />
        </motion.div>

        <div className={styles.clickArea} onClick={handleClick} />
        <p className={styles.titleFirstLetter}>{title.slice(0, 1)}</p>
        <p className={styles.titleRemainingLetters}>
          {title.slice(1, title.length)}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutNavigationLink;
