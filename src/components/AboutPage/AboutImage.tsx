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
import useWindowDimensions from "../../shared/useWindowDimensions";

type Props = {
  src: string | null;
  alt: string;
  type: "1" | "2";
};

const AboutImage = ({ src, alt, type }: Props) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const typeToVariantsMap = {
    "1": aboutImageContainer1Variants(isLandscape),
    "2": aboutImageContainer2Variants(isLandscape),
  };

  return (
    <motion.div
      className={styles.imageContainer}
      variants={typeToVariantsMap[type]}
    >
      <motion.div
        className={
          isLandscape
            ? styles.cornerBorderTopRightLandscape
            : styles.cornerBorderTopRightPortrait
        }
        variants={topRightCornerVariants}
      />
      <motion.div
        className={
          isLandscape
            ? styles.cornerBorderBottomLeftLandscape
            : styles.cornerBorderBottomLeftPortrait
        }
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
