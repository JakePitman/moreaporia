import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./FlipCard.module.scss";
import BrowserContext from "../../shared/browserContext";

type Props = {
  rotate: number;
  delay: number;
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
  backgroundGradients,
  children,
  variants,
}: Props) => {
  const { isLandscape } = useContext(BrowserContext);

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
    </>
  );
};

export default FlipCard;
