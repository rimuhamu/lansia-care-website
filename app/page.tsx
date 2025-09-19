"use client"

import { StickyNav } from "@/components/sticky-nav"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <ProgramsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
