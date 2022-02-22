import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutPage.module.scss";
import {
  lowerLeftBackgroundVariants,
  lowerRightBackgroundVariants,
} from "./aboutPageVariants";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "white" }}>About me</h1>
      <motion.div
        variants={lowerLeftBackgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "200px" }}
        className={styles.lowerLeftBackground}
      />
      <motion.div
        variants={lowerRightBackgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "200px" }}
        className={styles.lowerRightBackground}
      />
    </div>
  );
};

export default AboutPage;
