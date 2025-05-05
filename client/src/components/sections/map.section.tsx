import { MapPin } from 'lucide-react';

function MapSection() {
  return (
    <section className="h-[400px] relative w-full">
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">
                Map placeholder - In a real implementation, this would be a Google Map or similar
              </p>
              <MapPin className="h-10 w-10 mx-auto text-primary" />
              <p className="font-medium mt-2">123 Paradise Bay, Tropical Island, 98765</p>
            </div>
          </div>
        </section>     
)
}

export default MapSection;