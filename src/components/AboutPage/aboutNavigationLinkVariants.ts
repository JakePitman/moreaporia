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

export const workLinkContainerVariants = {
  ...defaultContainerVariants,
  workActive: activeContainerState,
  jakeActive: defaultContainerState,
  techActive: defaultContainerState,
};
export const jakeLinkContainerVariants = {
  ...defaultContainerVariants,
  workActive: defaultContainerState,
  jakeActive: activeContainerState,
  techActive: defaultContainerState,
};
export const techLinkContainerVariants = {
  ...defaultContainerVariants,
  workActive: defaultContainerState,
  jakeActive: defaultContainerState,
  techActive: activeContainerState,
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

export const workLinkMinorBorderVariants = {
  ...defaultMinorBorderVariants,
  workActive: activeMinorBorderState,
  jakeActive: defaultMinorBorderState,
  techActive: defaultMinorBorderState,
};
export const jakeLinkMinorBorderVariants = {
  ...defaultMinorBorderVariants,
  workActive: defaultMinorBorderState,
  jakeActive: activeMinorBorderState,
  techActive: defaultMinorBorderState,
};
export const techLinkMinorBorderVariants = {
  ...defaultMinorBorderVariants,
  workActive: defaultMinorBorderState,
  jakeActive: defaultMinorBorderState,
  techActive: activeMinorBorderState,
};
