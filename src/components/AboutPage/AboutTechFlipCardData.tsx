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
      rotate: 2,
      delay: 0.3,
      children: <SiJavascript size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 2,
      delay: 0.2,
      children: <FaReact size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 2,
      delay: 0.1,
      children: <SiTypescript size={"80%"} color={colors.primaryBackground} />,
    },
  ],
  [
    {
      rotate: 0,
      delay: 0.3,
      children: <FaNode size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 0,
      delay: 0.2,
      children: <FaMobileAlt size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 0,
      delay: 0.1,
      children: <FaSass size={"80%"} color={colors.primaryBackground} />,
    },
  ],
  [
    {
      rotate: -2,
      delay: 0.3,
      children: (
        <VscTerminalBash size={"80%"} color={colors.primaryBackground} />
      ),
    },
    {
      rotate: -2,
      delay: 0.2,
      children: <FaNpm size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: -2,
      delay: 0.1,
      children: <FaDocker size={"80%"} color={colors.primaryBackground} />,
    },
  ],
];

export const flipCardDataPortrait = [
  [
    {
      rotate: -4,
      delay: 0.2,
      children: <SiJavascript size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 0,
      delay: 0.2,
      children: <FaReact size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 4,
      delay: 0.2,
      children: <SiTypescript size={"80%"} color={colors.primaryBackground} />,
    },
  ],
  [
    {
      rotate: -4,
      delay: 0.1,
      children: <FaNode size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 0.2,
      delay: 0.1,
      children: <FaMobileAlt size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 4,
      delay: 0.1,
      children: <FaSass size={"80%"} color={colors.primaryBackground} />,
    },
  ],
  [
    {
      rotate: -4,
      delay: 0,
      children: (
        <VscTerminalBash size={"80%"} color={colors.primaryBackground} />
      ),
    },
    {
      rotate: 0,
      delay: 0,
      children: <FaNpm size={"80%"} color={colors.primaryBackground} />,
    },
    {
      rotate: 4,
      delay: 0,
      children: <FaDocker size={"80%"} color={colors.primaryBackground} />,
    },
  ],
];
