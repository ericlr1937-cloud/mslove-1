"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/ms-love/navigation"
import { Footer } from "@/components/ms-love/footer"

interface Product {
  name: string
  subtitle: string
  category: string
  image: string
  description: string
  tags: string[]
  efficacy: string
  published: boolean
  slug: string
}

const mistVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function ShopClient({ products }: { products: Product[] }) {
  return (
    <main className="relative min-h-screen bg-[#FFFAF5]">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-16 text-center bg-gradient-to-b from-[#F8E8E8] to-[#FFFAF5]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#C4A4A4] tracking-[0.3em] text-sm mb-4 font-[var(--font-cormorant)]"
        >
          THE COLLECTION
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[var(--font-playfair)] text-4xl md:text-6xl text-[#3D2B2B] mb-6"
        >
          Shop All Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[var(--font-cormorant)] text-xl text-[#8B7373] max-w-xl mx-auto"
        >
          Premium Korean feminine care — crafted for your most intimate ritual.
        </motion.p>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        {products.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-[var(--font-cormorant)] text-2xl text-[#8B7373]">
              Products coming soon...
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {products.map((product, index) => (
              <motion.article
                key={product.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={mistVariants}
                className="group flex flex-col"
              >
                <motion.div
                  className="relative w-full aspect-[3/4] overflow-hidden rounded-[2rem] mb-6"
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md rounded-full px-4 py-1.5 shadow">
                    <span className="text-[10px] tracking-wider text-[#C4A4A4] font-medium uppercase">
                      {product.efficacy}
                    </span>
                  </div>
                  <div className="absolute -bottom-6 left-6 right-6 h-16 bg-[#D4B5B5]/25 blur-2xl -z-10 group-hover:bg-[#D4B5B5]/40 transition-all duration-500" />
                </motion.div>

                <div className="text-center px-2 flex flex-col items-center">
                  <p className="text-[10px] tracking-[0.25em] text-[#C4A4A4] mb-2 uppercase">
                    {product.subtitle}
                  </p>
                  <h2 className="font-[var(--font-playfair)] text-xl md:text-2xl text-[#3D2B2B] mb-3">
                    {product.name}
                  </h2>
                  <p className="text-sm text-[#8B7373] font-[var(--font-cormorant)] leading-relaxed mb-5 max-w-[260px]">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mb-5">
                    {(product.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#F5E6E0]/90 text-[#8B6B6B] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs tracking-[0.15em] text-[#C4A4A4] border border-[#C4A4A4]/30 px-4 py-1.5 rounded-full">
                    {product.category}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      <div className="text-center pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm tracking-[0.15em] text-[#C4A4A4] hover:text-[#8B6B6B] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          BACK TO HOME
        </Link>
      </div>

      <Footer />
    </main>
  )
}
