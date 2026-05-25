import { motion } from "framer-motion";

export default function Mascot({ message, size = "md" }) {
  const sizeClasses = {
    sm: "text-4xl",
    md: "text-6xl",
    lg: "text-8xl"
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <motion.div
        className={sizeClasses[size]}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        🚦
      </motion.div>
      {message && (
        <motion.div
          className="bg-white rounded-2xl px-4 py-2 shadow-md border-2 border-primary/20 max-w-xs text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm font-bold text-foreground">{message}</p>
        </motion.div>
      )}
    </motion.div>
  );
}