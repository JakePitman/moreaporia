import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";

import BrowserContext from "../../shared/browserContext";
import ProjectHighlight from "./ProjectHighlight";
import styles from "./ProjectsPage.module.scss";
import Grid from "./Grid";

const ProjectsPage = () => {
  const { isLandscape } = useContext(BrowserContext);
  const controls = useAnimation();
  const openingSequence = async () => {
    await controls.start("draw");
    await controls.start("imagesAppear");
  };

  return (
    <motion.div
      className={
        isLandscape
          ? styles.pageContainerLandscape
          : styles.pageContainerPortrait
      }
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
