import { useState } from "react";
import { motion } from "framer-motion";
import ChildNavbar from "../components/ChildNavbar";
import SpeakButton from "../components/SpeakButton";
import { practiceTasks } from "@/data/practiceTasks";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronDown, ChevronUp, AlertTriangle, Wrench, Target } from "lucide-react";

export default function PracticeCourse() {
  const { profile, addPracticeScore, addStars, addBadge } = useLocalProfile();
  const [expandedTask, setExpandedTask] = useState(null);
  const [scores, setScores] = useState({});
  const [notes, setNotes] = useState({});

  const handleScoreChange = (taskId, score) => {
    setScores(prev => ({ ...prev, [taskId]: score }));
  };

  const handleSave = (taskId) => {
    const score = scores[taskId] ?? 0;
    addPracticeScore({
      task_id: taskId,
      completed: score > 0,
      score,
      notes: notes[taskId] || ""
    });
    if (score > 0) addStars(score);
    // Badge check
    const allCompleted = practiceTasks.every(t => {
      const saved = profile.practice_scores.find(s => s.task_id === t.id);
      return (saved && saved.score > 0) || (t.id === taskId && score > 0);
    });
    if (allCompleted) addBadge("ugyes-rolleres");
  };

  const getTaskStatus = (taskId) => {
    const existing = profile.practice_scores.find(s => s.task_id === taskId);
    if (existing?.completed) return existing.score;
    return scores[taskId] ?? null;
  };

  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title="Gyakorlati pálya" />
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="bg-amber-50 rounded-2xl p-4 mb-4 border border-amber-200">
          <p className="text-sm font-bold text-amber-800">
            👨‍👩‍👧 Szülő/óvónő: Jelöld be, hogy a gyermek hogyan teljesítette a feladatokat! Adj 0, 1 vagy 2 pontot.
          </p>
        </div>

        <div className="space-y-3">
          {practiceTasks.map((task, i) => {
            const status = getTaskStatus(task.id);
            const isExpanded = expandedTask === task.id;
            const isSaved = profile.practice_scores.some(s => s.task_id === task.id && s.completed);

            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className={`bg-white rounded-2xl shadow-md border-2 overflow-hidden ${isSaved ? "border-green-300" : "border-transparent"}`}
              >
                <button
                  onClick={() => setExpandedTask(isExpanded ? null : task.id)}
                  className="w-full p-4 flex items-center gap-3 text-left"
                >
                  <span className="text-3xl">{task.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm">{task.title}</h3>
                    <p className="text-xs text-muted-foreground truncate">{task.description}</p>
                  </div>
                  {isSaved && <Check className="h-5 w-5 text-green-500 shrink-0" />}
                  {isExpanded ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-4 pb-4 space-y-3"
                  >
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-bold text-blue-700">Hogyan csináld:</span>
                      </div>
                      <p className="text-xs text-blue-800">{task.howTo}</p>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span className="text-xs font-bold text-orange-700">Gyakori hiba:</span>
                      </div>
                      <p className="text-xs text-orange-800">{task.commonMistake}</p>
                    </div>

                    <div className="bg-muted rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Wrench className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs font-bold">Szükséges eszközök:</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {task.equipment.map(e => (
                          <span key={e} className="text-xs bg-white px-2 py-1 rounded-full border">{e}</span>
                        ))}
                      </div>
                    </div>

                    <SpeakButton text={task.howTo} size="sm" />

                    <div>
                      <p className="text-xs font-bold mb-2">Pontszám (0-2):</p>
                      <div className="flex gap-2">
                        {[0, 1, 2].map(s => (
                          <button
                            key={s}
                            onClick={() => handleScoreChange(task.id, s)}
                            className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all ${(scores[task.id] ?? -1) === s
                              ? s === 2 ? "bg-green-500 text-white" : s === 1 ? "bg-yellow-400 text-white" : "bg-red-400 text-white"
                              : "bg-muted hover:bg-muted/80"
                            }`}
                          >
                            {s === 0 ? "0 ❌" : s === 1 ? "1 ⭐" : "2 ⭐⭐"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold mb-1">Megjegyzés:</p>
                      <Textarea
                        value={notes[task.id] || ""}
                        onChange={e => setNotes(prev => ({ ...prev, [task.id]: e.target.value }))}
                        placeholder="Opcionális megjegyzés..."
                        className="text-sm rounded-xl"
                        rows={2}
                      />
                    </div>

                    <Button
                      onClick={() => handleSave(task.id)}
                      disabled={scores[task.id] === undefined}
                      className="w-full h-11 font-bold rounded-xl"
                    >
                      <Check className="h-4 w-4 mr-2" /> Mentés
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-6 bg-white rounded-2xl p-4 shadow-md">
          <h3 className="font-bold mb-2">Összesítés</h3>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-black">
                {profile.practice_scores.filter(s => s.completed).length}
              </p>
              <p className="text-xs text-muted-foreground">Teljesítve</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black">
                {profile.practice_scores.reduce((s, p) => s + (p.score || 0), 0)}
              </p>
              <p className="text-xs text-muted-foreground">Összpont</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black">{practiceTasks.length * 2}</p>
              <p className="text-xs text-muted-foreground">Max pont</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}