import { lazy, Suspense } from "react"
import { SkeletonTheme } from "react-loading-skeleton"

import 'react-loading-skeleton/dist/skeleton.css'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import HeaderSkeleton from "./components/header/skeleton"
const Header = lazy(() => import("./components/header"))

const App = () => {
  return (
    <SkeletonTheme baseColor="#d2d2d2" highlightColor="#ffffff">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      
      <Login/>
    </SkeletonTheme>
  )
};

export default App;