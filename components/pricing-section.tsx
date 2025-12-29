import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-amber-950/10 to-teal-950/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 text-balance leading-[1.15] tracking-tight text-foreground">
            Flexible Question Packs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Pay only for the questions you ask. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-10 bg-card border border-border/40 shadow-lg rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-medium text-foreground">Starter Pack</h3>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-primary">5</p>
                <p className="text-muted-foreground font-light mt-2">Questions</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-muted-foreground font-light">5 questions to ask</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Verified by astrologers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Valid for 3 months</span>
                </li>
              </ul>
              <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20 rounded-full py-5 sm:py-6 font-medium text-sm sm:text-base">
                Choose Starter
              </Button>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/40 shadow-2xl rounded-2xl sm:rounded-3xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Most Popular
            </div>
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-medium text-foreground">Growth Pack</h3>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-primary">15</p>
                <p className="text-muted-foreground font-light mt-2">Questions</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">15 questions to ask</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Verified by astrologers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Valid for 6 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Priority responses</span>
                </li>
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-5 sm:py-6 font-medium shadow-lg text-sm sm:text-base">
                Choose Growth
              </Button>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 md:p-10 bg-card border border-border/40 shadow-lg rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-medium text-foreground">Premium Pack</h3>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-primary">30</p>
                <p className="text-muted-foreground font-light mt-2">Questions</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">30 questions to ask</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Verified by astrologers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Valid for 1 year</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Priority responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-light">Detailed chart analysis</span>
                </li>
              </ul>
              <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20 rounded-full py-5 sm:py-6 font-medium text-sm sm:text-base">
                Choose Premium
              </Button>
            </div>
          </Card>
        </div>

        <p className="text-center text-sm sm:text-base text-muted-foreground/70 font-light mt-8 sm:mt-10 md:mt-12">
          All packs include encrypted WhatsApp delivery and expert verification
        </p>
      </div>
    </section>
  )
}
