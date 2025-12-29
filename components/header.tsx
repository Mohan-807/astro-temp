import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-teal-900/30">
      <div className="container mx-auto px-8 py-5 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-3">
          <Image
            src="/astromuni-mascot.png"
            alt="AstroMuni Sage"
            width={48}
            height={48}
            className="rounded-full border-2 border-amber-500/30"
          />
          <div className="text-2xl font-heading font-bold tracking-wide text-foreground">AstroMuni</div>
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
        <div className="flex items-center gap-4">
          <a
            href="#recharge"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors font-medium hidden md:block"
          >
            Recharge Now
          </a>
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all font-semibold px-6 rounded-full shadow-md"
          >
            <a
              href="https://wa.me/916361505946"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect to AstroMuni
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
