import Skeleton from "react-loading-skeleton"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`

export const Section = ({ title, children, loading = true }) => {
  return (
    <Container>
      {title && loading ? (
        <Skeleton width={100} height={30} />
      ) : (
        <h2>{title}</h2>
      )}

      {children}
    </Container>
  )
}