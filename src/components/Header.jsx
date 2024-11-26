import { Link } from 'react-router-dom'
import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/images/logos/roxyLogoHoriz.svg"
import "../styles/header-footer.css"
import { useState } from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header id="header">
      <img 
        src="https://images.unsplash.com/photo-1629197238245-3c7497e96b41?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className="bg-img" 
        loading="lazy"
      />

      <div>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <Link to="/" onClick={() => setOpen(false)}><li>Home</li></Link>
            <Link to="/books/kids" onClick={() => setOpen(false)}><li>Children</li></Link>
            <Link to="/books/teensadults" onClick={() => setOpen(false)}><li>Teens & Adults</li></Link>
            <Link to="/#about" onClick={() => setOpen(false)}><li>About</li></Link>
          </ul>
        </nav>
        
        <img src={logo} alt="Roxy Dane logo" className="logo-sm" />
      </div>
    </header>
  )
}

export default Header