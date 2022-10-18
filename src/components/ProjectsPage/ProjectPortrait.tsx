import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import classNames from "classnames";

import { Props } from "./Project";
import styles from "./ProjectPortrait.module.scss";
import colors from "../../shared/_colors.module.scss";

const imageVariants = {
  hidden: { opacity: 0 },
  renderImage: { opacity: 1 },
};
// const textSectionTopVariants = {
//   hidden: { left: -400 },
//   drawSVG: {
//     left: 0,
//     transition: { duration: 0.4, type: "spring", bounce: 0.2 },
//   },
// };
// const textSectionBottomVariants = {
//   hidden: { left: 400 },
//   drawSVG: {
//     left: 0,
//     transition: { duration: 0.4, type: "spring", bounce: 0.2 },
//   },
// };
const textSectionVariants = ({ leftOffset }: { leftOffset: number }) => ({
  hidden: { left: leftOffset },
  drawSVG: {
    left: 0,
    transition: { duration: 0.4, type: "spring", bounce: 0.2 },
  },
});

const ProjectPortrait = ({
  title,
  year,
  imgSrc,
  imgAlt,
  Blueprint,
  tools,
  links,
}: Props) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();

  return (
    <motion.div
      className={styles.container}
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
        className={styles.textSectionTop}
        variants={textSectionVariants({ leftOffset: -400 })}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtext}>{year}</p>
      </motion.div>
      <div className={styles.pictureContainer}>
        <motion.img
          variants={imageVariants}
          className={styles.picture}
          src={imgSrc}
          alt={imgAlt}
        />
        <Blueprint />
      </div>
      <motion.div
        className={styles.textSectionBottom}
        variants={textSectionVariants({ leftOffset: 400 })}
      >
        <p className={classNames(styles.subtext, styles.textAlignRight)}>
          {tools.map(({ name, href }, i) => (
            <React.Fragment key={i}>
              {`${name}${i < tools.length - 1 ? "·" : ""}`}
            </React.Fragment>
          ))}
        </p>
        <p
          className={classNames(
            styles.subtext,
            styles.textAlignRight,
            styles.topSpacing
          )}
        >
          {links.map(({ Icon, href }, i) => (
            <React.Fragment key={i}>
              <a href={href} target="_blank" rel="noreferrer">
                <Icon color={colors.primaryBackground} size={25} />
              </a>
              {i < links.length - 1 ? (
                <p className={styles.toolSeparator}>·</p>
              ) : null}
            </React.Fragment>
          ))}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPortrait;
