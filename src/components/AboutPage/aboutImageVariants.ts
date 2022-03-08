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

export const aboutImageContainerVariants = {
  hidden: hidden,
  visible: hidden,
  shrink: {
    width: "5%",
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0,
    },
  },
  expand: {
    width: "20%",
    transition: {
      duration: 0.3,
      delay: 0,
      type: "spring",
    },
  },
  jakeActive: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 1,
  },
  workActive: {
    left: "-75%",
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 1,
  },
  techActive: {
    left: "75%",
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 1,
  },
};

export const aboutImageOpacityLayerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0,
  },
  shrink: {
    opacity: 1,
    transition: {
      delay: 0,
    },
  },
  expand: {
    opacity: 0,
  },
};
