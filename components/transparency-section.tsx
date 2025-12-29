import { Card } from "@/components/ui/card"

export function TransparencySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-teal-950/10 to-amber-950/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-medium mb-8 text-balance leading-[1.15] text-foreground tracking-tight">
            Astrology you can actually verify.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 font-light">
            Every AstroMuni insight includes a "See the Analysis" option — revealing the exact Vedic + KP planetary
            logic and astrological reasoning behind your guidance. Plus, every prediction is verified by our expert
            human astrologers for accuracy.
          </p>

          <Card className="p-14 md:p-16 bg-card border border-border/40 shadow-xl rounded-[2rem] text-center">
            <div className="space-y-5">
              <p className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">No blind faith.</p>
              <p className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">No black boxes.</p>
              <p className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">Just clear reasoning.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
