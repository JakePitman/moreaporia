import React from "react";

import styles from "./Project.module.scss";
import colors from "../../shared/_colors.module.scss";
import { IconType } from "react-icons";

type Props = {
  // Create images as size width: 960px, height: 800px
  imgSrc: string;
  imgAlt: string;
  Blueprint: () => JSX.Element;
  title: string;
  year: string;
  children: React.ReactNode;
  tools: { name: string; href: string }[];
  links: { Icon: IconType; href: string }[];
};

const Project = ({
  imgSrc,
  imgAlt,
  Blueprint,
  title,
  year,
  children,
  tools,
  links,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} className={styles.image} alt={imgAlt} />
        <Blueprint />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.rowGroup}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtext} style={{ color: colors.lightBlue }}>
            {year}
          </p>
        </div>
        <div className={styles.bodyTextContainer}>{children}</div>
        <div className={styles.rowGroup}>
          <p className={`${styles.subtext} ${styles.tools}`}>
            {tools.map(({ name, href }, i) => {
              return (
                <>
                  <a
                    className={styles.tool}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </a>
                  {i < tools.length - 1 ? (
                    <p className={styles.toolSeparator}>·</p>
                  ) : null}
                </>
              );
            })}
          </p>
          <p className={styles.subtext}>
            {links.map(({ Icon, href }, i) => {
              return (
                <>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon color="yellow" size={30} />
                  </a>
                  {i < links.length - 1 ? (
                    <p className={styles.toolSeparator}>·</p>
                  ) : null}
                </>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
