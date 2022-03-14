import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutImage.module.scss";
import {
  aboutImageContainerVariants,
  aboutImageVariants,
  topRightCornerVariants,
  bottomLeftCornerVariants,
} from "./aboutImageVariants";

type Props = {
  src: string;
  alt: string;
};

const AboutImage = ({ src, alt }: Props) => {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={aboutImageContainerVariants}
    >
      <motion.div
        className={styles.cornerBorderTopRight}
        variants={topRightCornerVariants}
      />
      <motion.div
        className={styles.cornerBorderBottomLeft}
        variants={bottomLeftCornerVariants}
      />
      <motion.img
        src={src}
        alt={alt}
        className={styles.image}
        variants={aboutImageVariants}
      />
    </motion.div>
  );
};

export default AboutImage;
