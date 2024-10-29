
const Card = ({ image, subtitle, content }) => {

  console.log("hello")

  return (
    <div>
      <p>Card Content</p>
      <p>{image}</p>
      <h3>{subtitle}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Card