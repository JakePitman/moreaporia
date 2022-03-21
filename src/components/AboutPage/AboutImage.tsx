import React from "react";
import { motion } from "framer-motion";

import kayak from "./pictures/kayak.png";
import beach from "./pictures/beach.png";
import sahoGardens from "./pictures/saho_jake_gardens.png";
import guitar from "./pictures/guitar.png";
import tree from "./pictures/tree.png";

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
  type: "1" | "2";
  selectedNavOption: "work" | "jake" | "tech";
};

const aboutImageContainer1VariantsLandscape =
  aboutImageContainer1Variants(true);
const aboutImageContainer1VariantsPortrait =
  aboutImageContainer1Variants(false);
const aboutImageContainer2VariantsLandscape =
  aboutImageContainer2Variants(true);
const aboutImageContainer2VariantsPortrait =
  aboutImageContainer2Variants(false);

const optionToPictureMaps = {
  "1": {
    work: guitar,
    jake: null,
    tech: beach,
  },
  "2": {
    work: sahoGardens,
    jake: kayak,
    tech: tree,
  },
};

const AboutImage = ({ type, selectedNavOption }: Props) => {
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
      <motion.img
        src={optionToPictureMaps[type].work}
        alt={"jake"}
        className={
          selectedNavOption === "work"
            ? styles.imageActive
            : styles.imageInactive
        }
        variants={aboutImageVariants}
      />
      {!!optionToPictureMaps[type].jake ? (
        <motion.img
          src={optionToPictureMaps[type].jake as string}
          alt={"jake"}
          className={
            selectedNavOption === "jake"
              ? styles.imageActive
              : styles.imageInactive
          }
          variants={aboutImageVariants}
        />
      ) : null}
      <motion.img
        src={optionToPictureMaps[type].tech}
        alt={"jake"}
        className={
          selectedNavOption === "tech"
            ? styles.imageActive
            : styles.imageInactive
        }
        variants={aboutImageVariants}
      />
    </motion.div>
  );
};

export default AboutImage;
