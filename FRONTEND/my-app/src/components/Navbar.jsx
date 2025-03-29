import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 50px",
            background: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            position: "relative",
            width: "100%"
        }}>
            {/* Logo */}
            <div className="Logo" style={{
                fontSize: "20px",
            
            }}>
                EVENT PLANNER
            </div>

            {/* Navigation Links */}
            <div className={show ? "navLinks showmenu" : "navLinks"} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
            }}>
                <div className="Links" style={{
                    display: "flex",
                    gap: "20px"
                }}>
                    <Link to="hero" spy={true} smooth={true} duration={500} style={linkStyle}>HOME</Link>
                    <Link to="services" spy={true} smooth={true} duration={500} style={linkStyle}>SERVICES</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} style={linkStyle}>ABOUT</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} style={linkStyle}>CONTACT</Link>
                </div>
            </div>

             {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
        </nav>
    );
};

// Styling for Links
const linkStyle = {
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "500",
    color: "#333",
    padding: "10px 15px",
    cursor: "pointer",
};

export default Navbar;
