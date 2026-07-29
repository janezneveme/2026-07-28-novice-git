"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ExternalLink, Newspaper, Tv, Radio, Globe, Building2, User, Rss, MapPin, AlertCircle } from "lucide-react"
import type { MediaOutlet } from "@/lib/media-data"
import { getBiasLabel, getBiasColor, getReliabilityLabel, getReliabilityColor } from "@/lib/media-data"
import { useLanguage } from "@/lib/language-context"

interface MediaModalProps {
  media: MediaOutlet | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function getTypeIcon(type: string) {
  switch (type) {
    case "TV":
      return <Tv className="h-5 w-5" />
    case "Radio":
      return <Radio className="h-5 w-5" />
    case "Web":
      return <Globe className="h-5 w-5" />
    case "Agency":
      return <Rss className="h-5 w-5" />
    default:
      return <Newspaper className="h-5 w-5" />
  }
}

function getOwnerTypeIcon(type: string) {
  switch (type) {
    case "State-owned":
      return <Building2 className="h-4 w-4" />
    default:
      return <User className="h-4 w-4" />
  }
}

export function MediaModal({ media, open, onOpenChange }: MediaModalProps) {
  const { lang, t } = useLanguage()
  
  if (!media) return null

  const biasPosition = ((media.bias + 1) / 2) * 100
  
  const typeLabels: Record<string, string> = {
    "Print": t.print,
    "Web": t.web,
    "TV": t.tv,
    "Radio": t.radio,
    "Print/Web": t.printWeb,
    "Agency": t.agency,
  }
  
  const contentLabels: Record<string, string> = {
    "News": t.news,
    "Opinion": t.opinion,
    "Mixed": t.mixed,
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-muted">
              {getTypeIcon(media.type)}
            </div>
            <div>
              <DialogTitle className="text-xl">{media.name}</DialogTitle>
              <DialogDescription className="flex items-center gap-2 mt-1">
                {typeLabels[media.type]} / {contentLabels[media.contentType]}
                {media.isInternational && media.country && (
                  <Badge variant="outline" className="ml-1 text-[10px]">
                    <MapPin className="h-3 w-3 mr-1" />
                    {media.country}
                  </Badge>
                )}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 py-4">
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {media.description[lang]}
          </p>

          {/* SDS Network Warning */}
          {media.network && (
            <div className="flex gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">
                  {lang === "sl" ? t.sdsNetworkWarning : t.sdsNetworkWarning}
                </p>
                <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                  {lang === "sl" ? t.sdsNetworkDescription : t.sdsNetworkDescription}
                </p>
              </div>
            </div>
          )}

          {/* Political Bias Scale */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.politicalBias}</span>
              <Badge className={getBiasColor(media.bias)}>
                {getBiasLabel(media.bias, lang)}
              </Badge>
            </div>
            <div className="relative h-3 rounded-full bg-gradient-to-r from-blue-600 via-slate-400 to-red-600">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-foreground rounded-full shadow-md transition-all"
                style={{ left: `calc(${biasPosition}% - 8px)` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{t.left}</span>
              <span>{t.center}</span>
              <span>{t.right}</span>
            </div>
          </div>

          {/* Content Type Info */}
          <div className="space-y-2">
            <span className="text-sm font-medium">{t.content}</span>
            <Badge variant="secondary">{contentLabels[media.contentType]}</Badge>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {media.contentType === "News" && (lang === "sl" 
                ? "Novični medij: Zanesljivost se meri po natančnosti podatkov, kakovosti virov in ločevanju novic od mnenj."
                : "News outlet: Reliability is measured by accuracy, source quality, and clear separation of news from opinion."
              )}
              {media.contentType === "Opinion" && (lang === "sl"
                ? "Mnenjski medij: Zanesljivost se nanaša na to, ali avtorji svoje mnenje temeljijo na realnih ali nerealnih podatkih."
                : "Opinion outlet: Reliability measures whether opinions are based on real or false data, and if authors properly distinguish facts from opinions."
              )}
              {media.contentType === "Mixed" && (lang === "sl"
                ? "Mešani medij: Zanesljivost se ocenjuje glede na jasnost ločevanja med novicami in mnenji."
                : "Mixed outlet: Reliability is evaluated on how clearly the outlet separates news from opinion."
              )}
            </p>
          </div>

          {/* Reliability Meter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.factualReliability}</span>
              <span className={`text-sm font-semibold ${getReliabilityColor(media.reliability)}`}>
                {Math.round(media.reliability * 100)}%
              </span>
            </div>
            <Progress value={media.reliability * 100} className="h-2.5" />
            <p className="text-xs text-muted-foreground">
              {getReliabilityLabel(media.reliability, lang)} {t.basedOnFactChecking}
            </p>
          </div>

          {/* Ownership */}
          <div className="space-y-2">
            <span className="text-sm font-medium">{t.owner}</span>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
              {getOwnerTypeIcon(media.ownerType)}
              <div>
                <p className="text-sm font-medium">{media.owner}</p>
                <p className="text-xs text-muted-foreground">
                  {media.ownerType === "State-owned" && t.stateOwned}
                  {media.ownerType === "Private" && t.private}
                  {media.ownerType === "Private-Tajkun" && t.privateTajkun}
                  {media.ownerType === "Foreign" && t.foreign}
                  {media.ownerType === "Non-profit" && t.nonProfit}
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Button asChild variant="default" size="sm">
              <a href={media.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                {t.visitWebsite}
              </a>
            </Button>
            {media.podcrtoLink && (
              <Button asChild variant="outline" size="sm">
                <a href={media.podcrtoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t.podcrtoAnalysis}
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
