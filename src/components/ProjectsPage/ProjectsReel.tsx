import React from "react";
import { motion } from "framer-motion";

import Project from "./Project";
import styles from "./ProjectsReel.module.scss";
import PROJECT_REEL_DATA from "./ProjectReelData";

const ProjectsReel = () => {
  return (
    <motion.div className={styles.pageContainer}>
      {PROJECT_REEL_DATA.map((data) => (
        <Project {...data} />
      ))}
    </motion.div>
  );
};

export default ProjectsReel;
