import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App