import React from "react";
import { motion } from "framer-motion";

import styles from "./ProjectsPage.module.scss";
import BlueprintShape from "./BlueprintShape";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.svgContainer}>
        <BlueprintShape shape="square" color="white" />
      </div>
      <div style={{ width: "600px", height: "600px" }}>
        <BlueprintShape shape="circle" color="white" />
      </div>
      <div style={{ width: "200px", height: "200px" }}>
        <BlueprintShape
          shape="circle"
          color="red"
          fill="rgba(255,255,255, 0.5)"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
