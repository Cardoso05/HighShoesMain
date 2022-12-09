import Skeleton from "react-loading-skeleton"
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"

import { slugify } from "../../../utils/slugify"
import { Section } from "./section"

const Brand = styled(RouterLink)`
  width: 200px;
  height: 100px;
  background: white;
  border-radius: 20px;

  display: grid;
  place-items: center;

  img {
    width: auto;
    height: 61px;
  }
`

export const Brands = ({ brands, loading = true }) => {
  return (
    <Section title="Escolha uma marca" loading={loading}>
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
              {loading
                ? <Skeleton width={200} height={100} />
                : (
                  <Brand to={`/marcas/${slugify(name)}`}>
                    <img src={img} alt="" />
                  </Brand>
                )}
            
          </li>
        ))}
      </ul>
    </Section>    
  )
}