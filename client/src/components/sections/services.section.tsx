
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
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzb3J0JTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Resort pool"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1713149929624-7a1ba7f9e0e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJlc29ydCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                alt="Resort restaurant"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww"
                alt="Resort spa"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1675039871139-06cc792da9a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
                alt="Resort beach"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Resort room"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661964301291-75df9dd37f23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0JTIwbG9iYnl8ZW58MHx8MHx8fDA%3D"
                alt="Resort lobby"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Resort garden"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1691849233457-837d8e2f9da3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0JTIwYWVyaWFsJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Resort aerial view"
                
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

  )
}

export default ServicesSection;