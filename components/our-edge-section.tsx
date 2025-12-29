export function OurEdgeSection() {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-transparent to-amber-900/10 pointer-events-none" />
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-medium mb-4 text-balance leading-[1.15] text-foreground tracking-tight">
            Ancient wisdom. Powered by the future.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">This isn't magic. It's precision.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-border/20 shadow-2xl">
              <img
                src="/mystical-birth-chart-astrology-wheel-with-zodiac-s.jpg"
                alt="KP System chart visualization"
                className="w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/12 via-orange-600/8 to-transparent rounded-[2rem] blur-3xl -z-10 transform scale-110" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              Our Foundation
            </div>
            <h3 className="text-4xl md:text-5xl font-medium mb-8 text-balance leading-tight text-foreground tracking-tight">
              The Vedic + KP System
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-light">
              Most astrology stops at zodiac signs. We go deeper with Vedic precision.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              AstroMuni combines the time-tested Vedic astrology principles with the Krishnamurti Paddhati (KP) system,
              which uses nakshatras and sub-lords to pinpoint events and timing with exceptional accuracy — the method
              trusted by elite astrologers for definitive answers. This dual approach gives you both the depth of Vedic
              wisdom and the precision of KP calculations.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              The Technology
            </div>
            <h3 className="text-4xl md:text-5xl font-medium mb-8 text-balance leading-tight text-foreground tracking-tight">
              Built on Deep Expertise
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-light">
              This is not a chatbot or generic prediction tool. AstroMuni is built on decades of astrological expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Our system has been meticulously trained on Vedic and KP astrology principles, thousands of real-life case
              studies, and continuously refined by expert human astrologers. This rigorous methodology makes predictions
              remarkably accurate and close to reality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Unlike generic tools that guess, AstroMuni applies Vedic + KP astrology consistently and objectively —
              free from human bias, fatigue, or inconsistency. Every prediction is verified by our team of experienced
              astrologers before reaching you, ensuring the highest standard of accuracy.
            </p>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-amber-900/20 shadow-2xl bg-gradient-to-br from-amber-950/30 to-orange-950/30 p-20 flex items-center justify-center">
              <svg
                className="w-48 h-48 text-amber-600/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={0.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-amber-900/20 shadow-2xl bg-gradient-to-br from-amber-950/30 to-orange-950/30 p-20 flex items-center justify-center">
              <svg
                className="w-48 h-48 text-amber-600/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={0.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              Sacred by Design
            </div>
            <h3 className="text-4xl md:text-5xl font-medium mb-8 text-balance leading-tight text-foreground tracking-tight">
              Your Data
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-light">
              Your birth data belongs to you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              We encrypt it, protect it, and never sell it. Trust is not a feature — it's our foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
