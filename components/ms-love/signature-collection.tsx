"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { WaterRippleButton } from "./water-ripple-button"

// Hydration mist entrance animation
const mistVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: "blur(12px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const titleMistVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

export function SignatureCollection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="collection" ref={ref} className="py-24 md:py-32 px-6 md:px-16 bg-[#FFFAF5] relative overflow-hidden">
      {/* Subtle Leaf Watermark */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <path 
            d="M100 20 Q160 100 100 200 Q40 300 100 380 M100 40 L100 360" 
            fill="none" 
            stroke="#C4A4A4" 
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={titleMistVariants}
            className="text-[#C4A4A4] tracking-[0.3em] text-sm mb-4"
          >
            SIGNATURE COLLECTION
          </motion.p>
          <motion.h2
            variants={titleMistVariants}
            className="font-[var(--font-playfair)] text-3xl md:text-5xl text-[#3D2B2B] mb-6"
          >
            The Complete Ritual
          </motion.h2>
          <motion.p
            variants={titleMistVariants}
            className="font-[var(--font-cormorant)] text-xl text-[#8B7373] max-w-2xl mx-auto"
          >
            4 expertly curated feminine care essentials for Deep Restoration. 
            Gentle & nourishing — your Cellular Harmony ritual, elevated.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Gift Set Card */}
          <motion.div
            variants={mistVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 30px 60px rgba(196,164,164,0.2)",
              scale: 1.02
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1a261f9dbfa2110b03d3600f2ba2230-uAR41oXY6dqFa3a4Zug9AdolgJeRzm.jpg"
                alt="MS LOVE Signature Gift Set"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B2B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-white/50"
            >
              <p className="text-xs tracking-[0.2em] text-[#C4A4A4] mb-2">GIFT SET</p>
              <h3 className="font-[var(--font-playfair)] text-xl text-[#3D2B2B] mb-2">
                Cellular Revival Ritual Kit
              </h3>
              <p className="text-sm text-[#8B7373] font-[var(--font-cormorant)]">
                The symbiotic contract between skin and nature — Deep Restoration in every step
              </p>
            </motion.div>

            {/* Efficacy Badge */}
            <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-full px-4 py-2">
              <span className="text-xs tracking-wider text-[#C4A4A4]">CELLULAR REPAIR</span>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="grid gap-6">
            {/* Antibacterial Gel */}
            <motion.div
              variants={mistVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px rgba(196,164,164,0.15)",
                scale: 1.02
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg"
            >
              <div className="flex">
                <div className="w-2/5 aspect-square relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ef95f2eacc6e5725ee9421b289c39fbe-18SnZkuyTma0uz0blNntd6RsZMKQff.jpg"
                    alt="MS LOVE Feminine Antibacterial Gel"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <p className="text-xs tracking-[0.2em] text-[#C4A4A4] mb-2">ESSENTIAL CARE</p>
                  <h3 className="font-[var(--font-playfair)] text-lg text-[#3D2B2B] mb-2">
                    Feminine Antibacterial Gel
                  </h3>
                  <p className="text-sm text-[#8B7373] font-[var(--font-cormorant)] mb-4">
                    Gentle cleansing with antibacterial protection
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-[#F5E6E0] text-[#8B6B6B] px-3 py-1 rounded-full">pH Balanced</span>
                    <span className="text-xs bg-[#F5E6E0] text-[#8B6B6B] px-3 py-1 rounded-full">Soothing</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Herbal Patch */}
            <motion.div
              variants={mistVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px rgba(196,164,164,0.15)",
                scale: 1.02
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg"
            >
              <div className="flex">
                <div className="w-2/5 aspect-square relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65026373713679c3ce59f5cd7258a829-FrlUwQ7Cg1mcHdr8gJehHGFdQHrvX9.jpg"
                    alt="MS LOVE Herbal Cool Steaming Patch"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <p className="text-xs tracking-[0.2em] text-[#C4A4A4] mb-2">WELLNESS</p>
                  <h3 className="font-[var(--font-playfair)] text-lg text-[#3D2B2B] mb-2">
                    Herbal Cool Steaming Patch
                  </h3>
                  <p className="text-sm text-[#8B7373] font-[var(--font-cormorant)] mb-4">
                    Natural herbal infusion for cooling comfort
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-[#F5E6E0] text-[#8B6B6B] px-3 py-1 rounded-full">Herbal</span>
                    <span className="text-xs bg-[#F5E6E0] text-[#8B6B6B] px-3 py-1 rounded-full">Cooling</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <WaterRippleButton variant="primary">
            SHOP THE RITUAL
          </WaterRippleButton>
        </motion.div>
      </div>
    </section>
  )
}
