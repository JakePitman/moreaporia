import React from "react";
import { motion } from "framer-motion";

import colors from "../../shared/_colors.module.scss";
import styles from "./HobbyCard.module.scss";
import { cardVariants } from "./hobbyCardVariants";

type Props = {
  Icon: React.ReactElement;
};

const HobbyCard = ({ Icon }: Props) => {
  const IconWithDefaults = React.cloneElement(Icon, {
    color: colors.primaryBackground,
    size: 120,
  });
  return (
    <motion.div className={styles.container}>
      <motion.div variants={cardVariants} className={styles.card}>
        <div className={styles.front}>{IconWithDefaults}</div>
        <div className={styles.back} />
      </motion.div>
    </motion.div>
  );
};

export default HobbyCard;
