import logo from "../assets/images/logos/roxyLogoHoriz.svg"
import "../styles/header-footer.css"

const Header = () => {
  return (
    <div id="header">
      <ul>
        <li>Home</li>
        <li>Children</li>
        <li>Teens & Adults</li>
        <li>About</li>
      </ul>
      <img src={logo} alt="Roxy Dane logo" className="logo-sm" />
    </div>
  )
}

export default Header