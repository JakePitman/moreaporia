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
    workActiveExpand: activeContainerState,
    jakeActiveExpand: defaultContainerState,
    techActiveExpand: defaultContainerState,
  },
  jake: {
    ...defaultContainerVariants,
    workActiveExpand: defaultContainerState,
    jakeActiveExpand: activeContainerState,
    techActiveExpand: defaultContainerState,
  },
  tech: {
    ...defaultContainerVariants,
    workActiveExpand: defaultContainerState,
    jakeActiveExpand: defaultContainerState,
    techActiveExpand: activeContainerState,
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
  shrink: defaultMinorBorderContainerState,
};

export const minorBorderContainerVariants = {
  work: {
    ...defaultMinorBorderContainerVariants,
    workActiveExpand: activeMinorBorderContainerState,
    jakeActiveExpand: defaultMinorBorderContainerState,
    techActiveExpand: defaultMinorBorderContainerState,
  },
  jake: {
    ...defaultMinorBorderContainerVariants,
    workActiveExpand: defaultMinorBorderContainerState,
    jakeActiveExpand: activeMinorBorderContainerState,
    techActiveExpand: defaultMinorBorderContainerState,
  },
  tech: {
    ...defaultMinorBorderContainerVariants,
    workActiveExpand: defaultMinorBorderContainerState,
    jakeActiveExpand: defaultMinorBorderContainerState,
    techActiveExpand: activeMinorBorderContainerState,
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
    duration: 0.2,
  },
};

const defaultMinorBorderVariants = {
  hidden: defaultMinorBorderState,
  visible: defaultMinorBorderState,
};

export const minorBorderVariants = {
  work: {
    ...defaultMinorBorderVariants,
    workActiveExpand: activeMinorBorderState,
    jakeActiveExpand: defaultMinorBorderState,
    techActiveExpand: defaultMinorBorderState,
  },
  jake: {
    ...defaultMinorBorderVariants,
    workActiveExpand: defaultMinorBorderState,
    jakeActiveExpand: activeMinorBorderState,
    techActiveExpand: defaultMinorBorderState,
  },
  tech: {
    ...defaultMinorBorderVariants,
    workActiveExpand: defaultMinorBorderState,
    jakeActiveExpand: defaultMinorBorderState,
    techActiveExpand: activeMinorBorderState,
  },
};
