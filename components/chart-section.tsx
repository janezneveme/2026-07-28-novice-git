"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Column - Chart */}
      <div className="lg:col-span-3 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg">{t.chartTitle}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-sm">
              {t.chartDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            {/* Hint Box */}
            <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-3 flex gap-3">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                  {lang === "sl" ? "Kako čitati graf:" : "How to read the chart:"}
                </p>
                <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
                  {lang === "sl" 
                    ? "Vodoravna os: politična pristranskost (levo–sredina–desno). Navpična os: zanesljivost dejstev (%). Kliknite na kroglico za več informacij o mediju."
                    : "Horizontal axis: political bias (left–center–right). Vertical axis: factual reliability (%). Click a dot for more details about a media outlet."}
                </p>
              </div>
            </div>

            {/* Chart */}
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
