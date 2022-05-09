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

const AboutHobbies = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <motion.div
      className={
        isLandscape ? styles.containerLandscape : styles.containerPortrait
      }
    >
      <HobbyCard Icon={<FaChess />} rotate={-15} delay={0} />
      <HobbyCard Icon={<FaGuitar />} rotate={-10} delay={0.1} />
      <HobbyCard Icon={<FaTerminal />} rotate={2} delay={0.2} />
      {isLandscape && (
        <HobbyCard Icon={<FaPlaneDeparture />} rotate={20} delay={0.3} />
      )}
    </motion.div>
  );
};

export default AboutHobbies;
