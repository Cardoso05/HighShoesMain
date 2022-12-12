import { ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

import { useAuth } from "../context/auth-store"
import { useOrders } from "../context/order-store"

import { Input } from "../components/input"
import { Button } from "../components/button"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;

  max-width: 991px;
  margin: 0 auto;

  padding: 20px 40px;
`

const Title = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Details = styled.section`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  row-gap:50px;
`

const Section = styled.div`
  width: 100%;
  background: #1A1A1A;

  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;
  justify-content: space-between;
  
  padding: 30px;
  border-radius: 20px;

  table {
    width: 100%;
    border-spacing:0; /* Removes the cell spacing via CSS */
    border-collapse: collapse;

    thead tr:first-child {
      background-color: #1C3A4B;
      border-radius: 20px;
    }

    td {
      padding: 8px 20px;
      
      &:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }

      &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }

    th {
      width: calc(100% / 5);
      text-align: left;
    }
  }
`

const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InputWrapper = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "medium"
})

export default function Perfil() {
  const { isSignedIn, user, logout, editUser } = useAuth()
  const { myOrders } = useOrders()
  const navigate = useNavigate()

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const [cep, setCep] = useState("")
  const streetRef = useRef(null)
  const bairroRef = useRef(null)

  const handleLogout = () => {
    logout();
    navigate("/login")
  }

  const handleSaveUserData = async () => {
    const error = await editUser(user.id, {
      name: nameRef.current.value || user.name,
      email: emailRef.current.value || user.email, 
    })

    if(error) {
      alert(error.message)
    }
  }

  const handleSaveAddress = async () => {
    const CEP = cep.replace(/[^0-9]/, "")

    const error = await editUser(user.id, {
      details: {
        cep: CEP || user.details.cep,
        street: streetRef.current.value || user.details.street,
        bairro: bairroRef.current.value || user.details.bairro,
      }
    })

    if(error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    if(!user) return
    if(!user.name || !user.email || !user.details) return
    
    nameRef.current.value = user.name
    emailRef.current.value = user.email
    
    setCep(user.details.cep)
    streetRef.current.value = user.details.street
    bairroRef.current.value = user.details.bairro
  }, [user])

  useEffect(() => {
    const checkSignedIn = async () => {
      const signedIn = await isSignedIn()
      
      if(!signedIn) {
        navigate("/login")
      }
    }

    checkSignedIn()
  }, [isSignedIn, navigate])

  useEffect(() => {
    const id = setTimeout(async () => {
      const formattedCep = cep.replace(/[^0-9]/, "");
				
      // Validação do CEP; caso o CEP não possua 8 números, então cancela
      // a consulta
      if(formattedCep.length !== 8){
        return false;
      }
				
      const url = `https://viacep.com.br/ws/${formattedCep}/json`;

      const response = await fetch(url)
      try {
        const { bairro, logradouro } = await response.json()
        
        streetRef.current.value = logradouro
        bairroRef.current.value = bairro
      } catch (error) {
        alert("Não consegui buscar seu endereço")
      }

      // Send Axios request here
    }, 2000)

    return () => clearTimeout(id)
  }, [cep])
  
  return (
    <>
      <Container>
        <Title>
          <h1>Sua conta</h1>

          <Button style={{ background: "hsl(360, 100%, 40%)", width: "max-content" }} onClick={handleLogout}>Logout</Button>
        </Title>

        <Details>
          <Section>
            <h2>Informações</h2>

            <InputsContainer>
              <InputWrapper>
                Nome:
                <Input
                  ref={nameRef}
                />
              </InputWrapper>
              <InputWrapper>
                Email:
                <Input
                  type="email"
                  ref={emailRef}
                />
              </InputWrapper>
            </InputsContainer>
            
            <Button onClick={handleSaveUserData}>
              SALVAR ALTERAÇÕES
              <ArrowRightOutlined size={16} />
            </Button>
          </Section>

          <Section>
            <h2>Endereço</h2>

            <InputsContainer>
              <InputWrapper>
                CEP:
                <Input
                  onChange={(event) => setCep(event.target.value)}
                  value={cep}
                />
              </InputWrapper>
              <InputWrapper>
                Rua:
                <Input
                  disabled
                  ref={streetRef}
                />
              </InputWrapper>
              <InputWrapper>
                Bairro:
                <Input
                  disabled
                  ref={bairroRef}
                />
              </InputWrapper>
            </InputsContainer>

            <Button onClick={handleSaveAddress}>
              SALVAR ALTERAÇÕES
              <ArrowRightOutlined size={16} />
            </Button>
          </Section>
        </Details>

        <Section>
          <h2>Últimos pedidos</h2>

          <table>
            <thead>
              <tr>
                <td>Produto</td>
                <td>ID do pedido</td>
                <td>Data</td>
                <td>Status</td>
                <td>Preço</td>
              </tr>
            </thead>

            <tbody>
              {myOrders.map(({ id, name, price, status, date }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>#{id}</td>
                  <td>{dateFormatter.format(date)}</td>
                  <td>{status}</td>
                  <td>{priceFormatter.format(price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </Container>
    </>
  )
}