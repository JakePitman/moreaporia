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

const jakeActiveOffset = "75%";

export const aboutImageVariants = {
  hidden: { ...hidden, left: jakeActiveOffset },
  visible: hidden,
  shrink: {
    width: "5%",
    transition: {
      duration: 0.2,
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
