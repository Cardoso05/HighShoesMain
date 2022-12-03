import styled from "styled-components"
import { ArrowRight } from "@material-ui/icons"

import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { useState } from "react"

const Container = styled.main`
  width: 100%;
  max-width: 991px;
  margin: auto;

  padding: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
  }
`

const Info = styled.aside`
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  p {
    max-width: 450px;
    filter: opacity(0.6);
  }

  .sizes {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
    
    div {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    button {
      width: 28px;
      height: 28px;
      font-size: 14px;

      display: grid;
      place-items: center;

      flex-shrink: 0;
      padding: 2px;
      border-radius: 50%;
      border: 2px solid #fff;

      &:disabled {
        filter: opacity(50%);
      }

      &:focus {
        border-color: #1DA6F2;
      }
    }
  }
`

const defaultSizes = [
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
]

export const Layout = ({ id, name, description, price, sizes = [], img, loading = true }) => {
  const priceFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  const handleAddToCart = () => {}
  
  return (
    <Container>
      <Info>
        <header>
          <h1>{name}</h1>
          <p>{description}</p>
          <h2>{priceFormatter.format(price)}</h2>
        </header>

        <section className="sizes">
          <h3>Escolha o tamanho</h3>

          <div>
            {defaultSizes.map((size) => (
              <button disabled={!(sizes.includes(size))} key={size}>
                {size}
              </button>
            ))}
          </div>
        </section>

        <Button style={{ width: "max-content" }} onClick={handleAddToCart}>
          ADICIONAR AO CARRINHO
          <ArrowRight />
        </Button>

        <CalculateFrete />
      </Info>

      <img src={img} alt="" />
    </Container>
  )
}
  
export default Layout

const CalculateFreteContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;

  strong {
    font-size: 14px;
    color: #fff;
  }

  div {
    width: 200px;

    display: flex;
    position: relative;
    border-radius: 999px;

    overflow: overlay;

    input {
      border-radius: 0px;
      height: 36px;
      padding-right: calc(16px + 12px);
    }

    button {
      display: grid;
      place-items: center;

      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: #595959;
    }
  }
`

function CalculateFrete() {
  const [frete, setFrete] = useState(null)

  function handleCalculateFrete() {
    setFrete("R$ 9999")
  }

  return (
    <CalculateFreteContainer>
      <strong>Calcule o Frete</strong>

      <div>
        <Input placeholder="Digite seu CEP" />

        <button onClick={handleCalculateFrete}>
          <ArrowRight
            width={16}
            height={16}
          />
        </button>      
      </div>

      {frete && <p>{frete}</p>}
    </CalculateFreteContainer>
  )
}