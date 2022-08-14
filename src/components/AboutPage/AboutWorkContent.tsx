import React, { useContext } from "react";

import styles from "./AboutWorkContent.module.scss";
import FlipCard from "./FlipCard";
import {
  cardVariantsLeftToRight,
  cardVariantsTopToBottom,
} from "./flipCardVariants";
import colors from "../../shared/_colors.module.scss";
import BrowserContext from "../../shared/browserContext";
const { gradient1, gradient2, gradient3, gradient4, gradient5 } = colors;

const flipCardData = [
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
];
const portraitGradientsMap = [
  [gradient4, gradient3],
  [gradient3, gradient2],
  [gradient2, gradient1],
];

const AboutJakeContent = () => {
  const { isLandscape } = useContext(BrowserContext);
  const cardVariants = isLandscape
    ? cardVariantsLeftToRight
    : cardVariantsTopToBottom;

  return (
    <div className={styles.rowsContainer}>
      {flipCardData.map((row, rowNumber) => (
        <div className={styles.row}>
          {row.map((cardData, cardNumber) => (
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
                  isLandscape
                    ? rowNumber === 0
                      ? [gradient1, gradient3]
                      : [gradient3, gradient5]
                    : (portraitGradientsMap[cardNumber] as [string, string])
                }
                variants={cardVariants}
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
