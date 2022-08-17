import styles from "./AboutWorkContent.module.scss";
import colors from "../../shared/_colors.module.scss";
import {
  FaNode,
  FaReact,
  FaSass,
  FaMobileAlt,
  FaNpm,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";

export const flipCardDataLandscape = [
  [
    {
      rotate: 3,
      delay: 0,
      children: <FaSass size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: -3,
      delay: 0.2,
      children: <FaReact size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 4,
      delay: 0.4,
      children: <SiTypescript size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
  [
    {
      rotate: -3,
      delay: 0.1,
      children: <FaNode size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 2,
      delay: 0.3,
      children: <FaMobileAlt size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: -2,
      delay: 0.5,
      children: <SiJavascript size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
  [
    {
      rotate: -3,
      delay: 0.1,
      children: (
        <VscTerminalBash size={"80%"} color={colors.primaryBackground} />
      ),
      small: true,
    },
    {
      rotate: 2,
      delay: 0.3,
      children: <FaNpm size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: -2,
      delay: 0.5,
      children: <FaDocker size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
];

export const flipCardDataPortrait = [
  [
    {
      rotate: 4,
      delay: 0.1,
      children: <FaSass size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 0,
      delay: 0,
      children: <FaReact size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: -4,
      delay: 0.1,
      children: <SiTypescript size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
  [
    {
      rotate: 4,
      delay: 0.3,
      children: <FaNode size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: 0,
      delay: 0.2,
      children: <FaMobileAlt size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: -4,
      delay: 0.3,
      children: <SiJavascript size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
  [
    {
      rotate: 4,
      delay: 0.3,
      children: (
        <VscTerminalBash size={"80%"} color={colors.primaryBackground} />
      ),
      small: true,
    },
    {
      rotate: 0,
      delay: 0.2,
      children: <FaNpm size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
    {
      rotate: -4,
      delay: 0.3,
      children: <FaDocker size={"80%"} color={colors.primaryBackground} />,
      small: true,
    },
  ],
];
