import '../styles/sections.css'

const Card = ({ image, subtitle, description, link }) => {

  return (
    <article>
      <img src={image} alt={description} />
      <div className="content">
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Card