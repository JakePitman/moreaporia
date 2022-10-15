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
      <g id="Group 2">
        <motion.line
          variants={variants}
          id="Line 64"
          x1="68"
          y1="115.5"
          x2="205"
          y2="115.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 104"
          x1="70"
          y1="502.5"
          x2="207"
          y2="502.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 90"
          x1="279"
          y1="55.5"
          x2="393"
          y2="55.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 94"
          x1="395"
          y1="17.5"
          x2="565"
          y2="17.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 91"
          x1="306"
          y1="86.5"
          x2="372"
          y2="86.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 97"
          x1="303"
          y1="128.5"
          x2="473"
          y2="128.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 108"
          x1="305"
          y1="515.5"
          x2="475"
          y2="515.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 98"
          x1="303"
          y1="150.5"
          x2="740"
          y2="150.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 109"
          x1="305"
          y1="537.5"
          x2="742"
          y2="537.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 99"
          x1="303"
          y1="193.5"
          x2="407"
          y2="193.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 110"
          x1="305"
          y1="580.5"
          x2="409"
          y2="580.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 100"
          x1="320"
          y1="214.5"
          x2="418"
          y2="214.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 111"
          x1="322"
          y1="601.5"
          x2="420"
          y2="601.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 101"
          x1="320"
          y1="235.5"
          x2="581"
          y2="235.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 112"
          x1="322"
          y1="622.5"
          x2="583"
          y2="622.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 102"
          x1="320"
          y1="257.5"
          x2="581"
          y2="257.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 113"
          x1="322"
          y1="644.5"
          x2="583"
          y2="644.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 103"
          x1="320"
          y1="278.5"
          x2="581"
          y2="278.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 137"
          x1="246"
          y1="326.5"
          x2="355"
          y2="326.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 142"
          x1="276"
          y1="362.5"
          x2="528"
          y2="362.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 151"
          x1="2"
          y1="386"
          x2="240"
          y2="386"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.line
          variants={variants}
          id="Line 152"
          x1="745"
          y1="385"
          x2="958"
          y2="385"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.line
          variants={variants}
          id="Line 153"
          x1="744"
          y1="421"
          x2="957"
          y2="421"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.line
          variants={variants}
          id="Line 154"
          x1="4"
          y1="771"
          x2="957"
          y2="771"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.line
          variants={variants}
          id="Line 143"
          x1="276"
          y1="380.5"
          x2="603"
          y2="380.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 144"
          x1="276"
          y1="397.5"
          x2="531"
          y2="397.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 145"
          x1="276"
          y1="415.5"
          x2="565"
          y2="415.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 146"
          x1="276"
          y1="432.5"
          x2="502"
          y2="432.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 138"
          x1="372"
          y1="326.5"
          x2="454"
          y2="326.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 139"
          x1="469"
          y1="326.5"
          x2="578"
          y2="326.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 141"
          x1="518"
          y1="346.5"
          x2="656"
          y2="346.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 140"
          x1="594"
          y1="326.5"
          x2="688"
          y2="326.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 114"
          x1="322"
          y1="665.5"
          x2="583"
          y2="665.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 131"
          x1="322"
          y1="686.5"
          x2="333"
          y2="686.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 132"
          x1="337"
          y1="709.5"
          x2="382"
          y2="709.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 133"
          x1="430"
          y1="709.5"
          x2="475"
          y2="709.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 134"
          x1="322"
          y1="730.5"
          x2="351"
          y2="730.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 136"
          x1="305"
          y1="751.5"
          x2="314"
          y2="751.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 96"
          x1="269.5"
          y1="101"
          x2="269.5"
          y2="282"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 115"
          x1="268.5"
          y1="492"
          x2="268.5"
          y2="768"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 92"
          x1="424"
          y1="86.5"
          x2="547"
          y2="86.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 93"
          x1="572"
          y1="86.5"
          x2="833"
          y2="86.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 95"
          x1="924"
          y1="54.5"
          x2="938"
          y2="54.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 118"
          x1="926"
          y1="441.5"
          x2="940"
          y2="441.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 73"
          x1="24"
          y1="88.5"
          x2="107"
          y2="88.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 119"
          x1="26"
          y1="475.5"
          x2="109"
          y2="475.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 74"
          x1="24"
          y1="55.5"
          x2="92"
          y2="55.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 120"
          x1="26"
          y1="442.5"
          x2="94"
          y2="442.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 65"
          x1="68"
          y1="142.5"
          x2="172"
          y2="142.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 121"
          x1="70"
          y1="529.5"
          x2="174"
          y2="529.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 66"
          x1="68"
          y1="168.5"
          x2="159"
          y2="168.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 122"
          x1="70"
          y1="555.5"
          x2="161"
          y2="555.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 67"
          x1="68"
          y1="194.5"
          x2="163"
          y2="194.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 123"
          x1="70"
          y1="581.5"
          x2="165"
          y2="581.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 68"
          x1="68"
          y1="220.5"
          x2="152"
          y2="220.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 124"
          x1="70"
          y1="607.5"
          x2="154"
          y2="607.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 69"
          x1="68"
          y1="246.5"
          x2="178"
          y2="246.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 125"
          x1="70"
          y1="633.5"
          x2="180"
          y2="633.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 75"
          x1="25"
          y1="345.5"
          x2="82"
          y2="345.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 126"
          x1="27"
          y1="732.5"
          x2="84"
          y2="732.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 76"
          x1="25"
          y1="371.5"
          x2="88"
          y2="371.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 127"
          x1="27"
          y1="758.5"
          x2="90"
          y2="758.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 147"
          x1="22"
          y1="784.5"
          x2="240"
          y2="784.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 148"
          x1="263"
          y1="784.5"
          x2="404"
          y2="784.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 149"
          x1="689"
          y1="784.5"
          x2="815"
          y2="784.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 150"
          x1="836"
          y1="784.5"
          x2="940"
          y2="784.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 70"
          x1="68"
          y1="272.5"
          x2="165"
          y2="272.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 128"
          x1="70"
          y1="659.5"
          x2="167"
          y2="659.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 71"
          x1="68"
          y1="299.5"
          x2="210"
          y2="299.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 129"
          x1="70"
          y1="686.5"
          x2="212"
          y2="686.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 72"
          x1="68"
          y1="325.5"
          x2="123"
          y2="325.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.line
          variants={variants}
          id="Line 130"
          x1="70"
          y1="712.5"
          x2="125"
          y2="712.5"
          stroke={colors.boldBlue}
          stroke-width="5"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 43"
          x="45"
          y="107"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 76"
          x="47"
          y="494"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 52"
          x="119"
          y="81"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 77"
          x="121"
          y="468"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 69"
          x="257"
          y="47"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 53"
          x="146"
          y="81"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 79"
          x="148"
          y="468"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 106"
          x="1"
          y="421"
          width="229"
          height="298"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 107"
          x="1"
          y="718"
          width="229"
          height="53"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 108"
          x="1"
          y="421"
          width="229"
          height="69"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 109"
          x="1"
          y="103"
          width="227"
          height="228"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 54"
          x="175"
          y="81"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 80"
          x="177"
          y="468"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 98"
          x="246"
          y="338"
          width="255"
          height="16"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 104"
          x="246"
          y="442"
          width="255"
          height="16"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 105"
          x="517"
          y="442"
          width="8"
          height="16"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 99"
          x="247"
          y="356"
          width="13"
          height="13"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 100"
          x="247"
          y="373"
          width="13"
          height="13"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 101"
          x="247"
          y="390"
          width="13"
          height="13"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 102"
          x="247"
          y="408"
          width="13"
          height="13"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 103"
          x="247"
          y="425"
          width="13"
          height="13"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 55"
          x="204"
          y="81"
          width="14"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 81"
          x="206"
          y="468"
          width="14"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 70"
          x="863"
          y="47"
          width="14"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 82"
          x="865"
          y="434"
          width="14"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 97"
          x="718"
          y="287"
          width="26"
          height="197"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 71"
          x="893"
          y="47"
          width="14"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 83"
          x="895"
          y="434"
          width="14"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 72"
          x="847"
          y="9"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 84"
          x="849"
          y="396"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 96"
          x="241"
          y="287"
          width="477"
          height="197"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 73"
          x="873"
          y="9"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 85"
          x="875"
          y="396"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 74"
          x="900"
          y="9"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 86"
          x="902"
          y="396"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 75"
          x="927"
          y="9"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 87"
          x="929"
          y="396"
          width="16"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 44"
          x="45"
          y="134"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 88"
          x="47"
          y="521"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 45"
          x="45"
          y="160"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 89"
          x="47"
          y="547"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 46"
          x="45"
          y="186"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 90"
          x="47"
          y="573"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 47"
          x="45"
          y="212"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 91"
          x="47"
          y="599"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 48"
          x="45"
          y="238"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 92"
          x="47"
          y="625"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 49"
          x="45"
          y="264"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 93"
          x="47"
          y="651"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 50"
          x="45"
          y="291"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 94"
          x="47"
          y="678"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 51"
          x="45"
          y="317"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.rect
          variants={variants}
          id="Rectangle 95"
          x="47"
          y="704"
          width="12"
          height="15"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 7"
          cx="838.5"
          cy="54.5"
          r="7.5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 14"
          cx="840.5"
          cy="441.5"
          r="7.5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 8"
          cx="804.5"
          cy="54.5"
          r="7.5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 15"
          cx="806.5"
          cy="441.5"
          r="7.5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 9"
          cx="776.5"
          cy="54.5"
          r="7.5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 16"
          cx="778.5"
          cy="441.5"
          r="7.5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 11"
          cx="45"
          cy="18"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 20"
          cx="257"
          cy="300"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 21"
          cx="274"
          cy="300"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 22"
          cx="291"
          cy="300"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 17"
          cx="47"
          cy="405"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 12"
          cx="28"
          cy="18"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 18"
          cx="30"
          cy="405"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 13"
          cx="12"
          cy="18"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 19"
          cx="14"
          cy="405"
          r="5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
        <motion.circle
          variants={variants}
          id="Ellipse 10"
          cx="748.5"
          cy="54.5"
          r="7.5"
          stroke={colors.boldBlue}
          stroke-width="2"
        />
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
      </g>
    </motion.svg>
  );
};

export default AppBlueprint;
