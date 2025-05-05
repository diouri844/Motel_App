import TestimonialCard from "@/components/utils/testimonialCard.component";

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Guest Experiences</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our guests have to say about their stay with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard
                name="Sarah Johnson"
                location="New York, USA"
                rating={5}
                testimonial="Our stay at Serenity Resort was absolutely perfect. The room was beautiful, the staff was attentive, and the amenities were top-notch. We'll definitely be back!"
                image="https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?t=st=1746469972~exp=1746473572~hmac=a5a4bcbe131efc3caae5cf1c05e47cafd44ea60d7dcadbd3e3effe3381db838d&w=740"
              />
              <TestimonialCard
                name="David Chen"
                location="Toronto, Canada"
                rating={5}
                testimonial="The perfect getaway! From the moment we arrived, we felt like royalty. The ocean view from our room was breathtaking, and the food at the restaurant was exceptional."
                image="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1746469917~exp=1746473517~hmac=416a80b544288d5078f5a5c349cb71dd5a128ba245b7194da96be1320489a53a&w=740"
              />
              <TestimonialCard
                name="Emma Rodriguez"
                location="London, UK"
                rating={4}
                testimonial="We had a wonderful family vacation at Serenity Resort. The kids loved the pools, and we appreciated the attentive service. The rooms were spacious and comfortable."
                image="https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?t=st=1746469972~exp=1746473572~hmac=a5a4bcbe131efc3caae5cf1c05e47cafd44ea60d7dcadbd3e3effe3381db838d&w=740"
              />
            </div>
          </div>
        </section>
  )
}

export default TestimonialsSection