import React from "react";
import { motion } from "framer-motion";

import styles from "./Grid.module.scss";

const rowVariants = {
  hidden: { width: "0vw" },
  draw: { width: "100vw", transition: { duration: 0.7 } },
  imagesAppear: { opacity: 0, transition: { duration: 1 } },
};
const columnVariants = {
  hidden: { height: "0vw" },
  draw: { height: "100vh", transition: { duration: 0.7 } },
  imagesAppear: { opacity: 0, transition: { duration: 1 } },
};

const rowCount = 22;
const rowHeight = `${100 / rowCount}vh`;
const colCount = 40;
const colWidth = `${100 / colCount}vw`;

const rows = new Array(rowCount).fill(
  <motion.div
    className={styles.rowBorder}
    style={{ height: rowHeight, marginBottom: rowHeight }}
  />
);
const columns = new Array(colCount).fill(
  <motion.div
    className={styles.columnBorder}
    style={{ width: colWidth, marginRight: colWidth }}
  />
);

const Grid = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.rows} variants={rowVariants}>
        {rows}
      </motion.div>
      <motion.div className={styles.columns} variants={columnVariants}>
        {columns}
      </motion.div>
    </motion.div>
  );
};

export default Grid;
