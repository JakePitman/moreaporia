import React from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

import Project from "./Project";
import styles from "./ProjectsReel.module.scss";
import logicCalculatorImg from "./pictures/logic-calc/image.png";
import LogicCalculatorBluePrint from "./pictures/logic-calc/Blueprint";

const ProjectsReel = () => {
  return (
    <motion.div className={styles.pageContainer}>
      <Project
        imgSrc={logicCalculatorImg}
        imgAlt={"Logic calculator"}
        Blueprint={LogicCalculatorBluePrint}
        title="Logic Calculator"
        year="2020"
        tools={[
          { name: "Node", href: "https://nodejs.org/en/" },
          { name: "TS", href: "https://www.typescriptlang.org/" },
          {
            name: "Inquirer",
            href: "https://github.com/SBoudrias/Inquirer.js",
          },
          {
            name: "tty-table",
            href: "https://www.npmjs.com/package/tty-table",
          },
          {
            name: "figlet",
            href: "https://www.npmjs.com/package/figlet",
          },
        ]}
        links={[
          {
            Icon: FiGithub,
            href: "https://github.com/JakePitman/logic-calculator",
          },
        ]}
      >
        <p className={styles.bodyText}>
          Calculates all models of a given logical proposition or argument,
          demonstrating whether it's valid or not.
        </p>
        <p className={styles.bodyText}>
          Teaching a computer how something works demands perfect understanding
          of the subject. I learned a lot by making this.
        </p>
      </Project>
    </motion.div>
  );
};

export default ProjectsReel;
