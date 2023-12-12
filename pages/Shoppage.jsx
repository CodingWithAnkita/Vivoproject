import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Applications from './components/Applications'
import Shop from './components/Shop'

function Shoppage() {
  return (
    <div>
      <Header/>
      <Shop/>
      <Applications/>
      <Footer/>  
    </div>
  )
}

export default Shoppage