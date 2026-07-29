"use client"

import { ReactNode } from "react"

interface FormattedTextProps {
  children: ReactNode
  className?: string
}

export function FormattedText({ children, className = "" }: FormattedTextProps) {
  return (
    <div className={`space-y-3 text-sm text-muted-foreground leading-relaxed ${className}`}>
      {children}
    </div>
  )
}

interface BulletListProps {
  items: { label: string; description?: string }[]
  className?: string
}

export function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <ul className={`space-y-2 ml-4 ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="text-primary font-bold flex-shrink-0">•</span>
          <div className="flex-1">
            <span className="font-medium text-foreground">{item.label}</span>
            {item.description && (
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

interface BiasScaleProps {
  compact?: boolean
}

export function BiasScaleVisual({ compact = false }: BiasScaleProps) {
  const scale = [
    { value: -1, label: "Ekstremno levo", color: "from-red-600" },
    { value: -0.5, label: "Levo", color: "from-orange-500" },
    { value: 0, label: "Nevtralno", color: "via-blue-500" },
    { value: 0.5, label: "Desno", color: "to-green-500" },
    { value: 1, label: "Ekstremno desno", color: "to-purple-600" },
  ]

  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      <div className="relative h-8 rounded-lg overflow-hidden border border-border bg-gradient-to-r from-red-600 via-blue-500 to-purple-600 opacity-75" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>-1 (Levo)</span>
        <span>0 (Nevtralno)</span>
        <span>+1 (Desno)</span>
      </div>
    </div>
  )
}

interface ReliabilityScaleProps {
  compact?: boolean
}

export function ReliabilityScaleVisual({ compact = false }: ReliabilityScaleProps) {
  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      <div className="space-y-1.5">
        <div className="flex gap-2">
          <div className="text-xs font-medium text-foreground">Nizka</div>
          <div className="flex-1 flex gap-1">
            {[0.1, 0.3, 0.5].map((val) => (
              <div key={val} className="flex-1 h-4 bg-red-500/60 rounded" />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-xs font-medium text-foreground">Srednja</div>
          <div className="flex-1 flex gap-1">
            {[0.6, 0.7, 0.8].map((val) => (
              <div key={val} className="flex-1 h-4 bg-yellow-500/60 rounded" />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-xs font-medium text-foreground">Visoka</div>
          <div className="flex-1 flex gap-1">
            {[0.85, 0.9, 0.95].map((val) => (
              <div key={val} className="flex-1 h-4 bg-green-500/60 rounded" />
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        Ocena od 0 (najnižja) do 1 (najvišja)
      </div>
    </div>
  )
}
