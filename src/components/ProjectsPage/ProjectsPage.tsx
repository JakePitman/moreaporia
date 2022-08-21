import React from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./ProjectsPage.module.scss";
import BlueprintShape from "./BlueprintShape";
import testBrown from "./pictures/test-brown.png";
import Grid from "./Grid";
import AppBlueprint from "./AppBlueprint";

const imageVariants = {
  hidden: { opacity: 0 },
  imagesAppear: { opacity: 1, transition: { duration: 1 } },
};

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
      initial="hidden"
      onViewportEnter={() => openingSequence()}
    >
      <Grid />
      <div className={styles.appImageContainer}>
        <AppBlueprint />
        <motion.img
          src={testBrown}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </div>
      {/* <motion.div className={styles.shapeContainer}>
        <BlueprintShape shape="square" color="white" />
        <motion.img
          src={listing}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </motion.div> */}
    </motion.div>
  );
};

export default ProjectsPage;
