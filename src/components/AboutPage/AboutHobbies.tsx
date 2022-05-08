import React from "react";
import { motion } from "framer-motion";
import {
  FaGuitar,
  FaChess,
  FaTerminal,
  FaPlaneDeparture,
} from "react-icons/fa";

import HobbyCard from "./HobbyCard";

import styles from "./AboutHobbies.module.scss";

const AboutHobbies = () => {
  return (
    <motion.div className={styles.container}>
      <HobbyCard Icon={<FaChess />} rotate={-15} delay={0} />
      <HobbyCard Icon={<FaGuitar />} rotate={-10} delay={0.1} />
      <HobbyCard Icon={<FaTerminal />} rotate={2} delay={0.2} />
      <HobbyCard Icon={<FaPlaneDeparture />} rotate={20} delay={0.3} />
    </motion.div>
  );
};

export default AboutHobbies;
