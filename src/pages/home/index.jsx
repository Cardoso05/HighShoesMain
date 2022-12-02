import { Layout } from "./layout"

import { newProducts, brands, faq } from "../../data"

export default function Home() {
  return (
    <Layout
      newProducts={newProducts}
      brands={brands}
      faq={faq}
      loading={false}
    />
  )
}