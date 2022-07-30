import React, { useContext } from "react";

import styles from "./AboutWorkContent.module.scss";
import FlipCard from "./FlipCard";
import {
  cardVariantsLeftToRight,
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
            ? styles.flipCardContainerLandscape
            : styles.flipCardContainerPortrait
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
            isLandscape ? cardVariantsLeftToRight : cardVariantsBottomToTop
          }
        >
          <p className={styles.contentCardText}>First: Tooling</p>
        </FlipCard>
      </div>
    </>
  );
};

export default AboutJakeContent;
