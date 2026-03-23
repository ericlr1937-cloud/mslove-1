"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { WaterRippleButton } from "./water-ripple-button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#FFFAF5]/80 backdrop-blur-xl shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="font-[var(--font-playfair)] text-2xl md:text-3xl tracking-wider text-[#8B6B6B]"
        >
          MS LOVE
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Collection", "About", "Ritual", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="text-sm tracking-widest text-[#8B7373] hover:text-[#C4A4A4] transition-colors uppercase"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <WaterRippleButton variant="primary" className="!px-6 !py-2 !text-xs !tracking-widest">
          SHOP
        </WaterRippleButton>
      </div>
    </motion.nav>
  )
}
