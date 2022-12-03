import { Layout } from "./layout"

import { newProducts, brands } from "../../data"

export default function Products() {
  return (
    <Layout
      products={newProducts}
      brands={brands}
    />
  )
}