import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutImage.module.scss";
import {
  aboutImageContainerVariants,
  aboutImageVariants,
} from "./aboutImageVariants";

type Props = {
  src: string;
  alt: string;
};

//TODO: Find out why this appears and then shrinks when entering viewport
const AboutImage = ({ src, alt }: Props) => {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={aboutImageContainerVariants}
    >
      <div className={styles.cornerBorderTopRight} />
      <div className={styles.cornerBorderBottomLeft} />
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
