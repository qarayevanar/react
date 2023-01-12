import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../pages/About';
import Footer from '../components/Footer';
import Section10 from '../components/Section10';
import NotFoundPage from '../pages/NotFoundPage';
import Cart from '../pages/Cart';
import { CartProvider } from 'react-use-cart';
import ProductsDetails from '../pages/ProductsDetails';
import  Filter  from '../pages/Filter';
import Category from '../pages/Category';



export class AppRoute extends Component {
  render() {
    return (
     <CartProvider>
       <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='/productsdetails' element={<ProductsDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
          <Route path='/filter' element={<Filter/>}></Route>
          <Route path='/category' element={<Category/>}></Route>
        </Routes>
        <Section10 />
        <Footer />
      </BrowserRouter>
     </CartProvider>
    )
  }
}

export default AppRoute