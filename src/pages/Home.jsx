import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Footer from "../components/Fotter"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Slider from "../components/Slider"
import Products from "../components/Products"

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home 