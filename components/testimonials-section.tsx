"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Priya T.",
    role: "Entrepreneur",
    content:
      "AstroMuni told me the exact week communication would be strongest in my chart. I pitched my startup that week — and secured funding.",
    initials: "PT",
  },
  {
    name: "Rohit & Anjali",
    location: "Delhi",
    content:
      "For the first time, we were given a clear timeframe instead of vague reassurance. The anxiety disappeared.",
    initials: "RA",
  },
  {
    name: "Karan S.",
    role: "Software Engineer",
    content: "The 'See the Analysis' feature changed everything. I finally understood why an insight was given.",
    initials: "KS",
  },
  {
    name: "Meera K.",
    role: "HR Manager",
    content:
      "I was skeptical about AI astrology, but AstroMuni proved me wrong. The predictions were spot-on and helped me make a crucial career decision.",
    initials: "MK",
  },
  {
    name: "Vikram R.",
    role: "Business Owner",
    content:
      "The timing predictions for my business expansion were incredibly accurate. This isn't your typical astrology app.",
    initials: "VR",
  },
  {
    name: "Deepa & Rahul",
    location: "Mumbai",
    content:
      "We consulted three astrologers before finding AstroMuni. The clarity and consistency in predictions gave us the confidence we needed.",
    initials: "DR",
  },
  {
    name: "Arjun M.",
    role: "Finance Professional",
    content:
      "As someone who values data, I appreciate how AstroMuni shows the logic behind every prediction. It's transparent and trustworthy.",
    initials: "AM",
  },
  {
    name: "Sneha P.",
    role: "Creative Director",
    content:
      "The personalized insights helped me understand my creative blocks. The timing for launching my project was perfect.",
    initials: "SP",
  },
  {
    name: "Aditya S.",
    role: "Tech Entrepreneur",
    content:
      "I've used multiple astrology services. AstroMuni's combination of Vedic wisdom and KP precision is unmatched.",
    initials: "AS",
  },
  {
    name: "Pooja L.",
    role: "Marketing Manager",
    content:
      "Finally, astrology that doesn't create fear. The guidance was practical, positive, and incredibly helpful.",
    initials: "PL",
  },
  {
    name: "Ravi & Kavita",
    location: "Bangalore",
    content:
      "We were amazed by how accurate the compatibility analysis was. AstroMuni helped us understand each other better.",
    initials: "RK",
  },
  {
    name: "Nikhil G.",
    role: "Investment Banker",
    content:
      "The verification by human astrologers gives me confidence. It's not just AI making guesses — it's expertise backed by technology.",
    initials: "NG",
  },
  {
    name: "Ananya B.",
    role: "Yoga Instructor",
    content: "The spiritual depth combined with scientific precision is exactly what modern astrology should be.",
    initials: "AB",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(testimonials.length - testimonialsPerPage, 0) : prev - testimonialsPerPage,
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium mb-6 tracking-tight text-foreground leading-[1.15]">
            Real guidance. Real impact.
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={currentIndex + index}
                className="p-10 bg-card border border-border/40 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium text-base border border-primary/20">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground text-base">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-light">
                      {testimonial.role || testimonial.location}
                    </div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed font-light italic">
                  "{testimonial.content}"
                </p>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-primary/30 bg-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-primary"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * testimonialsPerPage)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === Math.floor(currentIndex / testimonialsPerPage)
                      ? "bg-primary w-8"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial page ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-primary/30 bg-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-primary"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
