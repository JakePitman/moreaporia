import React from "react";
import { motion } from "framer-motion";

import styles from "./Grid.module.scss";
import gridDimensions from "./Grid.module.scss";
const { rowCount, columnCount } = gridDimensions;

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

const rows = new Array(parseInt(rowCount)).fill(
  <motion.div className={styles.rowBorder} />
);
const columns = new Array(parseInt(columnCount)).fill(
  <motion.div className={styles.columnBorder} />
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
