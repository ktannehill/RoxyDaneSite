import { Link } from 'react-router-dom'
import logo from "../assets/images/logos/roxyLogoHoriz.svg"
import "../styles/header-footer.css"

const Header = () => {
  return (
    <div id="header">
      <img src="https://images.unsplash.com/photo-1629197238245-3c7497e96b41?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-img" />
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/books/kids"><li>Children</li></Link>
        <Link to="/books/teensadults"><li>Teens & Adults</li></Link>
        <Link to="/#about"><li>About</li></Link>
      </ul>
      <img src={logo} alt="Roxy Dane logo" className="logo-sm" />
    </div>
  )
}

export default Header