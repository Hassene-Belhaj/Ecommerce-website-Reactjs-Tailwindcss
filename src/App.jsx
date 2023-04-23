import React from 'react'
import { useContextData } from './Context/ContextData'
import Navbar from './Component/Navbar';
import SideCart from './Component/SideCart';
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import {BrowserRouter as Router} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';
import Footer from './Component/Footer';




const App = () => {


  return (
    <Router>
   <Navbar/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
    </Routes>
    <SideCart/>
    <Footer/>
   </Router>
  )
}

export default App