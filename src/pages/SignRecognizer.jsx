import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChildNavbar from "../components/ChildNavbar";
import SpeakButton from "../components/SpeakButton";
import SuccessAnimation from "../components/SuccessAnimation";
import KreszSignPlaceholder from "../components/KreszSignPlaceholder";
import { getOvodaSigns, getSignsByCategory, kreszSigns, signCategories } from "@/data/kreszSigns";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { Button } from "@/components/ui/button";
import { speak } from "@/utils/speech";

const gameModes = [
  { id: "learn", name: "Ismerkedj a táblákkal!", emoji: "📖", desc: "Tanuld meg, mit jelentenek a táblák" },
  { id: "quiz", name: "Melyik tábla ez?", emoji: "❓", desc: "Ismerd fel a táblákat!" },
  { id: "memory", name: "Memóriajáték", emoji: "🧠", desc: "Párosítsd össze a táblákat!" },
  { id: "categories", name: "Tábla kategóriák", emoji: "📋", desc: "Böngéssz kategóriák szerint" }
];

export default function SignRecognizer() {
  const { addStars, addBadge } = useLocalProfile();
  const [mode, setMode] = useState(null);
  const [signIndex, setSignIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAdult, setShowAdult] = useState(false);

  // Memory game state
  const [memoryCards, setMemoryCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [memoryMoves, setMemoryMoves] = useState(0);

  // Csak az óvodásoknak fontos táblák a kvízhez és tanuláshoz
  const learnSigns = getOvodaSigns();

  const quizQuestions = useMemo(() => {
    return [...learnSigns].sort(() => Math.random() - 0.5).map(sign => {
      const wrong = learnSigns.filter(s => s.id !== sign.id).sort(() => Math.random() - 0.5).slice(0, 2);
      return {
        sign,
        options: [sign, ...wrong].sort(() => Math.random() - 0.5)
      };
    });
  }, [mode]);

  const initMemory = () => {
    const subset = [...learnSigns].sort(() => Math.random() - 0.5).slice(0, 4);
    const cards = [
      ...subset.map(s => ({ id: s.id + "-img", signId: s.id, sign: s, type: "image" })),
      ...subset.map(s => ({ id: s.id + "-n", signId: s.id, display: s.name, type: "name" }))
    ].sort(() => Math.random() - 0.5);
    setMemoryCards(cards);
    setFlipped([]);
    setMatched([]);
    setMemoryMoves(0);
  };

  const handleMemoryFlip = (idx) => {
    if (flipped.length >= 2 || flipped.includes(idx) || matched.includes(memoryCards[idx].signId)) return;
    const newFlipped = [...flipped, idx];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMemoryMoves(m => m + 1);
      const [a, b] = newFlipped;
      if (memoryCards[a].signId === memoryCards[b].signId) {
        setMatched(prev => [...prev, memoryCards[a].signId]);
        addStars(1);
        setFlipped([]);
        if (matched.length + 1 >= memoryCards.length / 2) {
          addBadge("tabla-figyelo");
        }
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  // ── LEARN MODE ────────────────────────────────────────────────────────
  if (mode === "learn") {
    const sign = learnSigns[signIndex];
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Táblafelismerő" />
        <div className="max-w-lg mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => setMode(null)} className="mb-4 font-bold">← Vissza</Button>
          <div className="flex gap-1 mb-4">
            {learnSigns.map((_, i) => (
              <div key={i} className={`h-2 flex-1 rounded-full ${i === signIndex ? "bg-primary" : "bg-muted"}`} />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={sign.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="flex justify-center mb-4">
                <KreszSignPlaceholder sign={sign} size="xlarge" showName={false} />
              </div>
              <h2 className="text-2xl font-black mt-2">{sign.name}</h2>
              <div className="mt-3 bg-primary/5 rounded-2xl p-4">
                <p className="text-base font-semibold">👧 {sign.childExplanation}</p>
              </div>
              <button
                onClick={() => setShowAdult(!showAdult)}
                className="mt-3 text-xs text-muted-foreground underline"
              >
                {showAdult ? "Gyerek nézet" : "Szülői/Óvónői magyarázat"}
              </button>
              {showAdult && (
                <div className="mt-2 bg-muted/40 rounded-2xl p-3 text-left">
                  <p className="text-sm text-muted-foreground font-medium">👨‍🏫 {sign.adultExplanation}</p>
                </div>
              )}
              <div className="mt-4">
                <SpeakButton text={sign.childExplanation} />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => { setSignIndex(Math.max(0, signIndex - 1)); setShowAdult(false); }}
              disabled={signIndex === 0} className="rounded-full h-14 w-14 text-xl">←</Button>
            <span className="font-bold self-center">{signIndex + 1}/{learnSigns.length}</span>
            <Button variant="outline" onClick={() => { setSignIndex(Math.min(learnSigns.length - 1, signIndex + 1)); setShowAdult(false); }}
              disabled={signIndex >= learnSigns.length - 1} className="rounded-full h-14 w-14 text-xl">→</Button>
          </div>
        </div>
      </div>
    );
  }

  // ── CATEGORIES MODE ───────────────────────────────────────────────────
  if (mode === "categories") {
    if (selectedCategory) {
      const catSigns = getSignsByCategory(selectedCategory);
      const catInfo = signCategories.find(c => c.id === selectedCategory);
      return (
        <div className="min-h-screen bg-background">
          <ChildNavbar title={catInfo?.name || "Táblák"} />
          <div className="max-w-lg mx-auto px-4 py-6">
            <Button variant="ghost" onClick={() => setSelectedCategory(null)} className="mb-4 font-bold">← Vissza</Button>
            <div className="grid grid-cols-2 gap-4">
              {catSigns.map(sign => (
                <motion.div
                  key={sign.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-4 shadow-md text-center"
                >
                  <div className="flex justify-center mb-2">
                    <KreszSignPlaceholder sign={sign} size="medium" showName={false} />
                  </div>
                  <p className="text-xs font-bold leading-tight">{sign.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{sign.childExplanation}</p>
                  {sign.importance === "high" && (
                    <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 mt-1 inline-block font-bold">⭐ Fontos</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Tábla kategóriák" />
        <div className="max-w-lg mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => setMode(null)} className="mb-4 font-bold">← Vissza</Button>
          <div className="grid gap-3">
            {signCategories.map((cat, i) => {
              const count = kreszSigns.filter(s => s.category === cat.id).length;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`${cat.color || "bg-white"} rounded-2xl p-5 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20 active:scale-95 text-left flex items-center gap-4`}
                >
                  <span className="text-5xl">{cat.emoji}</span>
                  <div>
                    <h3 className="text-xl font-black">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground font-semibold">{count} tábla</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ MODE ─────────────────────────────────────────────────────────
  if (mode === "quiz") {
    const isFinished = quizIndex >= quizQuestions.length;
    if (isFinished) {
      return (
        <div className="min-h-screen bg-background">
          <ChildNavbar title="Táblafelismerő" />
          <div className="max-w-lg mx-auto px-4 py-8 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-8 shadow-xl">
              <span className="text-7xl">🎉</span>
              <h2 className="text-2xl font-black mt-4">Szuper táblafelismerés!</h2>
              <p className="text-lg font-bold mt-2">{quizScore}/{quizQuestions.length} ⭐</p>
              <Button onClick={() => { setMode(null); setQuizIndex(0); setQuizScore(0); }} className="mt-6 h-12 rounded-xl font-bold">Vissza ↩️</Button>
            </motion.div>
          </div>
        </div>
      );
    }

    const q = quizQuestions[quizIndex];
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Táblafelismerő kvíz" />
        <div className="max-w-lg mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => setMode(null)} className="mb-4 font-bold">← Vissza</Button>
          <div className="flex gap-1 mb-4">
            {quizQuestions.map((_, i) => (
              <div key={i} className={`h-2 flex-1 rounded-full ${i === quizIndex ? "bg-primary" : i < quizIndex ? "bg-primary/40" : "bg-muted"}`} />
            ))}
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <p className="text-sm font-bold text-muted-foreground mb-4">Melyik tábla ez?</p>
            <div className="flex justify-center mb-4">
              <KreszSignPlaceholder sign={q.sign} size="xlarge" showName={false} />
            </div>
            <div className="grid gap-3 mt-4">
              {q.options.map((opt, idx) => {
                let cls = "border-2 border-transparent";
                if (showResult && selected === idx) {
                  cls = opt.id === q.sign.id ? "border-2 border-green-500 bg-green-50" : "border-2 border-red-400 bg-red-50";
                } else if (showResult && opt.id === q.sign.id) {
                  cls = "border-2 border-green-400 bg-green-50/50";
                }
                return (
                  <motion.button key={opt.id} whileTap={{ scale: 0.95 }} disabled={showResult}
                    onClick={() => {
                      setSelected(idx);
                      setShowResult(true);
                      if (opt.id === q.sign.id) {
                        setQuizScore(s => s + 1);
                        addStars(1);
                        setShowSuccess(true);
                        speak("Ügyes! Ez a " + opt.name + " tábla!");
                      } else {
                        speak("Ez a " + q.sign.name + " tábla! " + q.sign.childExplanation);
                      }
                    }}
                    className={`${cls} bg-white rounded-2xl p-4 shadow-md flex items-center gap-3 text-left active:scale-95`}
                  >
                    <div className="flex-shrink-0">
                      <KreszSignPlaceholder sign={opt} size="small" showName={false} />
                    </div>
                    <span className="font-bold text-sm leading-tight">{opt.name}</span>
                  </motion.button>
                );
              })}
            </div>
            {showResult && (
              <div className={`mt-4 p-4 rounded-2xl text-left ${selected !== null && q.options[selected]?.id === q.sign.id ? "bg-green-100" : "bg-amber-100"}`}>
                <p className="font-bold text-sm">
                  {selected !== null && q.options[selected]?.id === q.sign.id
                    ? "🌟 " + q.sign.childExplanation
                    : "💛 Ez a " + q.sign.name + " tábla! " + q.sign.childExplanation}
                </p>
                <Button onClick={() => { setQuizIndex(i => i + 1); setSelected(null); setShowResult(false); }} className="mt-3 w-full h-12 font-bold rounded-xl">
                  Következő ➡️
                </Button>
              </div>
            )}
          </div>
        </div>
        <SuccessAnimation show={showSuccess} onComplete={() => setShowSuccess(false)} />
      </div>
    );
  }

  // ── MEMORY MODE ───────────────────────────────────────────────────────
  if (mode === "memory") {
    if (memoryCards.length === 0) initMemory();
    const allMatched = matched.length >= memoryCards.length / 2 && memoryCards.length > 0;

    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Tábla memória" />
        <div className="max-w-lg mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => { setMode(null); setMemoryCards([]); }} className="mb-4 font-bold">← Vissza</Button>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-sm">Lépések: {memoryMoves}</span>
            <span className="font-bold text-sm">Párok: {matched.length}/{memoryCards.length / 2}</span>
          </div>
          {allMatched ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <span className="text-7xl">🧠</span>
              <h2 className="text-2xl font-black mt-4">Megtaláltad mindet!</h2>
              <p className="font-bold text-muted-foreground">{memoryMoves} lépésből</p>
              <Button onClick={() => { initMemory(); }} className="mt-4 h-12 rounded-xl font-bold">Újra! 🔄</Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-4 gap-2">
              {memoryCards.map((card, idx) => {
                const isFlipped = flipped.includes(idx) || matched.includes(card.signId);
                return (
                  <motion.button
                    key={card.id}
                    onClick={() => handleMemoryFlip(idx)}
                    className={`aspect-square rounded-2xl flex items-center justify-center text-center p-1 shadow-md transition-all ${
                      isFlipped
                        ? (matched.includes(card.signId) ? "bg-green-100 border-2 border-green-400" : "bg-white border-2 border-primary")
                        : "bg-primary/20 hover:bg-primary/30"
                    }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isFlipped ? (
                      card.type === "image" ? (
                        <KreszSignPlaceholder sign={card.sign} size="small" showName={false} />
                      ) : (
                        <span className="text-xs font-bold leading-tight px-1">{card.display}</span>
                      )
                    ) : (
                      <span className="text-2xl">❓</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── MODE SELECTION ────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title="Táblafelismerő" />
      <div className="max-w-lg mx-auto px-4 py-6">
        <p className="text-center text-lg font-bold mb-2">Válassz játékmódot! 🪧</p>
        <p className="text-center text-sm text-muted-foreground mb-6 font-semibold">
          {learnSigns.length} fontos tábla az óvodai KRESZ-versenyhez!
        </p>
        <div className="grid gap-3">
          {gameModes.map((m, i) => (
            <motion.button
              key={m.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                setMode(m.id);
                setSignIndex(0);
                setQuizIndex(0);
                setQuizScore(0);
                setShowAdult(false);
              }}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20 active:scale-95 text-left flex items-center gap-4"
            >
              <span className="text-5xl">{m.emoji}</span>
              <div>
                <h3 className="text-xl font-black">{m.name}</h3>
                <p className="text-sm text-muted-foreground font-semibold">{m.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
