"use client"

import { useLanguage } from "@/lib/language-context"

export function FooterSection() {
  const { t } = useLanguage()

  return (
    <footer className="mt-16 pt-8 border-t border-border text-center space-y-2">
      <p className="text-sm text-muted-foreground font-medium">
        {t.footerText}
      </p>
      <p className="text-xs text-muted-foreground">
        {t.footerDisclaimer}
      </p>
    </footer>
  )
}
