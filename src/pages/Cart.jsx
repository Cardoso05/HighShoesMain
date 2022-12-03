import { useCart } from "../context/cart-store"
import { newProducts } from "../data"
import styled from 'styled-components'
import { useEffect, useMemo, useState } from "react"
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
    justify-content: space-between;

`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const ProductSize = styled.span`

`

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
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
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
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Cart = () => {
    const { cart } = useCart()
    const [estimatedShipping, setEstimatedShipping] = useState(0)

    const cartWithData = useMemo(() => {
        const products = Object
            .entries(cart)
            .map(([id, props]) => ({ id, ...props }))
            .map(({ id, ...props }) => {
                const productInfo = newProducts.find(product => product.id === id)

                if(!productInfo) {
                    return null
                }

                return {
                    id,
                    ...props,
                    ...productInfo
                }
            })

        return products
    }, [cart])

    const Subtotal = useMemo(() => {
        console.log(cartWithData
            .map(({ price, qtd }) => price * qtd))
        const subtotal = cartWithData
            .map(({ price, qtd }) => price * qtd)
            .reduce((a, b) => a + b, 0)

        return subtotal
    }, [cartWithData])

    useEffect(() => {
        const calculateEstimatedShipping = () => {
            setEstimatedShipping(15)
        }

        calculateEstimatedShipping()
    }, [])

    const handleFormSubmit = () => {
        // call stripe checkout
    }

    return (
        <Container>
            <Wrapper>
                <Title>Checkout</Title>

                <Bottom>
                    <Info>
                        {cartWithData.map(({ id, qtd, img, name, price, selectedSize }) => (
                            <Product key={id}>
                                <ProductDetail>
                                    <Image src={img}/>
                                    <Details>
                                        <ProductName><b>Product:</b> {name}</ProductName>
                                        <ProductSize><b>Size:</b> {selectedSize}</ProductSize>
                                    </Details>
                                </ProductDetail>

                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Button>
                                            <Add/>
                                        </Button>

                                        <ProductAmount>{qtd}</ProductAmount>

                                        <Button>
                                            <Remove/>
                                        </Button>
                                    </ProductAmountContainer>

                                    <ProductPrice>$ {price}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}

                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ {Subtotal}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ {estimatedShipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {Subtotal + estimatedShipping}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart