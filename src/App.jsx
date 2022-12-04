import { Router } from "./router"

import { CartStoreProvider } from "./context/cart-store"
import { AuthStoreProvider } from "./context/auth-store"
import { SkeletonTheme } from "react-loading-skeleton"

export default function App() {
  return (
    <SkeletonTheme baseColor="#222222" highlightColor="#464646">
      <CartStoreProvider>
        <AuthStoreProvider>
          <Router />
        </AuthStoreProvider>
      </CartStoreProvider>
    </SkeletonTheme>
  )
}