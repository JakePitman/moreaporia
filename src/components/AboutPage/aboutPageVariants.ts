const lowerBackgroundVisibleHeight = "-90vh";
const lowerBackgroundHiddenHeight = "-110vh";

export const lowerLeftBackgroundVariants = {
  hidden: {
    rotate: 0,
    bottom: lowerBackgroundHiddenHeight,
    transition: {},
  },

  visible: {
    rotate: 30,
    bottom: lowerBackgroundVisibleHeight,
    transition: {
      delay: 0.3,
    },
  },
  workActive: {
    rotate: 40,
    bottom: lowerBackgroundVisibleHeight,
    transition: {
      delay: 0.1,
    },
  },
  jakeActive: {
    rotate: 30,
    bottom: lowerBackgroundVisibleHeight,
    transition: {
      delay: 0.1,
    },
  },
  techActive: {
    bottom: lowerBackgroundVisibleHeight,
    rotate: 20,
  },
};

export const lowerRightBackgroundVariants = {
  hidden: {
    rotate: 0,
    bottom: lowerBackgroundHiddenHeight,
    transition: {},
  },
  visible: {
    rotate: -30,
    bottom: lowerBackgroundVisibleHeight,
    transition: {
      delay: 0.2,
    },
  },
  workActive: {
    bottom: lowerBackgroundVisibleHeight,
    rotate: -10,
  },
  jakeActive: {
    bottom: lowerBackgroundVisibleHeight,
    rotate: -30,
  },
  techActive: {
    bottom: lowerBackgroundVisibleHeight,
    rotate: -40,
    transition: {
      delay: 0.1,
    },
  },
};
