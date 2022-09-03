import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import styles from "./NavItem.module.scss";

const navItemVariants = {
  hidden: { opacity: 0, transform: "translateX(-40px)" },
  visible: {
    transform: "translateX(0px)",
    opacity: 1,
  },
};

type Props = {
  title: string;
  to: string;
  isActive: boolean;
};

const NavItem = ({ title, to, isActive }: Props) => {
  return (
    <motion.li variants={navItemVariants} className={styles.listItem}>
      <div
        className={isActive ? styles.activeIndicator : styles.inactiveIndicator}
      />
      <div className={styles.textContainer}>
        <Link to={to} className={styles.clickArea} />
        <p className={styles.listItemFirstLetter}>{title.slice(0, 1)}</p>
        {title.slice(1, title.length)}
      </div>
    </motion.li>
  );
};

export default NavItem;
