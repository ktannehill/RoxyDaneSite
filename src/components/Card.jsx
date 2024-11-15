import '../styles/sections.css'

const Card = ({ image, subtitle, description, link }) => {

  return (
    <article>
      <img src={image} alt={description} />
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Card