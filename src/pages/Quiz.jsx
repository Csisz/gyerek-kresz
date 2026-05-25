import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChildNavbar from "../components/ChildNavbar";
import SpeakButton from "../components/SpeakButton";
import SuccessAnimation from "../components/SuccessAnimation";
import KreszSignPlaceholder from "../components/KreszSignPlaceholder";
import { questions } from "@/data/questions";
import { getSignById } from "@/data/kreszSigns";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { Button } from "@/components/ui/button";
import { speak } from "@/utils/speech";
import { Timer, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const difficulties = [
  { id: "easy", name: "Könnyű", emoji: "🌟", desc: "2 válasz, sok kép", count: 6 },
  { id: "medium", name: "Közepes", emoji: "⭐", desc: "3 válasz", count: 8 },
  { id: "hard", name: "Verseny", emoji: "🏆", desc: "Időre megy!", count: 10 }
];

export default function Quiz() {
  const { addStars, addQuizScore, addBadge } = useLocalProfile();
  const [difficulty, setDifficulty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const quizQuestions = useMemo(() => {
    if (!difficulty) return [];
    const count = difficulties.find(d => d.id === difficulty)?.count || 8;
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, count);
    if (difficulty === "easy") {
      return shuffled.map(q => ({
        ...q,
        options: q.options.filter(o => o.correct).concat(
          q.options.filter(o => !o.correct).slice(0, 1)
        ).sort(() => Math.random() - 0.5)
      }));
    }
    return shuffled;
  }, [difficulty]);

  useEffect(() => {
    if (difficulty === "hard" && !showResult && currentIndex < quizQuestions.length) {
      timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
      return () => clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [difficulty, currentIndex, showResult, quizQuestions.length]);

  const current = quizQuestions[currentIndex];
  const currentSign = current?.signId ? getSignById(current.signId) : null;
  const isFinished = currentIndex >= quizQuestions.length && quizQuestions.length > 0;

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (current.options[idx].correct) {
      setScore(s => s + 1);
      addStars(1);
      setShowSuccess(true);
      speak("Ügyes!");
    } else {
      speak(current.wrongExplanation);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    setCurrentIndex(i => i + 1);
  };

  const finishQuiz = () => {
    addQuizScore({ score, total: quizQuestions.length, difficulty, category: "mixed" });
    if (score >= quizQuestions.length * 0.9) addBadge("kresz-kisbajnok");
  };

  useEffect(() => {
    if (isFinished) finishQuiz();
  }, [isFinished]);

  if (!difficulty) {
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="KRESZ Kvíz" />
        <div className="max-w-lg mx-auto px-4 py-6">
          <p className="text-center text-lg font-bold mb-4">Válassz nehézséget! 🎯</p>
          <div className="grid gap-3">
            {difficulties.map((d, i) => (
              <motion.button
                key={d.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { setDifficulty(d.id); setCurrentIndex(0); setScore(0); setTimer(0); }}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20 active:scale-95 text-left flex items-center gap-4"
              >
                <span className="text-5xl">{d.emoji}</span>
                <div>
                  <h3 className="text-xl font-black">{d.name}</h3>
                  <p className="text-sm text-muted-foreground font-semibold">{d.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="KRESZ Kvíz" />
        <div className="max-w-lg mx-auto px-4 py-8 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-8 shadow-xl">
            <span className="text-7xl">{score >= quizQuestions.length * 0.7 ? "🎉" : "💪"}</span>
            <h2 className="text-2xl font-black mt-4">
              {score >= quizQuestions.length * 0.9 ? "Fantasztikus!" : score >= quizQuestions.length * 0.7 ? "Nagyon ügyes!" : "Szép próbálkozás!"}
            </h2>
            <p className="text-lg font-bold text-muted-foreground mt-2">
              {score} / {quizQuestions.length} helyes válasz
            </p>
            {difficulty === "hard" && (
              <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center gap-1">
                <Timer className="h-4 w-4" /> {timer} másodperc
              </p>
            )}
            <div className="flex gap-1 justify-center mt-4">
              {Array.from({ length: score }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="flex gap-3 mt-6 justify-center">
              <Button onClick={() => { setDifficulty(null); setCurrentIndex(0); setScore(0); }} variant="outline" className="h-12 rounded-xl font-bold">
                Nehézség ↩️
              </Button>
              <Button onClick={() => { setCurrentIndex(0); setScore(0); setSelected(null); setShowResult(false); setTimer(0); }} className="h-12 rounded-xl font-bold">
                Újra! 🔄
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title="KRESZ Kvíz" />
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-sm">{currentIndex + 1}/{quizQuestions.length}</span>
          <span className="font-bold text-sm flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {score}
          </span>
          {difficulty === "hard" && (
            <span className="font-bold text-sm flex items-center gap-1">
              <Timer className="h-4 w-4" /> {timer}s
            </span>
          )}
        </div>

        <div className="flex gap-1 mb-4">
          {quizQuestions.map((_, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${i === currentIndex ? "bg-primary" : i < currentIndex ? "bg-primary/40" : "bg-muted"}`} />
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
              {currentSign ? (
                <div className="flex justify-center mb-3">
                  <KreszSignPlaceholder
                    sign={currentSign}
                    size="large"
                    showName={false}
                  />
                </div>
              ) : (
                <span className="text-6xl">{current.emoji}</span>
              )}
              <h2 className="text-xl font-black mt-3">{current.text}</h2>
              <SpeakButton text={current.speech} size="sm" />
            </div>

            <div className="grid gap-3 mt-4">
              {current.options.map((opt, idx) => {
                let cls = "border-2 border-transparent";
                if (showResult && idx === selected) {
                  cls = opt.correct ? "border-2 border-green-500 bg-green-50" : "border-2 border-red-400 bg-red-50";
                } else if (showResult && opt.correct) {
                  cls = "border-2 border-green-400 bg-green-50/50";
                }
                return (
                  <motion.button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={showResult}
                    whileTap={{ scale: 0.95 }}
                    className={`${cls} bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4 text-left active:scale-95`}
                  >
                    {!currentSign && opt.emoji && <span className="text-4xl">{opt.emoji}</span>}
                    <span className="text-lg font-bold">{opt.text}</span>
                  </motion.button>
                );
              })}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-2xl ${selected !== null && current.options[selected]?.correct ? "bg-green-100" : "bg-amber-100"}`}
              >
                <p className="font-bold text-sm">
                  {selected !== null && current.options[selected]?.correct
                    ? "🌟 " + current.explanation
                    : "💛 " + current.wrongExplanation}
                </p>
                <Button onClick={handleNext} className="mt-3 w-full h-12 text-lg font-bold rounded-xl">
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
