"use client"

import { Navigation } from "@/components/ms-love/navigation"
import { HeroSection } from "@/components/ms-love/hero-section"
import { SignatureCollection } from "@/components/ms-love/signature-collection"
import { EssentialCare } from "@/components/ms-love/essential-care"
import { RitualSection } from "@/components/ms-love/ritual-section"
import { Footer } from "@/components/ms-love/footer"
import { SmoothScrollProvider } from "@/components/ms-love/smooth-scroll-provider"

export default function MSLoveLandingPage() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-[#FFFAF5]">
        <Navigation />
        <HeroSection />
        <SignatureCollection />
        <EssentialCare />
        <RitualSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
