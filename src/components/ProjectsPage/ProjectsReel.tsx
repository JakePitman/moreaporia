import React, { useContext } from "react";
import { motion } from "framer-motion";

import Project from "./Project";
import ProjectPortrait from "./ProjectPortrait";
import styles from "./ProjectsReel.module.scss";
import PROJECT_REEL_DATA from "./ProjectReelData";
import BrowserContext from "../../shared/browserContext";

const ProjectsReel = () => {
  const { isLandscape } = useContext(BrowserContext);
  return (
    <motion.div className={styles.pageContainer}>
      {isLandscape
        ? PROJECT_REEL_DATA.map((data) => <Project {...data} />)
        : PROJECT_REEL_DATA.map((data) => <ProjectPortrait {...data} />)}
    </motion.div>
  );
};

export default ProjectsReel;
