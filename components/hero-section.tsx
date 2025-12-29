"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d5c] via-[#0f2438] to-[#0a0f1a]"></div>
        <div className="absolute inset-0 stars-bg opacity-70"></div>
        <div className="absolute top-[20%] right-[15%] w-[700px] h-[700px] bg-gradient-radial from-teal-400/25 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-nebula-drift"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[800px] h-[800px] bg-gradient-radial from-amber-600/20 via-orange-500/10 to-transparent rounded-full blur-3xl animate-nebula-drift-reverse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-amber-500/8 rounded-full animate-slow-spin"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      <div className="absolute right-[5%] top-[70%] -translate-y-1/2 opacity-50 z-[2] w-[30%] max-w-[400px] animate-mascot-float">
        <Image
          src="/astromuni-mascot.png"
          alt="AstroMuni Sage"
          width={400}
          height={400}
          className="drop-shadow-2xl w-full h-auto"
          priority
        />
      </div>

      <div className="container mx-auto px-8 relative z-20 max-w-7xl pt-32 pb-32">
        <div className="max-w-2xl space-y-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-balance leading-[1.1] text-white">
            Clarity, not confusion.
            <br />
            Guidance, not guesswork.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 text-pretty leading-relaxed font-light">
            AstroMuni delivers precise, predictive, and empowering life guidance through WhatsApp by combining the
            ancient wisdom of Vedic astrology with the precision of KP (Krishnamurti Paddhati) system — so you don't
            just understand <span className="font-medium text-white italic">what</span>, you know{" "}
            <span className="font-medium text-white italic">when</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="relative z-30 bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-base px-10 py-6 rounded-full font-medium shadow-xl"
            >
              <a href="https://wa.me/916361505946" target="_blank" rel="noopener noreferrer">
                Connect to AstroMuni
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-0 right-0 z-10">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-base text-white/70 font-light tracking-wide">
              Trusted by thousands seeking a clearer path.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-amber-400">★★★★★</span>
              <span className="text-sm text-white/60 ml-2 font-light">4.8 average user rating</span>
            </div>
            <p className="text-xs text-white/40 font-light mt-1">
              Used across career, relationships, business, and life decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
