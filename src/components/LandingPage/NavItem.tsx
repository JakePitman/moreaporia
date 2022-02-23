import React from "react";
import { motion } from "framer-motion";

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
  handleClick: () => void;
};

const NavItem = ({ title, handleClick }: Props) => {
  return (
    <motion.li
      variants={navItemVariants}
      className={styles.listItem}
      onClick={handleClick}
    >
      <p className={styles.listItemFirstLetter}>{title.slice(0, 1)}</p>
      {title.slice(1, title.length)}
    </motion.li>
  );
};

export default NavItem;
