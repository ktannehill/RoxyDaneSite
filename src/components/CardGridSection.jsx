import Card from './Card'
import '../styles/sections.css'

const CardGridSection = ({ title, cards }) => {

  console.log(cards)

    const mappedCards = cards.map(card => (
        <Card key={card.subtitle} {...card} />
    ))

  return (
    <div className='container'>
        <h2>{title}</h2>
        <div className='card-grid'>
            {mappedCards}
        </div>
    </div>
  )
}

export default CardGridSection