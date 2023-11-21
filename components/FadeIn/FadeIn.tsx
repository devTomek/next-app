"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInProps {
  children: ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef);

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      animate={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
