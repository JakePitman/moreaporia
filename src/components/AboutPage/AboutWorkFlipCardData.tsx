import styles from "./AboutWorkContent.module.scss";
import colors from "../../shared/_colors.module.scss";
import { FaTools, FaDesktop } from "react-icons/fa";
import { BsPuzzleFill } from "react-icons/bs";

export const flipCardDataLandscape = [
  [
    {
      rotate: 0,
      delay: 0,
      children: (
        <div className={styles.flipCardContentContainer}>
          <b className={styles.contentCardTitle}>1. Tooling</b>
          <p className={styles.contentCardText}>Engineer-facing utility code</p>
          <em className={styles.contentCardDate}>2019 - 2020</em>
        </div>
      ),
    },
    {
      rotate: 2,
      delay: 0.1,
      children: <FaDesktop size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 0,
      delay: 0.2,
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
      rotate: -2,
      delay: 0,
      children: <FaTools size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 0,
      delay: 0.1,
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
      delay: 0.3,
      children: <BsPuzzleFill size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
];

export const flipCardDataPortrait = [
  [
    {
      rotate: 0,
      delay: 0.1,
      children: <p className={styles.contentCardText}>Tooling</p>,
    },
    {
      rotate: 0,
      delay: 0,
      children: <FaDesktop size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 0,
      delay: 0.1,
      children: <p className={styles.contentCardText}>Design Systems</p>,
    },
  ],
  [
    {
      rotate: 4,
      delay: 0.3,
      children: <FaTools size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 0,
      delay: 0.2,
      children: <p className={styles.contentCardText}>Front End</p>,
    },
    {
      rotate: -4,
      delay: 0.3,
      children: <BsPuzzleFill size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
];
