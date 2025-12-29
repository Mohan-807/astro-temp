import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-teal-950/10 to-amber-950/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-14 md:p-16 bg-card border border-border/40 shadow-xl rounded-[2rem]">
            <h2 className="text-4xl md:text-5xl font-medium mb-10 text-center text-foreground tracking-tight leading-[1.2]">
              Our mission: Democratizing wisdom
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center font-light mb-10">
              AstroMuni was created to answer a simple question: What if the depth of world-class astrology was
              available to everyone — without fear, vagueness, or guesswork?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center font-light mb-10">
              We are a team of technologists, data scientists, and lifelong astrology scholars building a bridge between
              two worlds:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-medium text-primary">Timeless astrological precision</p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-2xl font-medium text-accent">Modern AI-driven clarity</p>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-xl text-foreground font-medium">We believe guidance should be:</p>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-light">Empowering, not frightening</p>
                <p className="text-lg text-muted-foreground font-light">Clear, not vague</p>
                <p className="text-lg text-muted-foreground font-light">Personal, not generic</p>
              </div>
              <p className="text-2xl font-medium text-foreground pt-6">Welcome to the future of astrology.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
