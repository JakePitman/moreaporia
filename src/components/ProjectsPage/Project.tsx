import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";
import styles from "./Project.module.scss";
import colors from "../../shared/_colors.module.scss";
import { IconType } from "react-icons";
import classNames from "classnames";

const infoVariantsDefault = {
  hidden: { opacity: 0, x: -100 },
  drawSVG: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom },
  }),
};
const infoVariantsReversed = {
  ...infoVariantsDefault,
  hidden: { ...infoVariantsDefault.hidden, x: 100 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  renderImage: { opacity: 1 },
};

export type Props = {
  // Create images as size width: 960px, height: 800px
  imgSrc: string;
  imgAlt: string;
  Blueprint: () => JSX.Element;
  title: string;
  year: string;
  children: React.ReactNode;
  tools: { name: string; href: string }[];
  links: { Icon: IconType; href: string }[];
  isReversed?: boolean;
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
  isReversed = false,
}: Props) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const infoVariants = isReversed ? infoVariantsReversed : infoVariantsDefault;

  return (
    <motion.div
      className={classNames({
        [styles.container]: true,
        [styles.containerReversed]: isReversed,
      })}
      animate={controls}
      onViewportEnter={async () => {
        if (hasAnimated) return;
        await controls.start("drawSVG");
        await controls.start("renderImage");
        setHasAnimated(true);
      }}
      viewport={{ once: true, margin: "-30%" }}
      initial="hidden"
    >
      <motion.div
        className={classNames({
          [styles.infoContainer]: true,
          [styles.infoContainerReversed]: isReversed,
        })}
      >
        <div className={styles.rowGroup}>
          <motion.h2
            className={styles.title}
            custom={0}
            variants={infoVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className={classNames({
              [styles.subtext]: true,
            })}
            style={{ color: colors.lightBlue }}
            custom={0.1}
            variants={infoVariants}
          >
            {year}
          </motion.p>
        </div>
        <motion.div
          className={classNames({
            [styles.bodyTextContainer]: true,
            [styles.bodyTextContainerReversed]: isReversed,
          })}
          custom={0.2}
          variants={infoVariants}
        >
          {children}
        </motion.div>
        <div className={styles.rowGroup}>
          <motion.p
            className={classNames({
              [styles.subtext]: true,
              [styles.tools]: true,
            })}
            custom={0.3}
            variants={infoVariants}
          >
            {tools.map(({ name, href }, i) => {
              return (
                <React.Fragment key={i}>
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
                </React.Fragment>
              );
            })}
          </motion.p>
          <motion.p
            className={classNames({
              [styles.subtext]: true,
            })}
            custom={0.4}
            variants={infoVariants}
          >
            {links.map(({ Icon, href }, i) => {
              return (
                <React.Fragment key={i}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon color="yellow" size={30} />
                  </a>
                  {i < links.length - 1 ? (
                    <p className={styles.toolSeparator}>·</p>
                  ) : null}
                </React.Fragment>
              );
            })}
          </motion.p>
        </div>
      </motion.div>
      <div className={styles.imageContainer}>
        <motion.img
          src={imgSrc}
          className={styles.image}
          alt={imgAlt}
          variants={imageVariants}
        />
        <Blueprint />
      </div>
    </motion.div>
  );
};

export default Project;
