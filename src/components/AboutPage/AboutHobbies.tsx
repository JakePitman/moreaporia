import React from "react";
import { motion } from "framer-motion";
import {
  FaGuitar,
  FaChess,
  FaTerminal,
  FaPlaneDeparture,
} from "react-icons/fa";

import FlipCard from "./FlipCard";
import useWindowDimensions from "../../shared/useWindowDimensions";
import colors from "../../shared/_colors.module.scss";

import styles from "./AboutHobbies.module.scss";

const colorGradients: [string, string][] = [
  ["#00fffb", "#00c8ff"],
  ["#00c8ff", "#0084ff"],
  ["#0084ff", "#0059ff"],
  ["#0059ff", "#0026ff"],
];

const flipCardDataLandscape = [
  { title: "Chess", icon: <FaChess />, rotate: -15, tagRotation: 15 },
  { title: "Guitar", icon: <FaGuitar />, rotate: -10, tagRotation: 5 },
  { title: "Code", icon: <FaTerminal />, rotate: 2, tagRotation: -6 },
  { title: "Travel", icon: <FaPlaneDeparture />, rotate: 20, tagRotation: -6 },
];
const flipCardDataPortrait = [
  { title: "Chess", icon: <FaChess />, rotate: 8 },
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
          title={title}
          rotate={rotate}
          tagRotation={tagRotation}
          delay={i / 10}
          backgroundGradients={colorGradients[i]}
        >
          {React.cloneElement(icon, {
            color: colors.primaryBackground,
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
          title={title}
          rotate={rotate}
          tagRotation={0}
          delay={i / 10}
          backgroundGradients={colorGradients[i]}
        >
          {React.cloneElement(icon, {
            color: colors.primaryBackground,
            size: 70,
          })}
        </FlipCard>
      </div>
    ))}
  </motion.div>
);

const AboutHobbies = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  return isLandscape ? landscapeLayout() : portraitLayout();
};

export default AboutHobbies;
