import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import NavItem from "./NavItem";
import styles from "./AppNavigation.module.scss";
import useWindowDimensions from "../../shared/useWindowDimensions";

const AppNavigation = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const pathname = useLocation().pathname;

  if (pathname === "/") return <></>;

  return (
    <motion.div
      className={isLandscape ? styles.navbarLandscape : styles.navbarPortrait}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }}
    >
      <NavItem title="About" to="/about" />
      <NavItem title="Projects" to="/projects" />
      <NavItem title="Contact" to="/contact" />
    </motion.div>
  );
};

export default AppNavigation;
