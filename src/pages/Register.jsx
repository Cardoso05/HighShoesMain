import styled from "styled-components"
import { ArrowRight } from "@material-ui/icons"

import { Button } from "../components/button"
import { Input } from "../components/input"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-store"
import { useRef, useState } from "react"

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const Container = styled.section`
  background: #1A1A1A;

  width: 600px;
  margin: auto;

  padding: 50px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Form = styled.form`
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`

const GradientCircle = styled.div`
  --size: 200px;
  width: var(--size);
  height: var(--size);
  background: linear-gradient(140.86deg, #BFE8FF, #1DA6F2);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export default function Login() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState("")

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSignIn = async (event) => {
    event.preventDefault()

    const name = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if(!name || !email || !password) {
      return setError("Prencha os campos!")
    }

    const result = await register({
      name,
      email,
      password
    });

    if(!result.ok) {
      return setError(result.message) 
    }

    navigate("/perfil")
  }

  return (
    <Wrapper>
      <Container>
        <GradientCircle>
          <UserCheck />
        </GradientCircle>

        <Form onSubmit={handleSignIn}>
          <h1 style={{ fontSize: "20px" }}>Crie sua conta</h1>
          {error && <span style={{color: "red"}}>{error}</span>}
          <Input onFocus={() => setError("")} type="text" placeholder="Nome" ref={nameRef} />
          <Input onFocus={() => setError("")} type="email" placeholder="E-mail" ref={emailRef} />
          <Input onFocus={() => setError("")} type="password" placeholder="Senha" ref={passwordRef} />
          <Button>
            <strong style={{ lineHeight: "11px" }}>CRIAR CONTA</strong> <ArrowRight />
          </Button>
          <Link to="/login">Já tenho conta</Link>
        </Form>
      </Container>
    </Wrapper>
  )
}

function UserCheck() {
  return (
    <svg width="123" height="122" viewBox="0 0 123 122" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_233_1090)">
        <path d="M82.0349 106.75V96.5833C82.0349 91.1906 79.8927 86.0187 76.0794 82.2055C72.2662 78.3923 67.0943 76.25 61.7016 76.25H26.1182C20.7255 76.25 15.5536 78.3923 11.7404 82.2055C7.92717 86.0187 5.78491 91.1906 5.78491 96.5833V106.75" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M43.91 55.9167C55.1398 55.9167 64.2433 46.8131 64.2433 35.5833C64.2433 24.3535 55.1398 15.25 43.91 15.25C32.6802 15.25 23.5767 24.3535 23.5767 35.5833C23.5767 46.8131 32.6802 55.9167 43.91 55.9167Z" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M87.1184 55.9167L97.2851 66.0833L117.618 45.75" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      <defs>
        <clipPath id="clip0_233_1090">
          <rect width="122" height="122" fill="white" transform="translate(0.70166)"/>
        </clipPath>
      </defs>
    </svg>
  )
}