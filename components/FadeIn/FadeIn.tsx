import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  index?: number;
}

export default function FadeIn({ children, index = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      transition={{ duration: 1, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
