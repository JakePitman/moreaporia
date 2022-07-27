import React, { useContext } from "react";
import { motion } from "framer-motion";

import AboutText from "./AboutText";
import styles from "./AboutTexts.module.scss";
import AboutHobbies from "./AboutHobbies";
import AboutJakeContent from "./AboutJakeContent";
import BrowserContext from "../../shared/browserContext";

type Props = {
  selectedNavOption: "jake" | "work" | "tech" | null;
};

const AboutTexts = ({ selectedNavOption }: Props) => {
  const { isLandscape } = useContext(BrowserContext);

  if (selectedNavOption === "work") {
    return (
      <motion.div
        className={
          isLandscape
            ? styles.workTextContainerLandscape
            : styles.workTextContainerPortrait
        }
      >
        <AboutText visible={selectedNavOption === "work"}>
          <p className={styles.text}>My cool work</p>
        </AboutText>
      </motion.div>
    );
  }

  if (selectedNavOption === "jake") {
    return (
      <>
        <motion.div
          className={
            isLandscape
              ? styles.jakeTextContainerLeftLandscape
              : styles.jakeTextContainerLeftPortrait
          }
        >
          <AboutText visible={selectedNavOption === "jake"}>
            <AboutJakeContent />
          </AboutText>
        </motion.div>
        <motion.div
          className={
            isLandscape
              ? styles.jakeTextContainerRightLandscape
              : styles.jakeTextContainerRightPortrait
          }
        >
          <AboutText visible={selectedNavOption === "jake"}>
            <AboutHobbies />
          </AboutText>
        </motion.div>
      </>
    );
  }

  if (selectedNavOption === "tech") {
    return (
      <motion.div
        className={
          isLandscape
            ? styles.techTextContainerLandscape
            : styles.techTextContainerPortrait
        }
      >
        <AboutText visible={selectedNavOption === "tech"}>
          <p className={styles.text}>My cool tech</p>
        </AboutText>
      </motion.div>
    );
  }

  return <></>;
};

export default AboutTexts;
