import React from 'react'
import { Link } from "react-scroll"
const HeroSection = () => {
  return (
    <section className="hero">
        <img src ="/campview.avif"alt="Camping" />
        <div className="item">
        <h3> Dream Maker</h3>
        <div>
            <h1> Your Personal Dream Maker</h1>
            <p> We believe that its all about the BIG DREAMS and small details</p>
            <Link to=" contact " spy={true} smooth={true} duration={500}> BOOK NOW</Link>
        </div>
        </div>
    </section>
  )
}

export default HeroSection