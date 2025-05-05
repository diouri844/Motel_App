
function ServicesSection() {
  return (
    <section className="py-16 md:py-24 container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resort Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our beautiful resort and imagine yourself here.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort pool"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort restaurant"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort spa"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort beach"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort room"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort lobby"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort garden"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Resort aerial view"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

  )
}

export default ServicesSection;