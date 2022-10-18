import React, { useContext, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, useAnimation } from "framer-motion";

import BrowserContext from "../../shared/browserContext";
import styles from "./ContactPage.module.scss";
import InitialText from "./InitialText";

const ContactPage = () => {
  const { isLandscape } = useContext(BrowserContext);
  const controls = useAnimation();
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [splineStarted, setSplineStarted] = useState(false);

  const openingSequence = async () => {
    await controls.start("firstText");
    await controls.start("initialFade");
    await controls.start("secondText");
    setAnimationCompleted(true);
  };

  const splineContainerVariants = {
    splineStarted: {
      opacity: 1,
    },
  };

  useEffect(() => {
    splineStarted && controls.start("splineStarted");
  }, [splineStarted, controls]);

  return isLandscape ? (
    <motion.div
      className={styles.pageContainer}
      animate={controls}
      onViewportEnter={() => openingSequence()}
      initial="hidden"
    >
      <motion.div
        variants={splineContainerVariants}
        className={styles.splineContainer}
      >
        {animationCompleted && isLandscape && (
          <Spline
            scene="https://prod.spline.design/urecjewqLGNYS7lp/scene.splinecode"
            onStart={() => setSplineStarted(true)}
          />
        )}
      </motion.div>
      <InitialText />
    </motion.div>
  ) : (
    <></>
  );
};

export default ContactPage;
