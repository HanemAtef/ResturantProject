import React from 'react'
import Navbar from "../components/layouts/Navbar/Navbar"
import Herosection from '../components/home/heroSection/HeroSection'
import Categories from'../components/home/categories/Categories'
import TopRated from '../components/home/topRated/TopRated'

export default function Home() {
  return (
    <>
   <Navbar/>
   <Herosection/>
   <Categories/>
   <TopRated/>
    </>
  )
}
