import React from 'react'
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import HeroSection from './components/HeroSection';
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <About/>
    <Contact/>
    <Footer></Footer>
    <Toaster />
    

      </Router>
  )
}

export default App