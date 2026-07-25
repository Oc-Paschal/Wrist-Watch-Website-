import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Features from './components/Features'
import Deals from './components/Deals'
import SpecialOffer from './components/SpecialOffer'
import NewProduct from './components/NewProduct'
import Brands from './components/Brands'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Blog from './pages/Blog'
import Contact from './components/Contact'
import CartDrawer from './components/CartDrawer'
import CartToast from './components/CartToast'
import ScrollToTop from './components/ScrollToTop'

const HomePage = () => (
  <>
    <Home />
    <Features />
    <Deals />
    <SpecialOffer />
    <NewProduct />
    <Brands />
    <Testimonials />
    <Newsletter />
  </>
)

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <CartDrawer />
      <CartToast />
    </BrowserRouter>
  )
}

export default App
