import React from "react";
import { motion } from "framer-motion";

import AboutText from "./AboutText";
import FlipCard from "./FlipCard";
import styles from "./AboutTexts.module.scss";
import useWindowDimensions from "../../shared/useWindowDimensions";
import AboutHobbies from "./AboutHobbies";
import {
  cardVariantsRightToLeft,
  cardVariantsBottomToTop,
} from "./flipCardVariants";
import colors from "../../shared/_colors.module.scss";

const { gradient1, gradient3, gradient5 } = colors;

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

  const firstFlipCardRotation = isLandscape ? 3 : -1;

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
              className={
                isLandscape
                  ? styles.jakeFlipCardContainerLandscape
                  : styles.jakeFlipCardContainerPortrait
              }
              style={{ transform: `rotate(${firstFlipCardRotation}deg)` }}
            >
              <FlipCard
                title="My cool card"
                delay={0}
                rotate={firstFlipCardRotation}
                tagRotation={5}
                backgroundGradients={[gradient1, gradient3]}
                variants={
                  isLandscape
                    ? cardVariantsRightToLeft
                    : cardVariantsBottomToTop
                }
              >
                <p>My cool content</p>
              </FlipCard>
            </div>
            {isLandscape && (
              <div
                className={styles.jakeFlipCardContainerLandscape}
                style={{ transform: "rotate(-2deg)" }}
              >
                <FlipCard
                  title="My cool card"
                  delay={0.1}
                  rotate={-2}
                  tagRotation={5}
                  backgroundGradients={[gradient3, gradient5]}
                  variants={cardVariantsRightToLeft}
                >
                  <p>My cool content</p>
                </FlipCard>
              </div>
            )}
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
