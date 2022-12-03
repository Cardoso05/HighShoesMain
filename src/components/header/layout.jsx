import styled from "styled-components"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { useCart } from "../../context/cart-store"

import Logo from "./highshoes-logo.png"
import BrazilFlag from "./flags/brazil.png"

import Skeleton from "react-loading-skeleton"

const Wrapper = styled.header`
  width: 100%;

  position: fixed;
  top: 0px;
  z-index: 999;

  background: #222222;
`

const Container = styled.div`
  max-width: 991px;
  width: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 40px;
`;

const Navigation = styled.nav`
  padding: 0 15%;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    li, a {
      flex-shrink: 0;
    }
  }
`

const Actions = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const IconLink = styled(RouterLink)`
  --size: 24px;
  width: var(--size);
  height: var(--size);

  position: relative;

  // for cart
  div {
    position: absolute;
    top: -5px;
    right: -5px;

    font-size: 10px;
    font-weight: bold;

    display: grid;
    place-items: center;

    --size: 16px;
    width: var(--size);
    height: var(--size);
    flex-shrink: 0;
    border-radius: 50%;
    background: red;
  }
`

const NavLink = styled(RouterLink)`
  &[data-active="true"] {
    font-weight: bold;
  }
`

const Icons = {
  Search,
  ShoppingCart,
  User
}

export const Layout = ({ links = Array.from({ length: 4 }).map(() => ({name: "", to: ""})), loading = true }) => {
  const { numItemsInCart } = useCart()
  const { pathname: currentPage } = useLocation()

  return (
    <Wrapper>
      <Container>
        <RouterLink to="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {loading
            ? <Skeleton width={100} />
            : <img
                style={{ width: "115px", height: "21px" }}
                src={Logo}
                alt="" 
              />
          }
        </RouterLink>

        <Navigation>
          <ul>
            {links.map(({ name, href }, index) => loading ? (
              <li key={index}>
                <Skeleton width={60} />
              </li>
            ) : (
              <li key={href}>
                <NavLink
                  to={href}
                  data-active={currentPage === href}>
                    {name}
                  </NavLink>
              </li>
            ))}
          </ul>
        </Navigation>
        
        <Actions>
          {loading
            ? <Skeleton width={24} height={24} />
            : <button style={{ width: "28px", height: "20px" }}>
                <img src={BrazilFlag} alt="" />
              </button>
          }

          {loading
            ? <Skeleton width={24} height={24} />
            : <IconLink to="/search">
                <Icons.Search />
              </IconLink>
          }

          {loading
            ? <Skeleton width={24} height={24} />
            : <IconLink to="/checkout">
                <Icons.ShoppingCart />
                {numItemsInCart > 0 && <div>{numItemsInCart > 9 ? "9+" : numItemsInCart}</div>}
              </IconLink>
          }

          {loading
            ? <Skeleton width={24} height={24} />
            : <IconLink to="/profile">
                <Icons.User />
              </IconLink>
          }
        </Actions>
      </Container>
    </Wrapper>
  )
}

function Search() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.9999 21L16.6499 16.65" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ShoppingCart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function User() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
        stroke="#fff" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" 
      />
    </svg>
  )
}