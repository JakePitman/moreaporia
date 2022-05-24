import React from "react";
import { motion } from "framer-motion";

import styles from "./FlipCard.module.scss";
import { tagVariants } from "./flipCardVariants";
import useWindowDimensions from "../../shared/useWindowDimensions";

type Props = {
  rotate: number;
  delay: number;
  title: string;
  tagRotation: number;
  backgroundGradients: [string, string];
  children: React.ReactNode;
  variants: {};
};

const gradient = (
  rotate: number,
  backgroundGradients: [string, string],
  isLandscape: boolean
) =>
  isLandscape
    ? `linear-gradient(${rotate >= 0 ? "-" : ""}${Math.abs(rotate)}deg, ${
        backgroundGradients[1]
      }, ${backgroundGradients[0]})`
    : `linear-gradient(-${Math.abs(90 + rotate)}deg, ${
        backgroundGradients[1]
      }, ${backgroundGradients[0]})`;
const FlipCard = ({
  rotate,
  delay,
  title,
  tagRotation,
  backgroundGradients,
  children,
  variants,
}: Props) => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <>
      <motion.div
        variants={variants}
        className={styles.card}
        custom={{ delay }}
      >
        <div
          style={{
            background: gradient(rotate, backgroundGradients, isLandscape),
          }}
          className={isLandscape ? styles.frontLandscape : styles.frontPortrait}
        >
          {children}
        </div>
        <div
          style={{
            background: gradient(rotate, backgroundGradients, isLandscape),
          }}
          className={styles.back}
        />
      </motion.div>
      {/* Tags, may or may not include */}
      {/* {isLandscape && (
        <div
          style={{
            transform: `rotate(${tagRotation}deg)`,
          }}
          className={styles.tagContainer}
        >
          <motion.div
            className={styles.tag}
            variants={tagVariants}
            custom={{ delay: delay + 0.2 }}
          >
            <div className={styles.tagFront}>{title}</div>
            <div className={styles.tagBack}>{title}</div>
          </motion.div>
        </div>
      )} */}
    </>
  );
};

export default FlipCard;
