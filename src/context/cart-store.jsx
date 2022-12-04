import { useMemo } from "react"
import { useCallback } from "react"
import { useState } from "react"
import { createContext, useContext } from "react"

import { newProducts } from "../data"

export const CartStore = createContext({})

export const useCart = () => {
  return useContext(CartStore)
}

export const CartStoreProvider = ({ children }) => {
  const [products, setProducts] = useState(newProducts)
  const [cart, setCart] = useState({})

  const numItemsInCart = useMemo(() => {
    const numOfProducts = Object
      .entries(cart)
      .map(([_, { qtd }]) => qtd)
      .reduce((a, b) => a + b, 0)
      
    return numOfProducts
  }, [cart])

  const addItemToCart = useCallback((item) => {
    const selector = [`${item.id}-${item.selectedSize}`]

    const product = newProducts.find(product => product.id === item.id)
    const productStockLeft = (product.stock - item.qtd) > 0

    if(!productStockLeft) {
      return {
        code: "max-stock",
        message: `O estoque acabou :(`
      }
    }

    if(cart[selector]) {
      if((cart[selector].qtd + item.qtd) > product.stock) { // shadow
        cart[selector].qtd = product.stock
      } else {
        cart[selector].qtd += item.qtd
      }
    } else {
      cart[selector] = item
    }

    setCart({ ...cart })
  }, [cart])

  const removeItemFromCart = useCallback((item) => {
    const selector = [`${item.id}-${item.selectedSize}`]

    if(!selector) {
      return
    }

    if(cart[selector].qtd > 1) {
      cart[selector].qtd -= item.qtd
    } else {
      delete cart[selector]
    }

    setCart({ ...cart })
  }, [cart])

  const emptyCart = () => {
    setCart({})
  }

  return (
    <CartStore.Provider value={{
      numItemsInCart,
      cart,
      addItemToCart,
      removeItemFromCart,
      products,
      setProducts,
      emptyCart
    }}>
      {children}
    </CartStore.Provider>
  )
}