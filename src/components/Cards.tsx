import type { CardProps, CardsProps } from '../types/types'

function Card(props: CardProps): JSX.Element {
  return (
    <a
      className='flex flex-col self-center justify-center min-w-full p-8 text-black transition-shadow ease-in-out border rounded-md duration-250 justify-self-center border-grey-600 hover:shadow hover:text-blue-600'
      href={props.link}
    >
      <h2 className='text-xl font-bold'>{props.title} &rarr;</h2>
      {props.description && <p className='text-primary'>{props.description}</p>}
    </a>
  )
}

export default function Cards(props: CardsProps): JSX.Element {
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
