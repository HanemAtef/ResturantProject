import React from 'react'
import Feature from '../components/home/featureSection/Feature'
import Hero from "../components/home/heroSection/HeroSection"
import TopRated from "../components/home/topRated/TopRated"
import Categories from "../components/home/categories/Categories"
import Review from "../components/home/review/Review"
import Favourit from '../components/home/favourit/Favourit'
import Footer from '../components/layouts/Footer/Footer'
export default function Home() {
  return (
    <div>
      
  <Feature/>
  <Favourit/>
  <Review/>
  <Footer/>

    </div>
  )
}
