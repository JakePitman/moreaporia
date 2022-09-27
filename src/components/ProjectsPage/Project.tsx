import React from "react";

import styles from "./Project.module.scss";
import colors from "../../shared/_colors.module.scss";

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.rightContainer}>
        <div className={styles.rowGroup}>
          <h2 className={styles.title}>Title goes here</h2>
          <p className={styles.subtext} style={{ color: colors.lightBlue }}>
            22/22/2022
          </p>
        </div>
        <div className={styles.bodyTextContainer}>
          <p className={styles.bodyText}>
            This project was lorem ipsum oogum boogum. Tutant meenage neetle
            teetles. Indian yellow is the best colour nnnnno other color will
            ever beat it buddyyyyyyyy
          </p>
          <p className={styles.bodyText}>
            I must create a system, or be controlled by another man's. I will
            not reason and compare; my business is to create.
          </p>
        </div>
        <div className={styles.rowGroup}>
          <p className={styles.subtext}>React · Typescript · Scss</p>
          <p className={styles.subtext}>framer-motion · lodash</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
