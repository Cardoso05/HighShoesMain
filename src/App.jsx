import { lazy, Suspense } from "react"
import { SkeletonTheme } from "react-loading-skeleton"

import 'react-loading-skeleton/dist/skeleton.css'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import HeaderSkeleton from "./components/header/skeleton"
import FooterSkeleton from "./components/footer/skeleton"

const Header = lazy(() => import("./components/header"))
const Footer = lazy(() => import("./components/footer"))

const App = () => {
  return (
    <SkeletonTheme baseColor="#222222" highlightColor="#464646">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>

      <Login/>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </SkeletonTheme>
  )
};

export default App;