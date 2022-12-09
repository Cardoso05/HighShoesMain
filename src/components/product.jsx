import styled, { keyframes } from "styled-components"
import { Link as RouterLink } from "react-router-dom"
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

const ProductContainer = styled(RouterLink)`
  width: 200px;
  height: 310px;
  padding: 18px;

  color: #000;
  background: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  position: relative;

  .no-stock {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: max-content;
    color: #fff;
    font-weight: bold;
    z-index: 100;
  }

  &[data-empty="true"] {
    &::after {
      content: "";

      z-index: 20;
      background: rgba(0, 0, 0, 0.6);

      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: not-allowed;

      border-radius: 20px;
    }
  }

  img {
    width: 100%;
    height: auto;
    align-self: center;
    /* transform: rotate(-30deg); */
  }

  &:not([data-empty="true"]):hover, &:not([data-empty="true"]):focus {
    img {
      transition: 600ms transform;
      /* transform: translateY(-40%); */
      animation: 
        ${GoUpAnimation} 600ms cubic-bezier(0.175, 0.885, 0.32, 1) 1,
        ${HeavenFloatingAnimation} 3s ease-in-out infinite;
      animation-delay: 0ms, 600ms;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
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

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "brl",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
})

export const Product = ({ img, name, price, stock }) => {
  const ranOutOfStock = stock === 0

  return (
    <ProductContainer data-empty={ranOutOfStock} to={ranOutOfStock ? "" :  `/produtos/${slugify(name)}`}>
      <img
        src={img}
        alt=""
      />

      {ranOutOfStock && <p className="no-stock">Sem Estoque!</p>}

      <section>
        <p>
          <strong>{name}</strong>
        </p>
        {/* <small>Apenas {stock} disponíveis</small> */}
        
        <footer>
          <span>{currencyFormatter.format(price)}</span>
        
          <Button>
            <ArrowRight width={24} height={24}  />
          </Button>
        </footer>
      </section>
    </ProductContainer>

  )
}