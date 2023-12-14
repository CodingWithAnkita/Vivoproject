import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shoppage from '../pages/Shoppage'
import ProductDetailPage from '../pages/ProductDetailPage'
import CartPage from '../pages/CartPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shoppage />} />
        <Route path='/productdetail' element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </>
  )
}

export default App
