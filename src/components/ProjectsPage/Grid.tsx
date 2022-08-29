import React from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../shared/useWindowDimensions";

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

const rows = (rowCount: number, rowHeight: string) =>
  Array.from({ length: rowCount }, (_, i) => (
    <motion.div
      key={`row${i}`}
      className={styles.rowBorder}
      style={{ height: rowHeight, marginBottom: rowHeight }}
    />
  ));
const columns = (colCount: number, colWidth: string) =>
  Array.from({ length: colCount }, (_, i) => (
    <motion.div
      key={`col${i}`}
      className={styles.columnBorder}
      style={{ width: colWidth, marginRight: colWidth }}
    />
  ));

const Grid = () => {
  const { width, height } = useWindowDimensions();
  const ratio = width / height;
  const colCount = Math.floor(width / 25);
  const colWidth = `${100 / colCount}vw`;
  const rowCount = Math.floor(colCount / ratio);
  const rowHeight = `${100 / rowCount}vh`;

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.rows} variants={rowVariants}>
        {rows(rowCount, rowHeight)}
      </motion.div>
      <motion.div className={styles.columns} variants={columnVariants}>
        {columns(colCount, colWidth)}
      </motion.div>
    </motion.div>
  );
};

export default Grid;
