"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Newspaper, Tv, Radio, Globe, Rss, MapPin } from "lucide-react"
import type { MediaOutlet } from "@/lib/media-data"
import { getBiasLabel, getBiasColor, getReliabilityLabel, getReliabilityColor } from "@/lib/media-data"
import { useLanguage } from "@/lib/language-context"
import { getTypeLabels, getContentLabels } from "@/lib/translations"

interface MediaCardProps {
  media: MediaOutlet
  onClick: () => void
}

function getTypeIcon(type: string) {
  switch (type) {
    case "TV":
      return <Tv className="h-4 w-4" />
    case "Radio":
      return <Radio className="h-4 w-4" />
    case "Web":
      return <Globe className="h-4 w-4" />
    case "Agency":
      return <Rss className="h-4 w-4" />
    default:
      return <Newspaper className="h-4 w-4" />
  }
}

export function MediaCard({ media, onClick }: MediaCardProps) {
  const { lang, t } = useLanguage()
  
  const typeLabels = getTypeLabels(t)
  const contentLabels = getContentLabels(t)
  
  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1.5 rounded-md bg-muted shrink-0">
              {getTypeIcon(media.type)}
            </div>
            <CardTitle className="text-sm truncate">{media.name}</CardTitle>
          </div>
          <Badge variant="secondary" className={`${getBiasColor(media.bias)} text-[10px] shrink-0`}>
            {getBiasLabel(media.bias, lang)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-0">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{t.reliability}</span>
          <span className={`font-semibold ${getReliabilityColor(media.reliability)}`}>
            {Math.round(media.reliability * 100)}%
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{t.type}</span>
          <span className="text-foreground">{typeLabels[media.type]}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{t.content}</span>
          <span className="text-foreground">{contentLabels[media.contentType]}</span>
        </div>
        {media.isInternational && media.country && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {lang === "sl" ? "Država" : "Country"}
            </span>
            <span className="text-foreground">{media.country}</span>
          </div>
        )}
        {media.podcrtoLink && (
          <div className="pt-1.5 border-t border-border">
            <a
              href={media.podcrtoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[10px] text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Pod črto
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
