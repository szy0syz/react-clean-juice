import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from 'src/variants';

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer"
    >
      {/* top */}
      <div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-green-600">
          Find you clean juice
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          2 /4
        </motion.span>
      </div>

      {/* middle */}
      <motion.div
        variants={fadeIn()}
        initial="initial"
        animate="animate"
        className="textContainer-middle"
      >
        <span>ORANGE</span>
      </motion.div>

      {/* bottom */}
      <div className="textContainer-bottom">
        <motion.button variants={fadeIn()}>show all the juices</motion.button>
        <motion.p variants={fadeIn()}>
          Your healthy <span> life </span> <br /> starts here with us!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
