import { Card } from "@/components/ui/card"

export function WhatIsMelooha() {
  return (
    <section id="about" className="py-40 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-medium mb-8 text-balance leading-[1.05] tracking-tight text-foreground">
            What is Melooha?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            An AI-powered astrology platform that fulfills humanity's fundamental need for guidance, combining ancient
            Vedic wisdom with modern technology to provide hyper-personalized insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="p-12 bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl">
            <div className="mb-8 text-primary">
              <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-5 text-foreground tracking-tight">
              Explore Cosmic Mechanics
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base">
              The dance of planets and stars leaves an indelible imprint on your life journeys.
            </p>
          </Card>

          <Card className="p-12 bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl">
            <div className="mb-8 text-accent">
              <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-5 text-foreground tracking-tight">
              Unleash Hidden Potential
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base">
              We analyze your birth charts to help you harness undiscovered capabilities and talents.
            </p>
          </Card>

          <Card className="p-12 bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl">
            <div className="mb-8 text-primary">
              <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-5 text-foreground tracking-tight">
              Forge Extraordinary Life
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base">
              Uncover potential, seize opportunities, and live an extraordinary life with clarity.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
