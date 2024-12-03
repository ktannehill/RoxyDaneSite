import Card from './Card'
import '../styles/sections.css'

const CardGridSection = ({ title, cards, dark }) => {

  const mappedCards = cards.map(card => (
    <Card key={card.subtitle} {...card} dark={dark} />
  ))

  return (
    <div className={`${dark ? "dark" : ""}`}>
    <div className='container'>
        <h2>{title}</h2>
        <div className='card-grid'>
            {mappedCards}
        </div>
    </div>
    </div>
  )
}

export default CardGridSection