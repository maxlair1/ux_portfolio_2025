import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setShowTransition(true);
      setCurrentPath(location.pathname);
      // Hide after animation duration (1.7s total from your example)
      const timeout = setTimeout(() => setShowTransition(false), 1700);
      return () => clearTimeout(timeout);
    }
  }, [location, currentPath]);

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.span
          className="absolute inset-0 bg-highlight z-[999]"
          initial={{ width: "100%" }}
          animate={{ width: 0, left: 0 }}
          exit={{ width: 0 }}
          transition={{ duration: 1.5, ease: "anticipate", delay: 0.2 }}
          aria-hidden="true"
          style={{ borderRadius: 4 }}
          key="page-transition"
        />
      )}
    </AnimatePresence>
  );
}
