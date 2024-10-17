import logo from "../assets/images/roxyLogoHoriz-60.png"
import "../styles/header-footer.css"

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>Home</li>
        <li>Children</li>
        <li>Teens & Adults</li>
        <li>About</li>
      </ul>
      <img src={logo} alt="Roxy Dane logo" />
    </div>
  )
}

export default Header