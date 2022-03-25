import React from "react";
import { motion } from "framer-motion";

import AboutText from "./AboutText";
import styles from "./AboutTexts.module.scss";

type Props = {
  selectedNavOption: "jake" | "work" | "tech" | null;
};

const AboutTexts = ({ selectedNavOption }: Props) => {
  if (selectedNavOption === "work") {
    return (
      <motion.div className={styles.workTextContainer}>
        <AboutText text="My cool work" visible={selectedNavOption === "work"} />
      </motion.div>
    );
  }

  if (selectedNavOption === "jake") {
    return (
      <>
        <motion.div className={styles.jakeTextContainerLeft}>
          <AboutText
            text="My cool jake"
            visible={selectedNavOption === "jake"}
          />
        </motion.div>
        <motion.div className={styles.jakeTextContainerRight}>
          <AboutText
            text="My cool jake 2"
            visible={selectedNavOption === "jake"}
          />
        </motion.div>
      </>
    );
  }

  if (selectedNavOption === "tech") {
    return (
      <motion.div className={styles.techTextContainer}>
        <AboutText text="My cool tech" visible={selectedNavOption === "tech"} />
      </motion.div>
    );
  }

  return <></>;
};

export default AboutTexts;
