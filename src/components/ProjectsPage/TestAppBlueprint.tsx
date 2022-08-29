import React from "react";
import colors from "../../shared/_colors.module.scss";
import { motion } from "framer-motion";
import styles from "./Blueprint.module.scss";

const variants = {
  hidden: { opacity: 0, pathLength: 0 },
  draw: { opacity: 1, pathLength: 1, transition: { duration: 1.2 } },
  imagesAppear: { opacity: 0, transition: { duration: 1 } },
};

const AppBlueprint = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 550 1115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <g id="brown-test-phone">
        <motion.rect
          variants={variants}
          id="Rectangle 1"
          x="3.5"
          y="3.5"
          width="543"
          height="1108"
          rx="66.5"
          stroke={colors.boldBlue}
          stroke-width="7"
          transform="scale(1, -1) translate(0, -1115)"
        />
        <motion.line
          variants={variants}
          id="Line 1"
          x1="29"
          y1="70"
          x2="175"
          y2="70"
          stroke={colors.boldBlue}
          stroke-width="10"
        />
        <motion.line
          variants={variants}
          id="Line 2"
          x1="29"
          y1="93.5"
          x2="58"
          y2="93.5"
          stroke={colors.boldBlue}
          stroke-width="7"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 1"
          cx="364"
          cy="79"
          r="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 4"
          cx="92.5"
          cy="1046.5"
          r="35"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 5"
          cx="272.5"
          cy="1046.5"
          r="35"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 6"
          cx="452.5"
          cy="1046.5"
          r="35"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 2"
          cx="432"
          cy="79"
          r="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 3"
          cx="501"
          cy="79"
          r="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 2"
          x="19.5"
          y="129.5"
          width="245"
          height="329"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 10"
          x="75.5"
          y="472.5"
          width="66"
          height="527"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 14"
          x="10.5"
          y="540.5"
          width="525"
          height="66"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 15"
          x="10.5"
          y="671.5"
          width="525"
          height="66"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 16"
          x="10.5"
          y="802.5"
          width="525"
          height="66"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 17"
          x="10.5"
          y="933.5"
          width="525"
          height="66"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 11"
          x="206.5"
          y="472.5"
          width="66"
          height="527"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 12"
          x="336.5"
          y="472.5"
          width="66"
          height="527"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 13"
          x="469.5"
          y="472.5"
          width="66"
          height="527"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 7"
          x="10.5"
          y="472.5"
          width="525"
          height="527"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 3"
          x="281.5"
          y="129.5"
          width="243"
          height="155"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 4"
          x="280.5"
          y="300.5"
          width="246"
          height="49"
          rx="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 8"
          x="280.5"
          y="354.5"
          width="246"
          height="49"
          rx="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 9"
          x="280.5"
          y="409.5"
          width="246"
          height="49"
          rx="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
      </g>
    </svg>
  );
};

export default AppBlueprint;
