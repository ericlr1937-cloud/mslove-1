import { Metadata } from "next"
import { promises as fs } from "fs"
import path from "path"
import ShopClient from "./ShopClient"

export const metadata: Metadata = {
  title: "Shop — MS LOVE",
  description: "Browse all MS LOVE premium Korean feminine care products.",
}

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

async function getProducts(): Promise<Product[]> {
  const dir = path.join(process.cwd(), "_data", "products")
  let files: string[] = []
  try {
    files = await fs.readdir(dir)
  } catch {
    return []
  }
  const products = await Promise.all(
    files
      .filter((f) => f.endsWith(".json"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf-8")
        const data = JSON.parse(raw)
        return { ...data, slug: file.replace(".json", "") } as Product
      })
  )
  return products.filter((p) => p.published)
}

export default async function ShopPage() {
  const products = await getProducts()
  return <ShopClient products={products} />
}
