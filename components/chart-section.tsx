"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart2 } from "lucide-react"
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
  const { t } = useLanguage()

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
