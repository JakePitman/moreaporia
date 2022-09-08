import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import styles from "./NavItem.module.scss";

const navItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    x: 0,
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
        <p className={styles.itemTextBoldHighlighted}>{title.slice(0, 1)}</p>
        <p className={isActive ? styles.itemTextHighlighted : styles.itemText}>
          {title.slice(1, title.length)}
        </p>
      </div>
    </motion.li>
  );
};

export default NavItem;
