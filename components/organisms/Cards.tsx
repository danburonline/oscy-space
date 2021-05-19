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
    <section className='tw-grid tw-px-5 tw-grid-cols-1 tw-gap-6 tw-mx-auto tw-max-w-screen-md md:tw-grid-cols-2'>
      {mappedCards}
    </section>
  )
}
