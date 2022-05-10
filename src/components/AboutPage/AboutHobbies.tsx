import React from "react";
import { motion } from "framer-motion";
import {
  FaGuitar,
  FaChess,
  FaTerminal,
  FaPlaneDeparture,
} from "react-icons/fa";

import HobbyCard from "./HobbyCard";
import useWindowDimensions from "../../shared/useWindowDimensions";

import styles from "./AboutHobbies.module.scss";

const landscapeLayout = () => (
  <motion.div className={styles.containerLandscape}>
    <HobbyCard
      title="Chess"
      Icon={<FaChess />}
      rotate={-15}
      tagRotation={10}
      delay={0}
    />
    <HobbyCard
      title="Guitar"
      Icon={<FaGuitar />}
      rotate={-10}
      delay={0.1}
      tagRotation={5}
    />
    <HobbyCard
      title="Code"
      Icon={<FaTerminal />}
      rotate={2}
      delay={0.2}
      tagRotation={-5}
    />
    <HobbyCard
      title="Travel"
      Icon={<FaPlaneDeparture />}
      rotate={20}
      tagRotation={-5}
      delay={0.3}
    />
  </motion.div>
);
const portraitLayout = () => (
  <motion.div className={styles.containerPortrait}>
    <HobbyCard
      title="Chess"
      Icon={<FaChess />}
      rotate={8}
      tagRotation={5}
      delay={0}
    />
    <HobbyCard
      title="Guitar"
      Icon={<FaGuitar />}
      rotate={2}
      tagRotation={5}
      delay={0.1}
    />
    <HobbyCard
      title="Code"
      Icon={<FaTerminal />}
      rotate={-10}
      tagRotation={5}
      delay={0.2}
    />
  </motion.div>
);

const AboutHobbies = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  return isLandscape ? landscapeLayout() : portraitLayout();
};

export default AboutHobbies;
