import styled from "styled-components"

import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Newsletter from "../components/Newsletter"
import Slider from "../components/Slider"
import Products from "../components/Products"

import { popularProducts } from "../data"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 100px;
  gap: 20px;
`

export default function Home() {
  return (
    <Container>
      <Novidades />
      <Announcement/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </Container>
  )
}

function Product({ img, name, price }) {
  return (
    <div>
      <img src={img} />
      {name}
      {price}
    </div>

  )
}

function Novidades() {
  return (
    <>
      <h2>Novidades</h2>

      <ul>
        {popularProducts.map(({ id, img }) => (
          <li key={id}>
            <Product img={img} name="receba!!!" price="999999999" />
          </li>
        ))}
      </ul>
    </>    
  )
}