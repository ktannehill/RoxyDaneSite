import Button from './Button'
import { Link } from 'react-router-dom'
import '../styles/sections.css'

const Card = ({ image, subtitle, description, link, dark }) => {

  return (
    <article>
      <img src={image} alt={description} loading="lazy" />
      <div className={`${dark ? "" : "content"}`}>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        {link?.length > 0 && <Link to={link} target="_blank" rel="noopener noreferrer"><Button text="View more" /></Link>}
      </div>
    </article>
  )
}

export default Card