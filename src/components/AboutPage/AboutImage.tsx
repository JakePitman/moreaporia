import React, { useContext } from "react";
import { motion } from "framer-motion";

import beach from "./pictures/beach.png";
import guitar from "./pictures/guitar.png";
import tree from "./pictures/tree.png";
import castleHill from "./pictures/castle_hill.png";
import temple from "./pictures/temple.png";
import BrowserContext from "../../shared/browserContext";

import styles from "./AboutImage.module.scss";
import {
  aboutImageContainer1VariantsLandscape,
  aboutImageContainer1VariantsPortrait,
  aboutImageContainer2VariantsLandscape,
  aboutImageContainer2VariantsPortrait,
  aboutImageVariants,
  topRightCornerVariants,
  bottomLeftCornerVariants,
} from "./aboutImageVariants";

type Props = {
  type: "1" | "2";
  selectedNavOption: "work" | "jake" | "tech";
};

const optionToPictureMaps = {
  "1": {
    work: temple,
    jake: null,
    tech: beach,
  },
  "2": {
    work: guitar,
    jake: castleHill,
    tech: tree,
  },
};

const AboutImage = ({ type, selectedNavOption }: Props) => {
  const { isLandscape } = useContext(BrowserContext);
  const typeToVariantsMap = {
    "1": isLandscape
      ? aboutImageContainer1VariantsLandscape
      : aboutImageContainer1VariantsPortrait,
    "2": isLandscape
      ? aboutImageContainer2VariantsLandscape
      : aboutImageContainer2VariantsPortrait,
  };

  return (
    <motion.div className={styles.container} variants={typeToVariantsMap[type]}>
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
      <motion.div
        className={styles.imagesContainer}
        variants={aboutImageVariants}
      >
        <img
          src={optionToPictureMaps[type].work}
          alt={"jake"}
          className={
            selectedNavOption === "work"
              ? styles.imageActive
              : styles.imageInactive
          }
        />
        {!!optionToPictureMaps[type].jake ? (
          <img
            src={optionToPictureMaps[type].jake as string}
            alt={"jake"}
            className={
              selectedNavOption === "jake"
                ? styles.imageActive
                : styles.imageInactive
            }
          />
        ) : null}
        <img
          src={optionToPictureMaps[type].tech}
          alt={"jake"}
          className={
            selectedNavOption === "tech"
              ? styles.imageActive
              : styles.imageInactive
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutImage;
