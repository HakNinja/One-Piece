import Logo from "./Logo";
import ArrowRight from "./ArrowRight";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
      >
        <motion.div variants={reveal}>
          <Logo />
        </motion.div>
        <div className="flex gap-20px items-center <md:hidden">
          <motion.span variants={reveal} className="cursor-pointer">
            Join Straw Hat Crew?
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
