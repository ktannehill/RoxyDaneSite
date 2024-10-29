import Card from './Card'

const CardGridSection = ({ title, cards }) => {

    const mappedCards = cards.map(card => (
        <Card key={card.subtitle} {...card} />
    ))

  return (
    <div>
        <h2>{title}</h2>
        <div className='card-grid'>
            {mappedCards}
        </div>
    </div>
  )
}

export default CardGridSection