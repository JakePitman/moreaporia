import React from "react";
import colors from "../../shared/_colors.module.scss";
import { motion } from "framer-motion";

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
      viewBox="0 0 552 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="app-blueprint">
        <motion.rect
          id="app-container"
          x="1.5"
          y="-1.5"
          width="549"
          height="1077"
          transform="matrix(1 0 0 -1 0 1077)"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.line
          id="title-bottom-border"
          y1="85.5"
          x2="552"
          y2="85.5"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="first-title-container"
          x="16.5"
          y="97.5"
          width="519"
          height="135"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="third-title-container"
          x="16.5"
          y="776.5"
          width="519"
          height="135"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="second-title-container"
          x="16.5"
          y="244.5"
          width="519"
          height="522"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="first-item-checkbox"
          x="73.5"
          y="463.5"
          width="24"
          height="24"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="first-item-pawn"
          x="472.5"
          y="452.5"
          width="47"
          height="47"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="second-item-pawn"
          x="472.5"
          y="531.5"
          width="47"
          height="47"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="third-item-pawn"
          x="472.5"
          y="609.5"
          width="47"
          height="47"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="fourth-item-pawn"
          x="472.5"
          y="690.5"
          width="47"
          height="47"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="second-item-checkbox"
          x="73.5"
          y="543.5"
          width="24"
          height="24"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="third-item-checkbox"
          x="73.5"
          y="621.5"
          width="24"
          height="24"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.rect
          id="fourth-item-checkbox"
          x="73.5"
          y="701.5"
          width="24"
          height="24"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="top-nav-info"
          cx="369"
          cy="47"
          r="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="top-nav-info_2"
          cx="67.5"
          cy="166.5"
          r="18"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="top-nav-info_3"
          cx="67.5"
          cy="309.5"
          r="18"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="top-nav-info_4"
          cx="67.5"
          cy="844.5"
          r="18"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="top-nav-help"
          cx="439"
          cy="47"
          r="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="top-nav-settings"
          cx="510"
          cy="47"
          r="13.5"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.line
          id="list"
          x1="26"
          y1="45.5"
          x2="67"
          y2="45.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="first-title-line"
          x1="125"
          y1="168"
          x2="206"
          y2="168"
          stroke={colors.boldBlue}
          stroke-width="10"
          variants={variants}
        />
        <motion.line
          id="first-title-numbers"
          x1="480"
          y1="167.5"
          x2="515"
          y2="167.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="second-title-numbers"
          x1="480"
          y1="310.5"
          x2="515"
          y2="310.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="third-title-numbers"
          x1="480"
          y1="844.5"
          x2="515"
          y2="844.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="second-title-line-1"
          x1="125"
          y1="311"
          x2="221"
          y2="311"
          stroke={colors.boldBlue}
          stroke-width="10"
          variants={variants}
        />
        <motion.line
          id="select-all"
          x1="70"
          y1="388.5"
          x2="206"
          y2="388.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="first-item"
          x1="143"
          y1="476.5"
          x2="185"
          y2="476.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="second-item"
          x1="143"
          y1="557.5"
          x2="261"
          y2="557.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="third-item"
          x1="143"
          y1="635.5"
          x2="264"
          y2="635.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="third-title-1"
          x1="124"
          y1="846"
          x2="212"
          y2="846"
          stroke={colors.boldBlue}
          stroke-width="10"
          variants={variants}
        />
        <motion.line
          id="third-title-2"
          x1="227"
          y1="846"
          x2="331"
          y2="846"
          stroke={colors.boldBlue}
          stroke-width="10"
          variants={variants}
        />
        <motion.line
          id="fourth-item"
          x1="143"
          y1="715.5"
          x2="194"
          y2="715.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="select-all_2"
          x1="318"
          y1="388.5"
          x2="479"
          y2="388.5"
          stroke={colors.boldBlue}
          stroke-width="5"
          variants={variants}
        />
        <motion.line
          id="second-title-line-2"
          x1="233"
          y1="311"
          x2="291"
          y2="311"
          stroke={colors.boldBlue}
          stroke-width="10"
          variants={variants}
        />
        <motion.circle
          id="home-test"
          cx="276.5"
          cy="1033.5"
          r="32"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="home-record"
          cx="91.5"
          cy="1033.5"
          r="32"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
        <motion.circle
          id="home-list"
          cx="459.5"
          cy="1033.5"
          r="32"
          stroke={colors.boldBlue}
          stroke-width="3"
          variants={variants}
        />
      </g>
    </svg>
  );
};

export default AppBlueprint;
