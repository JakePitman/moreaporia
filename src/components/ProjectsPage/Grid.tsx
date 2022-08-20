import React from "react";
import { motion } from "framer-motion";

import styles from "./Grid.module.scss";

const rowVariants = {
  hidden: { width: "0vw" },
  drawGrid: { width: "100vw", transition: { duration: 1 } },
};
const columnVariants = {
  hidden: { height: "0vw" },
  drawGrid: { height: "100vw", transition: { duration: 1 } },
};

const rows = new Array(35).fill(
  <motion.div className={styles.rowBorder} variants={rowVariants} />
);
const columns = new Array(60).fill(
  <motion.div className={styles.columnBorder} variants={columnVariants} />
);

const Grid = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.rows}>{rows}</motion.div>
      <motion.div className={styles.columns}>{columns}</motion.div>
    </motion.div>
  );
};

export default Grid;
