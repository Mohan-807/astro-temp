import { Card } from "@/components/ui/card"

export function MissionSection() {
  return (
    <section className="py-40 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 md:p-20 bg-card border border-border/40 shadow-xl rounded-[2rem]">
            <h2 className="text-5xl md:text-6xl font-medium mb-10 text-center text-foreground tracking-tight">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center font-light">
              At Melooha, our mission is to empower individuals to live fulfilling lives by harnessing the wisdom of
              astrology as a trusted guiding force. We are fully committed to unraveling the intricate mysteries that
              shape our unique life journeys, enabling individuals to navigate their paths with clarity and purpose.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
