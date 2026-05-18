import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct.tsx'
import Cart from './components/Cart/Cart.tsx'
import Header from './components/Header/Header.tsx'
import Home from './components/Home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
