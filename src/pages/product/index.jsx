import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "./layout"

import { useCart } from "../../context/cart-store"
import { slugify } from "../../utils/slugify"

export default function Product() {
  const { slug } = useParams()
  const { products } = useCart()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const currentProduct = products.find(_product => slugify(_product.name) === slug)
    
    if(!currentProduct) {
      throw new Error("bru")
    }
    
    setProduct(currentProduct)
  }, [products, slug])

  return (
    <Layout
      {...product}
      loading={false}
    />
  )
}