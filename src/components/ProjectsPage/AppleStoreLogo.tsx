import React from "react";
import styles from "./AppleStoreLogo.module.scss";
import { BsApple } from "react-icons/bs";

const AppleStoreLogo = () => {
  return (
    <div className={styles.container}>
      <BsApple color="black" size="50px" />
      <div className={styles.textContainer}>
        <p className={styles.upperText}>Download on the</p>
        <p className={styles.lowerText}>App Store</p>
      </div>
    </div>
  );
};

export default AppleStoreLogo;
