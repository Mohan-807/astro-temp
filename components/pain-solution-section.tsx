"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function PainSolutionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-transparent to-amber-950/20 pointer-events-none" />
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-6 text-balance leading-[1.15] text-foreground tracking-tight">
            Tired of vague astrology? You're not alone.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            className={`p-10 bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="mb-6 text-primary">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-foreground tracking-tight leading-snug">
              Three astrologers. Three answers.
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base mb-5">
              Conflicting interpretations create confusion and doubt.
            </p>
            <p className="text-sm font-medium text-primary">
              AstroMuni applies the Vedic + KP system with exceptional consistency — every time.
            </p>
          </Card>

          <Card
            className={`p-10 bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className="mb-6 text-accent">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-foreground tracking-tight leading-snug">
              Predictions that fit everyone.
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base mb-5">
              Generic horoscopes don't help real decisions.
            </p>
            <p className="text-sm font-medium text-primary">
              AstroMuni delivers hyper-personalized insights using your exact birth details and Vedic + KP sub-lords.
            </p>
          </Card>

          <Card
            className={`p-10 bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <div className="mb-6 text-primary">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-foreground tracking-tight leading-snug">
              Fear without direction.
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base mb-5">
              Being warned about "bad periods" creates anxiety.
            </p>
            <p className="text-sm font-medium text-primary">
              AstroMuni offers calm, actionable guidance — focused on solutions, not fear.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
