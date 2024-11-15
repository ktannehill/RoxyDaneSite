import '../styles/sections.css'

const Card = ({ image, subtitle, description, link }) => {

  return (
    <article>
      <p>Card Content</p>
      <p>{image}</p>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Card