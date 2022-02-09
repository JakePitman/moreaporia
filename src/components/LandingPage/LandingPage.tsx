import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaCodepen } from "react-icons/fa";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <li className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>A</p>bout
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>P</p>rojects
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>C</p>ontact
        </li>
      </div>

      <div className={styles.midSection}>
        <h1 className={styles.mainHeading}>Jake Pitman</h1>
        <h2 className={styles.subheading1}>Web & mobile engineer</h2>
        <h2 className={styles.subheading2}>Front-end specialist</h2>
      </div>

      <div className={styles.footer}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconWrapper}>
            <VscGithubAlt />
          </div>
          <div className={styles.iconWrapper}>
            <FaCodepen />
          </div>
          <div className={styles.footerLine} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
