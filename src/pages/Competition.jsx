import { useState, useMemo, useEffect } from "react";
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
import { Star, Trophy } from "lucide-react";

const rounds = [
  { id: 1, name: "Képes KRESZ-totó", emoji: "📝", category: null },
  { id: 2, name: "Táblafelismerés", emoji: "🛑", category: "tablak" },
  { id: 3, name: "Biztonságos viselkedés", emoji: "🦺", category: "felszereles" },
  { id: 4, name: "Gyalogos közlekedés", emoji: "🚶", category: "gyalogos" },
  { id: 5, name: "Verseny vége", emoji: "🏆", category: null }
];

export default function Competition() {
  const { addStars, addBadge, addCompetitionResult } = useLocalProfile();
  const [started, setStarted] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [roundScores, setRoundScores] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentMax, setCurrentMax] = useState(0);

  const roundQuestions = useMemo(() => {
    const r = rounds[currentRound];
    if (!r || currentRound >= 4) return [];
    let filtered = r.category ? questions.filter(q => q.category === r.category) : questions;
    if (filtered.length < 3) filtered = questions;
    return [...filtered].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [currentRound]);

  const current = roundQuestions[questionIndex];
  const currentSign = current?.signId ? getSignById(current.signId) : null;
  const isRoundComplete = questionIndex >= roundQuestions.length && roundQuestions.length > 0;
  const isCompetitionOver = currentRound >= 4;

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (current.options[idx].correct) {
      setCurrentScore(s => s + 1);
      addStars(1);
      setShowSuccess(true);
      speak("Ügyes!");
    } else {
      speak(current.wrongExplanation);
    }
    setCurrentMax(m => m + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    setQuestionIndex(i => i + 1);
  };

  const finishRound = () => {
    setRoundScores(prev => [...prev, { round: currentRound + 1, score: currentScore, max: roundQuestions.length }]);
    setCurrentScore(0);
    setCurrentMax(0);
    setQuestionIndex(0);
    setCurrentRound(r => r + 1);
  };

  useEffect(() => {
    if (isCompetitionOver && roundScores.length === 4) {
      const totalScore = roundScores.reduce((s, r) => s + r.score, 0);
      const maxScore = roundScores.reduce((s, r) => s + r.max, 0);
      const pct = maxScore > 0 ? totalScore / maxScore : 0;
      let badge = "bronz-jelveny";
      if (pct >= 0.9) badge = "arany-jelveny";
      else if (pct >= 0.7) badge = "ezust-jelveny";
      addBadge(badge);
      addBadge("kresz-kisbajnok");
      addCompetitionResult({ total_score: totalScore, max_score: maxScore, badge, round_scores: roundScores });
    }
  }, [isCompetitionOver, roundScores]);

  if (!started) {
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Verseny mód" />
        <div className="max-w-lg mx-auto px-4 py-6 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl p-8 shadow-xl">
            <span className="text-7xl">🏆</span>
            <h2 className="text-2xl font-black mt-4">Óvodai KRESZ-verseny</h2>
            <p className="text-muted-foreground font-semibold mt-2">4 forduló vár rád!</p>
            <div className="mt-4 space-y-2 text-left">
              {rounds.slice(0, 4).map(r => (
                <div key={r.id} className="flex items-center gap-3 bg-muted rounded-xl p-3">
                  <span className="text-2xl">{r.emoji}</span>
                  <span className="font-bold">{r.id}. {r.name}</span>
                </div>
              ))}
            </div>
            <Button onClick={() => setStarted(true)} className="mt-6 h-14 px-8 text-lg font-bold rounded-2xl w-full">
              Induljon a verseny! 🚀
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (isCompetitionOver) {
    const totalScore = roundScores.reduce((s, r) => s + r.score, 0);
    const maxScore = roundScores.reduce((s, r) => s + r.max, 0);
    const pct = maxScore > 0 ? totalScore / maxScore : 0;
    const badgeEmoji = pct >= 0.9 ? "🥇" : pct >= 0.7 ? "🥈" : "🥉";
    const badgeLabel = pct >= 0.9 ? "Arany jelvény" : pct >= 0.7 ? "Ezüst jelvény" : "Bronz jelvény";

    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Verseny mód" />
        <div className="max-w-lg mx-auto px-4 py-6 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-8 shadow-xl">
            <motion.span className="text-8xl inline-block" animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              {badgeEmoji}
            </motion.span>
            <h2 className="text-2xl font-black mt-4">{badgeLabel}!</h2>
            <p className="text-lg font-bold text-muted-foreground mt-2">
              {totalScore} / {maxScore} pont
            </p>
            <div className="mt-4 space-y-2">
              {roundScores.map((rs, i) => (
                <div key={i} className="flex justify-between items-center bg-muted rounded-xl p-3">
                  <span className="font-bold text-sm">{rounds[i].emoji} {rounds[i].name}</span>
                  <span className="font-bold text-sm">{rs.score}/{rs.max} ⭐</span>
                </div>
              ))}
            </div>
            <Button onClick={() => { setStarted(false); setCurrentRound(0); setRoundScores([]); setQuestionIndex(0); setCurrentScore(0); }} className="mt-6 h-12 rounded-xl font-bold w-full">
              Új verseny 🔄
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (isRoundComplete) {
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Verseny mód" />
        <div className="max-w-lg mx-auto px-4 py-6 text-center">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-8 shadow-xl">
            <span className="text-6xl">{rounds[currentRound].emoji}</span>
            <h2 className="text-xl font-black mt-4">{rounds[currentRound].name} – kész!</h2>
            <p className="text-lg font-bold mt-2">{currentScore} / {roundQuestions.length} ⭐</p>
            <Button onClick={finishRound} className="mt-6 h-12 px-8 text-lg font-bold rounded-xl">
              Következő forduló ➡️
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title={`${currentRound + 1}. forduló: ${rounds[currentRound].name}`} />
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">
            {rounds[currentRound].emoji} {currentRound + 1}. forduló
          </span>
          <span className="font-bold text-sm flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {currentScore}
          </span>
        </div>

        <div className="flex gap-1 mb-4">
          {roundQuestions.map((_, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${i === questionIndex ? "bg-primary" : i < questionIndex ? "bg-primary/40" : "bg-muted"}`} />
          ))}
        </div>

        {current && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentRound}-${questionIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl p-6 shadow-xl border-2 border-primary/10"
            >
              <div className="text-center mb-4">
                {currentSign ? (
                  <div className="flex justify-center mb-3">
                    <KreszSignPlaceholder sign={currentSign} size="large" showName={false} />
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
                      className={`${cls} bg-white rounded-2xl p-4 shadow-md transition-all flex items-center gap-4 text-left active:scale-95`}
                    >
                      {!currentSign && opt.emoji && <span className="text-4xl">{opt.emoji}</span>}
                      <span className="text-lg font-bold">{opt.text}</span>
                    </motion.button>
                  );
                })}
              </div>
              {showResult && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className={`mt-4 p-4 rounded-2xl ${selected !== null && current.options[selected]?.correct ? "bg-green-100" : "bg-amber-100"}`}
                >
                  <p className="font-bold text-sm">
                    {selected !== null && current.options[selected]?.correct ? "🌟 " + current.explanation : "💛 " + current.wrongExplanation}
                  </p>
                  <Button onClick={handleNext} className="mt-3 w-full h-12 text-lg font-bold rounded-xl">
                    Következő ➡️
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <SuccessAnimation show={showSuccess} onComplete={() => setShowSuccess(false)} />
    </div>
  );
}
