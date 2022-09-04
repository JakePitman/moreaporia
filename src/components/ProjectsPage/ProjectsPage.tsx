import React from "react";
import { motion, useAnimation } from "framer-motion";

import ProjectHighlight from "./ProjectHighlight";
import styles from "./ProjectsPage.module.scss";
import Grid from "./Grid";

const ProjectsPage = () => {
  const controls = useAnimation();
  const openingSequence = async () => {
    await controls.start("draw");
    await controls.start("imagesAppear");
  };

  return (
    <motion.div
      className={styles.pageContainer}
      animate={controls}
      onViewportEnter={() => openingSequence()}
      initial="hidden"
    >
      <Grid />
      <ProjectHighlight />
    </motion.div>
  );
};

export default ProjectsPage;
