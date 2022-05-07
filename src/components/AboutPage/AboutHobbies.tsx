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
      {/* <FaGuitar color={colors.boldBlue} size={100} />
      <FaChess color={colors.boldBlue} size={100} /> */}
      <HobbyCard Icon={<FaChess />} xOffset={50} rotate={-15} />
      <HobbyCard Icon={<FaGuitar />} xOffset={35} rotate={-10} />
      <HobbyCard Icon={<FaTerminal />} xOffset={70} rotate={2} />
      <HobbyCard Icon={<FaPlaneDeparture />} xOffset={60} rotate={20} />
    </motion.div>
  );
};

export default AboutHobbies;
