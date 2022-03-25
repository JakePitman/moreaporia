import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutText.module.scss";

type Props = {
  text: string;
  visible: boolean;
};

const expandDefaults = {
  opacity: 1,
  transition: {
    duration: 0.5,
  },
};

const AboutText = ({ text, visible }: Props) => {
  if (!visible) {
    return <></>;
  }
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
      <p className={styles.text}>{text}</p>
    </motion.div>
  );
};

export default AboutText;
