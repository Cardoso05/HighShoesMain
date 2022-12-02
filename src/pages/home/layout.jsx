import styled from "styled-components"

import { newProducts, brands, faq } from "../../data"

import { Novidades } from "./components/novidades"
import { Brands } from "./components/brands"
import { Promotions } from "./components/promotions"
import { Products } from "./components/products"
import { FAQ } from "./components/faq"

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

export const Layout = ({ loading = true }) => {
  return (
    <Container>
      <Novidades products={newProducts} />
      <Brands brands={brands} />
      <Promotions />
      <Products products={newProducts} />
      <FAQ questions={faq} />
      {/* <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/> */}
    </Container>
  )
}

export default Layout
