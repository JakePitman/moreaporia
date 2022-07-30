const leftToRightMoveDefaults = {
  right: 150,
};
const leftToRightActiveDefaults = ({ delay }: { delay: number }) => ({
  transform: "rotateY(180deg)",
  left: 0,
  transition: {
    duration: 0.5,
    delay: delay,
  },
});
export const cardVariantsLeftToRight = {
  jakeActiveMove: leftToRightMoveDefaults,
  techActiveMove: leftToRightMoveDefaults,
  workActiveMove: leftToRightMoveDefaults,
  workActiveExpand: leftToRightActiveDefaults,
  jakeActiveExpand: leftToRightActiveDefaults,
  techActiveExpand: leftToRightActiveDefaults,
};

const RightToLeftMoveDefaults = {
  right: -150,
};
const RightToLeftActiveDefaults = ({ delay }: { delay: number }) => ({
  transform: "rotateY(180deg)",
  left: 0,
  transition: {
    duration: 0.5,
    delay: delay,
  },
});
export const cardVariantsRightToLeft = {
  jakeActiveMove: RightToLeftMoveDefaults,
  techActiveMove: RightToLeftMoveDefaults,
  workActiveMove: RightToLeftMoveDefaults,
  workActiveExpand: RightToLeftActiveDefaults,
  jakeActiveExpand: RightToLeftActiveDefaults,
  techActiveExpand: RightToLeftActiveDefaults,
};

const TopToBottomMoveDefaults = {
  bottom: 150,
};
const TopToBottomActiveDefaults = ({ delay }: { delay: number }) => ({
  transform: "rotateX(180deg)",
  top: 0,
  transition: {
    duration: 0.5,
    delay: delay,
  },
});
export const cardVariantsTopToBottom = {
  jakeActiveMove: TopToBottomMoveDefaults,
  techActiveMove: TopToBottomMoveDefaults,
  workActiveMove: TopToBottomMoveDefaults,
  workActiveExpand: TopToBottomActiveDefaults,
  jakeActiveExpand: TopToBottomActiveDefaults,
  techActiveExpand: TopToBottomActiveDefaults,
};

const BottomToTopMoveDefaults = {
  bottom: -150,
};
const BottomToTopActiveDefaults = ({ delay }: { delay: number }) => ({
  transform: "rotateX(180deg)",
  top: 0,
  transition: {
    duration: 0.5,
    delay: delay,
  },
});
export const cardVariantsBottomToTop = {
  jakeActiveMove: BottomToTopMoveDefaults,
  jakeActiveExpand: BottomToTopActiveDefaults,
};
export const tagVariants = {
  jakeActiveMove: {
    right: -160,
  },
  jakeActiveExpand: ({ delay }: { delay: number }) => ({
    left: "40%",
    transform: "rotateY(180deg)",
    transition: {
      duration: 0.5,
      delay: delay,
      type: "spring",
    },
  }),
};
