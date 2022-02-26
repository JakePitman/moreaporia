export const lowerLeftBackgroundVariants = {
  hidden: {
    rotate: 0,
    bottom: "-60vh",
    transition: {},
  },

  visible: {
    rotate: 30,
    bottom: "-50vh",
    transition: {
      delay: 0.3,
    },
  },
  workActive: {
    rotate: 40,
    transition: {
      delay: 0.1,
    },
  },
  jakeActive: {
    rotate: 30,
    transition: {
      delay: 0.1,
    },
  },
  techActive: {
    rotate: 20,
  },
};

export const lowerRightBackgroundVariants = {
  hidden: {
    rotate: 0,
    bottom: "-70vh",
    transition: {},
  },
  visible: {
    rotate: -30,
    bottom: "-60vh",
    transition: {
      delay: 0.2,
    },
  },
  workActive: {
    rotate: -10,
  },
  jakeActive: {
    rotate: -30,
  },
  techActive: {
    rotate: -40,
    transition: {
      delay: 0.1,
    },
  },
};
