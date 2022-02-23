import React from "react";

import styles from "./AboutNavigationLink.module.scss";

type Props = {
  title: string;
};

const AboutNavigationLink = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default AboutNavigationLink;
