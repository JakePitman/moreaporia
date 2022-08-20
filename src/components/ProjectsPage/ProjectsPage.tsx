import React from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./ProjectsPage.module.scss";
import BlueprintShape from "./BlueprintShape";
import listing from "./pictures/cot_listing.png";
import Grid from "./Grid";

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
      <motion.div className={styles.shapeContainer}>
        <BlueprintShape shape="square" color="white" />
        <motion.img
          src={listing}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
