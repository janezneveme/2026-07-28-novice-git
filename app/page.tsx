"use client"

import { useState, useMemo, useEffect } from "react"
import { AlertTriangle } from "lucide-react"
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
  const { lang, t } = useLanguage()
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
    // Update URL hash
    window.history.replaceState(null, '', `#media=${media.name.toLowerCase().replace(/\s+/g, '-')}`)
  }

  // Handle URL hash on component mount and when modal closes
  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#media=')) {
      const slug = hash.replace('#media=', '')
      const found = mediaOutlets.find(m => 
        m.name.toLowerCase().replace(/\s+/g, '-') === slug
      )
      if (found) {
        setSelectedMedia(found)
        setModalOpen(true)
      }
    }
  }, [])

  const handleModalClose = (open: boolean) => {
    setModalOpen(open)
    if (!open) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />

      {/* Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800">
        <div className="container mx-auto px-4 py-2 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <p className="text-xs text-amber-800 dark:text-amber-200">
            {lang === "sl"
              ? "To je izobraževalno orodje. Ocene so informativne narave in ne predstavljajo absolutne resnice. Spodbujamo kritično presojo."
              : "This is an educational tool. Ratings are informational and do not represent absolute truth. We encourage critical thinking."}
          </p>
        </div>
      </div>

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
      </main>

      <FooterSection />

      <MediaModal
        media={selectedMedia}
        open={modalOpen}
        onOpenChange={handleModalClose}
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
