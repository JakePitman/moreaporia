import React from "react";
import { motion } from "framer-motion";
import styles from "./ComingSoon.module.scss";

const ComingSoon = () => {
  return (
    <motion.div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.heading}
      >
        Moreaporia
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={styles.subheading}
      >
        · is coming soon ·
      </motion.h2>
    </motion.div>
  );
};

export default ComingSoon;
