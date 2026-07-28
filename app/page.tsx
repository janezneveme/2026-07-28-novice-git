"use client"

import { useState, useMemo } from "react"
import { mediaOutlets, type MediaOutlet } from "@/lib/media-data"
import { MediaModal } from "@/components/media-modal"
import { FilterPanel, type FilterState } from "@/components/filter-panel"
import { StatsCards } from "@/components/stats-cards"
import { ResourcesSection } from "@/components/resources-section"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { HeaderSection } from "@/components/header-section"
import { HeroSection } from "@/components/hero-section"
import { ChartSection } from "@/components/chart-section"
import { MediaGridSection } from "@/components/media-grid-section"
import { MethodologySection } from "@/components/methodology-section"
import { FooterSection } from "@/components/footer-section"

/**
 * Main content component with all filtering and media management logic
 */
function MediaAtlasContent() {
  const { t } = useLanguage()
  const [selectedMedia, setSelectedMedia] = useState<MediaOutlet | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    types: ["Web"],
    ownerTypes: [],
    minReliability: 0,
    politicalOnly: true,
  })

  /**
   * Filters media based on current filter state
   */
  const filteredMedia = useMemo(() => {
    return mediaOutlets.filter((media) => {
      if (filters.types.length > 0) {
        const mediaTypes = media.types || []
        const matchesType = filters.types.some(filterType => {
          if (filterType === "Print") {
            if (media.type === "Print" || media.type === "Print/Web") return true
          } else if (filterType === "Web") {
            if (media.type === "Web" || media.type === "Print/Web") return true
          } else if (media.type === filterType) {
            return true
          }
          return mediaTypes.includes(filterType as typeof mediaTypes[number])
        })
        if (!matchesType) return false
      }
      if (filters.ownerTypes.length > 0 && !filters.ownerTypes.includes(media.ownerType)) {
        return false
      }
      if (media.reliability < filters.minReliability) {
        return false
      }
      if (filters.politicalOnly && !media.isPolitical) {
        return false
      }
      return true
    })
  }, [filters])

  const handleSelectMedia = (media: MediaOutlet) => {
    setSelectedMedia(media)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />
      <HeroSection />

      <main className="container mx-auto px-4 py-8">
        <StatsCards data={filteredMedia} />
        <ChartSection
          filteredMedia={filteredMedia}
          filters={filters}
          onFiltersChange={setFilters}
          onSelectMedia={handleSelectMedia}
        />
        <MediaGridSection
          filteredMedia={filteredMedia}
          onSelectMedia={handleSelectMedia}
        />
        <ResourcesSection />
        <MethodologySection />
        <FooterSection />
      </main>

      <MediaModal
        media={selectedMedia}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <MediaAtlasContent />
    </LanguageProvider>
  )
}
