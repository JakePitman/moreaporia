import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectsReel.module.scss";
import { FiGithub } from "react-icons/fi";

import Project from "./Project";

const ProjectsReel = () => {
  return (
    <motion.div className={styles.pageContainer}>
      <Project
        title="Logic Calculator"
        year="2020"
        tools={[
          { name: "Node", href: "https://nodejs.org/en/" },
          { name: "Inquirer", href: "https://www.npmjs.com/package/inquirer" },
        ]}
        links={[
          {
            Icon: FiGithub,
            href: "https://github.com/JakePitman/logic-calculator",
          },
          {
            Icon: FiGithub,
            href: "https://github.com/JakePitman/logic-calculator",
          },
        ]}
      >
        <p className={styles.bodyText}>
          This project was lorem ipsum oogum boogum. Tutant meenage neetle
          teetles. Indian yellow is the best colour.
        </p>
        <p className={styles.bodyText}>
          I must create a system, or be controlled by another man's. I will not
          reason and compare; my business is to create.
        </p>
      </Project>
    </motion.div>
  );
};

export default ProjectsReel;
