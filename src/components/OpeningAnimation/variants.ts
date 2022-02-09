export const mainSquareVariants = {
  hidden: {
    width: "0px",
    height: "0px",
    borderRadius: "50%",
    rotate: -180,
    opacity: 0,
    transition: {},
    y: 0,
  },
  expanding: {
    borderRadius: 0,
    opacity: 1,
    rotate: 0,
    width: "120px",
    height: "120px",
    transition: {
      duration: 0.4,
      delay: 1,
      type: "spring",
    },
  },
  aboutToClose: {
    width: "140px",
    height: "140px",
    transition: {
      delay: 0.8,
      duration: 0.15,
    },
  },
  closing: {
    width: "5px",
    height: "5px",
    rotate: 500,
    borderRadius: "50%",
    transition: {
      duration: 0.3,
    },
  },
  goingFullScreen1: {
    width: "500vw",
    borderRadius: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
  goingFullScreen2: {
    height: "500vh",
    transition: {
      duration: 0.6,
    },
  },
};

export const borderedSquareVariants = {
  hidden: (custom: { startOffset: number; finishOffset: number }) => ({
    opacity: 0,
    y: custom.startOffset,
    x: custom.startOffset,
    width: "0px",
    height: "0px",
  }),
  expanding: (custom: { startOffset: number; finishOffset: number }) => ({
    opacity: 1,
    x: custom.finishOffset,
    y: custom.finishOffset,
    width: "80px",
    height: "80px",
    transition: {
      duration: 0.4,
      delay: 1.2,
      type: "spring",
    },
  }),
  aboutToClose: {
    width: "85px",
    height: "85px",
    transition: {
      duration: 0.15,
      delay: 0.8,
    },
  },
  closing: {
    opacity: 0,
    width: "0px",
    height: "0px",
    x: 0,
    y: 0,
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
};

export const fadedSquareVariants = {
  hidden: (custom: { startOffset: number; finishOffset: number }) => ({
    opacity: 0,
    y: -custom.startOffset,
    x: custom.startOffset,
    width: "0px",
    height: "0px",
  }),
  expanding: (custom: { startOffset: number; finishOffset: number }) => ({
    opacity: 0.5,
    y: -custom.finishOffset,
    x: custom.finishOffset,
    width: "120px",
    height: "120px",
    transition: {
      duration: 0.4,
      delay: 1.4,
      type: "spring",
    },
  }),
  aboutToClose: {
    width: "130px",
    height: "130px",
    transition: {
      duration: 0.15,
      delay: 0.8,
    },
  },
  closing: {
    opacity: 0,
    width: "0px",
    height: "0px",
    x: 0,
    y: 0,
    rotate: -180,
    transition: {
      duration: 0.3,
    },
  },
};

export const logoTextVariants = {
  hidden: {
    opacity: 0,
  },
  expanding: {
    opacity: 1,
  },
  closing: {
    opacity: 0,
  },
};
