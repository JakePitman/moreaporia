import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./ProjectHighlight.module.scss";
import BlueprintShape from "./BlueprintShape";
import testBrown from "./pictures/test-brown-phone.png";
import listBlue from "./pictures/list-blue-phone.png";
import TestAppBlueprint from "./TestAppBlueprint";
import ListAppBlueprint from "./ListAppBlueprint";
import BrowserContext from "../../shared/browserContext";

const imageVariants = {
  hidden: { opacity: 0 },
  imagesAppear: { opacity: 1, transition: { duration: 1 } },
};

const ProjectsPage = () => {
  const { isLandscape } = useContext(BrowserContext);

  return (
    <motion.div className={styles.pageContainer}>
      <div className={styles.appImageContainer}>
        <TestAppBlueprint />
        <motion.img
          src={testBrown}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </div>
      {isLandscape && (
        <div className={styles.appImageContainer}>
          <ListAppBlueprint />
          <motion.img
            src={listBlue}
            alt=""
            className={styles.image}
            variants={imageVariants}
          />
        </div>
      )}
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
