"use client"

import { AlertTriangle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { DATA_LAST_UPDATED } from "@/lib/media-data"

export function FooterSection() {
  const { t, lang } = useLanguage()

  return (
    <footer className="mt-16 pt-8 border-t border-border text-center space-y-2 bg-background">
      <p className="text-sm text-muted-foreground font-medium">
        {t.footerText}
      </p>
      <p className="text-xs text-muted-foreground">
        {t.footerDisclaimer}
      </p>
      <p className="text-xs text-muted-foreground pt-2">
        {lang === "sl" 
          ? `Podatki nazadnje posodobljeni: ${DATA_LAST_UPDATED}` 
          : `Data last updated: ${DATA_LAST_UPDATED}`}
      </p>

      {/* Disclaimer */}
      <div className="mt-6 pt-4 border-t border-border/50 flex items-start gap-2 p-3 rounded-lg bg-amber-50/50 dark:bg-amber-950/20">
        <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 dark:text-amber-200">
          {lang === "sl"
            ? "To je izobraževalno orodje. Ocene so informativne narave in ne predstavljajo absolutne resnice. Spodbujamo kritično presojo."
            : "This is an educational tool. Ratings are informational and do not represent absolute truth. We encourage critical thinking."}
        </p>
      </div>
    </footer>
  )
}
