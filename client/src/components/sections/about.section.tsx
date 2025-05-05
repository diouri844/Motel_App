import { CheckCircle} from "lucide-react"

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">About Serenity Resort</h2>
                  <p className="text-muted-foreground mb-6">
                    Nestled between the mountains and the sea, Serenity Resort offers an unparalleled retreat from the
                    hustle and bustle of everyday life. Our resort combines modern luxury with natural beauty to create a
                    truly unique experience.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    With 50 elegantly appointed rooms and suites, world-class dining options, and a range of recreational
                    facilities, we ensure that every moment of your stay is memorable.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Beachfront Location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Luxury Accommodations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Fine Dining</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Spa & Wellness</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img src="https://plus.unsplash.com/premium_photo-1672097247893-4f8660247b1f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Hotel exterior" className="object-cover" />
                </div>
              </div>
            </section>
  )
}

export default AboutSection;