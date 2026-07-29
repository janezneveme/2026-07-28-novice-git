"use client"

interface ReliabilityScaleProps {
  compact?: boolean
  lang?: "sl" | "en"
}

export function ReliabilityScaleVisual({ compact = false, lang = "sl" }: ReliabilityScaleProps) {
  const labels = lang === "sl"
    ? { veryLow: "Zelo nizka", low: "Nizka", medium: "Srednja", high: "Visoka", scale: "Ocena od 0% do 100%" }
    : { veryLow: "Very Low", low: "Low", medium: "Medium", high: "High", scale: "Score from 0% to 100%" }

  const segments = [
    { label: "0–34%", sublabel: labels.veryLow, color: "bg-red-500/60" },
    { label: "35–54%", sublabel: labels.low, color: "bg-orange-500/60" },
    { label: "55–74%", sublabel: labels.medium, color: "bg-amber-500/60" },
    { label: "75–100%", sublabel: labels.high, color: "bg-emerald-500/60" },
  ]

  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      <div className="grid grid-cols-4 gap-1">
        {segments.map((seg) => (
          <div key={seg.label} className="space-y-1">
            <div className={`h-3 rounded-sm ${seg.color}`} />
            <p className="text-[10px] text-center font-medium text-foreground">{seg.label}</p>
            <p className="text-[10px] text-center text-muted-foreground">{seg.sublabel}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{labels.scale}</p>
    </div>
  )
}
