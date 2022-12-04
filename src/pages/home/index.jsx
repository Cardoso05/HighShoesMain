import { Layout } from "./layout"

import { useCart } from "../../context/cart-store"
import { brands, faq } from "../../data"

export default function Home() {
  const { products } = useCart()
  
  return (
    <Layout
      newProducts={products}
      brands={brands}
      faq={faq}
      loading={false}
    />
  )
}