import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import NavItem from "./NavItem";
import styles from "./AppNavigation.module.scss";
import useWindowDimensions from "../../shared/useWindowDimensions";
import colors from "../../shared/_colors.module.scss";

const homeButtonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
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
      <Link to="/home">
        <motion.div className={styles.homeButton} variants={homeButtonVariants}>
          <FiHome size="30px" color={colors.primaryYellow} />
        </motion.div>
      </Link>
      <div className={styles.rightNavItems}>
        <NavItem title="About" to="/about" />
        <NavItem title="Projects" to="/projects" />
        <NavItem title="Contact" to="/contact" />
      </div>
    </motion.div>
  );
};

export default AppNavigation;
