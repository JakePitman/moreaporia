import React from "react";

import styles from "./AboutNavigationLink.module.scss";

type Props = {
  title: string;
};

const AboutNavigationLink = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <li className={styles.titleFirstLetter}>{title.slice(0, 1)}</li>
      <li className={styles.titleRemainingLetters}>
        {title.slice(1, title.length)}
      </li>
    </div>
  );
};

export default AboutNavigationLink;
