export const cardVariantsLandscape = {
  shrink: {
    right: 200,
  },
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
  shrink: {
    bottom: 200,
  },
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
