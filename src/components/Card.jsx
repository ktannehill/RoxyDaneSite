import '../styles/sections.css'

const Card = ({ image, subtitle, content }) => {

  return (
    <article>
      <p>Card Content</p>
      <p>{image}</p>
      <h3>{subtitle}</h3>
      <p>{content}</p>
    </article>
  )
}

export default Card