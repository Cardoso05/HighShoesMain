import { useCart } from "../context/cart-store"
import { currencyFormatter } from "../components/product"
import styled from 'styled-components'
import { useCallback, useEffect, useMemo, useState } from "react"
import { Add, Remove } from "@material-ui/icons"
import { Button } from "../components/button"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    text-align: center;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const ProductName = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    button {
        &:disabled {
            opacity: 50%;
            cursor: not-allowed;
        }
    }
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`

const Summary = styled.form`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Cart = () => {
    const { cart, addItemToCart, removeItemFromCart, products, setProducts, emptyCart } = useCart()
    const [estimatedShipping, setEstimatedShipping] = useState(0)

    const cartWithData = useMemo(() => {
        const productsWithData = Object
            .entries(cart)
            .map(([id, props]) => ({ id, ...props }))
            .map(({ id, ...props }) => {
                const productInfo = products.find(product => product.id === id)

                if(!productInfo) {
                    return null
                }

                return {
                    id,
                    ...props,
                    ...productInfo,
                }
            })
            .filter(n => n)

        return productsWithData
    }, [cart, products])

    const Subtotal = useMemo(() => {
        if(cartWithData.lenght === 0) {
            return 0
        }

        const subtotal = cartWithData
            .map((item) => item.price * item.qtd)
            .reduce((a, b) => a + b, 0)

        return subtotal
    }, [cartWithData])

    useEffect(() => {
        const calculateEstimatedShipping = () => {
            setEstimatedShipping(15)
        }

        calculateEstimatedShipping()
    }, [])

    const handleFormSubmit = useCallback((event) => {
        event.preventDefault()

        function findProduct(id) {
            return products.find(product => product.id === id)
        }
        // call stripe checkout
        Object
            .entries(cart)
            .map(([id, props]) => ({ id, ...props }))
            .forEach(({ id, qtd }) => {
                const product = findProduct(id)

                if(!product) {
                    console.log("Could not find product")
                    return
                }

                const newProducts = () => {
                    const productIndex = products.findIndex(_product => _product.id === id)
                    
                    const updatedProduct = {
                        ...product,
                        stock: product.stock - qtd
                    }
                    
                    products.splice(productIndex, 1, updatedProduct)
                }
                
                newProducts()
                setProducts([...products])
                
            })
            
            emptyCart({})
    }, [cart, emptyCart, products, setProducts])

    return (
        <Container>
            <Wrapper>
                <Title>Checkout</Title>

                <Bottom>
                    <Info>
                        {cartWithData.map(({ id, qtd, stock, img, name, price, selectedSize }) => (
                            <Product key={id}>
                                <ProductDetail>
                                    <Image src={img}/>

                                    <Details>
                                        <ProductName>{name} - {selectedSize}</ProductName>
                                    </Details>
                                </ProductDetail>

                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <button
                                            disabled={qtd >= stock}
                                            onClick={() => {
                                                const error = addItemToCart({
                                                    id,
                                                    qtd: 1,
                                                    selectedSize
                                                })

                                                if(error) {
                                                    return alert(`${error.message}\ncódigo do erro: ${error.code}`)
                                                }
                                            }}
                                        >
                                            <Add />
                                        </button>

                                        <ProductAmount>{qtd}</ProductAmount>

                                        <button
                                            onClick={() => removeItemFromCart({
                                                id,
                                                qtd: 1,
                                                selectedSize
                                            })}
                                        >
                                            <Remove/>
                                        </button>
                                    </ProductAmountContainer>

                                    <ProductPrice>{currencyFormatter.format(price * qtd)}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}

                        <Hr/>
                    </Info>

                    <Summary onSubmit={handleFormSubmit}>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>{currencyFormatter.format(Subtotal)}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>{currencyFormatter.format(estimatedShipping)}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{currencyFormatter.format(Subtotal + estimatedShipping)}</SummaryItemPrice>
                        </SummaryItem>

                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart