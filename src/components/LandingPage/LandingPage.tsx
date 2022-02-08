import React from "react";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}></div>
      <div className={styles.midSection}>
        <h1>Hello Landing Page</h1>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default LandingPage;
