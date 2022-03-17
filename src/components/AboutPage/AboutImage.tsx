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

const aboutImageContainer1VariantsLandscape =
  aboutImageContainer1Variants(true);
const aboutImageContainer1VariantsPortrait =
  aboutImageContainer1Variants(false);
const aboutImageContainer2VariantsLandscape =
  aboutImageContainer2Variants(true);
const aboutImageContainer2VariantsPortrait =
  aboutImageContainer2Variants(false);

const AboutImage = ({ src, alt, type }: Props) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const typeToVariantsMap = {
    "1": isLandscape
      ? aboutImageContainer1VariantsLandscape
      : aboutImageContainer1VariantsPortrait,
    "2": isLandscape
      ? aboutImageContainer2VariantsLandscape
      : aboutImageContainer2VariantsPortrait,
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
