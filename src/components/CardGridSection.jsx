import Button from './Button'
import { Link } from 'react-router-dom'
import Card from './Card'
import '../styles/sections.css'

const CardGridSection = ({ title, cards, link, page, dark }) => {

  const mappedCards = cards.map(card => (
    <Card key={card.title || card.subtitle} {...card} dark={dark} />
  ))

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className='container'>
          <h2>{title}</h2>
          <div className={page === "home" ? 'card-grid' : 'book-grid'}>
              {mappedCards}
          </div>
        {link?.length > 0 && <Link to={link}><Button text="View more" /></Link>}
      </div>
    </div>
  )
}

export default CardGridSection