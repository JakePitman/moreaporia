import React from "react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

import styles from "./ScrollIndicator.module.scss";
import colors from "../../shared/_colors.module.scss";

const ScrollIndicator = () => {
  return (
    <motion.div
      className={styles.container}
      animate={{ opacity: 1 }}
      transition={{
        delay: 5,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      }}
    >
      <BsChevronDown size={50} color={colors.greyBlue} />
    </motion.div>
  );
};

export default ScrollIndicator;
