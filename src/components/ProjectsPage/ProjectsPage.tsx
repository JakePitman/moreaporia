import React from "react";
import { motion } from "framer-motion";

import styles from "./ProjectsPage.module.scss";
import BlueprintShape from "./BlueprintShape";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.svgContainer}>
        <BlueprintShape shape="square" />
      </div>
      <div style={{ width: "600px", height: "600px" }}>
        <BlueprintShape shape="square" />
      </div>
    </div>
  );
};

export default ProjectsPage;
