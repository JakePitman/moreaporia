import React from "react";
import { motion } from "framer-motion";

import colors from "../../shared/_colors.module.scss";
import styles from "./HobbyCard.module.scss";
import {
  cardVariantsLandscape,
  cardVariantsPortrait,
} from "./hobbyCardVariants";
import useWindowDimensions from "../../shared/useWindowDimensions";

type Props = {
  Icon: React.ReactElement;
  rotate: number;
  delay: number;
};

const HobbyCard = ({ Icon, rotate, delay }: Props) => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const IconWithDefaults = React.cloneElement(Icon, {
    color: colors.primaryBackground,
    size: isLandscape ? 120 : 70,
  });

  return (
    <motion.div
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      className={
        isLandscape ? styles.containerLandscape : styles.containerPortrait
      }
    >
      <motion.div
        variants={isLandscape ? cardVariantsLandscape : cardVariantsPortrait}
        className={styles.card}
        custom={{ delay }}
      >
        <div
          className={isLandscape ? styles.frontLandscape : styles.frontPortrait}
        >
          {IconWithDefaults}
        </div>
        <div className={styles.back} />
      </motion.div>
    </motion.div>
  );
};

export default HobbyCard;
