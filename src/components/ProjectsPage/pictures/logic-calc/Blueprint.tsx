import React from "react";
import colors from "../../../../shared/_colors.module.scss";
import { motion } from "framer-motion";
import styles from "../../Blueprint.module.scss";

const variants = {
  hidden: { opacity: 0, pathLength: 0 },
  drawSVG: { opacity: 1, pathLength: 1, transition: { duration: 1 } },
  renderImage: { opacity: 0, transition: { duration: 1 } },
};

const AppBlueprint = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 960 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <g id="Group 1">
        <motion.rect
          variants={variants}
          id="border"
          x="1.5"
          y="1.5"
          width="957"
          height="797"
          stroke={colors.boldBlue}
          stroke-width="3"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 19"
          x="100"
          y="34"
          width="88"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 21"
          x="205"
          y="34"
          width="96"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 22"
          x="315"
          y="34"
          width="32"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 23"
          x="364"
          y="34"
          width="87"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 20"
          x="12"
          y="34"
          width="81"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 24"
          x="12"
          y="211"
          width="81"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 25"
          x="100"
          y="211"
          width="88"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 26"
          x="201"
          y="211"
          width="84"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 34"
          x="39"
          y="397"
          width="850"
          height="254"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 35"
          x="39"
          y="448"
          width="850"
          height="51"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 36"
          x="39"
          y="549"
          width="850"
          height="51"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 37"
          x="297"
          y="397"
          width="46"
          height="254"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 38"
          x="388"
          y="397"
          width="46"
          height="254"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 39"
          x="479"
          y="397"
          width="46"
          height="254"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 40"
          x="570"
          y="397"
          width="46"
          height="254"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 41"
          x="661"
          y="397"
          width="46"
          height="254"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 42"
          x="752"
          y="397"
          width="46"
          height="254"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 27"
          x="295"
          y="211"
          width="86"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 28"
          x="393"
          y="211"
          width="90"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 29"
          x="495"
          y="211"
          width="85"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 30"
          x="588"
          y="211"
          width="86"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 31"
          x="679"
          y="211"
          width="75"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 32"
          x="759"
          y="211"
          width="86"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 33"
          x="859"
          y="211"
          width="86"
          height="119"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.line
          variants={variants}
          id="Line 6"
          x1="843"
          y1="396"
          x2="843"
          y2="650"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.line
          variants={variants}
          id="Line 7"
          x1="55"
          y1="422.5"
          x2="141"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 9"
          x1="111"
          y1="474.5"
          x2="153"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 11"
          x1="111"
          y1="524.5"
          x2="153"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 13"
          x1="111"
          y1="573.5"
          x2="153"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 15"
          x1="111"
          y1="624.5"
          x2="153"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 58"
          x1="31"
          y1="675.5"
          x2="117"
          y2="675.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 60"
          x1="31"
          y1="700.5"
          x2="336"
          y2="700.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 61"
          x1="31"
          y1="726.5"
          x2="221"
          y2="726.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 63"
          x1="31"
          y1="750.5"
          x2="74"
          y2="750.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 62"
          x1="236"
          y1="726.5"
          x2="358"
          y2="726.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 59"
          x1="135"
          y1="675.5"
          x2="313"
          y2="675.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 16"
          x1="179"
          y1="624.5"
          x2="221"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 14"
          x1="179"
          y1="573.5"
          x2="221"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 17"
          x1="403"
          y1="422.5"
          x2="418"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 24"
          x1="449"
          y1="422.5"
          x2="464"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 29"
          x1="494"
          y1="422.5"
          x2="509"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 34"
          x1="540"
          y1="422.5"
          x2="555"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 35"
          x1="586"
          y1="422.5"
          x2="601"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 40"
          x1="631"
          y1="422.5"
          x2="646"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 41"
          x1="677"
          y1="422.5"
          x2="692"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 46"
          x1="722"
          y1="422.5"
          x2="737"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 51"
          x1="768"
          y1="422.5"
          x2="783"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 56"
          x1="813"
          y1="422.5"
          x2="828"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 57"
          x1="859"
          y1="422.5"
          x2="874"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 52"
          x1="768"
          y1="474.5"
          x2="783"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 53"
          x1="768"
          y1="524.5"
          x2="783"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 54"
          x1="768"
          y1="573.5"
          x2="783"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 55"
          x1="768"
          y1="624.5"
          x2="783"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 47"
          x1="722"
          y1="474.5"
          x2="737"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 48"
          x1="722"
          y1="524.5"
          x2="737"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 49"
          x1="722"
          y1="573.5"
          x2="737"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 50"
          x1="722"
          y1="624.5"
          x2="737"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 42"
          x1="677"
          y1="474.5"
          x2="692"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 43"
          x1="677"
          y1="524.5"
          x2="692"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 44"
          x1="677"
          y1="573.5"
          x2="692"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 45"
          x1="677"
          y1="624.5"
          x2="692"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 36"
          x1="586"
          y1="474.5"
          x2="601"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 37"
          x1="586"
          y1="524.5"
          x2="601"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 38"
          x1="586"
          y1="573.5"
          x2="601"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 39"
          x1="586"
          y1="624.5"
          x2="601"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 30"
          x1="495"
          y1="474.5"
          x2="510"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 31"
          x1="494"
          y1="524.5"
          x2="509"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 32"
          x1="494"
          y1="573.5"
          x2="509"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 33"
          x1="494"
          y1="624.5"
          x2="509"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 25"
          x1="449"
          y1="474.5"
          x2="464"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 26"
          x1="449"
          y1="524.5"
          x2="464"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 27"
          x1="449"
          y1="573.5"
          x2="464"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 28"
          x1="449"
          y1="624.5"
          x2="464"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 20"
          x1="403"
          y1="474.5"
          x2="418"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 21"
          x1="403"
          y1="524.5"
          x2="418"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 22"
          x1="403"
          y1="573.5"
          x2="418"
          y2="573.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 23"
          x1="403"
          y1="624.5"
          x2="418"
          y2="624.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 18"
          x1="358"
          y1="422.5"
          x2="373"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 19"
          x1="313"
          y1="422.5"
          x2="328"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 12"
          x1="179"
          y1="524.5"
          x2="221"
          y2="524.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 10"
          x1="179"
          y1="474.5"
          x2="221"
          y2="474.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 8"
          x1="157"
          y1="422.5"
          x2="278"
          y2="422.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
      </g>
    </motion.svg>
  );
};

export default AppBlueprint;
