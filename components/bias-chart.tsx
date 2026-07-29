"use client"

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea, Cell, Label } from "recharts"
import type { MediaOutlet } from "@/lib/media-data"
import { getBiasLabel, getReliabilityLabel } from "@/lib/media-data"
import { useLanguage } from "@/lib/language-context"

interface BiasChartProps {
  data: MediaOutlet[]
  onSelectMedia: (media: MediaOutlet) => void
  minReliability?: number
}

function getPointColor(bias: number): string {
  if (bias <= -0.5) return "#2563eb" // blue-600
  if (bias < -0.15) return "#60a5fa" // blue-400
  if (bias <= 0.15) return "#64748b" // slate-500
  if (bias < 0.5) return "#f87171" // red-400
  return "#dc2626" // red-600
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{
    payload: MediaOutlet
  }>
  lang: "sl" | "en"
  t: {
    bias: string
    reliability: string
    clickForDetails: string
  }
}



function CustomTooltip({ active, payload, lang, t }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg max-w-xs">
        <p className="font-semibold text-foreground">{data.name}</p>
        <p className="text-xs text-muted-foreground mt-1 leading-snug">
          {data.description[lang]}
        </p>
        <div className="border-t border-border my-2 pt-2 space-y-1">
          <p className="text-sm text-muted-foreground">
            {t.bias}: <span className="font-medium text-foreground">{getBiasLabel(data.bias, lang)}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            {t.reliability}: <span className="font-medium text-foreground">{Math.round(data.reliability * 100)}%</span>
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{data.owner}</span>
          </p>
        </div>
        <p className="mt-2 text-xs text-muted-foreground italic">{t.clickForDetails}</p>
      </div>
    )
  }
  return null
}

export function BiasChart({ data, onSelectMedia, minReliability = 0 }: BiasChartProps) {
  const { lang, t } = useLanguage()
  
  // Create a Map of all media by ID for consistent rendering
  // This ensures points maintain their position even when data is filtered
  const allMediaMap = new Map(data.map(m => [m.id, m]))
  
  const centerLabel = lang === "sl" ? "Politična sredina" : "Political center"
  const reliabilityThreshold = lang === "sl" ? "Prag zanesljivosti (60%)" : "Reliability threshold (60%)"
  const excludedLabel = lang === "sl" ? "Izključeno" : "Excluded"
  
  return (
    <div className="relative w-full">
      {/* Chart container with proper aspect ratio */}
      <div className="h-[500px] w-full animate-in fade-in duration-300">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 30, right: 30, bottom: 40, left: 50 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              type="number"
              dataKey="bias"
              domain={[-1, 1]}
              tickFormatter={(value) => {
                if (value === -1) return lang === "sl" ? "Levo" : "Left"
                if (value === 0) return lang === "sl" ? "Sredina" : "Center"
                if (value === 1) return lang === "sl" ? "Desno" : "Right"
                return ""
              }}
              ticks={[-1, -0.5, 0, 0.5, 1]}
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 11 }}
            >
              <Label 
                value={t.politicalLean} 
                position="bottom" 
                offset={20}
                className="fill-muted-foreground text-xs font-medium"
              />
            </XAxis>
            <YAxis
              type="number"
              dataKey="reliability"
              domain={[0, 1]}
              tickFormatter={(value) => `${Math.round(value * 100)}%`}
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 11 }}
              width={45}
            >
              <Label 
                value={t.factualReliability} 
                angle={-90} 
                position="insideLeft" 
                offset={-5}
                className="fill-muted-foreground text-xs font-medium"
                style={{ textAnchor: 'middle' }}
              />
            </YAxis>
            {/* Excluded area visualization - shows filtered out region */}
            {minReliability > 0 && (
              <ReferenceArea
                x1={-1}
                x2={1}
                y1={0}
                y2={minReliability}
                fill="#ef4444"
                fillOpacity={0.15}
                stroke="#ef4444"
                strokeOpacity={0.3}
                strokeDasharray="4 2"
              >
                <Label 
                  value={`${excludedLabel} (<${Math.round(minReliability * 100)}%)`}
                  position="insideBottom"
                  offset={8}
                  className="fill-red-500/70 text-[10px] font-medium"
                />
              </ReferenceArea>
            )}
            {/* Vertical reference line at center (x=0) with label */}
            <ReferenceLine 
              x={0} 
              stroke="#94a3b8" 
              strokeDasharray="8 4"
              strokeWidth={1.5}
            >
              <Label 
                value={centerLabel}
                position="top"
                offset={8}
                className="fill-muted-foreground text-[10px]"
              />
            </ReferenceLine>
            {/* Horizontal reference line at 60% reliability with label */}
            <ReferenceLine 
              y={0.6} 
              stroke="#94a3b8" 
              strokeDasharray="8 4"
              strokeWidth={1.5}
            >
              <Label 
                value={reliabilityThreshold}
                position="right"
                offset={5}
                className="fill-muted-foreground text-[10px]"
              />
            </ReferenceLine>
            <Tooltip 
              content={
                <CustomTooltip 
                  lang={lang} 
                  t={{ 
                    bias: t.bias, 
                    reliability: t.reliability, 
                    clickForDetails: t.clickForDetails 
                  }} 
                />
              } 
            />
            <Scatter
              data={data}
              cursor="pointer"
              isAnimationActive={false}
              onClick={(point) => onSelectMedia(point as unknown as MediaOutlet)}
            >
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.id}`}
                  fill={getPointColor(entry.bias)}
                  r={8}
                  opacity={0.85}
                  style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend - inside a nice card */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 p-4 rounded-lg bg-muted/50 text-sm mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-blue-600 shadow-sm" />
          <span className="text-muted-foreground text-xs font-medium">{t.left}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-blue-400 shadow-sm" />
          <span className="text-muted-foreground text-xs font-medium">{t.centerLeft}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-slate-500 shadow-sm" />
          <span className="text-muted-foreground text-xs font-medium">{t.center}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-red-400 shadow-sm" />
          <span className="text-muted-foreground text-xs font-medium">{t.centerRight}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-red-600 shadow-sm" />
          <span className="text-muted-foreground text-xs font-medium">{t.right}</span>
        </div>
      </div>
      

    </div>
  )
}
