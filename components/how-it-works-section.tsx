export function HowItWorksSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 text-balance leading-[1.15] tracking-tight text-foreground">
            Precision guidance in three simple steps
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 text-6xl sm:text-7xl md:text-8xl font-bold text-primary/10">1</div>
            <div className="relative z-10">
              <div className="mb-4 sm:mb-6 text-primary ml-8 sm:ml-10">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4 text-foreground tracking-tight leading-snug">
                Connect via WhatsApp
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-base sm:text-lg mb-3 sm:mb-4">
                Start a conversation with AstroMuni on WhatsApp. Share your exact birth details — date, time, and place.
              </p>
              <p className="text-sm text-muted-foreground/70 font-light italic">
                Your data is encrypted and protected. Your privacy is sacred.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 text-6xl sm:text-7xl md:text-8xl font-bold text-primary/10">2</div>
            <div className="relative z-10">
              <div className="mb-4 sm:mb-6 text-accent ml-8 sm:ml-10">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4 text-foreground tracking-tight leading-snug">
                Ask Your Questions
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-base sm:text-lg mb-3 sm:mb-4">
                Ask specific questions about your career, relationships, health, or life path. Our system analyzes your
                chart with astronomical precision for each query.
              </p>
              <p className="text-sm font-medium text-foreground">
                First 3 questions are FREE. Choose from our flexible question packs thereafter.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 text-6xl sm:text-7xl md:text-8xl font-bold text-primary/10">3</div>
            <div className="relative z-10">
              <div className="mb-4 sm:mb-6 text-primary ml-8 sm:ml-10">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4 text-foreground tracking-tight leading-snug">
                Get Instant Guidance
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-base sm:text-lg mb-3 sm:mb-4">
                Receive specific, timing-based insights directly on WhatsApp — delivered in calm, uplifting language,
                verified by expert astrologers.
              </p>
              <p className="text-sm font-medium text-foreground">Guidance you can use. Clarity you can trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
