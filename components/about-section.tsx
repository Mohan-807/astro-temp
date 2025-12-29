import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-teal-950/10 to-amber-950/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-6 sm:p-10 md:p-14 lg:p-16 bg-card border border-border/40 shadow-xl rounded-xl sm:rounded-2xl md:rounded-[2rem]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 md:mb-10 text-center text-foreground tracking-tight leading-[1.2]">
              Our mission: Democratizing wisdom
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center font-light mb-6 sm:mb-8 md:mb-10">
              AstroMuni was created to answer a simple question: What if the depth of world-class astrology was
              available to everyone — without fear, vagueness, or guesswork?
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center font-light mb-6 sm:mb-8 md:mb-10">
              We are a team of technologists, data scientists, and lifelong astrology scholars building a bridge between
              two worlds:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="text-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-primary">Timeless astrological precision</p>
              </div>
              <div className="text-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-accent">Modern AI-driven clarity</p>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 text-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium">We believe guidance should be:</p>
              <div className="space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light">Empowering, not frightening</p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light">Clear, not vague</p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light">Personal, not generic</p>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground pt-4 sm:pt-6">Welcome to the future of astrology.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
