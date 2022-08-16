import styles from "./AboutWorkContent.module.scss";

export const flipCardDataLandscape = [
  [
    {
      rotate: 3,
      delay: 0,
      children: (
        <div className={styles.flipCardContentContainer}>
          <b className={styles.contentCardTitle}>1. Tooling</b>
          <p className={styles.contentCardText}>Engineer-facing utlity code</p>
          <em className={styles.contentCardDate}>2019 - 2020</em>
        </div>
      ),
    },
    {
      rotate: -3,
      delay: 0.2,
      children: <p className={styles.contentCardText}>2</p>,
      small: true,
    },
    {
      rotate: 4,
      delay: 0.4,
      children: (
        <div className={styles.flipCardContentContainer}>
          <b className={styles.contentCardTitle}>3. Design Systems</b>
          <p className={styles.contentCardText}>Robust, reusable components</p>
          <em className={styles.contentCardDate}>2022 - now</em>
        </div>
      ),
    },
  ],
  [
    {
      rotate: -3,
      delay: 0.1,
      children: <p className={styles.contentCardText}>1</p>,
      small: true,
    },
    {
      rotate: 2,
      delay: 0.3,
      children: (
        <div className={styles.flipCardContentContainer}>
          <b className={styles.contentCardTitle}>2. Front End</b>
          <p className={styles.contentCardText}>Customer-facing web pages</p>
          <em className={styles.contentCardDate}>2020 - 2022</em>
        </div>
      ),
    },
    {
      rotate: -2,
      delay: 0.5,
      children: <p className={styles.contentCardText}>3</p>,
      small: true,
    },
  ],
];

export const flipCardDataPortrait = [
  [
    {
      rotate: 4,
      delay: 0.1,
      children: <p className={styles.contentCardText}>First: Tooling!</p>,
    },
    {
      rotate: 0,
      delay: 0,
      children: <p className={styles.contentCardText}>2</p>,
      small: true,
    },
    {
      rotate: -4,
      delay: 0.1,
      children: (
        <p className={styles.contentCardText}>Third: Something better!</p>
      ),
    },
  ],
  [
    {
      rotate: 4,
      delay: 0.3,
      children: <p className={styles.contentCardText}>1</p>,
      small: true,
    },
    {
      rotate: 0,
      delay: 0.2,
      children: (
        <p className={styles.contentCardText}>Second: Something else!</p>
      ),
    },
    {
      rotate: -4,
      delay: 0.3,
      children: <p className={styles.contentCardText}>3</p>,
      small: true,
    },
  ],
];
