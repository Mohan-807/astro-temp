"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const blogPosts = [
  {
    category: "Educate",
    title: "Understanding KP Astrology: The Science of Precision",
    description:
      "Dive deep into the Krishnamurti Paddhati system and learn how its sub-lord theory delivers pinpoint accuracy in predictions",
    readTime: "8 min read",
    image: "/ancient-astrology-chart-with-precise-calculations.jpg",
  },
  {
    category: "Demonstrate",
    title: "Real Prediction Case Studies: Career Breakthroughs",
    description:
      "See how AstroMuni accurately predicted major career transitions and job changes with exact timing for real users",
    readTime: "6 min read",
    image: "/professional-career-success-cosmic-guidance.jpg",
  },
  {
    category: "Empower",
    title: "Using Planetary Timing in Daily Life",
    description:
      "Practical ways to align your important decisions with favorable cosmic periods and planetary transits",
    readTime: "5 min read",
    image: "/planets-orbiting-solar-system-cosmic-timing.jpg",
  },
  {
    category: "Educate",
    title: "Vedic vs Western Astrology: Key Differences",
    description:
      "Understand the fundamental differences between Vedic and Western systems and why Vedic astrology uses the sidereal zodiac",
    readTime: "7 min read",
    image: "/vedic-astrology-ancient-sanskrit-zodiac.jpg",
  },
  {
    category: "Empower",
    title: "Navigating Saturn Return: Your Cosmic Coming of Age",
    description:
      "Learn how to navigate this powerful 2.5 year transit that occurs around ages 29 and 58, bringing major life lessons",
    readTime: "9 min read",
    image: "/saturn-planet-with-rings-cosmic-space.jpg",
  },
  {
    category: "Demonstrate",
    title: "Marriage Timing: Success Stories",
    description:
      "Real examples of how AstroMuni helped users identify the most auspicious periods for marriage and relationships",
    readTime: "6 min read",
    image: "/couple-wedding-cosmic-stars-celebration.jpg",
  },
  {
    category: "Educate",
    title: "The 12 Houses: Your Life's Blueprint",
    description:
      "A comprehensive guide to understanding the 12 astrological houses and what each represents in your birth chart",
    readTime: "10 min read",
    image: "/zodiac-wheel-12-houses-birth-chart.jpg",
  },
  {
    category: "Empower",
    title: "Remedies That Actually Work",
    description:
      "Evidence-based astrological remedies rooted in Vedic wisdom that can help mitigate challenging planetary influences",
    readTime: "7 min read",
    image: "/meditation-healing-crystals-vedic-rituals.jpg",
  },
  {
    category: "Demonstrate",
    title: "Business Launch Success: Timing Matters",
    description:
      "Case studies of entrepreneurs who used planetary timing to launch successful ventures at cosmically favorable moments",
    readTime: "8 min read",
    image: "/business-startup-launch-success-growth.jpg",
  },
  {
    category: "Educate",
    title: "Dashas Explained: Your Life's Timeline",
    description:
      "Understanding the Vimshottari Dasha system and how planetary periods unfold major life chapters with predictable timing",
    readTime: "11 min read",
    image: "/timeline-life-phases-planetary-periods.jpg",
  },
  {
    category: "Empower",
    title: "Reading Your Own Birth Chart",
    description:
      "A beginner-friendly guide to interpreting the key elements of your birth chart and understanding your cosmic blueprint",
    readTime: "9 min read",
    image: "/birth-chart-natal-chart-astrology-reading.jpg",
  },
  {
    category: "Demonstrate",
    title: "Health Predictions: Early Warnings That Helped",
    description:
      "Stories of users who received timely health warnings through astrological analysis and took preventive action",
    readTime: "7 min read",
    image: "/health-wellness-prevention-cosmic-guidance.jpg",
  },
]

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= blogPosts.length ? 0 : prev + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? Math.floor(blogPosts.length / itemsPerPage) * itemsPerPage : prev - itemsPerPage,
    )
  }

  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section id="blog" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-medium mb-6 tracking-tight text-foreground">The Muni Mind</h2>
          <p className="text-xl text-muted-foreground font-light">Insights on life, wisdom, and technology</p>
          <p className="text-lg text-muted-foreground/70 font-light mt-4">
            Explore articles that educate, empower, and demystify astrology — without superstition or fear.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visiblePosts.map((post, index) => (
              <Card
                key={currentIndex + index}
                className="overflow-hidden border border-border/40 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-primary font-medium uppercase tracking-wide">{post.category}</div>
                    <div className="text-xs text-muted-foreground/60">{post.readTime}</div>
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-balance leading-tight text-foreground tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed">{post.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-border/60 text-foreground hover:bg-secondary/50 hover:border-primary/30 rounded-full font-normal bg-transparent transition-all duration-300"
                  >
                    Read Article
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-border/60 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 bg-transparent"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(blogPosts.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? "bg-primary w-8"
                      : "bg-border/40 hover:bg-border/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-border/60 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 bg-transparent"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
