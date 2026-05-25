import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChildNavbar from "../components/ChildNavbar";
import SpeakButton from "../components/SpeakButton";
import SuccessAnimation from "../components/SuccessAnimation";
import KreszSignPlaceholder from "../components/KreszSignPlaceholder";
import { lessons, lessonCategories } from "@/data/lessons";
import { getSignById } from "@/data/kreszSigns";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

function CarTrafficLight({ lights }) {
  const isOn = (color) => lights.includes(color);
  return (
    <div className="w-16 rounded-2xl bg-slate-800 p-2 shadow-lg flex flex-col gap-2">
      <div className={`h-10 w-10 rounded-full ${isOn("red") ? "bg-red-500 shadow-red-300 shadow-lg" : "bg-slate-600"}`} />
      <div className={`h-10 w-10 rounded-full ${isOn("yellow") ? "bg-yellow-300 shadow-yellow-200 shadow-lg" : "bg-slate-600"}`} />
      <div className={`h-10 w-10 rounded-full ${isOn("green") ? "bg-green-500 shadow-green-300 shadow-lg" : "bg-slate-600"}`} />
    </div>
  );
}

function PedestrianLight({ state }) {
  const isRed = state === "red";
  const isGreen = state === "green" || state === "flashing-green";

  return (
    <div className="w-16 rounded-2xl bg-slate-800 p-2 shadow-lg flex flex-col gap-2">
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-2xl ${isRed ? "bg-red-500" : "bg-slate-600 text-slate-400"}`}>
        🚶
      </div>
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-2xl ${isGreen ? "bg-green-500 text-white" : "bg-slate-600 text-slate-400"} ${state === "flashing-green" ? "animate-pulse" : ""}`}>
        🚶
      </div>
    </div>
  );
}

function TrafficLightSequence({ lesson }) {
  if (!lesson?.sequence) return null;

  return (
    <div className="mt-4 grid gap-3">
      {lesson.sequence.map((step, index) => (
        <div key={step.id} className="flex items-center gap-3 rounded-2xl bg-primary/5 p-3 text-left">
          <div className="flex-shrink-0">
            {lesson.trafficLightType === "car" ? (
              <CarTrafficLight lights={step.lights || []} />
            ) : (
              <PedestrianLight state={step.state} />
            )}
          </div>
          <div>
            <p className="text-sm font-black text-primary">{index + 1}. {step.label}</p>
            <p className="text-base font-bold leading-tight">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Learn() {
  const { profile, completeLesson, addStars, addBadge } = useLocalProfile();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAdult, setShowAdult] = useState(false);

  const filteredLessons = selectedCategory
    ? lessons.filter(l => l.category === selectedCategory)
    : lessons;

  const currentLesson = filteredLessons[currentIndex];
  const currentSign = currentLesson?.signId ? getSignById(currentLesson.signId) : null;

  const handleComplete = () => {
    if (!currentLesson) return;
    completeLesson(currentLesson.id);
    addStars(1);
    setShowSuccess(true);
    // Check category completion for badges
    const catLessons = lessons.filter(l => l.category === currentLesson.category);
    const completedAll = catLessons.every(l =>
      profile.completed_lessons.includes(l.id) || l.id === currentLesson.id
    );
    if (completedAll) {
      if (currentLesson.category === "jelzolampak") addBadge("lampa-mester");
      if (currentLesson.category === "gyalogos") addBadge("zebra-bajnok");
      if (currentLesson.category === "tablak") addBadge("tabla-figyelo");
    }
  };

  const goNext = () => {
    if (currentIndex < filteredLessons.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAdult(false);
    }
  };
  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAdult(false);
    }
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-background">
        <ChildNavbar title="Tanuljunk!" />
        <div className="max-w-lg mx-auto px-4 py-6">
          <p className="text-center text-lg font-bold mb-4">Válassz témát! 📚</p>
          <div className="grid gap-3">
            {lessonCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setSelectedCategory(cat.id); setCurrentIndex(0); }}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20 active:scale-95 text-left flex items-center gap-4"
              >
                <span className="text-4xl">{cat.emoji}</span>
                <div>
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {lessons.filter(l => l.category === cat.id).length} kártya
                  </p>
                </div>
                <div className="ml-auto text-sm text-primary font-bold">
                  {lessons.filter(l => l.category === cat.id && profile.completed_lessons.includes(l.id)).length}
                  /{lessons.filter(l => l.category === cat.id).length} ✓
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title="Tanuljunk!" />
      <div className="max-w-lg mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => setSelectedCategory(null)}
          className="mb-4 font-bold"
        >
          <ChevronLeft className="h-5 w-5 mr-1" /> Vissza a témákhoz
        </Button>

        {/* Progress */}
        <div className="flex gap-1 mb-4">
          {filteredLessons.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-colors ${i === currentIndex ? "bg-primary" : i < currentIndex ? "bg-primary/40" : "bg-muted"}`}
            />
          ))}
        </div>

        {currentLesson && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLesson.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl p-6 shadow-xl border-2 border-primary/10"
            >
              <div className="text-center">
                {currentSign ? (
                  <div className="flex justify-center">
                    <KreszSignPlaceholder sign={currentSign} size="xlarge" showName={false} />
                  </div>
                ) : currentLesson.sequence ? (
                  <TrafficLightSequence lesson={currentLesson} />
                ) : (
                  <motion.span
                    className="text-8xl inline-block"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {currentLesson.emoji}
                  </motion.span>
                )}
                <h2 className="text-2xl font-black mt-4">{currentLesson.title}</h2>
                <p className="text-lg font-semibold text-muted-foreground mt-2">
                  {currentLesson.text}
                </p>
                {currentLesson.adultExplanation && (
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => setShowAdult(!showAdult)}
                      className="text-xs font-bold text-muted-foreground underline"
                    >
                      {showAdult ? "Gyerek nézet" : "Szülői/óvónői magyarázat"}
                    </button>
                    {showAdult && (
                      <div className="mt-2 rounded-2xl bg-muted/40 p-3 text-left">
                        <p className="text-sm font-medium text-muted-foreground">
                          {currentLesson.adultExplanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                <div className="mt-6 flex flex-col gap-3 items-center">
                  <SpeakButton text={currentLesson.speech} />
                  {!profile.completed_lessons.includes(currentLesson.id) ? (
                    <Button
                      onClick={handleComplete}
                      className="h-14 px-8 text-lg font-bold rounded-2xl gap-2"
                    >
                      <Check className="h-6 w-6" /> Értem!
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Check className="h-5 w-5" /> Teljesítve! ⭐
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="rounded-full h-14 w-14"
          >
            <ChevronLeft className="h-7 w-7" />
          </Button>
          <span className="font-bold self-center text-muted-foreground">
            {currentIndex + 1} / {filteredLessons.length}
          </span>
          <Button
            variant="outline"
            onClick={goNext}
            disabled={currentIndex >= filteredLessons.length - 1}
            className="rounded-full h-14 w-14"
          >
            <ChevronRight className="h-7 w-7" />
          </Button>
        </div>
      </div>
      <SuccessAnimation show={showSuccess} onComplete={() => setShowSuccess(false)} />
    </div>
  );
}
