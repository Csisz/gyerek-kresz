import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChildNavbar from "../components/ChildNavbar";
import SpeakButton from "../components/SpeakButton";
import SuccessAnimation from "../components/SuccessAnimation";
import { questions } from "@/data/questions";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { Button } from "@/components/ui/button";
import { speak } from "@/utils/speech";

export default function Practice() {
  const { addStars } = useLocalProfile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [score, setScore] = useState(0);

  const shuffled = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 8);
  }, []);

  const current = shuffled[currentIndex];
  const isCorrect = selected !== null && current?.options[selected]?.correct;
  const isFinished = currentIndex >= shuffled.length;

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    const correct = current.options[idx].correct;
    if (correct) {
      setScore(s => s + 1);
      addStars(1);
      speak("Ügyes! " + current.explanation);
      setShowSuccess(true);
    } else {
      speak(current.wrongExplanation);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    setCurrentIndex(i => i + 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Gyakoroljunk!" />
        <div className="max-w-lg mx-auto px-4 py-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <span className="text-7xl">🎉</span>
            <h2 className="text-2xl font-black mt-4">Szuper munka!</h2>
            <p className="text-lg font-bold text-muted-foreground mt-2">
              {score} / {shuffled.length} helyes válasz
            </p>
            <div className="flex gap-1 justify-center mt-4">
              {Array.from({ length: score }).map((_, i) => (
                <span key={i} className="text-3xl">⭐</span>
              ))}
            </div>
            <Button onClick={handleRestart} className="mt-6 h-14 px-8 text-lg font-bold rounded-2xl">
              Újra játszom! 🔄
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title="Gyakoroljunk!" />
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Progress */}
        <div className="flex gap-1 mb-4">
          {shuffled.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full ${i === currentIndex ? "bg-primary" : i < currentIndex ? "bg-primary/40" : "bg-muted"}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl p-6 shadow-xl border-2 border-primary/10"
          >
            <div className="text-center mb-4">
              <span className="text-6xl">{current.emoji}</span>
              <h2 className="text-xl font-black mt-3">{current.text}</h2>
              <SpeakButton text={current.speech} size="sm" />
            </div>

            <div className="grid gap-3 mt-4">
              {current.options.map((opt, idx) => {
                let borderClass = "border-2 border-transparent";
                if (showResult && idx === selected) {
                  borderClass = opt.correct
                    ? "border-2 border-green-500 bg-green-50"
                    : "border-2 border-red-400 bg-red-50";
                } else if (showResult && opt.correct) {
                  borderClass = "border-2 border-green-400 bg-green-50/50";
                }

                return (
                  <motion.button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={showResult}
                    whileTap={{ scale: 0.95 }}
                    className={`${borderClass} bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4 text-left active:scale-95`}
                  >
                    <span className="text-4xl">{opt.emoji}</span>
                    <span className="text-lg font-bold">{opt.text}</span>
                  </motion.button>
                );
              })}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-2xl ${isCorrect ? "bg-green-100" : "bg-amber-100"}`}
              >
                <p className="font-bold text-sm">
                  {isCorrect ? "🌟 " + current.explanation : "💛 " + current.wrongExplanation}
                </p>
                <Button
                  onClick={handleNext}
                  className="mt-3 w-full h-12 text-lg font-bold rounded-xl"
                >
                  Következő ➡️
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <SuccessAnimation show={showSuccess} onComplete={() => setShowSuccess(false)} />
    </div>
  );
}