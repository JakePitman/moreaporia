import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutNavigationLink.module.scss";
import { linkVariants } from "./aboutNavigationLinkVariants";

type Props = {
  title: string;
};

const AboutNavigationLink = ({ title }: Props) => {
  return (
    <motion.div variants={linkVariants} className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.clickArea} />
        <p className={styles.titleFirstLetter}>{title.slice(0, 1)}</p>
        <p className={styles.titleRemainingLetters}>
          {title.slice(1, title.length)}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutNavigationLink;
