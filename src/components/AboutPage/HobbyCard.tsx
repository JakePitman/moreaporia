import React from "react";
import { motion } from "framer-motion";

import colors from "../../shared/_colors.module.scss";
import styles from "./HobbyCard.module.scss";
import {
  cardVariantsLandscape,
  cardVariantsPortrait,
  tagVariants,
} from "./hobbyCardVariants";
import useWindowDimensions from "../../shared/useWindowDimensions";

type Props = {
  Icon: React.ReactElement;
  rotate: number;
  delay: number;
  title: string;
  tagRotation: number;
  backgroundGradients: [string, string];
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
const HobbyCard = ({
  Icon,
  rotate,
  delay,
  title,
  tagRotation,
  backgroundGradients,
}: Props) => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const IconWithDefaults = React.cloneElement(Icon, {
    color: colors.primaryBackground,
    size: isLandscape ? 120 : 70,
  });

  return (
    <>
      <motion.div
        variants={isLandscape ? cardVariantsLandscape : cardVariantsPortrait}
        className={styles.card}
        custom={{ delay }}
      >
        <div
          style={{
            background: gradient(rotate, backgroundGradients, isLandscape),
          }}
          className={isLandscape ? styles.frontLandscape : styles.frontPortrait}
        >
          {IconWithDefaults}
        </div>
        <div
          style={{
            background: gradient(rotate, backgroundGradients, isLandscape),
          }}
          className={styles.back}
        />
      </motion.div>
      {isLandscape && (
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
      )}
    </>
  );
};

export default HobbyCard;
