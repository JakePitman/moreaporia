import React from "react";
import { motion } from "framer-motion";

type Props = {
  shape: "square" | "circle";
  color: string;
  fill?: string;
};

const variants = {
  hidden: { opacity: 0, pathLength: 0 },
  draw: { opacity: 1, pathLength: 1, transition: { duration: 1.2 } },
  imagesAppear: { opacity: 0, transition: { duration: 1 } },
};

type ShapeProps = {
  color: string;
  fill?: string;
};

const shapeMap = {
  square: ({ color, fill = "none" }: ShapeProps) => (
    <motion.rect
      variants={variants}
      id="Rectangle 1"
      x="0.5"
      y="0.5"
      width="99%"
      height="99%"
      stroke={color}
      fill={fill}
    />
  ),
  circle: ({ color, fill }: ShapeProps) => (
    <motion.circle
      variants={variants}
      initial="hidden"
      animate="visible"
      id="Ellipse 1"
      cx="50%"
      cy="50%"
      r="49%"
      stroke={color}
      fill={fill}
    />
  ),
};

const BlueprintShape = ({ shape, color, fill }: Props) => {
  const Shape = shapeMap[shape];
  return (
    <motion.svg
      variants={variants}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      preserveAspectRatio="none"
    >
      <Shape color={color} fill={fill} />
    </motion.svg>
  );
};

export default BlueprintShape;
