import styles from "./AboutWorkContent.module.scss";

export const flipCardDataLandscape = [
  [
    {
      rotate: 3,
      delay: 0,
      children: <p className={styles.contentCardText}>First: Tooling!</p>,
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
        <p className={styles.contentCardText}>Third: Something better!</p>
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
        <p className={styles.contentCardText}>Second: Something else!</p>
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
