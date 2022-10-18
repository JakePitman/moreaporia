import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import classNames from "classnames";

import BrowserContext from "../../shared/browserContext";
import styles from "./ContactPage.module.scss";

const highlightedTextVariants = ({
  delay,
  xOffset,
  yOffset,
}: {
  delay: number;
  xOffset: number;
  yOffset: number;
}) => ({
  hidden: { opacity: 0, x: xOffset, y: yOffset, scale: 0.9 },
  firstText: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay, duration: 4 - delay },
  },
  fade: { opacity: 0.5 },
  secondText: { opacity: 1, scale: 1 },
});
const textSegmentVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  secondText: { opacity: 1, scale: 1 },
};

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
      <div className={styles.textContainer}>
        <div className={styles.textRow}>
          <motion.h3
            variants={highlightedTextVariants({
              delay: 0.2,
              xOffset: -30,
              yOffset: -40,
            })}
            className={classNames(styles.highlightedText, styles.spacingRight)}
          >
            Express
          </motion.h3>
          <motion.h3
            variants={textSegmentVariants}
            className={styles.textSegment}
          >
            yourself
          </motion.h3>
        </div>
        <div className={styles.textRow}>
          <motion.h3
            variants={textSegmentVariants}
            className={styles.textSegment}
          >
            This is
          </motion.h3>
          <motion.h3
            variants={highlightedTextVariants({
              delay: 0.4,
              xOffset: 50,
              yOffset: -20,
            })}
            className={classNames(
              styles.highlightedText,
              styles.spacingLeft,
              styles.spacingRight
            )}
          >
            your
          </motion.h3>
          <motion.h3
            variants={textSegmentVariants}
            className={styles.textSegment}
          >
            chance to stand out
          </motion.h3>
        </div>
        <div className={styles.textRow}>
          <motion.h3
            variants={textSegmentVariants}
            className={styles.textSegment}
          >
            To create a
          </motion.h3>
          <motion.h3
            variants={highlightedTextVariants({
              delay: 0.6,
              xOffset: -50,
              yOffset: 20,
            })}
            className={classNames(
              styles.highlightedText,
              styles.spacingLeft,
              styles.spacingRight
            )}
          >
            unique
          </motion.h3>
          <motion.h3
            variants={textSegmentVariants}
            className={styles.textSegment}
          >
            platform
          </motion.h3>
        </div>
        <div className={styles.textRow}>
          <motion.h3
            variants={textSegmentVariants}
            className={styles.textSegment}
          >
            And to make your
          </motion.h3>
          <motion.h3
            variants={highlightedTextVariants({
              delay: 0.8,
              xOffset: 30,
              yOffset: 40,
            })}
            className={classNames(
              styles.highlightedText,
              styles.spacingLeft,
              styles.spacingRight
            )}
          >
            vision
          </motion.h3>
          <motion.h3
            variants={textSegmentVariants}
            className={styles.textSegment}
          >
            a reality
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
