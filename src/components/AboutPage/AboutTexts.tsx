import React from "react";
import { motion } from "framer-motion";

import AboutText from "./AboutText";
import FlipCard from "./FlipCard";
import styles from "./AboutTexts.module.scss";
import useWindowDimensions from "../../shared/useWindowDimensions";
import AboutHobbies from "./AboutHobbies";
import { cardVariantsRightToLeft } from "./flipCardVariants";

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
            <div
              className={styles.jakeFlipCardContainer}
              style={{ transform: "rotate(5deg)" }}
            >
              <FlipCard
                title="My cool card"
                delay={0}
                rotate={5}
                tagRotation={5}
                backgroundGradients={["white", "blue"]}
                variants={cardVariantsRightToLeft}
              >
                <p>My cool content</p>
              </FlipCard>
            </div>
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
