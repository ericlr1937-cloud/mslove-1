"use client"

import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = "smooth"
    return () => {
      html.style.scrollBehavior = ""
    }
  }, [])

  return <>{children}</>
}
