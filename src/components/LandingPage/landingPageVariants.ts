const secondaryAnimationsDelay = 0.5;

export const headingVariants = {
  hidden: { opacity: 0, transform: "translateX(300)" },
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    transform: "translateX(0px)",
    transition: {
      delay: custom.delay,
      duration: 0.5,
    },
  }),
};

export const navItemVariants = {
  hidden: { opacity: 0, transform: "translateX(-40px)" },
  visible: (custom: { delay: number }) => ({
    transform: "translateX(0px)",
    opacity: 1,
    transition: {
      delay: secondaryAnimationsDelay + custom.delay,
    },
  }),
};

export const iconVariants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    transition: {
      delay: secondaryAnimationsDelay + custom.delay,
    },
  }),
};

export const footerLineVariants = {
  hidden: { height: "0" },
  visible: {
    height: "50%",
    transition: {
      delay: secondaryAnimationsDelay,
    },
  },
};
