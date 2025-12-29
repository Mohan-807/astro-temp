import { HeroSection } from "@/components/hero-section"
import { PainSolutionSection } from "@/components/pain-solution-section"
import { TransparencySection } from "@/components/transparency-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { OurEdgeSection } from "@/components/our-edge-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsCounter } from "@/components/stats-counter"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsCounter />
      <PainSolutionSection />
      <TransparencySection />
      <HowItWorksSection />
      <PricingSection />
      <OurEdgeSection />
      <TestimonialsSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
