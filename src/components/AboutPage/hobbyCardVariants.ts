export const cardVariants = {
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
