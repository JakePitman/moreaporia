import React, { useState } from "react";
import { motion } from "framer-motion";

import AboutHobbies from "./AboutHobbies";
import styles from "./AboutJakeContent.module.scss";
import AboutText from "./AboutText";

type Props = {
  isLandscape: boolean;
};

type MenuOption = {
  title: string;
  component: React.ReactElement;
};
function createMenuOptionsArray<
  T extends readonly MenuOption[] & Array<{ title: V }>,
  V extends string
>(...args: T) {
  return args;
}
const menuOptions = createMenuOptionsArray(
  { title: "Why do I code?", component: <p>Why indeed</p> },
  { title: "Interests", component: <AboutHobbies /> }
);
type MenuOptionTitles = typeof menuOptions[number]["title"];

const AboutJakeContent = ({ isLandscape }: Props) => {
  const [selectedMenuOption, setSelectedMenuOption] =
    useState<MenuOptionTitles>(menuOptions[0].title);
  return (
    <>
      <motion.div
        className={
          isLandscape
            ? styles.textContainerLeftLandscape
            : styles.textContainerLeftPortrait
        }
      >
        <AboutText visible>
          <div className={styles.menuOptionsContainer}>
            {menuOptions.map((menuOption) => (
              <p onClick={() => setSelectedMenuOption(menuOption.title)}>
                {menuOption.title}
              </p>
            ))}
          </div>
        </AboutText>
      </motion.div>
      <motion.div
        className={
          isLandscape
            ? styles.textContainerRightLandscape
            : styles.textContainerRightPortrait
        }
      >
        <AboutText visible>
          {
            menuOptions.find(
              (menuOption) => menuOption.title === selectedMenuOption
            )?.component
          }
        </AboutText>
      </motion.div>
    </>
  );
};

export default AboutJakeContent;
