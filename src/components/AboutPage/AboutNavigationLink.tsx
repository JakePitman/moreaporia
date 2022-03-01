import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutNavigationLink.module.scss";
import {
  containerVariants,
  minorBorderContainerVariants,
  minorBorderVariants,
} from "./aboutNavigationLinkVariants";

type Props = {
  title: string;
  variantKey: "work" | "jake" | "tech";
  handleClick: () => void;
};

const AboutNavigationLink = ({ title, variantKey, handleClick }: Props) => {
  return (
    <motion.div
      variants={containerVariants[variantKey]}
      className={styles.container}
    >
      <div className={styles.textWrapper}>
        <motion.div
          className={styles.minorBorderContainer}
          variants={minorBorderContainerVariants[variantKey]}
        >
          <motion.div
            className={styles.minorBorderUpperLeft}
            variants={minorBorderVariants[variantKey]}
          />
          <motion.div
            className={styles.minorBorderLowerRight}
            variants={minorBorderVariants[variantKey]}
          />
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
