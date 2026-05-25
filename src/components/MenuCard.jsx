import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MenuCard({ to, emoji, title, subtitle, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", bounce: 0.4 }}
    >
      <Link to={to}>
        <div className={`${color} rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 border-2 border-white/50 cursor-pointer`}>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{emoji}</span>
            <div>
              <h2 className="text-lg font-black text-foreground leading-tight">{title}</h2>
              {subtitle && (
                <p className="text-sm text-muted-foreground font-semibold mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}