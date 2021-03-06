export const headingVariants = {
  hidden: { opacity: 0, transform: "translateX(300)" },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: {
      duration: 0.5,
    },
  },
};

export const iconVariants = {
  hidden: { opacity: 0 },
  visible: {
    transform: "scale(1)",
    opacity: 1,
  },
};

export const footerLineVariants = {
  hidden: { opacity: 0, height: "0" },
  visible: {
    opacity: 1,
    height: "50%",
  },
};
