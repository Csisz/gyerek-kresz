import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { speak } from "@/utils/speech";

export default function SpeakButton({ text, size = "default" }) {
  return (
    <Button
      variant="outline"
      size={size}
      onClick={() => speak(text)}
      className="gap-2 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-bold"
    >
      <Volume2 className="h-5 w-5" />
      <span className="text-sm">Meghallgatom</span>
    </Button>
  );
}