import styled from "styled-components"

import { slugify } from "../../../utils/slugify"
import { Section } from "./section"

const Brand = styled.a`
  width: 200px;
  height: 100px;
  background: white;
  border-radius: 20px;

  display: grid;
  place-items: center;

  img {
    width: 73px;
    height: 61px;
  }
`

export const Brands = ({ brands }) => {
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
        {brands.map(({ id, img, name }) => (
          <li key={id}>
            <Brand href={`/marcas/${slugify(name)}`}>
              <img src={img} alt="" />
            </Brand>
          </li>
        ))}
      </ul>
    </Section>    
  )
}