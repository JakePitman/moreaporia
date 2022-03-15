import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutImage.module.scss";
import {
  aboutImageContainer1Variants,
  aboutImageContainer2Variants,
  aboutImageVariants,
  topRightCornerVariants,
  bottomLeftCornerVariants,
} from "./aboutImageVariants";

type Props = {
  src: string | null;
  alt: string;
  type: "1" | "2";
};

const typeToVariantsMap = {
  "1": aboutImageContainer1Variants,
  "2": aboutImageContainer2Variants,
};

const AboutImage = ({ src, alt, type }: Props) => {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={typeToVariantsMap[type]}
    >
      <motion.div
        className={styles.cornerBorderTopRight}
        variants={topRightCornerVariants}
      />
      <motion.div
        className={styles.cornerBorderBottomLeft}
        variants={bottomLeftCornerVariants}
      />
      {!!src && (
        <motion.img
          src={src}
          alt={alt}
          className={styles.image}
          variants={aboutImageVariants}
        />
      )}
    </motion.div>
  );
};

export default AboutImage;
