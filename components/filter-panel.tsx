"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { RotateCcw, Landmark } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTypeLabels, getOwnerLabels } from "@/lib/translations"

export interface FilterState {
  types: string[]
  ownerTypes: string[]
  minReliability: number
  politicalOnly: boolean
}

interface FilterPanelProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

const mediaTypes = ["Print", "Web", "TV", "Radio", "Print/Web", "Agency"]
const ownerTypes = ["State-owned", "Private", "Private-Tajkun", "Foreign", "Non-profit"]

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const { t } = useLanguage()
  
  const typeLabels = getTypeLabels(t)
  const ownerLabels = getOwnerLabels(t)

  const toggleFilter = (category: "types" | "ownerTypes", value: string) => {
    const current = filters[category]
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onFiltersChange({ ...filters, [category]: updated })
  }

  const resetFilters = () => {
    onFiltersChange({
      types: [],
      ownerTypes: [],
      minReliability: 0,
      politicalOnly: true,
    })
  }

  const hasActiveFilters = 
    filters.types.length > 0 ||
    filters.ownerTypes.length > 0 ||
    filters.minReliability > 0 ||
    filters.politicalOnly

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{t.filters}</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              <RotateCcw className="h-4 w-4 mr-1" />
              {t.reset}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Primary Filters Section */}
        
        {/* Political Media Toggle */}
        <div className="space-y-2 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="political-toggle" className="text-sm font-medium cursor-pointer">
                {t.politicalMediaOnly}
              </Label>
            </div>
            <Switch
              id="political-toggle"
              checked={filters.politicalOnly ?? false}
              onCheckedChange={(checked) =>
                onFiltersChange({ ...filters, politicalOnly: checked })
              }
            />
          </div>
          {filters.politicalOnly && (
            <p className="text-xs text-muted-foreground pl-6">
              {t.politicalNote}
            </p>
          )}
        </div>

        {/* Reliability Slider */}
        <div className="space-y-2 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">{t.minReliability}</Label>
            <span className="text-xs text-muted-foreground font-medium">
              {Math.round(filters.minReliability * 100)}%
            </span>
          </div>
          <Slider
            value={[filters.minReliability]}
            onValueChange={([value]) =>
              onFiltersChange({ ...filters, minReliability: value })
            }
            max={1}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Media Type */}
        <div className="space-y-2 pt-4 border-t border-border">
          <Label className="text-sm font-medium">{t.mediaType}</Label>
          <div className="grid grid-cols-2 gap-1.5">
            {mediaTypes.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={filters.types.includes(type)}
                  onCheckedChange={() => toggleFilter("types", type)}
                />
                <label
                  htmlFor={`type-${type}`}
                  className="text-xs text-muted-foreground cursor-pointer"
                >
                  {typeLabels[type]}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Ownership */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">{t.ownership}</Label>
          <div className="space-y-1.5">
            {ownerTypes.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox
                  id={`owner-${type}`}
                  checked={filters.ownerTypes.includes(type)}
                  onCheckedChange={() => toggleFilter("ownerTypes", type)}
                />
                <label
                  htmlFor={`owner-${type}`}
                  className="text-xs text-muted-foreground cursor-pointer"
                >
                  {ownerLabels[type]}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
