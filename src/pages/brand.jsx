import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Product } from "../components/product"

import { brands, newProducts as products } from "../data"
import { slugify } from "../utils/slugify"

const Banner = styled.section`
  width: 100%;
  height: 200px;

  display: grid;
  place-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.backgroundImg});
  background-position: center;

  color: #000;

  h1 {
    font-size: 35px;
  }
`

const Wrapper = styled.main`
    width: 100%
`

const Container = styled.section`
max-width: 991px;
width: 100%;
margin: 0 auto;

  display: flex;
  padding: 40px;
  gap: 50px;
`

const Gallery = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 40px 0;
`

export const Layout = () => {
    const { slug  } = useParams()
    const [brand, setBrand] = useState(null)
    const [filteredProducts, setProducts] = useState([])

    useEffect(() => {
        const currentBrand = brands.find(_brand => slugify(_brand.name) === slug)

        if(!currentBrand) {
            throw new Error("bru")
        }

        setBrand(currentBrand)
        console.log(products.filter(product => product.brandId === currentBrand.id))
        setProducts(products.filter(product => product.brandId === currentBrand.id))
  }, [slug])

  return (
    <>
      <Banner backgroundImg={brand?.img}>
        <h1>{brand?.name}.</h1>
      </Banner>
      <Wrapper>
        <Container>
            <Gallery>
            {filteredProducts.map(({ id, ...props }) => (
                <li key={id}>
                    <Product {...props} />
                </li>
            ))}
            </Gallery>
        </Container>
      </Wrapper>
    </>
  )
}

export default Layout