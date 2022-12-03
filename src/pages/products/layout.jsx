import { KeyboardArrowDown, Check } from "@material-ui/icons"
import { useMemo, useState } from "react"
import styled from "styled-components"
import { Product } from "../../components/product"

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

const Container = styled.main`
  display: flex;
  gap: 50px;
`

const Sidebar = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  gap: 60px;

  width: 280px;
  background: #000;
`

const Filters = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Gallery = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 40px 0;
`

const CustomSelect = styled.details`
  width: 100%;
  overflow: overlay;
  background: #F5F5F5;

  summary {
    width: 100%;

    color: #fff;
    background: #000;

    border-bottom: 1px solid #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    div {
      svg {
        color: #C2C2C2;
      }
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
  
  .content {
    padding-top: 8px;
    color: #fff;
    background-color: #000;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;

    label {
      cursor: pointer;
      padding: 1px;
      
      input {
        --size: 14px;
        width: var(--size);
        height: var(--size);
        accent-color: black;

        &[type="checkbox"] {
          outline: 1px solid white;
        }
      }

      font-size: 16px;
      display: flex;
      align-items: center;

      gap: 5px;
    }
  }
`

export const Layout = ({ products = [], brands = [] }) => {
  const [priceOrder, setPriceOrder] = useState(null)
  const [selectedBrands, setSelectedBrands] = useState(() => {
    const allBrandsSelected = brands
      .reduce((acc, { id }) => ({ ...acc, [id]: true }), {})
    
    return allBrandsSelected
  })

  const filteredProducts = useMemo(() => {
    const productsFilteredByBrands = products
      .filter(product => selectedBrands[product.brandId] === true)
    
    const productsFilteredByPrice = priceOrder === "asc"
      ? productsFilteredByBrands.sort((a, b) => a.price - b.price)
      : productsFilteredByBrands.sort((a, b) => b.price - a.price)

    return productsFilteredByPrice
  }, [priceOrder, products, selectedBrands])

  return (
    <>
      <Banner>
        <h1>Produtos.</h1>
      </Banner>
      <Container>
        <Sidebar>
          <strong>Filtros</strong>
          <Filters>
            <CustomSelect>
              <summary>
                <span>Marca</span>

                <div>
                  <KeyboardArrowDown
                    width={20}
                    height={20}
                  />
                </div>
              </summary>


              <div className="content">
                {brands.map(({ id, name }) => (
                  <label key={id} htmlFor={`brand-${id}-${name}`}>
                    <input
                      id={`brand-${id}-${name}`}
                      type="checkbox"
                      checked={selectedBrands[id]}
                      onChange={() => {
                        selectedBrands[id] = !selectedBrands[id]

                        setSelectedBrands({ ...selectedBrands })
                      }}
                    />
                    {name}
                  </label>
                ))}
              </div>
            </CustomSelect>
          </Filters>

          <Filters>
            <CustomSelect>
              <summary>
                <span>Preço</span>

                <div>
                  <KeyboardArrowDown
                    width={20}
                    height={20}
                  />
                </div>
              </summary>


              <div className="content">
                <label htmlFor="price-asc">
                  <input
                    id="price-asc"
                    type="radio"
                    checked={priceOrder === "asc"}
                    onChange={() => setPriceOrder("asc")}
                  />
                  Do menor para o maior
                </label>
              </div>
              <div className="content">
                <label htmlFor="price-desc">
                  <input
                    id="price-desc"
                    type="radio"
                    checked={priceOrder === "desc"}
                    onChange={() => setPriceOrder("desc")}
                  />
                  Do maior para o menor
                </label>
              </div>
            </CustomSelect>
          </Filters>
        </Sidebar>

        <Gallery>
          {filteredProducts.map(({ id, ...props }) => (
            <Product key={id} {...props} />
          ))}
        </Gallery>
      </Container>
    </>
  )
}

export default Layout