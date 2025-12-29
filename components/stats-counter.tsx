"use client"

import { useEffect, useRef, useState } from "react"

export function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [happyUsers, setHappyUsers] = useState(0)
  const [dailyConsultations, setDailyConsultations] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Animate happy users to 500+
    const usersInterval = setInterval(() => {
      setHappyUsers((prev) => {
        if (prev >= 500) {
          clearInterval(usersInterval)
          return 500
        }
        return prev + 10
      })
    }, 20)

    // Animate daily consultations to 134
    const consultationsInterval = setInterval(() => {
      setDailyConsultations((prev) => {
        if (prev >= 134) {
          clearInterval(consultationsInterval)
          return 134
        }
        return prev + 3
      })
    }, 30)

    return () => {
      clearInterval(usersInterval)
      clearInterval(consultationsInterval)
    }
  }, [isVisible])

  return (
    <div ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-teal-950/30 to-amber-950/30 relative overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
          <div className="text-center space-y-2 sm:space-y-3 transform transition-all duration-700 hover:scale-105">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400 font-heading">{happyUsers}+</div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium">Happy Users</p>
            <p className="text-sm text-white/60 font-light">Trusted for life decisions</p>
          </div>

          <div className="text-center space-y-2 sm:space-y-3 transform transition-all duration-700 hover:scale-105">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-teal-400 font-heading">{dailyConsultations}</div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium">Daily Consultations</p>
            <p className="text-sm text-white/60 font-light">Active guidance seekers today</p>
          </div>
        </div>
      </div>
    </div>
  )
}
