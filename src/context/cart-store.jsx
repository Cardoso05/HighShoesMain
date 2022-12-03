import { useMemo } from "react"
import { useCallback } from "react"
import { useState } from "react"
import { createContext, useContext } from "react"

export const CartStore = createContext({})

export const useCart = () => {
  return useContext(CartStore)
}

export const CartStoreProvider = ({ children }) => {
  const [cart, setCart] = useState({
    "2-40": {
        "id": 2,
        "qtd": 1,
        "selectedSize": "40"
    },
    "1-38": {
        "id": 1,
        "qtd": 2,
        "selectedSize": "38"
    }
})

  const numItemsInCart = useMemo(() => {
    const numOfProducts = Object
      .entries(cart)
      .map(([_, { qtd }]) => qtd)
      .reduce((a, b) => a + b, 0)
      
    return numOfProducts
  }, [cart])

  const addItemToCart = useCallback((item) => {
    const selector = [`${item.id}-${item.selectedSize}`]

    if(cart[selector]) {
      cart[selector].qtd += 1
    } else {
      cart[selector] = item
    }

    setCart({ ...cart })
  }, [cart])

  return (
    <CartStore.Provider value={{
      numItemsInCart,
      cart,
      addItemToCart
    }}>
      {children}
    </CartStore.Provider>
  )
}