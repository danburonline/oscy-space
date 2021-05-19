import Card, { CardProps } from '../molecules/Card'

export type CardsProps = {
  cards: CardProps[]
}

export default function Cards(props: CardsProps) {
  const mappedCards = props.cards.map(card => (
    <Card
      key={Math.random()}
      title={card.title}
      description={card.description}
      link={card.link}
    />
  ))

  return (
    <section className='tw-grid tw-grid-cols-2 tw-gap-2 tw-'>
      {mappedCards}
    </section>
  )
}
