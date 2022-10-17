import { BsGithub } from "react-icons/bs";

import { Props } from "./Project";
import styles from "./ProjectReelData.module.scss";
import logicCalculatorImg from "./pictures/logic-calc/image.png";
import LogicCalculatorBluePrint from "./pictures/logic-calc/Blueprint";
import changeThemeImg from "./pictures/change-theme/image.png";
import ChangeThemeBluePrint from "./pictures/change-theme/Blueprint";
import guitarChordsImg from "./pictures/guitar-chords/image.png";
import GuitarChordsBluePrint from "./pictures/guitar-chords/Blueprint";
import gameOfLifeImg from "./pictures/game-of-life/image.png";
import GameOfLifeBluePrint from "./pictures/game-of-life/Blueprint";

const ProjectReelData: Props[] = [
  // CHANGE THEME
  {
    imgSrc: changeThemeImg,
    imgAlt: "Change theme",
    Blueprint: ChangeThemeBluePrint,
    title: "Change Theme",
    year: "2021",
    tools: [
      { name: "Node", href: "https://nodejs.org/en/" },
      {
        name: "Bash",
        href: "https://www.gnu.org/software/bash/",
      },
    ],
    links: [
      {
        Icon: BsGithub,
        href: "https://github.com/JakePitman/change-theme",
      },
    ],
    children: (
      <>
        <p className={styles.bodyText}>
          One CLI-tool to simultaneously change themes for ZSH, VSCode, Vim and
          Tmux.
        </p>
        <p className={styles.bodyText}>
          I got tired of needing to update four things everytime I wanted to
          change my colour scheme, so I made a script to do it for me.
        </p>
      </>
    ),
  },
  // GUITAR CHORDS
  {
    imgSrc: guitarChordsImg,
    imgAlt: "Guitar chords",
    Blueprint: GuitarChordsBluePrint,
    title: "Chords Generator",
    year: "2021",
    tools: [
      { name: "R. Native", href: "https://reactnative.dev/" },
      {
        name: "react-navigation-tabs",
        href: "https://www.npmjs.com/package/tty-table",
      },
    ],
    links: [
      {
        Icon: BsGithub,
        href: "https://github.com/JakePitman/guitar-chords-generator",
      },
    ],
    isReversed: true,
    children: (
      <>
        <p className={styles.bodyText}>
          My first React Native app, built to help myself practice guitar.
        </p>
        <p className={styles.bodyText}>
          Displays selected guitar chords at random on the beat. Play the chords
          to get used to transitioning between them.
        </p>
      </>
    ),
  },
  // LOGIC CALCULATOR
  {
    imgSrc: logicCalculatorImg,
    imgAlt: "Logic calculator",
    Blueprint: LogicCalculatorBluePrint,
    title: "Logic Calculator",
    year: "2020",
    tools: [
      { name: "Node", href: "https://nodejs.org/en/" },
      { name: "TS", href: "https://www.typescriptlang.org/" },
      {
        name: "Inquirer",
        href: "https://github.com/SBoudrias/Inquirer.js",
      },
      {
        name: "tty-table",
        href: "https://www.npmjs.com/package/tty-table",
      },
    ],
    links: [
      {
        Icon: BsGithub,
        href: "https://github.com/JakePitman/logic-calculator",
      },
    ],
    isReversed: false,
    children: (
      <>
        <p className={styles.bodyText}>
          Calculates all models of a given logical proposition or argument,
          demonstrating whether it's valid or not.
        </p>
        <p className={styles.bodyText}>
          Teaching a computer how something works demands perfect understanding
          of the subject. I learned a lot by making this.
        </p>
      </>
    ),
  },
  // GAME OF LIFE
  {
    imgSrc: gameOfLifeImg,
    imgAlt: "Game of life",
    Blueprint: GameOfLifeBluePrint,
    title: "Game of Life",
    year: "2019",
    tools: [
      { name: "React", href: "https://reactjs.org/" },
      {
        name: "styled-components",
        href: "https://styled-components.com/",
      },
    ],
    links: [
      {
        Icon: BsGithub,
        href: "https://github.com/JakePitman/game-of-life-react",
      },
    ],
    isReversed: true,
    children: (
      <>
        <p className={styles.bodyText}>
          An app I built in my spare time when I got my first engineering job,
          to build my React skills.
        </p>
        <p className={styles.bodyText}>
          A set of rules determines whether a cell lives or dies between cycles.
          Read more about this fascinating game{" "}
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
            here
          </a>
          .
        </p>
      </>
    ),
  },
];

export default ProjectReelData;
