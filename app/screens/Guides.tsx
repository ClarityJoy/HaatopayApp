"use client";
import { useState } from "react";
import { DESTINATIONS, Destination } from "../data/trip";
import { ScreenHeader, Card, SectionTitle } from "../components/ui";
import { mapsUrl } from "./itemIcon";
import { Lightbulb, Info, ListChecks, MapPin } from "lucide-react";

export default function Guides() {
  const [open, setOpen] = useState<Destination | null>(null);

  if (open) {
    return (
      <div className="pb-8">
        <ScreenHeader title={`${open.name} ${open.emoji}`} subtitle={open.tagline} onBack={() => setOpen(null)} />
        <div className="px-4 pt-3 space-y-4">
          <div className="relative h-32 rounded-2xl bg-gradient-to-br from-teal-500 to-sky-500 overflow-hidden flex items-center justify-center">
            <span className="text-7xl">{open.emoji}</span>
          </div>

          <Card className="p-4">
            <div className="flex items-center gap-2 text-ink/80 font-display mb-1">
              <Info className="w-4 h-4" /> קצת היסטוריה
            </div>
            <p className="text-sm text-ink/70 leading-relaxed">{open.history}</p>
          </Card>

          <SectionTitle>
            <span className="flex items-center gap-1.5"><Lightbulb className="w-4 h-4" /> ידעת ש…?</span>
          </SectionTitle>
          <div className="space-y-2">
            {open.funFacts.map((f, i) => (
              <Card key={i} className="p-3 flex gap-2">
                <span className="text-lg">💡</span>
                <p className="text-sm text-ink/75">{f}</p>
              </Card>
            ))}
          </div>

          <SectionTitle>
            <span className="flex items-center gap-1.5"><ListChecks className="w-4 h-4" /> טיפים חשובים</span>
          </SectionTitle>
          <Card className="p-4 space-y-2">
            {open.tips.map((t, i) => (
              <div key={i} className="flex gap-2 text-sm text-ink/75">
                <span className="text-teal-600">✓</span> {t}
              </div>
            ))}
          </Card>

          <SectionTitle>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> מה עושים</span>
          </SectionTitle>
          <div className="space-y-2">
            {open.thingsToDo.map((t, i) => (
              <Card key={i} className="p-3 text-sm text-ink/80">
                {t}
              </Card>
            ))}
          </div>

          <a
            href={mapsUrl(open.coords.lat, open.coords.lng, open.nameEn)}
            target="_blank"
            rel="noreferrer"
            className="block text-center py-3 rounded-2xl bg-teal-600 text-white font-medium"
          >
            פתח את {open.name} ב-Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-6">
      <ScreenHeader title="מדריכי יעד" subtitle="כל מקום שאנחנו מבקרים בו" />
      <div className="px-4 pt-3 space-y-3">
        {DESTINATIONS.map((d) => (
          <Card key={d.id} className="overflow-hidden" onClick={() => setOpen(d)}>
            <div className="flex">
              <div className="w-24 bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center text-5xl shrink-0">
                {d.emoji}
              </div>
              <div className="p-3 flex-1 min-w-0">
                <h3 className="font-display text-lg text-ink">{d.name}</h3>
                <p className="text-xs text-ink/50 mb-1">{d.nameEn}</p>
                <p className="text-sm text-ink/70 line-clamp-2">{d.tagline}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
