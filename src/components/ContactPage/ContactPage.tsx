import React, { useCallback, useContext, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, useAnimation } from "framer-motion";

import BrowserContext from "../../shared/browserContext";
import styles from "./ContactPage.module.scss";
import InitialText from "./InitialText";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const { isLandscape } = useContext(BrowserContext);
  const controls = useAnimation();
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [splineStarted, setSplineStarted] = useState(false);

  const openingSequence = async () => {
    await controls.start("firstText");
    await controls.start("initialFade");
    await controls.start("secondText");
  };

  const splineContainerVariants = {
    splineStarted: {
      opacity: 1,
    },
  };

  const runPostTextAnimation = useCallback(async () => {
    await controls.start("splineStarted");
    await controls.start("slideFormFields");
    await controls.start("expandFormFields");
  }, [controls]);

  useEffect(() => {
    splineStarted && runPostTextAnimation();
  }, [splineStarted, runPostTextAnimation]);

  useEffect(() => {
    animationCompleted && !isLandscape && runPostTextAnimation();
  }, [animationCompleted, isLandscape, runPostTextAnimation]);

  return (
    <motion.div
      className={styles.pageContainer}
      animate={controls}
      onViewportEnter={() => openingSequence()}
      initial="hidden"
    >
      <ContactForm />
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
      <InitialText setAnimationCompleted={setAnimationCompleted} />
    </motion.div>
  );
};

export default ContactPage;
