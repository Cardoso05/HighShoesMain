import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import { useOrders } from "../context/order-store"

// resolve all userid orders
export default function Success() {
  const [query] = useSearchParams()
  const navigate = useNavigate()

  const { resolveUserOrders } = useOrders()

  useEffect(() => {
    const validateOrders = () => {
      const userId = query.get("userId")
      if(!userId) return

      resolveUserOrders(userId)
    }

    validateOrders()
    navigate("/")
  }, [navigate, query, resolveUserOrders])

  return (
    <div>redirecionando</div>
  )
}