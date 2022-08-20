import React from "react";
import { motion } from "framer-motion";

type Props = {
  shape: "square" | "circle";
};

const variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1, transition: { duration: 1 } },
};

const shapeMap = {
  square: (
    <motion.rect
      variants={variants}
      initial="hidden"
      animate="visible"
      id="Rectangle 1"
      x="0.5"
      y="0.5"
      width="99%"
      height="99%"
      stroke="#00F0FF"
    />
  ),
  circle: (
    <motion.circle
      variants={variants}
      initial="hidden"
      animate="visible"
      id="Ellipse 1"
      cx="184.5"
      cy="163.5"
      r="97"
      stroke="white"
    />
  ),
};

const BlueprintShape = ({ shape }: Props) => {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {shapeMap[shape]}
    </motion.svg>
  );
};

export default BlueprintShape;
