"use client"

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
    </footer>
  )
}
