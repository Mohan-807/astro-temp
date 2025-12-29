export function FeaturesSection() {
  return (
    <section id="features" className="py-40 bg-secondary/20">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Pain → Solution section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-medium mb-6 text-balance leading-tight text-foreground tracking-tight">
            Why people turn to Melooha
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Traditional astrology leaves you with more questions than answers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-40">
          <div className="group">
            <div className="bg-card rounded-3xl p-10 h-full border border-border/40 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center mb-8 text-primary group-hover:bg-primary/15 transition-all duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-foreground tracking-tight">Vague, generic predictions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                You're told "good things are coming" but never when or how to prepare.
              </p>
              <div className="text-sm font-normal text-primary">
                → Melooha gives you <span className="font-medium">precise timing</span>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-card rounded-3xl p-10 h-full border border-border/40 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center mb-8 text-primary group-hover:bg-primary/15 transition-all duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-foreground tracking-tight">Fear-driven narratives</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                Scary language about "malefic planets" leaves you anxious, not empowered.
              </p>
              <div className="text-sm font-normal text-primary">
                → Melooha focuses on <span className="font-medium">actionable clarity</span>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-card rounded-3xl p-10 h-full border border-border/40 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center mb-8 text-primary group-hover:bg-primary/15 transition-all duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-foreground tracking-tight">No way to verify claims</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                You're asked to "just trust" without seeing the reasoning behind predictions.
              </p>
              <div className="text-sm font-normal text-primary">
                → Melooha shows you <span className="font-medium">transparent logic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features showcase */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-border/20 shadow-2xl">
              <img
                src="/mystical-birth-chart-astrology-wheel-with-zodiac-s.jpg"
                alt="Birth chart visualization"
                className="w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-accent/8 to-transparent rounded-[2rem] blur-3xl -z-10 transform scale-110" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              Transparency you can verify
            </div>
            <h2 className="text-5xl md:text-6xl font-medium mb-10 text-balance leading-tight text-foreground tracking-tight">
              See the Analysis
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
              Every insight comes with a "See Analysis" button that expands the logic. You understand{" "}
              <span className="font-medium text-foreground italic">why</span> something is predicted, not just what.
            </p>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground tracking-tight">KP System Precision</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Exact planetary positions and timing calculations
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground tracking-tight">AI-Enhanced Insights</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Traditional wisdom meets modern technology
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground tracking-tight">
                    Personalized Daily Guidance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Based on your unique birth chart and current transits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
