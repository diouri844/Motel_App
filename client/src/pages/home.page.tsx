"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, CheckCircle, MapPin, Phone, Star, Wifi, Utensils, Dumbbell, Waves, Coffee } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"
/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Serenity Resort</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#rooms" className="text-sm font-medium transition-colors hover:text-primary">
              Rooms
            </a>
            <a href="#amenities" className="text-sm font-medium transition-colors hover:text-primary">
              Amenities
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <div>
            <Button>Book Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury hotel view"
            className="object-cover brightness-[0.7]"
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
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Explore Rooms
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
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

        {/* Rooms Section */}
        <section id="rooms" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Luxurious Rooms</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our selection of meticulously designed rooms and suites, each offering a perfect blend of
                comfort and elegance.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Rooms</TabsTrigger>
                  <TabsTrigger value="standard">Standard</TabsTrigger>
                  <TabsTrigger value="deluxe">Deluxe</TabsTrigger>
                  <TabsTrigger value="suite">Suites</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RoomCard
                    title="Standard Room"
                    description="Comfortable room with all essential amenities for a pleasant stay."
                    price={199}
                    image="https://plus.unsplash.com/premium_photo-1661963657190-ecdd1ca794f9?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Free WiFi", '32" TV', "Air Conditioning"]}
                  />
                  <RoomCard
                    title="Deluxe Ocean View"
                    description="Spacious room with a private balcony overlooking the ocean."
                    price={299}
                    image="https://plus.unsplash.com/premium_photo-1700153918743-26308f82e616?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Ocean View", "Free WiFi", '42" TV', "Mini Bar"]}
                    featured={true}
                  />
                  <RoomCard
                    title="Executive Suite"
                    description="Luxurious suite with separate living area and premium amenities."
                    price={399}
                    image="https://images.unsplash.com/photo-1595695162612-1d7fc11e46ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Separate Living Area", "Jacuzzi", '50" TV', "Premium Toiletries"]}
                  />
                  <RoomCard
                    title="Family Room"
                    description="Spacious room designed for families with additional beds."
                    price={349}
                    image="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed + 2 Singles", "Family Amenities", "Game Console", "Mini Fridge"]}
                  />
                  <RoomCard
                    title="Honeymoon Suite"
                    description="Romantic suite with special amenities for couples."
                    price={449}
                    image="https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Ocean View", "Private Hot Tub", "Champagne Service"]}
                  />
                  <RoomCard
                    title="Presidential Suite"
                    description="Our most luxurious accommodation with exclusive services."
                    price={899}
                    image="https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                    features={["King Bed", "Private Terrace", "Butler Service", "Private Dining"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="standard" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RoomCard
                    title="Standard Room"
                    description="Comfortable room with all essential amenities for a pleasant stay."
                    price={199}
                    image="https://plus.unsplash.com/premium_photo-1661963657190-ecdd1ca794f9?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Free WiFi", '32" TV', "Air Conditioning"]}
                  />
                  <RoomCard
                    title="Standard Twin"
                    description="Comfortable room with twin beds and essential amenities."
                    price={199}
                    image="https://images.unsplash.com/photo-1609587639086-b4cbf85e4355?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["Twin Beds", "Free WiFi", '32" TV', "Air Conditioning"]}
                  />
                  <RoomCard
                    title="Standard Garden View"
                    description="Comfortable room with a view of our beautiful gardens."
                    price={219}
                    image="https://images.unsplash.com/photo-1655731976375-572490707000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Garden View", "Free WiFi", '32" TV']}
                  />
                </div>
              </TabsContent>

              <TabsContent value="deluxe" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RoomCard
                    title="Deluxe Room"
                    description="Spacious room with upgraded amenities and comfort."
                    price={259}
                    image="https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Sitting Area", "Free WiFi", '42" TV']}
                  />
                  <RoomCard
                    title="Deluxe Ocean View"
                    description="Spacious room with a private balcony overlooking the ocean."
                    price={299}
                    image="https://images.unsplash.com/photo-1551918120-c25861b95d27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Ocean View", "Free WiFi", '42" TV', "Mini Bar"]}
                    featured={true}
                  />
                  <RoomCard
                    title="Deluxe Corner"
                    description="Spacious corner room with panoramic views and extra space."
                    price={329}
                    image="https://plus.unsplash.com/premium_photo-1733760124939-5a725420c2e4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Panoramic View", "Lounge Area", "Premium Amenities"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="suite" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RoomCard
                    title="Executive Suite"
                    description="Luxurious suite with separate living area and premium amenities."
                    price={399}
                    image="https://images.unsplash.com/photo-1595695162612-1d7fc11e46ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Separate Living Area", "Jacuzzi", '50" TV']}
                  />
                  <RoomCard
                    title="Honeymoon Suite"
                    description="Romantic suite with special amenities for couples."
                    price={449}
                    image="https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    features={["King Bed", "Ocean View", "Private Hot Tub", "Champagne Service"]}
                  />
                  <RoomCard
                    title="Presidential Suite"
                    description="Our most luxurious accommodation with exclusive services."
                    price={899}
                    image="https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                    features={["King Bed", "Private Terrace", "Butler Service", "Private Dining"]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="py-16 md:py-24 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ReservationForm />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Perfect Stay</h2>
              <p className="text-muted-foreground mb-6">
                Reserve your room directly with us for the best rates and exclusive benefits. Our simple booking process
                ensures a hassle-free experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Best Rate Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      Find a lower rate elsewhere? We'll match it and give you an additional 10% off.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Flexible Cancellation</h3>
                    <p className="text-sm text-muted-foreground">
                      Plans change. Most rooms offer free cancellation up to 24 hours before arrival.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Special Packages</h3>
                    <p className="text-sm text-muted-foreground">
                      Check our special offers for seasonal discounts and package deals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
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

        {/* Gallery Section */}
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

        {/* Testimonials Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Have questions or need assistance? Our team is here to help you plan your perfect stay.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">123 Paradise Bay, Tropical Island, 98765</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@serenityresort.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
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
      </main>

      <footer className="bg-muted/30 border-t">
        <div className="container py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Serenity Resort</h3>
              <p className="text-muted-foreground mb-4">
                Experience luxury and comfort in a breathtaking natural setting.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="text-muted-foreground hover:text-foreground">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="text-muted-foreground hover:text-foreground">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Spa & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Dining
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Activities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Weddings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">Subscribe to our newsletter for special offers and updates.</p>
              <form className="space-y-2">
                <Input placeholder="Enter your email" type="email" />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Serenity Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function RoomCard({ title, description, price, image, features, featured = false }) {
  return (
    <Card className={cn("overflow-hidden", featured && "ring-2 ring-primary")}>
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        {featured && <Badge className="absolute top-2 right-2">Popular Choice</Badge>}
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          <div className="pt-2">
            <p className="text-2xl font-bold">
              ${price} <span className="text-sm font-normal text-muted-foreground">/ night</span>
            </p>
          </div>
          <div className="pt-4">
            <h4 className="text-sm font-medium mb-2">Room Features:</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <Button className="w-full">Book Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ReservationForm() {
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)

  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="room-type" className="text-sm font-medium">
              Room Type
            </label>
            <select
              id="room-type"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select Room Type</option>
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Ocean View</option>
              <option value="executive">Executive Suite</option>
              <option value="family">Family Room</option>
              <option value="honeymoon">Honeymoon Suite</option>
              <option value="presidential">Presidential Suite</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Check-out Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !checkOut && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="adults" className="text-sm font-medium">
                Adults
              </label>
              <select
                id="adults"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="children" className="text-sm font-medium">
                Children
              </label>
              <select
                id="children"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="special-requests" className="text-sm font-medium">
              Special Requests
            </label>
            <Textarea id="special-requests" placeholder="Any special requests or preferences?" />
          </div>

          <Button type="submit" className="w-full">
            Check Availability
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function AmenityCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg border">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function TestimonialCard({ name, location, rating, testimonial, image }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={name}  className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn("h-4 w-4", i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted")} />
          ))}
        </div>
        <p className="text-muted-foreground italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}
