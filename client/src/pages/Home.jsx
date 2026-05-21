import Feature from '../components/home/featureSection/Feature'
import Navbar from '../components/layouts/Navbar/Navbar'
import Herosection from "../components/home/heroSection/HeroSection"
import TopRated from "../components/home/topRated/TopRated"
import Categories from "../components/home/categories/Categories"
import Review from "../components/home/review/Review"
import Favourit from '../components/home/favourit/Favourit'
import Footer from '../components/layouts/Footer/Footer'
import CartPage from './CartPage'

export default function Home() {
  return (
    <>
   {/* <Navbar/> */}
   <Herosection/>
   <Categories/>
   <TopRated/>
    <Feature/>
  <Favourit/>
  <Review/>
  {/* <Footer/> */}
    </>


  )
}
