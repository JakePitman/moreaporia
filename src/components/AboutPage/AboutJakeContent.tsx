import React from "react";
import { motion } from "framer-motion";

import AboutHobbies from "./AboutHobbies";
import styles from "./AboutJakeContent.module.scss";
import AboutText from "./AboutText";

type Props = {
  isLandscape: boolean;
};

const AboutJakeContent = ({ isLandscape }: Props) => {
  return (
    <>
      <motion.div
        className={
          isLandscape
            ? styles.textContainerLeftLandscape
            : styles.textContainerLeftPortrait
        }
      >
        <AboutText visible>My cool left column</AboutText>
      </motion.div>
      <motion.div
        className={
          isLandscape
            ? styles.textContainerRightLandscape
            : styles.textContainerRightPortrait
        }
      >
        <AboutText visible>
          <AboutHobbies />
        </AboutText>
      </motion.div>
    </>
  );
};

export default AboutJakeContent;
