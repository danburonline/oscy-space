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
    <section className='grid max-w-screen-md grid-cols-1 gap-6 px-5 mx-auto md:grid-cols-2'>
      {mappedCards}
    </section>
  )
}
