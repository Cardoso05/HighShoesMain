import styled from "styled-components"
import {integrantes1} from "../data"
import {integrantes2} from "../data"
const Banner = styled.section`
  width: 100%;
  height: 200px;

  display: grid;
  place-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1600&q=100);
  background-position: center;

  color: #000;

  h1 {
    font-size: 35px;
  }
`

const Wrapper = styled.main`
    width: 100%
`

const Container = styled.section`
  max-width: 991px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  padding: 40px;
  gap: 50px;
`
const IntegrantesTcc = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Integrante = styled.div`
  flex: 1 1 ;
  position: relative;
`
const Integrantes = styled.div`
  display: flex;
  justify-content: space-between;
`
const TitleIntegrante = styled.h3``

const Description = styled.p``

const Title = styled.h1`
  text-align: center;
`
export const Layout = () => {
  return (
    <>
      <Banner>
        <h1>Sobre Nós.</h1>
      </Banner>
      <Wrapper>
        <Container>
        <Title>História</Title>  
            <p>LA HighShoes é um E-commerce que visa a venda e a maior acessibilidade de tênis exclusivos.
            Criado por um grupo de 6 estudantes, a HighShoes veio para quebrar as barreiras que muitos encontram ao procurarem por tênis mais exclusivos, como o alto valor de muitos produtos. Aqui você vai se deparar com preços que caibam no seu bolso e um atendimento baseado na ética para uma melhor experiência.</p>

            <Title>Integrantes</Title>  
            <Integrantes>
            <IntegrantesTcc>
              {integrantes1.map(({ id, name,funcao }) => (
                  <Integrante key={id}>
                    <TitleIntegrante>
                      {name}
                    </TitleIntegrante>
                    
                    <Description>
                      {funcao}
                    </Description>

                  </Integrante>
              ))}
            </IntegrantesTcc>
            <IntegrantesTcc>
              {integrantes2.map(({ id, name,funcao }) => (
                  <Integrante key={id}>
                    <TitleIntegrante>
                      {name}
                    </TitleIntegrante>
                    
                    <Description>
                      {funcao}
                    </Description>

                  </Integrante>
              ))}
            </IntegrantesTcc>
          </Integrantes>
        </Container>
      </Wrapper>
    </>
  )
}

export default Layout