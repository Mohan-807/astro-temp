"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-teal-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/astromuni-mascot.png"
            alt="AstroMuni Sage"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-amber-500/30"
          />
          <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold tracking-wide text-foreground">AstroMuni</div>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            How it Works
          </a>
          <a
            href="#features"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            Our Edge
          </a>
          <a
            href="#testimonials"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            Testimonials
          </a>
          <a href="#blog" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            The Muni Mind
          </a>
          <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            About
          </a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#recharge"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors font-medium hidden lg:block"
          >
            Recharge Now
          </a>
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all font-semibold px-4 sm:px-6 rounded-full shadow-md text-xs sm:text-sm"
          >
            <a
              href="https://wa.me/916361505946"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect to AstroMuni
            </a>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-teal-900/30 bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#about"
              className="text-base text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#features"
              className="text-base text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Edge
            </a>
            <a
              href="#testimonials"
              className="text-base text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#blog"
              className="text-base text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Muni Mind
            </a>
            <a
              href="#about"
              className="text-base text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#recharge"
              className="text-base text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recharge Now
            </a>
            <Button
              asChild
              size="sm"
              className="sm:hidden bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full shadow-md mt-2"
            >
              <a
                href="https://wa.me/916361505946"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect to AstroMuni
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
