import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGuitar, FaSwimmer, FaTerminal } from "react-icons/fa";

import FlipCard from "./FlipCard";
import {
  cardVariantsLeftToRight,
  cardVariantsTopToBottom,
} from "./flipCardVariants";
import colors from "../../shared/_colors.module.scss";
import styles from "./AboutHobbies.module.scss";
import BrowserContext from "../../shared/browserContext";

const {
  gradient1,
  gradient2,
  gradient3,
  gradient4,
  gradient5,
  primaryBackground,
} = colors;

const colorGradients: [string, string][] = [
  [gradient1, gradient2],
  [gradient2, gradient4],
  [gradient4, gradient5],
];

const flipCardDataLandscape = [
  { title: "Chess", icon: <FaSwimmer />, rotate: -15, tagRotation: 15 },
  { title: "Guitar", icon: <FaGuitar />, rotate: -3, tagRotation: 5 },
  { title: "Code", icon: <FaTerminal />, rotate: 13, tagRotation: -6 },
];
const flipCardDataPortrait = [
  { title: "Chess", icon: <FaSwimmer />, rotate: 8 },
  { title: "Guitar", icon: <FaGuitar />, rotate: 2 },
  { title: "Code", icon: <FaTerminal />, rotate: -10 },
];

const landscapeLayout = () => (
  <motion.div className={styles.containerLandscape}>
    {/* TODO: Add rotation rules to these */}
    {flipCardDataLandscape.map(({ title, icon, rotate, tagRotation }, i) => (
      <div
        className={styles.hobbyCardContainerLandscape}
        style={{ transform: `rotate(${rotate}deg)` }}
        key={`hobby-card-${i}`}
      >
        <FlipCard
          rotate={rotate}
          delay={i / 10}
          backgroundGradients={colorGradients[i]}
          variants={cardVariantsLeftToRight}
        >
          {React.cloneElement(icon, {
            color: primaryBackground,
            size: 115,
          })}
        </FlipCard>
      </div>
    ))}
  </motion.div>
);
const portraitLayout = () => (
  <motion.div className={styles.containerPortrait}>
    {flipCardDataPortrait.map(({ title, icon, rotate }, i) => (
      <div
        className={styles.hobbyCardContainerPortrait}
        style={{ transform: `rotate(${rotate}deg)` }}
        key={`hobby-card-${i}`}
      >
        <FlipCard
          rotate={rotate}
          delay={i / 10}
          backgroundGradients={colorGradients[i]}
          variants={cardVariantsTopToBottom}
        >
          {React.cloneElement(icon, {
            color: primaryBackground,
            size: 70,
          })}
        </FlipCard>
      </div>
    ))}
  </motion.div>
);

const AboutHobbies = () => {
  const { isLandscape } = useContext(BrowserContext);

  return isLandscape ? landscapeLayout() : portraitLayout();
};

export default AboutHobbies;
