import styled from "styled-components"

import { slugify } from "../../../utils/slugify"
import { Button } from "../../../components/button"
import { Section } from "./section"
import { ArrowRight } from "@material-ui/icons"

const Image = styled.a`
  width: 220px;

  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    transition: 600ms transform;
  }

  &:hover {
    img {
      transform: translateY(-20%);
    }
  }
`

export const Products = ({ products }) => {
  return (
    <Section title="Escolha uma marca">
      <ul
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {products.map(({ id, img, name }) => (
          <li key={id}>
            <Image href={`/marcas/${slugify(name)}`}>
              <img src={img} alt="" />
            </Image>
          </li>
        ))}
      </ul>

      <Button as="a" href="/products" style={{ width: "max-content" }}>
        Ver Produtos <ArrowRight />
      </Button>
    </Section>    
  )
}