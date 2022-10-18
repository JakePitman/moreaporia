import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";

import BrowserContext from "../../shared/browserContext";
import styles from "./ContactPage.module.scss";
import InitialText from "./InitialText";

const ContactPage = () => {
  const { isLandscape } = useContext(BrowserContext);
  const controls = useAnimation();
  const openingSequence = async () => {
    await controls.start("firstText");
    await controls.start("fade");
    await controls.start("secondText");
  };

  return (
    <motion.div
      className={styles.pageContainer}
      animate={controls}
      onViewportEnter={() => openingSequence()}
      initial="hidden"
    >
      <InitialText />
    </motion.div>
  );
};

export default ContactPage;
