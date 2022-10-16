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
      // style={{ left: "5px", top: "1px" }}
    >
      <motion.rect
        variants={variants}
        x="10.5"
        y="4.5"
        width="386"
        height="786"
        rx="48.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="566.5"
        y="4.5"
        width="386"
        height="786"
        rx="48.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="12"
        y1="750.5"
        x2="395"
        y2="750.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="568"
        y1="750.5"
        x2="951"
        y2="750.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="134.5"
        y1="752"
        x2="134.5"
        y2="792"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="690.5"
        y1="752"
        x2="690.5"
        y2="792"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="274.5"
        y1="750"
        x2="274.5"
        y2="790"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="830.5"
        y1="750"
        x2="830.5"
        y2="790"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="63.5"
        cy="770.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="624.5"
        cy="770.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="342.5"
        cy="770.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="898.5"
        cy="770.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="188.5"
        y="756.5"
        width="28"
        height="28"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="748.5"
        y="756.5"
        width="28"
        height="28"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="618.5"
        y="617.5"
        width="84"
        height="66"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="844.5"
        y="617.5"
        width="46"
        height="66"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="717.5"
        y="709.5"
        width="15"
        height="15"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="743.5"
        y="709.5"
        width="15"
        height="15"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="769.5"
        y="709.5"
        width="15"
        height="15"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="795.5"
        y="709.5"
        width="15"
        height="15"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="46.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="46.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="46.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="250.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="250.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="250.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="454.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="454.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="454.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="658.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="658.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="658.5"
        width="90"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="46.5"
        y="46.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="175.5"
        y="46.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="304.5"
        y="46.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="46.5"
        y="250.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="175.5"
        y="250.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="304.5"
        y="250.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="46.5"
        y="454.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="175.5"
        y="454.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="304.5"
        y="454.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="46.5"
        y="658.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="83.5"
        y="46.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="212.5"
        y="46.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="341.5"
        y="46.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="83.5"
        y="250.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="212.5"
        y="250.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="341.5"
        y="250.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="83.5"
        y="454.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="212.5"
        y="454.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="341.5"
        y="454.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="83.5"
        y="658.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="175.5"
        y="658.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="211.5"
        y="658.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="304.5"
        y="658.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="340.5"
        y="658.5"
        width="18"
        height="90"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="70.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="70.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="70.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="274.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="274.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="274.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="478.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="478.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="478.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="29.5"
        y="682.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="158.5"
        y="682.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="287.5"
        y="682.5"
        width="90"
        height="22"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="29"
        y1="114.5"
        x2="120"
        y2="114.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="158"
        y1="114.5"
        x2="249"
        y2="114.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="287"
        y1="114.5"
        x2="378"
        y2="114.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="29"
        y1="318.5"
        x2="120"
        y2="318.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="158"
        y1="318.5"
        x2="249"
        y2="318.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="287"
        y1="318.5"
        x2="378"
        y2="318.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="29"
        y1="522.5"
        x2="120"
        y2="522.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="158"
        y1="522.5"
        x2="249"
        y2="522.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="287"
        y1="522.5"
        x2="378"
        y2="522.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="29"
        y1="726.5"
        x2="120"
        y2="726.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="158"
        y1="726.5"
        x2="249"
        y2="726.5"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="287"
        y1="726.5"
        x2="378"
        y2="726.5"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="64.5"
        cy="81.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="193.5"
        cy="81.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="304.5"
        cy="103.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="322.5"
        cy="103.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="46.5"
        cy="308.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="193.5"
        cy="330.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="322.5"
        cy="330.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="64.5"
        cy="511.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="193.5"
        cy="512.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="322.5"
        cy="489.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="64.5"
        cy="716.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="74.5"
        cy="175.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="203.5"
        cy="175.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="332.5"
        cy="175.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="74.5"
        cy="379.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="203.5"
        cy="379.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="332.5"
        cy="379.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="74.5"
        cy="583.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="203.5"
        cy="583.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="332.5"
        cy="583.5"
        r="14"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="83.5"
        cy="81.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="212.5"
        cy="81.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="341.5"
        cy="81.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="64.5"
        cy="308.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="212.5"
        cy="330.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="341.5"
        cy="330.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="83.5"
        cy="511.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="212.5"
        cy="512.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="304.5"
        cy="512.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="83.5"
        cy="716.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="101.5"
        cy="81.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="230.5"
        cy="59.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="230.5"
        cy="330.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="359.5"
        cy="308.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="101.5"
        cy="511.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="230.5"
        cy="489.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="359.5"
        cy="467.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="101.5"
        cy="693.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="211.5"
        cy="694.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="248.5"
        cy="693.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="377.5"
        cy="671.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="340.5"
        cy="693.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="358.5"
        cy="716.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.circle
        variants={variants}
        cx="229.5"
        cy="716.5"
        r="6"
        stroke={colors.boldBlue}
      />
      <motion.line
        variants={variants}
        x1="67"
        y1="143.5"
        x2="83"
        y2="143.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="196"
        y1="143.5"
        x2="212"
        y2="143.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="325"
        y1="143.5"
        x2="341"
        y2="143.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="67"
        y1="347.5"
        x2="83"
        y2="347.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="196"
        y1="347.5"
        x2="212"
        y2="347.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="325"
        y1="347.5"
        x2="341"
        y2="347.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="67"
        y1="551.5"
        x2="83"
        y2="551.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="196"
        y1="551.5"
        x2="212"
        y2="551.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="325"
        y1="551.5"
        x2="341"
        y2="551.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="282.5"
        y="53.5"
        width="100"
        height="12"
        rx="4.5"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="24.5"
        y="257.5"
        width="100"
        height="12"
        rx="4.5"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="170.5"
        y="279.5"
        width="84"
        height="12"
        rx="4.5"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="299.5"
        y="280.5"
        width="84"
        height="12"
        rx="4.5"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="41.5"
        y="461.5"
        width="84"
        height="12"
        rx="4.5"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="41.5"
        y="665.5"
        width="84"
        height="12"
        rx="4.5"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="170.5"
        y="461.5"
        width="84"
        height="12"
        rx="4.5"
        stroke={colors.boldBlue}
      />
      <motion.rect
        variants={variants}
        x="644.5"
        y="246.5"
        width="238"
        height="239"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="690.5"
        y="246.5"
        width="48"
        height="239"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="631.5"
        y="208.5"
        width="24"
        height="32"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="644.5"
        y="312.5"
        width="238"
        height="57"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.rect
        variants={variants}
        x="787.5"
        y="246.5"
        width="48"
        height="239"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="643"
        y1="428.5"
        x2="884"
        y2="428.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="739"
        cy="341"
        r="14.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="787"
        cy="341"
        r="14.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="836"
        cy="341"
        r="14.5"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.line
        variants={variants}
        x1="690"
        y1="45"
        x2="841"
        y2="45"
        stroke={colors.boldBlue}
        stroke-width="10"
      />
      <motion.line
        variants={variants}
        x1="740"
        y1="171.5"
        x2="787"
        y2="171.5"
        stroke={colors.boldBlue}
        stroke-width="5"
      />
      <motion.line
        variants={variants}
        x1="740"
        y1="507"
        x2="787"
        y2="507"
        stroke={colors.boldBlue}
        stroke-width="8"
      />
      <motion.circle
        variants={variants}
        cx="689.5"
        cy="224.5"
        r="16"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.circle
        variants={variants}
        cx="883.5"
        cy="224.5"
        r="16"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
      <motion.path
        variants={variants}
        d="M468.5 373.153L515 400L468.5 426.847L468.5 373.153Z"
        stroke={colors.boldBlue}
        stroke-width="3"
      />
    </motion.svg>
  );
};

export default AppBlueprint;
