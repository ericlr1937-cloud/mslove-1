"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { WaterRippleButton } from "./water-ripple-button"

const products = [
  {
    id: 1,
    name: "Deep Restoration Cleanser",
    subtitle: "Daily Ritual",
    description: "Korean-formulated intimate wash with natural botanicals for pH-balanced cellular harmony and deep restoration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6be28a4da83ef808b1a17d33d737be58-Xrfw5ufRas7MIclb28QCQsAkCQ9VgU.jpg",
    tags: ["Natural", "pH Balanced"],
    efficacy: "Deep Hydration"
  },
  {
    id: 2,
    name: "Feminine Antibacterial Gel",
    subtitle: "Protective Ritual",
    description: "Advanced antibacterial formula with gentle plant extracts for intimate protection and lasting cellular harmony.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ef95f2eacc6e5725ee9421b289c39fbe-18SnZkuyTma0uz0blNntd6RsZMKQff.jpg",
    tags: ["Antibacterial", "Soothing"],
    efficacy: "Protection"
  },
  {
    id: 3,
    name: "Herbal Steaming Patch",
    subtitle: "Comfort Ritual",
    description: "Traditional herbal ingredients infused into cooling patches for natural deep restoration and gentle relief.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65026373713679c3ce59f5cd7258a829-FrlUwQ7Cg1mcHdr8gJehHGFdQHrvX9.jpg",
    tags: ["Herbal", "Cooling"],
    efficacy: "Wellness"
  }
]

// Hydration mist entrance — custom index drives stagger delay inside variants
const mistVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: "blur(12px)"
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.18,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
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

export function EssentialCare() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 px-6 md:px-16 bg-[#FFFAF5] relative overflow-hidden">
      {/* Background leaf watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="leaf-pattern-ec" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M15 3 Q22 15 15 27 Q8 15 15 3" fill="none" stroke="#C4A4A4" strokeWidth="0.2" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern-ec)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleMistVariants}
          className="text-center mb-20"
        >
          <p className="text-[#C4A4A4] tracking-[0.3em] text-sm mb-4 uppercase">Essential Care</p>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl text-[#3D2B2B] mb-6">
            Nourish. Protect. Restore.
          </h2>
          <p className="font-[var(--font-cormorant)] text-xl text-[#8B7373] max-w-2xl mx-auto leading-relaxed">
            Premium Korean formulations designed for your most intimate ritual. 
            Each product embodies the harmony of Deep Restoration and Cellular Harmony.
          </p>
        </motion.div>

        {/* Asymmetric Bleed Layout — no card containers */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-14">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={mistVariants}
              className="group flex flex-col"
            >
              {/* Full-bleed image — no surrounding card */}
              <motion.div 
                className="relative w-full aspect-[3/4] overflow-hidden rounded-[2rem] mb-7"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />

                {/* Efficacy badge — on image */}
                <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md rounded-full px-4 py-1.5 shadow">
                  <span className="text-[10px] tracking-wider text-[#C4A4A4] font-medium uppercase">{product.efficacy}</span>
                </div>

                {/* Dimensional shadow cast below the image */}
                <div className="absolute -bottom-6 left-6 right-6 h-16 bg-[#D4B5B5]/25 blur-2xl -z-10 group-hover:bg-[#D4B5B5]/40 transition-all duration-500" />
              </motion.div>

              {/* Text — clean, centered below the image */}
              <div className="text-center px-2 flex flex-col items-center">
                <p className="text-[10px] tracking-[0.25em] text-[#C4A4A4] mb-2 uppercase">
                  {product.subtitle}
                </p>

                <h3 className="font-[var(--font-playfair)] text-xl md:text-2xl text-[#3D2B2B] mb-3">
                  {product.name}
                </h3>

                <p className="text-sm text-[#8B7373] font-[var(--font-cormorant)] leading-relaxed mb-5 max-w-[260px]">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  {product.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-[#F5E6E0]/90 text-[#8B6B6B] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Discover arrow button */}
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm tracking-[0.15em] text-[#C4A4A4] flex items-center gap-2 group/btn"
                >
                  DISCOVER
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <WaterRippleButton variant="primary">
            VIEW ALL PRODUCTS
          </WaterRippleButton>
        </motion.div>
      </div>
    </section>
  )
}
