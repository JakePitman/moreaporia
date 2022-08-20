import React from "react";
import { motion } from "framer-motion";

import styles from "./Grid.module.scss";

const rows = new Array(30).fill(<div className={styles.rowBorder} />);
const columns = new Array(50).fill(<div className={styles.columnBorder} />);

const Grid = () => {
  return (
    <motion.div className={styles.container}>
      <div className={styles.rows}>{rows}</div>
      <div className={styles.columns}>{columns}</div>
    </motion.div>
  );
};

export default Grid;
