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
      <g id="blue-list-phone">
        <motion.rect
          variants={variants}
          id="Rectangle 1"
          x="3.5"
          y="3.5"
          width="543"
          height="1108"
          rx="66.5"
          stroke={colors.boldBlue}
          strokeWidth="7"
          transform="scale(1, -1) translate(0, -1115)"
        />
        <motion.line
          variants={variants}
          id="Line 1"
          x1="32"
          y1="75"
          x2="176"
          y2="75"
          stroke={colors.boldBlue}
          strokeWidth="10"
        />
        <motion.line
          variants={variants}
          id="Line 3"
          x1="86"
          y1="713"
          x2="219"
          y2="713"
          stroke={colors.boldBlue}
          strokeWidth="10"
        />
        <motion.line
          variants={variants}
          id="Line 4"
          x1="254"
          y1="795"
          x2="333"
          y2="795"
          stroke={colors.boldBlue}
          strokeWidth="10"
        />
        <motion.line
          variants={variants}
          id="Line 5"
          x1="360"
          y1="795"
          x2="472"
          y2="795"
          stroke={colors.boldBlue}
          strokeWidth="10"
        />
        <motion.line
          variants={variants}
          id="Line 2"
          x1="32"
          y1="97.5"
          x2="61"
          y2="97.5"
          stroke={colors.boldBlue}
          strokeWidth="7"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 1"
          cx="365"
          cy="84"
          r="13.5"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 4"
          cx="96.5"
          cy="1045.5"
          r="35"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 5"
          cx="274.5"
          cy="1045.5"
          r="35"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 6"
          cx="452.5"
          cy="1045.5"
          r="35"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 2"
          cx="433"
          cy="84"
          r="13.5"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 3"
          cx="501"
          cy="84"
          r="13.5"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 2"
          x="21.5"
          y="133.5"
          width="243"
          height="327"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 7"
          x="10.5"
          y="470.5"
          width="528"
          height="530"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 3"
          x="281.5"
          y="133.5"
          width="243"
          height="155"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 4"
          x="281.5"
          y="303.5"
          width="243"
          height="48"
          rx="13.5"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 5"
          x="281.5"
          y="357.5"
          width="243"
          height="48"
          rx="13.5"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 6"
          x="281.5"
          y="412.5"
          width="243"
          height="48"
          rx="13.5"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 8"
          x="51.5"
          y="658.5"
          width="444"
          height="172"
          rx="14.5"
          stroke={colors.boldBlue}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default AppBlueprint;
