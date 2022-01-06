import { motion } from 'framer-motion';
import { leaf, leafWrapper } from 'src/variants';

const Leaf = ({ className, imageUrl, animationSpeed }) => {
  return (
    <motion.div variants={leafWrapper} className={className}>
      <motion.img
        custom={animationSpeed}
        variants={leaf}
        className="leaf"
        src={imageUrl}
      />
    </motion.div>
  );
};

export default Leaf;
