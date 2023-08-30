import React from "react";
import { motion } from "framer-motion";

interface HoverAnimationPropsI {
  children: React.ReactNode;
  className?:string;
  hoverScale?:number;
  tapScale?:number;
}

const HoverAnimation = (props: HoverAnimationPropsI): React.ReactNode => {
  const { children,className,hoverScale = 1.1,tapScale = 0.9 } = props;
  return (
    <motion.div className={className ?? className}  whileHover={{ scale: hoverScale }} whileTap={{ scale: tapScale }}>
      {children}
    </motion.div>
  );
};

export default HoverAnimation;
