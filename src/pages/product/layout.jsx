import styled from "styled-components"
import Correios from "node-correios"
import { ArrowRight } from "@material-ui/icons"

import { useCart } from "../../context/cart-store"

import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { useRef, useState } from "react"

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
        cursor: not-allowed;
        filter: opacity(50%);
      }

      &:focus, &[data-selected="true"] {
        border-color: #1DA6F2;
      }

      &:not(:disabled):hover {
        border-color: #7fcbf4;
      }

      &[data-selected="true"]:hover {
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

const correios = new Correios();

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})

export const Layout = ({ id, name, description, price, sizes = [], img, loading = true }) => {
  const { addItemToCart } = useCart()

  const [selectedSize, setSelectedSize] = useState(null)

  const handleAddToCart = () => {
    if(!selectedSize) {
      return alert("Selecione um tamanho por favor")
    }

    addItemToCart({
      id,
      qtd: 1,
      selectedSize
    })
  }
  
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
              <button
                key={size}
                disabled={!(sizes.includes(size))}
                data-selected={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
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
    width: 300px;

    display: flex;
    position: relative;
    border-radius: 999px;

    overflow: overlay;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }

    input {
      border-radius: 999px;
      background: #404040;
      height: 36px;
      border: 2px solid transparent;
      padding-right: calc(16px + 12px);
      color: #fff;

      ::placeholder {
        color: #929292;
      }
    }

    button {
      display: grid;
      place-items: center;

      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: #929292;
      
      &:hover {
        color: #d7d7d7;
      }
    }
  }

  p {
    height: 20px;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
`

function CalculateFrete() {
  const [state, setState] = useState({
    value: null,
    error: null
  })
  const inputRef = useRef(null)

  async function handleCalculateFrete() {
    if(!inputRef.current.value) {
      // preencha um valor
      setState({
        value: null,
        error: "Preencha por favor!"
      })

      return
    }

    try {
      const [result] = await correios.calcPreco({
        sCepOrigem: "05311900",
        nCdServico: "04014",
        sCepDestino: String(inputRef.current.value),
        nVlPeso: 0.4,
        nCdFormato: 1,
        nVlComprimento: 50,
        nVlAltura: 30,
        nVlLargura: 50,
        nVlDiametro: 50
      })

      const [reais, centavos] = result.Valor.split(",")
      const total = Number(reais) + (Number(centavos) / 100)

      setState({
        value: priceFormatter.format(total)
      })
    } catch (error) {
      console.error(error)
      setState({
        error: "Não consegui calcular o frete :/"
      })
    }
  }

  return (
    <CalculateFreteContainer>
      <strong>Calcule o Frete</strong>

      <div>
        <Input
          ref={inputRef}
          onFocus={() => {
            if(state.value) {
              return setState({ error: null, value: state.value })
            }

            setState({ error: null })
          }}
          placeholder="Digite seu CEP (apenas números)"
          type="number"
          min="1"
          max="99999999"
          style={state.error ? {
            borderColor: "red"
          } : {
            borderColor: "transparent"
          }}
        />

        <button onClick={handleCalculateFrete}>
          <ArrowRight
            width={16}
            height={16}
          />
        </button>      
      </div>

      <p className={state.error ? "error" : ""}>{state.error ? state.error : state.value}</p>
    </CalculateFreteContainer>
  )
}