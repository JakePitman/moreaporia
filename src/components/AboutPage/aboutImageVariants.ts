const hidden = {
  width: "0%",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "auto",
  marginBottom: "auto",
  opacity: 0,
};

const containerExpandDefaults = {
  transition: {
    duration: 0.3,
    delay: 0,
    type: "spring",
  },
};

export const aboutImageContainerDefaultVariants = {
  hidden: hidden,
  visible: hidden,
  shrink: {
    width: "3vw",
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0,
    },
  },
};

export const aboutImageContainer1Variants = {
  ...aboutImageContainerDefaultVariants,
  jakeActiveMove: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0,
  },
  workActiveMove: {
    left: "-75%",
    right: 0,
    top: "40%",
    bottom: 0,
    opacity: 1,
  },
  techActiveMove: {
    left: "70%",
    right: 0,
    top: "-40%",
    bottom: 0,
    opacity: 1,
  },
  workActiveExpand: {
    ...containerExpandDefaults,
    width: "30vh",
  },
  jakeActiveExpand: {
    ...containerExpandDefaults,
    width: "0vh",
  },
  techActiveExpand: {
    ...containerExpandDefaults,
    width: "30vh",
  },
};

export const aboutImageContainer2Variants = {
  ...aboutImageContainerDefaultVariants,
  jakeActiveMove: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 1,
  },
  workActiveMove: {
    left: "-70%",
    right: 0,
    top: "-40%",
    bottom: 0,
    opacity: 1,
  },
  techActiveMove: {
    left: "75%",
    right: 0,
    top: "40%",
    bottom: 0,
    opacity: 1,
  },
  workActiveExpand: {
    ...containerExpandDefaults,
    width: "25vh",
  },
  jakeActiveExpand: {
    ...containerExpandDefaults,
    width: "50vh",
  },
  techActiveExpand: {
    ...containerExpandDefaults,
    width: "35vh",
  },
};

export const aboutImageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  shrink: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.2,
    },
  },
  workActiveExpand: {
    opacity: 1,
  },
  jakeActiveExpand: {
    opacity: 1,
  },
  techActiveExpand: {
    opacity: 1,
  },
};

const cornerOffset = -8;

const cornerExpandDefaults = {
  transition: {
    duration: 0.2,
    delay: 0.1,
  },
};
const topRightCornerExpandDefaults = {
  ...cornerExpandDefaults,
  top: cornerOffset,
  right: cornerOffset,
};
const bottomLeftCornerExpandDefaults = {
  ...cornerExpandDefaults,
  bottom: cornerOffset,
  left: cornerOffset,
};

export const topRightCornerVariants = {
  shrink: {
    top: 0,
    right: 0,
  },
  workActiveExpand: {
    ...topRightCornerExpandDefaults,
  },
  jakeActiveExpand: {
    ...topRightCornerExpandDefaults,
  },
  techActiveExpand: {
    ...topRightCornerExpandDefaults,
  },
};

export const bottomLeftCornerVariants = {
  shrink: {
    bottom: 0,
    left: 0,
  },
  workActiveExpand: {
    ...bottomLeftCornerExpandDefaults,
  },
  jakeActiveExpand: {
    ...bottomLeftCornerExpandDefaults,
  },
  techActiveExpand: {
    ...bottomLeftCornerExpandDefaults,
  },
};
