import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuCard from "../components/MenuCard";
import Mascot from "../components/Mascot";
import { useLocalProfile } from "@/hooks/useLocalProfile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const avatars = ["👧", "👦", "👸", "🤴", "🧒", "👼"];

export default function Home() {
  const { profile, updateName, updateAvatar } = useLocalProfile();
  const [showSetup, setShowSetup] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempAvatar, setTempAvatar] = useState("👧");

  useEffect(() => {
    if (!profile.name) setShowSetup(true);
  }, [profile.name]);

  const handleSave = () => {
    if (tempName.trim()) {
      updateName(tempName.trim());
      updateAvatar(tempAvatar);
      setShowSetup(false);
    }
  };

  const menuItems = [
    { to: "/tanulunk", emoji: "📚", title: "Tanuljunk!", subtitle: "Képes tanulókártyák", color: "bg-green-100" },
    { to: "/gyakoroljunk", emoji: "🎮", title: "Gyakoroljunk!", subtitle: "Játékos feladatok", color: "bg-blue-100" },
    { to: "/kviz", emoji: "❓", title: "KRESZ Kvíz", subtitle: "Teszteld a tudásod!", color: "bg-yellow-100" },
    { to: "/verseny", emoji: "🏆", title: "Verseny mód", subtitle: "Óvodai KRESZ-verseny", color: "bg-purple-100" },
    { to: "/gyakorlati-palya", emoji: "🛴", title: "Gyakorlati pálya", subtitle: "Ügyességi feladatok", color: "bg-orange-100" },
    { to: "/tabla-felismero", emoji: "🛑", title: "Táblafelismerő", subtitle: "Ismerd meg a táblákat!", color: "bg-red-100" },
    { to: "/eredmenyeim", emoji: "⭐", title: "Eredményeim", subtitle: "Csillagok és jelvények", color: "bg-amber-100" },
    { to: "/szuloi-nezet", emoji: "👨‍👩‍👧", title: "Szülői nézet", subtitle: "Szülőknek, óvónőknek", color: "bg-slate-100" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-200 via-yellow-100 to-background pt-6 pb-10 px-4">
        <div className="max-w-lg mx-auto text-center">
          <Mascot
            message={profile.name ? `Szia, ${profile.name}! Ma mit gyakoroljunk?` : "Szia! Üdv a KRESZ Kalandban!"}
            size="lg"
          />
          <motion.h1
            className="text-2xl md:text-3xl font-black text-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            KRESZ Kaland
          </motion.h1>
          <p className="text-sm font-bold text-muted-foreground mt-1">Óvodásoknak 🎈</p>
          {profile.name && (
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-3xl">{profile.avatar}</span>
              <span className="font-bold text-foreground">{profile.name}</span>
              <span className="text-sm">⭐ {profile.stars}</span>
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-lg mx-auto px-4 -mt-4 pb-8">
        <div className="grid gap-3">
          {menuItems.map((item, i) => (
            <MenuCard key={item.to} {...item} delay={i * 0.05} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6 px-4">
          ⚠️ Ez az alkalmazás nem hivatalos KRESZ-vizsga. A tartalmakat szülőnek/óvónőnek érdemes ellenőriznie.
        </p>
      </div>

      {/* Setup Dialog */}
      <Dialog open={showSetup} onOpenChange={setShowSetup}>
        <DialogContent className="rounded-3xl max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-black">
              🚦 Üdv a KRESZ Kalandban!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <p className="text-sm font-bold mb-2">Hogy hívnak? 😊</p>
              <Input
                value={tempName}
                onChange={e => setTempName(e.target.value)}
                placeholder="Írd be a neved..."
                className="text-lg rounded-xl h-12"
              />
            </div>
            <div>
              <p className="text-sm font-bold mb-2">Válassz avatart!</p>
              <div className="flex gap-3 flex-wrap justify-center">
                {avatars.map(a => (
                  <button
                    key={a}
                    onClick={() => setTempAvatar(a)}
                    className={`text-4xl p-2 rounded-2xl transition-all ${tempAvatar === a ? "bg-primary/20 scale-110 ring-2 ring-primary" : "hover:bg-muted"}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <Button
              onClick={handleSave}
              disabled={!tempName.trim()}
              className="w-full h-12 text-lg font-bold rounded-xl"
            >
              Kezdjük! 🚀
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}