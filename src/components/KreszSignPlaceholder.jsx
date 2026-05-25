import { useEffect, useState } from "react";

const sizeMap = {
  small: { box: "w-16 h-16", icon: "text-xl", note: "text-[10px]", name: "text-xs", max: "max-w-24" },
  medium: { box: "w-24 h-24", icon: "text-2xl", note: "text-[11px]", name: "text-sm", max: "max-w-32" },
  large: { box: "w-36 h-36", icon: "text-4xl", note: "text-xs", name: "text-base", max: "max-w-40" },
  xlarge: { box: "w-48 h-48", icon: "text-5xl", note: "text-sm", name: "text-lg", max: "max-w-56" }
};

const categoryStyles = {
  elsobbsegi: "bg-red-50 border-red-300 text-red-900",
  tilto: "bg-red-50 border-red-300 text-red-900",
  kotelezo: "bg-blue-50 border-blue-300 text-blue-900",
  "veszelyt-jelzo": "bg-yellow-50 border-yellow-300 text-yellow-950",
  tajekoztato: "bg-sky-50 border-sky-300 text-sky-950"
};

const shapeIcon = {
  octagon: "STOP",
  "triangle-down": "▽",
  triangle: "△",
  circle: "○",
  square: "□",
  rectangle: "▭",
  cross: "X"
};

function MissingSignFallback({ sign, size }) {
  const sz = sizeMap[size] || sizeMap.large;
  const colorClass = categoryStyles[sign?.category] || "bg-muted border-muted-foreground/30 text-foreground";

  return (
    <div
      className={`${sz.box} ${colorClass} rounded-2xl border-4 border-dashed shadow-sm flex flex-col items-center justify-center text-center p-2`}
      aria-label={`${sign?.name || "KRESZ tábla"} képe hamarosan`}
    >
      <span className={`${sz.icon} font-black leading-none`}>{shapeIcon[sign?.shape] || "🪧"}</span>
      <span className={`${sz.note} font-black leading-tight mt-2`}>Tábla képe hamarosan</span>
    </div>
  );
}

export default function KreszSignPlaceholder({ sign, size = "large", showName = true }) {
  const [imageFailed, setImageFailed] = useState(false);
  const sz = sizeMap[size] || sizeMap.large;

  useEffect(() => {
    setImageFailed(false);
  }, [sign?.image]);

  if (!sign) return null;

  const hasImage = Boolean(sign.image) && !imageFailed;

  return (
    <div className="flex flex-col items-center gap-2">
      {hasImage ? (
        <div className={`${sz.box} flex items-center justify-center`}>
          <img
            src={sign.image}
            alt={sign.name}
            className="w-full h-full object-contain drop-shadow-sm"
            onError={() => setImageFailed(true)}
          />
        </div>
      ) : (
        <MissingSignFallback sign={sign} size={size} />
      )}
      {showName && (
        <p className={`${sz.name} ${sz.max} font-bold text-center leading-tight`}>{sign.name}</p>
      )}
    </div>
  );
}
