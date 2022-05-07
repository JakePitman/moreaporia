import React from "react";

import colors from "../../shared/_colors.module.scss";
import styles from "./HobbyCard.module.scss";

type Props = {
  Icon: React.ReactElement;
};

const HobbyCard = ({ Icon }: Props) => {
  const IconWithDefaults = React.cloneElement(Icon, {
    color: colors.primaryBackground,
    size: 120,
  });
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.front}>{IconWithDefaults}</div>
        <div className={styles.back} />
      </div>
    </div>
  );
};

export default HobbyCard;
