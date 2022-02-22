import React from "react";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "white" }}>About me</h1>
      <div className={styles.lowerLeftBackground} />
      <div className={styles.lowerRightBackground} />
    </div>
  );
};

export default AboutPage;
