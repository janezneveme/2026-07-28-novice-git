"use client"

import { useLanguage } from "@/lib/language-context"
import { DATA_LAST_UPDATED } from "@/lib/media-data"

export function FooterSection() {
  const { t, lang } = useLanguage()

  return (
    <footer className="mt-16 pt-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-6 text-center">
          {/* Main footer text */}
          <div>
            <p className="text-base font-semibold text-foreground mb-2">
              {t.footerText}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.footerDisclaimer}
            </p>
          </div>

          {/* Last updated and contact */}
          <p className="text-xs text-muted-foreground">
            {lang === "sl" 
              ? `Podatki nazadnje posodobljeni: ${DATA_LAST_UPDATED}`
              : `Data last updated: ${DATA_LAST_UPDATED}`}
            {" • "}
            <a 
              href="mailto:miha@gmail.com" 
              className="text-primary hover:underline font-medium"
            >
              {lang === "sl" ? "Sporočite napako" : "Report error"}
            </a>
          </p>

          {/* Disclaimer inline */}
          <div className="mt-6 pt-4 pb-2">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {lang === "sl"
                ? "To je izobraževalno orodje za analizo medijev. Ocene so informativne narave in ne predstavljajo absolutne resnice. Spodbujamo kritično presojo. Orodje lahko vsebuje napake."
                : "This is an educational tool for analyzing media outlets. Ratings are informational and do not represent absolute truth. We encourage critical thinking. The tool may contain errors."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
