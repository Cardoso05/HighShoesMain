import styled, { keyframes } from "styled-components"
import { ArrowRight } from "@material-ui/icons"

import { slugify } from "../utils/slugify"
import { Button } from "./button"

const HeavenFloatingAnimation = keyframes`
  from {
    transform: translateY(-40%);
  }

  50% {
    transform: translateY(-36%);
  }

  to {
    transform: translateY(-40%);
  }
`

const GoUpAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  
  to {
    transform: translateY(-40%);
  }
`

const ProductContainer = styled.a`
  width: 200px;
  height: 310px;
  padding: 18px;

  color: #000;
  background: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 230px;
    height: auto;
    align-self: center;
    /* transform: rotate(-30deg); */
  }

  &:hover, &:focus {
    img {
      transition: 600ms transform;
      /* transform: translateY(-40%); */
      animation: 
        ${GoUpAnimation} 600ms cubic-bezier(0.175, 0.885, 0.32, 1) 1,
        ${HeavenFloatingAnimation} 3s ease-in-out infinite;
      animation-delay: 0ms, 600ms;
    }
  }

  footer {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    button {
      width: 36px;
      height: 36px;
      padding: 0px;
      justify-content: center;

      border-radius: 999px;

      svg {
        color: #fff;
      }
    }
  }
`

export const Product = ({ img, name, price }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "brl",
  })

  

  return (
    <ProductContainer href={`/produto/${slugify(name)}`}>
      <img
        src={img}
        alt=""
      />

      <p>
        <strong>{name}</strong>
      </p>
      
      <footer>
        <span>{formatter.format(price)}</span>
        
        <Button>
          <ArrowRight width={24} height={24}  />
        </Button>
      </footer>
    </ProductContainer>

  )
}