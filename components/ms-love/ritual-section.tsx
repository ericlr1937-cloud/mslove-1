"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Hydration mist entrance animation
const mistVariants = {
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

const benefits = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#C4A4A4" strokeWidth="1.5" />
        <path d="M20 8 Q28 14 28 22 Q28 30 20 32 Q12 30 12 22 Q12 14 20 8" stroke="#C4A4A4" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="10" x2="20" y2="30" stroke="#C4A4A4" strokeWidth="1" />
      </svg>
    ),
    title: "Natural Botanicals",
    description: "Carefully selected plant extracts from pristine Korean sources for your daily ritual"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#C4A4A4" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="8" stroke="#C4A4A4" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="3" fill="#C4A4A4" />
      </svg>
    ),
    title: "Cellular Harmony",
    description: "Scientifically formulated to restore optimal intimate cellular balance and harmony"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#C4A4A4" strokeWidth="1.5" />
        <path d="M12 20 L18 26 L28 14" stroke="#C4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dermatologist Tested",
    description: "Clinically proven gentle formulas delivering deep restoration, safe for sensitive skin"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#C4A4A4" strokeWidth="1.5" />
        <path d="M20 10 L20 20 L26 26" stroke="#C4A4A4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Long-lasting Care",
    description: "24-hour deep restoration with time-release technology for sustained cellular repair"
  }
]

export function RitualSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ritual" ref={ref} className="py-24 md:py-32 px-6 md:px-16 bg-[#FFFAF5] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={mistVariants}
          className="text-center mb-20"
        >
          <p className="text-[#C4A4A4] tracking-[0.3em] text-sm mb-4">THE RITUAL SCIENCE</p>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl text-[#3D2B2B] mb-6">
            Why MS LOVE
          </h2>
          <p className="font-[var(--font-cormorant)] text-xl text-[#8B7373] max-w-2xl mx-auto">
            Every ritual is a testament to Korean beauty innovation — 
            merging ancestral wisdom with cutting-edge science for lasting Cellular Harmony.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ 
                opacity: 0, 
                y: 40,
                filter: "blur(8px)"
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)"
              } : {}}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(196,164,164,0.15)"
              }}
              className="bg-white rounded-[2rem] p-8 text-center shadow-md hover:shadow-xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#F8F0ED] rounded-full"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="font-[var(--font-playfair)] text-lg text-[#3D2B2B] mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#8B7373] font-[var(--font-cormorant)] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.95,
            filter: "blur(8px)"
          }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            filter: "blur(0px)"
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#F5E6E0] to-[#F8F0ED] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Leaf */}
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="200" height="300" viewBox="0 0 200 300" fill="none">
              <path d="M100 10 Q160 80 100 150 Q40 220 100 290 M100 20 L100 280" stroke="#C4A4A4" strokeWidth="3" />
            </svg>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="font-[var(--font-cormorant)] text-2xl md:text-3xl text-[#3D2B2B] italic leading-relaxed max-w-3xl mx-auto relative z-10"
          >
            &ldquo;The symbiotic contract between skin and nature — 
            where every ritual becomes a moment of Deep Restoration, 
            Cellular Harmony, and pure, gentle care.&rdquo;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="mt-6 text-[#C4A4A4] tracking-[0.2em] text-sm"
          >
            — MS LOVE PHILOSOPHY
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
