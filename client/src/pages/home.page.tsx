"use client"

import HeroSection from "@/components/sections/hero.section";
import AboutSection from "@/components/sections/about.section";
import RoomsSection from "@/components/sections/rooms.section";
import ReservationSection from "@/components/sections/reservation.section"
import AmenitiesSection from "@/components/sections/amenities.section"
import MapSection from "@/components/sections/map.section"
import ServicesSection from "@/components/sections/services.section"
import ContactSection from "@/components/sections/contact.section"
import TestimonialsSection from "@/components/sections/testimonials.section";
import MainLayout from "@/layouts/main.layout";

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {

  const sectionList: React.FC[] = [
    HeroSection,
    AboutSection,
    RoomsSection,
    ReservationSection,
    AmenitiesSection,
    TestimonialsSection,
    ServicesSection,  
    ContactSection,
    MapSection
  ] ;


  return (
    <MainLayout>
      {
          sectionList.map(
            (Component, index) => <Component key={index} />
          )
        }
    </MainLayout>
        
  )
}








