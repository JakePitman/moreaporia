import React from "react";
import { motion } from "framer-motion";

import AboutText from "./AboutText";
import styles from "./AboutTexts.module.scss";
import useWindowDimensions from "../../shared/useWindowDimensions";
import AboutHobbies from "./AboutHobbies";

type Props = {
  selectedNavOption: "jake" | "work" | "tech" | null;
};

const AboutTexts = ({ selectedNavOption }: Props) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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
            <h1 className={styles.heading}>Why coding?</h1>
            <p className={styles.text}>
              Coding is a creative outlet for me. I love designing and building
              beautiful and unique solutions to standard front-end problems.
            </p>
            <h1 className={styles.heading}>Before coding?</h1>
            <p className={styles.text}>
              I used to be an English teacher. Learning & life-long study are
              important to me, but I decided I wanted to build things as well.
              Coding lets me do it all!
            </p>
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
