const defaultState = {
  opacity: 1,
  y: 0,
};

const defaultLinkVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    ...defaultState,
    border: "1px solid white",
    transition: {
      delay: 0.3,
    },
  },
};

const activeState = {
  border: "1px solid pink",
};

export const workLinkVariants = {
  ...defaultLinkVariants,
  workActive: activeState,
  jakeActive: defaultLinkVariants.visible,
  techActive: defaultLinkVariants.visible,
};

export const jakeLinkVariants = {
  ...defaultLinkVariants,
  workActive: defaultLinkVariants.visible,
  jakeActive: activeState,
  techActive: defaultLinkVariants.visible,
};

export const techLinkVariants = {
  ...defaultLinkVariants,
  workActive: defaultLinkVariants.visible,
  jakeActive: defaultLinkVariants.visible,
  techActive: activeState,
};
