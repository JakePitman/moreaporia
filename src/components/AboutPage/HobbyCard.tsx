import React from "react";
import { motion } from "framer-motion";

import colors from "../../shared/_colors.module.scss";
import styles from "./HobbyCard.module.scss";
import { cardVariants } from "./hobbyCardVariants";

type Props = {
  Icon: React.ReactElement;
  rotate: number;
  delay: number;
};

const HobbyCard = ({ Icon, rotate, delay }: Props) => {
  const IconWithDefaults = React.cloneElement(Icon, {
    color: colors.primaryBackground,
    size: 120,
  });
  return (
    <motion.div
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      className={styles.container}
    >
      <motion.div
        variants={cardVariants}
        className={styles.card}
        custom={{ delay }}
      >
        <div className={styles.front}>{IconWithDefaults}</div>
        <div className={styles.back} />
      </motion.div>
    </motion.div>
  );
};

export default HobbyCard;
