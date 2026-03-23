"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"

interface Ripple {
  id: number
  x: number
  y: number
}

interface WaterRippleButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  href?: string
}

export function WaterRippleButton({ 
  children, 
  className = "", 
  onClick,
  variant = "primary",
  href
}: WaterRippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const element = buttonRef.current || linkRef.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples(prev => [...prev, { id, x, y }])

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id))
    }, 1200)

    onClick?.()
  }

  const baseStyles = variant === "primary"
    ? "bg-[#C4A4A4] text-white hover:bg-[#B39494]"
    : "border border-[#C4A4A4] text-[#C4A4A4] hover:bg-[#C4A4A4]/10"

  const sharedClassName = `relative overflow-hidden px-10 py-4 tracking-[0.2em] text-sm rounded-full transition-colors inline-block ${baseStyles} ${className}`

  const rippleContent = (
    <>
      {/* SVG Water Ripple Effect */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: 100,
              height: 100,
              marginLeft: -50,
              marginTop: -50,
              pointerEvents: "none",
            }}
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full"
            >
              <defs>
                <radialGradient id={`ripple-gradient-${ripple.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                  <stop offset="40%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="70%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>
              {/* Multiple concentric circles for organic water effect */}
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="rgba(255,255,255,0.4)" 
                strokeWidth="1"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="35" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="0.8"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="25" 
                fill="none" 
                stroke="rgba(255,255,255,0.2)" 
                strokeWidth="0.6"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="48" 
                fill={`url(#ripple-gradient-${ripple.id})`}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.a
        ref={linkRef}
        href={href}
        onClick={handleClick}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(196,164,164,0.3)" }}
        whileTap={{ scale: 0.98 }}
        className={sharedClassName}
      >
        {rippleContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleClick}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(196,164,164,0.3)" }}
      whileTap={{ scale: 0.98 }}
      className={sharedClassName}
    >
      {/* SVG Water Ripple Effect */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: 100,
              height: 100,
              marginLeft: -50,
              marginTop: -50,
              pointerEvents: "none",
            }}
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full"
            >
              <defs>
                <radialGradient id={`ripple-gradient-${ripple.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                  <stop offset="40%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="70%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>
              {/* Multiple concentric circles for organic water effect */}
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="rgba(255,255,255,0.4)" 
                strokeWidth="1"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="35" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="0.8"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="25" 
                fill="none" 
                stroke="rgba(255,255,255,0.2)" 
                strokeWidth="0.6"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="48" 
                fill={`url(#ripple-gradient-${ripple.id})`}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
