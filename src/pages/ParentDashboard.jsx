import { useState } from "react";
import { motion } from "framer-motion";
import ChildNavbar from "../components/ChildNavbar";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { lessons, lessonCategories } from "@/data/lessons";
import { questions, questionCategories } from "@/data/questions";
import { practiceTasks } from "@/data/practiceTasks";
import { allBadges } from "@/data/badges";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Trash2, User, Star, BookOpen, Target, Trophy, BarChart3 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

export default function ParentDashboard() {
  const { profile, updateName, resetProfile } = useLocalProfile();
  const [editName, setEditName] = useState(false);
  const [tempName, setTempName] = useState(profile.name);

  const completedLessonsPct = lessons.length > 0
    ? Math.round((profile.completed_lessons.length / lessons.length) * 100) : 0;

  const practiceCompleted = profile.practice_scores.filter(s => s.completed).length;
  const practiceTotal = practiceTasks.length;
  const practiceScore = profile.practice_scores.reduce((s, p) => s + (p.score || 0), 0);
  const practiceMax = practiceTotal * 2;

  const avgQuizScore = profile.quiz_scores.length > 0
    ? Math.round(profile.quiz_scores.reduce((s, q) => s + (q.score / q.total) * 100, 0) / profile.quiz_scores.length)
    : 0;

  // Strengths and weaknesses based on quiz categories
  const categoryPerformance = questionCategories.map(cat => {
    const catQuestions = questions.filter(q => q.category === cat.id);
    const relatedScores = profile.quiz_scores.filter(s => s.category === cat.id || s.category === "mixed");
    return { ...cat, performance: relatedScores.length > 0 ? "practiced" : "not_started" };
  });

  const competitionBest = profile.competition_results.length > 0
    ? Math.max(...profile.competition_results.map(c => Math.round((c.total_score / c.max_score) * 100)))
    : 0;

  let readinessLevel = "Kezdő";
  let readinessColor = "text-orange-600";
  if (completedLessonsPct > 80 && avgQuizScore > 70 && practiceCompleted > practiceTotal * 0.5) {
    readinessLevel = "Felkészült";
    readinessColor = "text-green-600";
  } else if (completedLessonsPct > 40 || avgQuizScore > 50) {
    readinessLevel = "Haladó";
    readinessColor = "text-blue-600";
  }

  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title="Szülői nézet" />
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-amber-50 rounded-2xl p-3 mb-4 border border-amber-200">
          <p className="text-xs font-bold text-amber-800">
            ⚠️ Az alkalmazás óvodás gyermekek játékos közlekedésbiztonsági felkészítésére készült. Nem hivatalos KRESZ-vizsgaanyag. Használata felnőtt felügyelettel javasolt.
          </p>
        </div>

        {/* Child Info */}
        <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{profile.avatar}</span>
            <div className="flex-1">
              {editName ? (
                <div className="flex gap-2">
                  <Input value={tempName} onChange={e => setTempName(e.target.value)} className="h-9" />
                  <Button size="sm" onClick={() => { updateName(tempName); setEditName(false); }}>Mentés</Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black">{profile.name || "Névtelen"}</h2>
                  <Button variant="ghost" size="sm" onClick={() => setEditName(true)} className="text-xs">✏️</Button>
                </div>
              )}
              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {profile.stars} csillag</span>
                <span className="flex items-center gap-1">🏅 {profile.badges.length} jelvény</span>
              </div>
            </div>
          </div>
        </div>

        {/* Readiness */}
        <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="h-5 w-5" />
            <h3 className="font-bold">Versenyre való felkészültség</h3>
          </div>
          <p className={`text-2xl font-black ${readinessColor}`}>{readinessLevel}</p>
          {readinessLevel !== "Felkészült" && (
            <p className="text-sm text-muted-foreground mt-1">
              {readinessLevel === "Kezdő" ? "Javasolt: tanulókártyák átnézése és kvíz gyakorlás." : "Javasolt: verseny mód kipróbálása és gyakorlati pálya."}
            </p>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <StatCard icon={<BookOpen className="h-5 w-5 text-green-600" />} label="Leckék" value={`${profile.completed_lessons.length}/${lessons.length}`} pct={completedLessonsPct} />
          <StatCard icon={<Target className="h-5 w-5 text-blue-600" />} label="Kvíz átlag" value={avgQuizScore > 0 ? `${avgQuizScore}%` : "–"} pct={avgQuizScore} />
          <StatCard icon={<BarChart3 className="h-5 w-5 text-orange-600" />} label="Gyakorlati" value={`${practiceScore}/${practiceMax}`} pct={practiceMax > 0 ? Math.round(practiceScore / practiceMax * 100) : 0} />
          <StatCard icon={<Trophy className="h-5 w-5 text-purple-600" />} label="Verseny" value={competitionBest > 0 ? `${competitionBest}%` : "–"} pct={competitionBest} />
        </div>

        {/* Badges */}
        <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
          <h3 className="font-bold mb-3">Megszerzett jelvények</h3>
          <div className="flex flex-wrap gap-2">
            {allBadges.map(b => (
              <div key={b.id} className={`px-3 py-1 rounded-full text-sm font-bold ${profile.badges.includes(b.id) ? "bg-yellow-100 text-yellow-800" : "bg-muted text-muted-foreground"}`}>
                {b.emoji} {b.name}
              </div>
            ))}
          </div>
        </div>

        {/* Quiz History */}
        {profile.quiz_scores.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h3 className="font-bold mb-3">Kvíz előzmények</h3>
            <div className="space-y-2">
              {profile.quiz_scores.slice(-10).reverse().map((qs, i) => (
                <div key={i} className="flex justify-between items-center text-sm py-1 border-b last:border-0">
                  <span>{new Date(qs.date).toLocaleDateString("hu-HU")}</span>
                  <span className="text-muted-foreground">{qs.difficulty === "easy" ? "Könnyű" : qs.difficulty === "medium" ? "Közepes" : "Verseny"}</span>
                  <span className="font-bold">{qs.score}/{qs.total} ({Math.round(qs.score / qs.total * 100)}%)</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practice Scores */}
        {profile.practice_scores.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h3 className="font-bold mb-3">Gyakorlati pálya eredmények</h3>
            <div className="space-y-2">
              {practiceTasks.map(task => {
                const result = profile.practice_scores.find(s => s.task_id === task.id);
                return (
                  <div key={task.id} className="flex justify-between items-center text-sm py-1 border-b last:border-0">
                    <span>{task.emoji} {task.title}</span>
                    {result ? (
                      <span className="font-bold">{result.score}/2 {result.completed ? "✅" : "❌"}</span>
                    ) : (
                      <span className="text-muted-foreground">–</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Suggestions */}
        <div className="bg-blue-50 rounded-2xl p-5 mb-4 border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-2">💡 Javasolt gyakorlás</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            {completedLessonsPct < 100 && <li>• Nézd át a még nem teljesített tanulókártyákat</li>}
            {avgQuizScore < 80 && <li>• Gyakorold a kvízt könnyű majd közepes szinten</li>}
            {practiceCompleted < practiceTotal && <li>• Végezd el a hiányzó gyakorlati feladatokat</li>}
            {profile.competition_results.length === 0 && <li>• Próbáld ki a verseny módot</li>}
            {completedLessonsPct === 100 && avgQuizScore >= 80 && <li>• Fantasztikus! Minden rendben, készen áll a versenyre! 🏆</li>}
          </ul>
        </div>

        {/* Reset */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10">
              <Trash2 className="h-4 w-4 mr-2" /> Eredmények törlése
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Biztos törlöd az eredményeket?</AlertDialogTitle>
              <AlertDialogDescription>Ez visszaállítja az összes csillagot, jelvényt és eredményt. Ez a művelet nem vonható vissza.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Mégsem</AlertDialogCancel>
              <AlertDialogAction onClick={resetProfile}>Törlés</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Jogi nyilatkozat */}
        <div className="mt-4 p-4 bg-muted/50 rounded-2xl border border-muted-foreground/10">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            ℹ️ Az alkalmazás óvodás gyermekek játékos közlekedésbiztonsági felkészítésére készült. Nem hivatalos KRESZ-vizsgaanyag. Használata felnőtt felügyelettel javasolt.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, pct }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm font-bold text-muted-foreground">{label}</span>
      </div>
      <p className="text-xl font-black">{value}</p>
      <Progress value={pct} className="mt-2 h-2" />
    </div>
  );
}
