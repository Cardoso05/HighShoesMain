import { Layout } from "./layout"

import { brands } from "../../data"
import { useCart } from "../../context/cart-store"

export default function Products() {
  const { products } = useCart()

  return (
    <Layout
      products={products}
      brands={brands}
    />
  )
}