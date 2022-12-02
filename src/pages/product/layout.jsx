import styled from "styled-components"

export const Layout = ({ id, name, price, img, loading = true }) => {
  const priceFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
  
  return (
    <>
    <h1>hello worl</h1>
    <h1>hello worl</h1>
    <h1>hello worl</h1>
    <h1>hello worl</h1>
    </>
    )
  }
  
  export default Layout