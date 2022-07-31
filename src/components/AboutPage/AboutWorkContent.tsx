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

const flipCardData = {
  landscape: [
    [
      {
        rotate: 3,
        delay: 0,
        children: <p className={styles.contentCardText}>First: Tooling!</p>,
      },
      {
        rotate: -3,
        delay: 0.2,
        children: <p className={styles.contentCardText}>2</p>,
        small: true,
      },
      {
        rotate: 4,
        delay: 0.4,
        children: (
          <p className={styles.contentCardText}>Third: Something better!</p>
        ),
      },
    ],
    [
      {
        rotate: -3,
        delay: 0.1,
        children: <p className={styles.contentCardText}>1</p>,
        small: true,
      },
      {
        rotate: 2,
        delay: 0.3,
        children: (
          <p className={styles.contentCardText}>Second: Something else!</p>
        ),
      },
      {
        rotate: -2,
        delay: 0.5,
        children: <p className={styles.contentCardText}>3</p>,
        small: true,
      },
    ],
  ],
};

const AboutJakeContent = () => {
  const { isLandscape } = useContext(BrowserContext);

  return (
    <div className={styles.rowsContainer}>
      {flipCardData.landscape.map((row, rowNumber) => (
        <div className={styles.row}>
          {row.map((cardData) => (
            <div
              className={
                cardData.small
                  ? styles.flipCardContainerLandscapeSmall
                  : styles.flipCardContainerLandscape
              }
              style={{ transform: `rotate(${cardData.rotate}deg)` }}
            >
              <FlipCard
                title="My cool card"
                delay={cardData.delay}
                rotate={cardData.rotate}
                tagRotation={5}
                backgroundGradients={
                  rowNumber === 0
                    ? [gradient1, gradient3]
                    : [gradient3, gradient5]
                }
                variants={cardVariantsLeftToRight}
              >
                {cardData.children}
              </FlipCard>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AboutJakeContent;
