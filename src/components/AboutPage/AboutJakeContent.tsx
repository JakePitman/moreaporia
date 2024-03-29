import React, { useContext } from "react";

import styles from "./AboutJakeContent.module.scss";
import FlipCard from "./FlipCard";
import {
  cardVariantsRightToLeft,
  cardVariantsBottomToTop,
} from "./flipCardVariants";
import colors from "../../shared/_colors.module.scss";
import BrowserContext from "../../shared/browserContext";
const { gradient1, gradient3, gradient5 } = colors;

const AboutJakeContent = () => {
  const { isLandscape } = useContext(BrowserContext);
  const firstFlipCardRotation = isLandscape ? 3 : -1;

  return (
    <>
      <div
        className={
          isLandscape
            ? styles.jakeFlipCardContainerLandscape
            : styles.jakeFlipCardContainerPortrait
        }
        style={{ transform: `rotate(${firstFlipCardRotation}deg)` }}
      >
        <FlipCard
          delay={0}
          rotate={firstFlipCardRotation}
          backgroundGradients={[gradient1, gradient3]}
          variants={
            isLandscape ? cardVariantsRightToLeft : cardVariantsBottomToTop
          }
        >
          <p className={styles.contentCardText}>
            A teacher turned software engineer with a love of creativity and
            problem solving.
          </p>
        </FlipCard>
      </div>
      {isLandscape && (
        <div
          className={styles.jakeFlipCardContainerLandscape}
          style={{ transform: "rotate(-2deg)" }}
        >
          <FlipCard
            delay={0.1}
            rotate={-2}
            backgroundGradients={[gradient3, gradient5]}
            variants={cardVariantsRightToLeft}
          >
            <p className={styles.contentCardText}>
              I turned to coding so I could consume less and build more.
            </p>
          </FlipCard>
        </div>
      )}{" "}
    </>
  );
};

export default AboutJakeContent;
