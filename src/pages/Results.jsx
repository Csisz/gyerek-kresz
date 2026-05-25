import { motion } from "framer-motion";
import ChildNavbar from "../components/ChildNavbar";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { allBadges } from "@/data/badges";
import { Star } from "lucide-react";

export default function Results() {
  const { profile } = useLocalProfile();

  return (
    <div className="min-h-screen bg-background">
      <ChildNavbar title="Eredményeim" />
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-6 shadow-xl text-center mb-6"
        >
          <span className="text-6xl">⭐</span>
          <h2 className="text-3xl font-black mt-2">{profile.stars}</h2>
          <p className="text-lg font-bold text-amber-700">Csillag</p>
          <p className="text-sm text-amber-600 font-semibold mt-1">
            {profile.stars < 10 ? "Csak így tovább!" : profile.stars < 30 ? "Szuper haladás!" : "Igazi KRESZ bajnok vagy!"}
          </p>
        </motion.div>

        {/* Badges */}
        <h3 className="text-xl font-black mb-3">Jelvényeim 🏅</h3>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {allBadges.map((badge, i) => {
            const earned = profile.badges.includes(badge.id);
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl p-4 text-center shadow-md border-2 ${
                  earned ? "bg-white border-yellow-300" : "bg-muted/60 border-transparent opacity-50"
                }`}
              >
                <span className="text-4xl">{badge.emoji}</span>
                <h4 className="font-bold text-sm mt-2">{badge.name}</h4>
                {earned ? (
                  <p className="text-xs text-green-600 font-semibold mt-1">Megszerzve! ✓</p>
                ) : (
                  <p className="text-xs text-muted-foreground mt-1">{badge.requirement}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Quiz history */}
        {profile.quiz_scores.length > 0 && (
          <>
            <h3 className="text-xl font-black mb-3">Kvíz eredmények 📝</h3>
            <div className="space-y-2 mb-6">
              {profile.quiz_scores.slice(-5).reverse().map((qs, i) => (
                <div key={i} className="bg-white rounded-xl p-3 shadow-sm flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold">{qs.difficulty === "easy" ? "Könnyű" : qs.difficulty === "medium" ? "Közepes" : "Verseny"}</span>
                    <p className="text-xs text-muted-foreground">{new Date(qs.date).toLocaleDateString("hu-HU")}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">{qs.score}/{qs.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Competition history */}
        {profile.competition_results.length > 0 && (
          <>
            <h3 className="text-xl font-black mb-3">Verseny eredmények 🏆</h3>
            <div className="space-y-2">
              {profile.competition_results.slice(-5).reverse().map((cr, i) => (
                <div key={i} className="bg-white rounded-xl p-3 shadow-sm flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold">Verseny</span>
                    <p className="text-xs text-muted-foreground">{new Date(cr.date).toLocaleDateString("hu-HU")}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{cr.badge === "arany-jelveny" ? "🥇" : cr.badge === "ezust-jelveny" ? "🥈" : "🥉"}</span>
                    <span className="font-bold text-sm">{cr.total_score}/{cr.max_score}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {profile.stars === 0 && profile.badges.length === 0 && (
          <div className="text-center py-8">
            <span className="text-6xl">🌈</span>
            <p className="text-lg font-bold mt-4">Még nincs eredményed!</p>
            <p className="text-muted-foreground font-semibold">Kezdj el tanulni és gyűjteni a csillagokat! ⭐</p>
          </div>
        )}
      </div>
    </div>
  );
}