"use client"

import HeaderSection from "@/components/sections/header.section";
import HeroSection from "@/components/sections/hero.section";
import AboutSection from "@/components/sections/about.section";
import RoomsSection from "@/components/sections/rooms.section";
import ReservationSection from "@/components/sections/reservation.section"
import AmenitiesSection from "@/components/sections/amenities.section"
import FooterSection from "@/components/sections/footer.section"
import MapSection from "@/components/sections/map.section"
import ServicesSection from "@/components/sections/services.section"
import ContactSection from "@/components/sections/contact.section"
import TestimonialsSection from "@/components/sections/testimonials.section";

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {

  const sectionList: React.FC[] = [
    HeroSection,
    AboutSection,
    RoomsSection,
    RoomsSection,
    ReservationSection,
    AmenitiesSection,
    TestimonialsSection,
    ServicesSection,  
    ContactSection,
    MapSection
  ] ;


  return (
    <div className="flex min-h-screen flex-col">
      <HeaderSection />

      <main className="flex-1">
        {
          sectionList.map(
            (Component, index) => <Component key={index} />
          )
        }
      </main>

      <FooterSection />
    </div>
  )
}








