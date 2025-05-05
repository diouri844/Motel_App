import { Button } from "@/components/ui/button";
function HeaderSection() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Serenity Resort</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary hover:text-lg">
              Home
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary hover:text-lg">
              About
            </a>
            <a href="#rooms" className="text-sm font-medium transition-colors hover:text-primary hover:text-lg">
              Rooms
            </a>
            <a href="#amenities" className="text-sm font-medium transition-colors hover:text-primary hover:text-lg">
              Amenities
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary hover:text-lg">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary 
            hover:text-lg">
              Contact
            </a>
          </nav>
          <div>
            <Button onClick={() => window.location.href = "#reservation"}> Book Now</Button>
          </div>
        </div>
      </header>
    )
}

export default HeaderSection