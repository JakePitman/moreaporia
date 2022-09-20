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
      style={{
        width: `${size * 2.5}px`,
        height: `${size * 0.7}px`,
        padding: `${size / 10}px`,
        borderRadius: `${size / 10}px`,
      }}
    >
      <BsApple color="white" size={size / 2} />
      <div className={styles.textContainer}>
        <p style={{ fontSize: `${size / 5}px` }}>Download on the</p>
        <p style={{ fontSize: `${size / 3}px` }}>App Store</p>
      </div>
    </a>
  );
};

export default AppleStoreLogo;
