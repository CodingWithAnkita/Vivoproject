import React from 'react'
import ProductDetail from './components/ProductDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Applications from './components/Applications'
import BannerPage from './components/BannerPage'

function ProductDetailPage() {
    return (
        <div>
            <Header />
            <ProductDetail />
            <BannerPage/>
            <Applications/>
            <Footer />
        </div>
    )
}

export default ProductDetailPage