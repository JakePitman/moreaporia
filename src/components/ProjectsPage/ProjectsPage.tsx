import React from "react";

import ProjectHighlight from "./ProjectHighlight";
import styles from "./ProjectsPage.module.scss";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <ProjectHighlight />;
    </div>
  );
};

export default ProjectsPage;
