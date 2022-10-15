import React from "react";

import { motion, useAnimation } from "framer-motion";
import styles from "./Project.module.scss";
import colors from "../../shared/_colors.module.scss";
import { IconType } from "react-icons";

const infoVariants = {
  hidden: { opacity: 0, x: 100 },
  drawSVG: { opacity: 1, x: 0 },
};
const imageVariants = {
  hidden: { opacity: 0 },
  renderImage: { opacity: 1 },
};

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
  const controls = useAnimation();
  return (
    <motion.div
      className={styles.container}
      animate={controls}
      onViewportEnter={async () => {
        await controls.start("drawSVG");
        await controls.start("renderImage");
      }}
      viewport={{ once: true, margin: "-50%" }}
      initial="hidden"
      transition={{ staggerChildren: 0.1 }}
    >
      <div className={styles.imageContainer}>
        <motion.img
          src={imgSrc}
          className={styles.image}
          alt={imgAlt}
          variants={imageVariants}
        />
        <Blueprint />
      </div>
      <motion.div className={styles.infoContainer}>
        <div className={styles.rowGroup}>
          <motion.h2 className={styles.title} variants={infoVariants}>
            {title}
          </motion.h2>
          <motion.p
            className={styles.subtext}
            style={{ color: colors.lightBlue }}
            variants={infoVariants}
          >
            {year}
          </motion.p>
        </div>
        <motion.div
          className={styles.bodyTextContainer}
          variants={infoVariants}
        >
          {children}
        </motion.div>
        <div className={styles.rowGroup}>
          <motion.p
            className={`${styles.subtext} ${styles.tools}`}
            variants={infoVariants}
          >
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
          </motion.p>
          <motion.p className={styles.subtext} variants={infoVariants}>
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
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
