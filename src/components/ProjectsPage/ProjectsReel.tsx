import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectsReel.module.scss";

const ProjectsReel = () => {
  return (
    <motion.div className={styles.pageContainer}>
      <h1 style={{ color: "white" }}>Hello world</h1>
    </motion.div>
  );
};

export default ProjectsReel;
