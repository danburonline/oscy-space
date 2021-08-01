export type CardsProps = {
  cards: CardProps[]
}

export type CardProps = {
  title: string
  description: string
  link?: string
  isNotDone?: boolean
}

function Card(props: CardProps): JSX.Element {
  return (
    <a
      className='flex flex-col self-center justify-center min-w-full p-8 text-white border rounded-md justify-self-center border-grey-600 hover:border-blue-600 hover:text-blue-600'
      href={props.isNotDone ? '' : props.link}
    >
      <h2 className='text-xl font-bold'>{props.title} &rarr;</h2>
      <p className='text-grey'>{props.description}</p>
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
