// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './App.css';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import SecondSection from './components/SecondSection';
// import AboutUs from './components/AboutUs';
// import Cards from './components/Cards';
// import Tarihce from './components/Tarihce';
// import Istatistik from './components/Istatistik';
// import Footer from './components/Footer';
// import EgeLogo from './components/EgeLogo';
// import Home from './App'; 
// import Myo from './pages/Myo'; 

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Myo from './pages/Myo';
import Fakulte from './pages/Fakulte';
import Bolum from './pages/Bolum';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myo" element={<Myo />} />
      <Route path="/fakulte" element={<Fakulte />} />
      <Route path="/bolum" element={<Bolum />} />
    </Routes>

  );
}

export default App;

