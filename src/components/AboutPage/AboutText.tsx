import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutText.module.scss";

type Props = {
  children: React.ReactNode;
};

const expandDefaults = {
  opacity: 1,
  transition: {
    duration: 0.5,
  },
};

const AboutText = ({ children }: Props) => {
  return (
    <motion.div
      variants={{
        shrink: { opacity: 0 },
        workActiveExpand: expandDefaults,
        jakeActiveExpand: expandDefaults,
        techActiveExpand: expandDefaults,
      }}
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};

export default AboutText;
