import React from "react";
import { motion } from "framer-motion";

type Props = {
  shape: "square" | "circle";
  color: string;
};

const variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1, transition: { duration: 1 } },
};

type ShapeProps = {
  color: string;
};

const shapeMap = {
  square: ({ color }: ShapeProps) => (
    <motion.rect
      variants={variants}
      initial="hidden"
      animate="visible"
      id="Rectangle 1"
      x="0.5"
      y="0.5"
      width="99%"
      height="99%"
      stroke={color}
    />
  ),
  circle: ({ color }: ShapeProps) => (
    <motion.circle
      variants={variants}
      initial="hidden"
      animate="visible"
      id="Ellipse 1"
      cx="50%"
      cy="50%"
      r="49%"
      stroke={color}
    />
  ),
};

const BlueprintShape = ({ shape, color }: Props) => {
  const Shape = shapeMap[shape];
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
    >
      <Shape color={color} />
    </motion.svg>
  );
};

export default BlueprintShape;
