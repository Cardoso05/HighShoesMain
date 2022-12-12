import styled from "styled-components"

import { Novidades } from "./components/novidades"
import { Brands } from "./components/brands"
import { Promotions } from "./components/promotions"
import { Products } from "./components/products"
import { FAQ } from "./components/faq"
import { Slider } from "./components/slider"

const Container = styled.main`
  max-width: 898px;
  margin: auto;

  --header-size: 64px;
  padding-top: var(--header-size);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  padding: 30px 0;
`

export const Layout = ({ loading = true, newProducts = [], brands = [], faq = [] }) => {
  return (
    <Container>
      <Slider/>
      <Novidades loading={loading} products={newProducts.slice(0, 4)} />
      <Brands loading={loading} brands={brands} />
      <Promotions loading={loading} />
      <Products loading={loading} products={newProducts.slice(4, 8)} />
      <FAQ loading={loading} questions={faq} />
      {/* <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/> */}
    </Container>
  )
}

export default Layout
