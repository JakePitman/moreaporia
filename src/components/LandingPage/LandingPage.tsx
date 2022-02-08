import React from "react";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}></div>
      <div className={styles.midSection}>
        <h1 className={styles.mainHeading}>Jake Pitman</h1>
        <h2 className={styles.subheading1}>Web & mobile engineer</h2>
        <h2 className={styles.subheading2}>Front-end specialist</h2>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default LandingPage;
