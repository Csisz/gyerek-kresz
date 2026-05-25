import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChildNavbar({ title }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-2 border-primary/10 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {!isHome && (
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
          )}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-2xl">🚦</span>
            <h1 className="text-lg font-black text-foreground leading-tight">
              {title || "KRESZ Kaland"}
            </h1>
          </motion.div>
        </div>
        {!isHome && (
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}