import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SkeletonTheme } from "react-loading-skeleton"

import 'react-loading-skeleton/dist/skeleton.css'


import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import NotFound from "./pages/Not-found"

import HeaderSkeleton from "./components/header/skeleton"
import FooterSkeleton from "./components/footer/skeleton"

import SkeletonHome from "./pages/home/layout";

const Header = lazy(() => import("./components/header"))
const Footer = lazy(() => import("./components/footer"))

// pages
const Home = lazy(() => import("./pages/home"))

const App = () => {
  return (
    <SkeletonTheme baseColor="#222222" highlightColor="#464646">
      <BrowserRouter>
        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>

        <Routes>
          <Route path="*" element={<NotFound />} />
          
          <Route path="/" element={
            <Suspense fallback={<SkeletonHome />}>
              <Home />
            </Suspense>
          } />

          <Route path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>

        <Suspense fallback={<FooterSkeleton />}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </SkeletonTheme>
  )
};

export default App;