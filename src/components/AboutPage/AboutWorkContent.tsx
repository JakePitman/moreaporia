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

  return (
    <div className={styles.rowsContainer}>
      <div className={styles.row}>
        <div
          className={styles.flipCardContainerLandscape}
          style={{ transform: `rotate(${10}deg)` }}
        >
          <FlipCard
            title="My cool card"
            delay={0}
            rotate={10}
            tagRotation={5}
            backgroundGradients={[gradient1, gradient3]}
            variants={cardVariantsLeftToRight}
          >
            <p className={styles.contentCardText}>First: Tooling</p>
          </FlipCard>
        </div>

        <div
          className={styles.flipCardContainerLandscapeSmall}
          style={{ transform: `rotate(${10}deg)` }}
        >
          <FlipCard
            title="My cool card"
            delay={0}
            rotate={10}
            tagRotation={5}
            backgroundGradients={[gradient1, gradient3]}
            variants={cardVariantsLeftToRight}
          >
            <p className={styles.contentCardText}>First: Tooling</p>
          </FlipCard>
        </div>

        <div
          className={styles.flipCardContainerLandscape}
          style={{ transform: `rotate(${10}deg)` }}
        >
          <FlipCard
            title="My cool card"
            delay={0}
            rotate={10}
            tagRotation={5}
            backgroundGradients={[gradient1, gradient3]}
            variants={cardVariantsLeftToRight}
          >
            <p className={styles.contentCardText}>First: Tooling</p>
          </FlipCard>
        </div>
      </div>

      <div className={styles.row}>
        <div
          className={styles.flipCardContainerLandscapeSmall}
          style={{ transform: `rotate(${10}deg)` }}
        >
          <FlipCard
            title="My cool card"
            delay={0}
            rotate={10}
            tagRotation={5}
            backgroundGradients={[gradient1, gradient3]}
            variants={cardVariantsLeftToRight}
          >
            <p className={styles.contentCardText}>First: Tooling</p>
          </FlipCard>
        </div>
        <div
          className={styles.flipCardContainerLandscape}
          style={{ transform: `rotate(${10}deg)` }}
        >
          <FlipCard
            title="My cool card"
            delay={0}
            rotate={10}
            tagRotation={5}
            backgroundGradients={[gradient1, gradient3]}
            variants={cardVariantsLeftToRight}
          >
            <p className={styles.contentCardText}>First: Tooling</p>
          </FlipCard>
        </div>
        <div
          className={styles.flipCardContainerLandscapeSmall}
          style={{ transform: `rotate(${10}deg)` }}
        >
          <FlipCard
            title="My cool card"
            delay={0}
            rotate={10}
            tagRotation={5}
            backgroundGradients={[gradient1, gradient3]}
            variants={cardVariantsLeftToRight}
          >
            <p className={styles.contentCardText}>First: Tooling</p>
          </FlipCard>
        </div>
      </div>
    </div>
  );
};

export default AboutJakeContent;
