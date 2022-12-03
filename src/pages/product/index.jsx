import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "./layout"

import { newProducts } from "../../data"
import { slugify } from "../../utils/slugify"

export default function Product() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const currentProduct = newProducts.find(_product => slugify(_product.name) === slug)
    
    if(!currentProduct) {
      throw new Error("bru")
    }
    
    setProduct(currentProduct)
  }, [slug])

  return (
    <Layout
      {...product}
      loading={false}
    />
  )
}