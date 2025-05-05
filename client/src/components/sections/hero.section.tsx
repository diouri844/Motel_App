

import { Button } from "@/components/ui/button";


function HeroSection() {
  return (
        <section id="home" className="relative h-[100vh] w-full overflow-hidden">
          {/* Hero Section */}
          <img
            src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury hotel view"
            className="object-cover  brightness-[0.8]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience Luxury & Comfort</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover the perfect balance of luxury, comfort, and natural beauty at Serenity Resort
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book Your Stay
              </Button>
              <Button size="lg" 
              className="hover:opacity-75"
              >
                Explore Rooms
              </Button>
            </div>
          </div>
        </section>
  )
}

export default HeroSection;