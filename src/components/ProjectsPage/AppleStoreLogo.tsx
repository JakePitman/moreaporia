import React from "react";
import styles from "./AppleStoreLogo.module.scss";
import { BsApple } from "react-icons/bs";

type Props = {
  size: number;
};

const AppleStoreLogo = ({ size }: Props) => {
  return (
    <a
      href="https://apps.apple.com/us/app/chess-openings-trainer/id1606980198"
      rel="noreferrer"
      target="_blank"
      className={styles.container}
      style={{ padding: `${size / 10}px`, borderRadius: `${size / 10}px` }}
    >
      <BsApple color="black" size={size / 2} />
      <div className={styles.textContainer}>
        <p style={{ fontSize: `${size / 5}px` }}>Download on the</p>
        <p style={{ fontSize: `${size / 3}px` }}>App Store</p>
      </div>
    </a>
  );
};

export default AppleStoreLogo;
