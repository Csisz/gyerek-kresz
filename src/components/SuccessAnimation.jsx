import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function SuccessAnimation({ show, onComplete }) {
  useEffect(() => {
    if (show && onComplete) {
      const timer = setTimeout(onComplete, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-8xl">⭐</span>
            <motion.p
              className="text-3xl font-black text-white drop-shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: 3, duration: 0.3 }}
            >
              Ügyes vagy!
            </motion.p>
            <div className="flex gap-2">
              {["🎉", "👏", "🌟", "💫", "🎊"].map((e, i) => (
                <motion.span
                  key={i}
                  className="text-4xl"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: [-20, 0], opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}