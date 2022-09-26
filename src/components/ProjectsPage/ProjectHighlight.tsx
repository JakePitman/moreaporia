import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./ProjectHighlight.module.scss";
import testBrown from "./pictures/test-brown-phone.png";
import TestAppBlueprint from "./TestAppBlueprint";
import BrowserContext from "../../shared/browserContext";
import AppleStoreLogo from "./AppleStoreLogo";
import BluePrintShape from "./BlueprintShape";
import colors from "../../shared/_colors.module.scss";
import ScrollIndicator from "./ScrollIndicator";

const imageVariants = {
  hidden: { opacity: 0 },
  imagesAppear: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  draw: { opacity: 1, x: 0 },
};

const textVariantsPortrait = {
  hidden: { opacity: 0 },
  imagesAppear: { opacity: 1 },
};

type SVGTextProps = {
  children: string;
  element: (word: string) => React.ReactNode;
};

const SVGText = ({ children, element }: SVGTextProps) => (
  <div className={styles.titleContainer}>
    {children.split(" ").map((word) => (
      <div className={styles.svgContainer} style={{ margin: "0 5px" }}>
        {element(word)}
        <BluePrintShape color={colors.boldBlue} shape="line" />
      </div>
    ))}
  </div>
);

const PortraitLayout = () => {
  return (
    <motion.div className={styles.pageContainerPortrait}>
      {/* <motion.p className={styles.textPortrait} variants={textVariantsPortrait}>
        In the spotlight
      </motion.p> */}
      <SVGText
        element={(word) => (
          <motion.p
            className={styles.textPortrait}
            variants={textVariantsPortrait}
          >
            {word}
          </motion.p>
        )}
      >
        In the spotlight
      </SVGText>
      <div className={styles.appImageContainerPortrait}>
        <TestAppBlueprint />
        <motion.img
          src={testBrown}
          alt=""
          className={styles.imagePortrait}
          variants={imageVariants}
        />
      </div>
      <SVGText
        element={(word) => (
          <motion.h1
            className={styles.titlePortrait}
            variants={textVariantsPortrait}
          >
            {word}
          </motion.h1>
        )}
      >
        Chess Openings Trainer
      </SVGText>
      <div className={styles.svgContainer}>
        <motion.div variants={textVariantsPortrait}>
          <AppleStoreLogo size={80} />
        </motion.div>
        <BluePrintShape color={colors.boldBlue} shape="square" />
      </div>
    </motion.div>
  );
};

const LandscapeLayout = () => {
  return (
    <motion.div className={styles.pageContainer}>
      <div className={styles.landscapeLeftContainer}>
        <div className={styles.appImageContainer}>
          <TestAppBlueprint />
          <motion.img
            src={testBrown}
            alt=""
            className={styles.image}
            variants={imageVariants}
          />
        </div>
      </div>
      <motion.div
        className={styles.landscapeRightContainer}
        variants={{
          draw: {
            transition: { delayChildren: 0.2, staggerChildren: 0.1 },
          },
        }}
      >
        <motion.p className={styles.text} variants={textVariants}>
          In the spotlight
        </motion.p>
        <div className={styles.titleContainer}>
          <motion.h1 className={styles.title} variants={textVariants}>
            Chess
          </motion.h1>
          <motion.h1 className={styles.title} variants={textVariants}>
            Openings
          </motion.h1>
          <motion.h1 className={styles.title} variants={textVariants}>
            Trainer
          </motion.h1>
        </div>
        <motion.p className={styles.text} variants={textVariants}>
          Build your chess openings repertoire by recording and testing
          yourself!
        </motion.p>
        <motion.div variants={textVariants}>
          <AppleStoreLogo size={100} />
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </motion.div>
  );
};

const ProjectsPage = () => {
  const { isLandscape } = useContext(BrowserContext);

  return isLandscape ? <LandscapeLayout /> : <PortraitLayout />;
};

export default ProjectsPage;
