import { Variants } from 'framer-motion';

export const fadeIn = (dircetion: 'up' | 'down' = 'up'): Variants => ({
  initial: {
    y: dircetion === 'up' ? 40 : -60,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
});

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.6,
    },
  },
};

//! --- DRY ---
// export const fadeInDown: Variants = {
//   initial: {
//     y: -60,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: 'easeInOut',
//     },
//   },
// };
