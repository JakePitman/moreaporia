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

// ----- MINOR BORDER CONTAINER VARIANTS -----

const defaultMinorBorderContainerState = {
  opacity: 0,
  width: "0%",
  height: "0%",
  background: "transparent",
};
const activeMinorBorderContainerState = {
  opacity: 1,
  width: "95%",
  height: "95%",
  background: "rgb(255, 255, 0, 0.1)",
  transition: {
    duration: 0.2,
  },
};

const defaultMinorBorderContainerVariants = {
  hidden: defaultMinorBorderContainerState,
  visible: defaultMinorBorderContainerState,
};

export const minorBorderContainerVariants = {
  work: {
    ...defaultMinorBorderContainerVariants,
    workActive: activeMinorBorderContainerState,
    jakeActive: defaultMinorBorderContainerState,
    techActive: defaultMinorBorderContainerState,
  },
  jake: {
    ...defaultMinorBorderContainerVariants,
    workActive: defaultMinorBorderContainerState,
    jakeActive: activeMinorBorderContainerState,
    techActive: defaultMinorBorderContainerState,
  },
  tech: {
    ...defaultMinorBorderContainerVariants,
    workActive: defaultMinorBorderContainerState,
    jakeActive: defaultMinorBorderContainerState,
    techActive: activeMinorBorderContainerState,
  },
};

// ----- MINOR BORDER VARIANTS -----

const defaultMinorBorderState = {
  opacity: 0,
  height: "0%",
};

const activeMinorBorderState = {
  opacity: 1,
  height: "50%",
  transition: {
    duration: 0.4,
  },
};

const defaultMinorBorderVariants = {
  hidden: defaultMinorBorderState,
  visible: defaultMinorBorderState,
};

export const minorBorderVariants = {
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
