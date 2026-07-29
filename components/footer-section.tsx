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
      <div className="mt-8 pt-6 border-t border-border/50 space-y-3 px-4 py-4 rounded-lg bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-950/15 dark:to-orange-950/15 border border-amber-200/30 dark:border-amber-800/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
              {lang === "sl" ? "Izobraževalno orodje" : "Educational Tool"}
            </p>
            <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
              {lang === "sl"
                ? "To je izobraževalno orodje za analizo medijev. Ocene so informativne narave in ne predstavljajo absolutne resnice. Spodbujamo kritično presojo. Orodje lahko vsebuje napake — če naletite na napako ali imate predloge, nas kontaktirajte na "
                : "This is an educational tool for analyzing media outlets. Ratings are informational and do not represent absolute truth. We encourage critical thinking. The tool may contain errors — if you find an error or have suggestions, contact us at "}
              <a href="mailto:miha@gmail.com" className="font-semibold text-amber-700 dark:text-amber-300 hover:underline">
                miha@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
