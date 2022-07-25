import { motion } from "framer-motion";
import { iconVariants } from "./IconVariants";
import styles from "./Icon.module.scss";

type Props = {
  Icon: React.ReactNode;
  href: string;
};

const Icon = ({ Icon, href }: Props) => {
  return (
    <motion.a
      variants={iconVariants}
      className={styles.iconWrapper}
      href={href}
      target="_blank"
    >
      {Icon}
    </motion.a>
  );
};

export default Icon;
