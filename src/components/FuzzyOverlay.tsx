import React from "react";
import { motion } from "framer-motion";

const FuzzyOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 max-w-[100vw] max-h-[100vh]">
      <motion.div
        initial={{ transform: "translateX(-10%) translateY(-10%)" }}
        animate={{
          transform: "translateX(10%) translateY(10%)",
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          repeatType: "mirror",
        }}
        style={{
          backgroundImage: 'url("/black-noise.png")',
          willChange: "transform", // ✅ makes animation smoother and GPU-accelerated
        }}
        className="absolute z-[999] pointer-events-none fixed -inset-[100%] opacity-[10%]"
      />
    </div>
  );
};

export default FuzzyOverlay;