import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

import { slugify } from "../../../utils/slugify"
import { Button } from "../../../components/button"
import { Section } from "./section"
import { ArrowRight } from "@material-ui/icons"
import Skeleton from "react-loading-skeleton"

const Image = styled(RouterLink)`
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

export const Products = ({ products, loading = true }) => {
  return (
    <Section oading={loading}>
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
            {loading ? (
              <Skeleton width={200} height={200} />
            ) : (
              <Image to={`/produtos/${slugify(name)}`}>
                <img src={img} alt="" />
              </Image>
            )}
          </li>
        ))}
      </ul>

      <Button as={RouterLink} to="/produtos" style={{ width: "max-content" }}>
        Ver Produtos <ArrowRight />
      </Button>
    </Section>    
  )
}