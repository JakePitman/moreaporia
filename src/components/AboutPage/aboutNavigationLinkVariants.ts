const defaultState = {
  opacity: 1,
  y: 0,
  border: "1px solid white",
};

const defaultLinkVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    ...defaultState,
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
  jakeActive: defaultState,
  techActive: defaultState,
};

export const jakeLinkVariants = {
  ...defaultLinkVariants,
  workActive: defaultState,
  jakeActive: activeState,
  techActive: defaultState,
};

export const techLinkVariants = {
  ...defaultLinkVariants,
  workActive: defaultState,
  jakeActive: defaultState,
  techActive: activeState,
};
