import Button from './Button'
import '../styles/sections.css'
import { Link } from 'react-router-dom'

const Card = ({ image, subtitle, description, link }) => {

  return (
    <article>
      <img src={image} alt={description} />
      <div className="content">
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <Link to={link}><Button text="View more" /></Link>
      </div>
    </article>
  )
}

export default Card