"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BarChart2, Info } from "lucide-react"
import { BiasChart } from "@/components/bias-chart"
import { FilterPanel, type FilterState } from "@/components/filter-panel"
import { useLanguage } from "@/lib/language-context"
import type { MediaOutlet } from "@/lib/media-data"

interface ChartSectionProps {
  filteredMedia: MediaOutlet[]
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  onSelectMedia: (media: MediaOutlet) => void
}

export function ChartSection({
  filteredMedia,
  filters,
  onFiltersChange,
  onSelectMedia,
}: ChartSectionProps) {
  const { lang, t } = useLanguage()
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Info Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{lang === "sl" ? "Kako čitati graf" : "How to read the chart"}</DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-3 text-sm">
                <p>{lang === "sl" 
                  ? "Vodoravna os (X): Politična pristranskost od levo (−1) preko sredine (0) do desno (+1)."
                  : "Horizontal axis (X): Political bias from left (−1) through center (0) to right (+1)."}</p>
                <p>{lang === "sl" 
                  ? "Navpična os (Y): Zanesljivost dejstev od 0% (neverodostojno) do 100% (visoko zanesljivo)."
                  : "Vertical axis (Y): Factual reliability from 0% (unreliable) to 100% (highly reliable)."}</p>
                <p>{lang === "sl" 
                  ? "Kliknite na kroglico za več podrobnosti o mediju. Črtkane črte označujejo sredino (X) in prag zanesljivosti (Y=60%)."
                  : "Click a dot for more details about a media outlet. Dashed lines mark the center (X) and reliability threshold (Y=60%)."}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Left Column - Chart */}
      <div className="lg:col-span-3 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg">{t.chartTitle}</CardTitle>
                <button
                  onClick={() => setDialogOpen(true)}
                  className="ml-auto p-1 rounded hover:bg-muted transition-colors"
                  title={lang === "sl" ? "Več informacij" : "More info"}
                  aria-label={lang === "sl" ? "Več informacij o grafu" : "More info about chart"}
                >
                  <Info className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              </div>
            </div>
            <CardDescription className="text-sm">
              {t.chartDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <BiasChart
              data={filteredMedia}
              onSelectMedia={onSelectMedia}
              minReliability={filters.minReliability}
            />
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Filters */}
      <div className="space-y-6">
        <FilterPanel filters={filters} onFiltersChange={onFiltersChange} />
      </div>
    </div>
  )
}
