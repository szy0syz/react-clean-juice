import { motion } from 'framer-motion';
import { bottle, bottleWrapper } from 'src/variants';

const BottleContainer = () => {
  return (
    <motion.div
      variants={bottleWrapper}
      initial="initial"
      animate="animate"
      className="bottleWrapper"
    >
      <motion.img
        variants={bottle}
        src="/images/juice.png"
        className="bottle"
      />
    </motion.div>
  );
};

export default BottleContainer;
