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

export const navItemFirstLetterVariants = {
  hidden: { opacity: 0, transform: "translateY(-50)" },
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      delay: custom.delay,
      duration: 0.5,
    },
  }),
};

export const navItemRemainingLettersVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
