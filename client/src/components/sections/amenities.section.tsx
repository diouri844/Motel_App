import AmenityCard from "@/components/utils/amenityCard.component";
import { CheckCircle, Coffee, Dumbbell, MapPin, Utensils, Waves, Wifi } from "lucide-react";

function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resort Amenities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enjoy our world-class facilities designed to make your stay comfortable, relaxing, and memorable.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AmenityCard icon={<Wifi />} title="Free Wi-Fi" description="High-speed internet throughout the resort" />
              <AmenityCard
                icon={<Waves />}
                title="Swimming Pools"
                description="Indoor and outdoor pools with ocean views"
              />
              <AmenityCard
                icon={<Utensils />}
                title="Fine Dining"
                description="Multiple restaurants with international cuisine"
              />
              <AmenityCard
                icon={<Dumbbell />}
                title="Fitness Center"
                description="State-of-the-art equipment and classes"
              />
              <AmenityCard
                icon={<Coffee />}
                title="Spa & Wellness"
                description="Rejuvenating treatments and therapies"
              />
              <AmenityCard
                icon={<MapPin />}
                title="Beach Access"
                description="Private beach with loungers and service"
              />
              <AmenityCard icon={<CheckCircle />} title="Concierge" description="24/7 assistance for all your needs" />
              <AmenityCard icon={<CheckCircle />} title="Room Service" description="Available 24 hours a day" />
            </div>
          </div>
        </section>
)
}

export default AmenitiesSection