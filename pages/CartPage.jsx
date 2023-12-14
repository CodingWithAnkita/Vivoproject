import React from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import Applications from './components/Applications'

function CartPage() {
    return (
        <div>
            <Header />
            <Cart />
            <Applications />
            <Footer />
        </div>
    )
}

export default CartPage