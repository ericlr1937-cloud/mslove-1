"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { WaterRippleButton } from "./water-ripple-button"

const mistVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)"
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
}

function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="absolute right-0 top-0 w-full md:w-2/3 h-full"
    >
      <div className="relative w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77956a8c166dfdb256d10c2a81fae535-KBUTyjP8mO4UXEVsq1TBxOv7zbfkJi.jpg"
          alt="MS LOVE Brand Ambassador"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFAF5] via-[#FFFAF5]/55 to-transparent" />
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F8E8E8] to-[#FFFAF5]">
      {/* Leaf Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="leaf-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M10 2 Q15 10 10 18 Q5 10 10 2 M10 4 L10 16"
              fill="none"
              stroke="#C4A4A4"
              strokeWidth="0.3"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Parallax ambassador image — isolated in its own component */}
      <ParallaxImage />

      {/* Left safe-zone content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24">
        <div className="max-w-xl">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={mistVariants}
            className="text-[#C4A4A4] tracking-[0.3em] text-sm mb-6 font-[var(--font-cormorant)]"
          >
            KOREAN LUXURY FEMININE CARE
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={mistVariants}
            className="font-[var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl text-[#3D2B2B] leading-tight mb-4"
          >
            MS LOVE.
          </motion.h1>

          <motion.h2
            custom={2}
            initial="hidden"
            animate="visible"
            variants={mistVariants}
            className="font-[var(--font-cormorant)] text-2xl md:text-3xl text-[#8B6B6B] italic mb-8"
          >
            Revitalize Your Cellular Essence.
          </motion.h2>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={mistVariants}
            className="text-[#8B7373] text-lg leading-relaxed mb-10 font-[var(--font-cormorant)]"
          >
            The symbiotic contract between skin and nature.
            Experience the gentle embrace of Deep Restoration rituals
            and Cellular Harmony — crafted for the most delicate care.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={mistVariants}
            className="flex flex-wrap gap-4 relative z-20"
          >
            <WaterRippleButton variant="primary">
              EXPLORE THE COLLECTION
            </WaterRippleButton>
            <WaterRippleButton variant="secondary">
              DISCOVER THE SCIENCE
            </WaterRippleButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#C4A4A4]/50 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-[#C4A4A4] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
