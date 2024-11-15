import { FaHeart } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import "../styles/header-footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <img src="https://images.unsplash.com/flagged/photo-1551277816-36355be656eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-img" />
      <p>Made with <FaHeart /> && <FaCoffee /> by Kat Tannehill © 2024</p>
    </div>
  )
}

export default Footer