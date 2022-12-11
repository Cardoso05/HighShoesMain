import { createContext, useContext, useMemo, useState } from "react"
import { nanoid } from "nanoid"

import { useAuth } from "./auth-store"

export const OrderStore = createContext({})

export const useOrders = () => {
  return useContext(OrderStore)
}

export const OrderStoreProvider = ({ children }) => {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])

  const addOrder = ({ name, price, userId }) => {
    const id = nanoid(10)

    const newOrder = {
      id,
      name,
      date: new Date().getTime(),
      status: "Aguardando",
      price,
      userId
    }

    setOrders(orders => [...orders, newOrder])

    return id
  }

  const resolveUserOrders = (userId) => {
    const newOrders = orders
      .map(order => order.userId === userId 
        ? ({ ...order, status: "Processando" })
        : (order)
      )

    setOrders(newOrders)
  }

  const myOrders = useMemo(() => {
    if(!user) return []
    const userId = user.id

    return orders.filter(order => order.userId === userId)
  }, [orders, user])
  
  return (
    <OrderStore.Provider value={{ orders, myOrders, addOrder, resolveUserOrders }}>
      {children}
    </OrderStore.Provider>
  )
}