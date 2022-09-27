import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectsReel.module.scss";

import Project from "./Project";

const ProjectsReel = () => {
  return (
    <motion.div className={styles.pageContainer}>
      <Project />
    </motion.div>
  );
};

export default ProjectsReel;
