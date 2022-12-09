import { KeyboardArrowDown } from "@material-ui/icons"
import { useMemo, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"
import { Product } from "../../components/product"

import { brands } from "../../data"
import { slugify } from "../../utils/slugify"

const Banner = styled.section`
  width: 100%;
  height: 200px;

  display: grid;
  place-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1600&q=100);
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

const Brand = styled(RouterLink)`
  width: 200px;
  height: 100px;
  background: white;
  border-radius: 20px;

  display: grid;
  place-items: center;

  img {
    width: auto;
    height: 61px
  }
`

export const Layout = () => {
  return (
    <>
      <Banner>
        <h1>Marcas.</h1>
      </Banner>
      <Wrapper>
        <Container>
            <Gallery>
            {brands.map(({ id, name, img }) => (
                <li key={id}>
                    <Brand to={`/marcas/${slugify(name)}`}>
                        <img src={img} alt="" />
                    </Brand>
                </li>
            ))}
            </Gallery>
        </Container>
      </Wrapper>
    </>
  )
}

export default Layout