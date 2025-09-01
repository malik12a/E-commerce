import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import ProductListing from './pages/ProductListing'
import Details from './pages/Details'
import Cart from './pages/Cart'



const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/computerandtech' element={<ProductListing/>} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App