import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Reservation from './pages/Resevation'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import DetailPlat from './pages/DetailPlat';
import Admin from './pages/Admin';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/details/:id" element={<DetailPlat />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
