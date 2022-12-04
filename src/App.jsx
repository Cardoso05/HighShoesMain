import { Router } from "./router"

import { CartStoreProvider } from "./context/cart-store"
import { AuthStoreProvider } from "./context/auth-store"
import { SkeletonTheme } from "react-loading-skeleton"

const private_key = {
  access: "oi",
  refresh: "hi"
}

export default function App() {
  return (
    <SkeletonTheme baseColor="#222222" highlightColor="#464646">
      <CartStoreProvider>
        <AuthStoreProvider private_key={private_key}>
          <Router />
        </AuthStoreProvider>
      </CartStoreProvider>
    </SkeletonTheme>
  )
}