import React from "react";
import { motion } from "framer-motion";

import AboutText from "./AboutText";
import styles from "./AboutTexts.module.scss";
import useWindowDimensions from "../../shared/useWindowDimensions";

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
        <AboutText text="My cool work" visible={selectedNavOption === "work"} />
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
          <AboutText
            text="My cool jake"
            visible={selectedNavOption === "jake"}
          />
        </motion.div>
        <motion.div
          className={
            isLandscape
              ? styles.jakeTextContainerRightLandscape
              : styles.jakeTextContainerRightPortrait
          }
        >
          <AboutText
            text="My cool jake 2"
            visible={selectedNavOption === "jake"}
          />
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
        <AboutText text="My cool tech" visible={selectedNavOption === "tech"} />
      </motion.div>
    );
  }

  return <></>;
};

export default AboutTexts;
