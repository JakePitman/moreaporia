import React from "react";
import { FaGuitar, FaChess } from "react-icons/fa";
import HobbyCard from "./HobbyCard";

import styles from "./AboutHobbies.module.scss";

const AboutHobbies = () => {
  return (
    <div className={styles.container}>
      {/* <FaGuitar color={colors.boldBlue} size={100} />
      <FaChess color={colors.boldBlue} size={100} /> */}
      <HobbyCard Icon={<FaChess />} />
    </div>
  );
};

export default AboutHobbies;
