import React from "react";
import { motion } from "framer-motion";

import styles from "./AboutImage.module.scss";
import { aboutImageVariants } from "./aboutImageVariants";

type Props = {
  src: string;
  alt: string;
};

const AboutImage = ({ src, alt }: Props) => {
  return (
    <motion.div className={styles.imageContainer} variants={aboutImageVariants}>
      <img src={src} alt={alt} className={styles.image} />;
    </motion.div>
  );
};

export default AboutImage;
