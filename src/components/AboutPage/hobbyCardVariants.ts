export const cardVariantsLandscape = {
  jakeActiveMove: {
    right: 150,
  },
  jakeActiveExpand: ({ delay }: { delay: number }) => ({
    transform: "rotateY(180deg)",
    left: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  }),
};

export const cardVariantsPortrait = {
  jakeActiveMove: {
    bottom: 150,
  },
  jakeActiveExpand: ({ delay }: { delay: number }) => ({
    transform: "rotateX(180deg)",
    top: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  }),
};

export const tagVariants = {
  jakeActiveMove: {
    right: 150,
  },
  jakeActiveExpand: ({ delay }: { delay: number }) => ({
    left: "40%",
    transform: "rotateY(180deg)",
    transition: {
      duration: 0.8,
      delay: delay,
    },
  }),
};
