import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import 'react-loading-skeleton/dist/skeleton.css'

import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Perfil from "./pages/Perfil";
import Brands from "./pages/brands";
import Brand from "./pages/brand";
import About from "./pages/about";

import NotFound from "./pages/Not-found"

import HeaderSkeleton from "./components/header/skeleton"
import FooterSkeleton from "./components/footer/skeleton"

import SkeletonHome from "./pages/home/layout";
import SkeletonProduct from "./pages/product/layout";
import SkeletonProducts from "./pages/products/layout";

const Header = lazy(() => import("./components/header"))
const Footer = lazy(() => import("./components/footer"))

// pages
const Home = lazy(() => import("./pages/home"))
const Product = lazy(() => import("./pages/product"))
const Products = lazy(() => import("./pages/products"))

export const Router = () => {
  return (
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

        <Route path="/perfil" element={<Perfil />} />

        <Route path="/marcas" element={<Brands />} />

        <Route path="/marcas/:slug" element={<Brand />} />

        <Route path="/sobre" element={<About />} />

        <Route path="/produtos">
          <Route path="/produtos" element={
            <Suspense fallback={<SkeletonProducts />}>
              <Products />
            </Suspense>
          } />

          <Route path="/produtos/:slug" element={
            <ErrorBoundary FallbackComponent={({ error }) => (
              <div>
                <h1>Não achei o produto que estava procurando :/</h1>
                <p>{error.message}</p>
                <Link to="/">Ir para a página principal</Link>
              </div>
            )}>
              <Suspense fallback={<SkeletonProduct />}>
                <Product />
              </Suspense>
            </ErrorBoundary>
          } />
        </Route>

        <Route path="/checkout" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
};