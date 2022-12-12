import { useCallback, useEffect, useMemo, useState } from "react"
import { Add, Remove } from "@material-ui/icons"
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"

import { loadStripe } from '@stripe/stripe-js';

import { useCart } from "../context/cart-store"
import { useAuth } from "../context/auth-store"
import { useOrders } from "../context/order-store"

import { currencyFormatter } from "../components/product"
import { Button } from "../components/button"
import Correios from "node-correios";


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51JBlYRL2PaVveUDb3toqXDpVlHiBr5TEospTxhqKvFstqUiLPZWkv4IRyDcA3yP9PQfPOuyyYuIqgvdVpM1gTdnl00X41b223d");
  }

  return stripePromise;
};
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
    flex-wrap: wrap;
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
    flex-wrap: wrap;
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

    button {
        font-size: 20px;
        padding: 15px 20px;
        justify-content: center;
    }
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
const correios = new Correios();

const Cart = () => {
    const navigate = useNavigate()
    
    const { addOrder } = useOrders()
    const { signedIn, requireSignIn, user } = useAuth()
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
        const calculateEstimatedShipping = async () => {
            // get user address
            if(!signedIn) {
                return
            }

            if(!user) {
                return
            }

            try {
                const [result] = await correios.calcPreco({
                    sCepOrigem: "05311900",
                    nCdServico: "04014",
                    sCepDestino: user.details.cep,
                    nVlPeso: 0.4,
                    nCdFormato: 1,
                    nVlComprimento: 50,
                    nVlAltura: 30,
                    nVlLargura: 50,
                    nVlDiametro: 50
                })

                const [reais, centavos] = result.Valor.split(",")
                const total = Number(reais) + (Number(centavos) / 100)

                setEstimatedShipping(total)
            } catch (error) {
                console.log("Erro no cálculo do frete")
                console.error(error)
            }
            // setEstimatedShipping(15)
        }

        calculateEstimatedShipping()
    }, [signedIn, user])

    const handleFormSubmit = useCallback(async (event) => {
        event.preventDefault()

        // call for signed in user
        if(!signedIn) {
            return navigate(requireSignIn())
        }

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

        let lineItems = cartWithData
            .map(({ paymentUrl, qtd }) => ({
                price: paymentUrl,
                quantity: qtd
            }))

        cartWithData.forEach(({ name, price }) => {
            addOrder({
                userId: user.id,
                name,
                price
            })
        })

        const checkoutOptions = {
            lineItems,
            mode: "payment",
            successUrl: `${window.location.origin}/success?userId=${user.id}`,
            cancelUrl: `${window.location.origin}/checkout`
        };

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        
        if(error) {
            console.log("Stripe checkout error", error);
            return
        }

        emptyCart({})
        
        navigate(`/success?userId=${user.id}`)
    }, [addOrder, cart, cartWithData, emptyCart, navigate, products, requireSignIn, setProducts, signedIn, user])

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

                            {estimatedShipping === 0
                                ? (
                                    <SummaryItemPrice>
                                        faça login
                                    </SummaryItemPrice>
                                )
                                : (
                                    <SummaryItemPrice>{currencyFormatter.format(estimatedShipping)}</SummaryItemPrice>
                                )
                            }
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