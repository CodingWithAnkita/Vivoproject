import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product'
import Images from './components/Images'
import Banner from './components/Banner'
import Series from './components/Series'
import Series1 from './components/Series1'
import Services from './components/Services'
import Videogallery from './components/Videogallery'
import Applications from './components/Applications'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
       <Header/> 
       <Hero/>
       <Product/>
       <Banner/>
       <Series/>
       <Images/>
       <Series1/>
       <Services/>
       <Videogallery/>
       <Applications/>
       <Footer/>
    </div>
  )
}

export default Home