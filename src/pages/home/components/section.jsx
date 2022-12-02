import styled from "styled-components"

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && (
        <h2>{title}</h2>
      )}

      {children}
    </Container>
  )
}