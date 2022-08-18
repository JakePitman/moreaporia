import React, { useContext } from "react";

import styles from "./AboutTechContent.module.scss";
import FlipCard from "./FlipCard";
import {
  cardVariantsRightToLeft,
  cardVariantsBottomToTop,
} from "./flipCardVariants";
import colors from "../../shared/_colors.module.scss";
import BrowserContext from "../../shared/browserContext";
import {
  flipCardDataLandscape,
  flipCardDataPortrait,
} from "./AboutTechFlipCardData";
const { gradient1, gradient2, gradient3, gradient4 } = colors;

const landscapeGradientsMap = [
  [gradient1, gradient2],
  [gradient2, gradient3],
  [gradient3, gradient4],
];

const portraitGradientsMap = [
  [gradient4, gradient3],
  [gradient3, gradient2],
  [gradient2, gradient1],
];

const AboutJakeContent = () => {
  const { isLandscape } = useContext(BrowserContext);
  const cardVariants = isLandscape
    ? cardVariantsRightToLeft
    : cardVariantsBottomToTop;
  const flipCardData = isLandscape
    ? flipCardDataLandscape
    : flipCardDataPortrait;

  return (
    <div className={styles.rowsContainer}>
      {flipCardData.map((row, rowNumber) => (
        <div className={styles.row}>
          {row.map((cardData, cardNumber) => (
            <div
              className={styles.flipCardContainerLandscape}
              style={{
                transform: `rotate(${cardData.rotate}deg)`,
              }}
            >
              <FlipCard
                delay={cardData.delay}
                rotate={cardData.rotate}
                backgroundGradients={
                  isLandscape
                    ? (landscapeGradientsMap[rowNumber] as [string, string])
                    : (portraitGradientsMap[cardNumber] as [string, string])
                }
                variants={cardVariants}
                key={cardNumber}
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
