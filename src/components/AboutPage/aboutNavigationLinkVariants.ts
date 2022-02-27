const defaultContainerState = {
  opacity: 1,
  y: 0,
  border: "none",
};

const defaultContainerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    ...defaultContainerState,
    transition: {
      delay: 0.3,
    },
  },
};

const activeContainerState = {};

export const containerVariants = {
  work: {
    ...defaultContainerVariants,
    workActive: activeContainerState,
    jakeActive: defaultContainerState,
    techActive: defaultContainerState,
  },
  jake: {
    ...defaultContainerVariants,
    workActive: defaultContainerState,
    jakeActive: activeContainerState,
    techActive: defaultContainerState,
  },
  tech: {
    ...defaultContainerVariants,
    workActive: defaultContainerState,
    jakeActive: defaultContainerState,
    techActive: activeContainerState,
  },
};

// ----- MINOR BORDER VARIANTS -----

const defaultMinorBorderState = {
  opacity: 0,
  width: "0%",
  height: "0%",
  background: "transparent",
};
const activeMinorBorderState = {
  opacity: 1,
  width: "95%",
  height: "95%",
  background: "rgb(255, 255, 0, 0.1)",
};

const defaultMinorBorderVariants = {
  hidden: defaultMinorBorderState,
  visible: defaultMinorBorderState,
};

export const minorBorderContainerVariants = {
  work: {
    ...defaultMinorBorderVariants,
    workActive: activeMinorBorderState,
    jakeActive: defaultMinorBorderState,
    techActive: defaultMinorBorderState,
  },
  jake: {
    ...defaultMinorBorderVariants,
    workActive: defaultMinorBorderState,
    jakeActive: activeMinorBorderState,
    techActive: defaultMinorBorderState,
  },
  tech: {
    ...defaultMinorBorderVariants,
    workActive: defaultMinorBorderState,
    jakeActive: defaultMinorBorderState,
    techActive: activeMinorBorderState,
  },
};
