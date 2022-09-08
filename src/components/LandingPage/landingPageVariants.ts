export const headingVariants = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const footerLineVariants = {
  hidden: { opacity: 0, height: "0" },
  visible: {
    opacity: 1,
    height: "50%",
  },
};
