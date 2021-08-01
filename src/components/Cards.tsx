import type { CardProps, CardsProps } from '../types/types'

function Card(props: CardProps): JSX.Element {
  return (
    <a
      className='flex flex-col self-center justify-center min-w-full pb-8 text-black transition-shadow ease-in-out border rounded-md duration-250 justify-self-center border-grey-600 hover:shadow hover:text-blue-600'
      href={props.link}
    >
      {props.imageSrc && (
        <div
          className={'rounded-t-md'}
          style={{
            backgroundImage: `url(${props.imageSrc})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '250px'
          }}
        />
      )}
      <h2 className='px-8 text-xl font-bold pt-7'>{props.title}</h2>
      {props.description && (
        <p className='px-8 pt-2 text-primary'>{props.description}</p>
      )}
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
      imageSrc={card.imageSrc}
    />
  ))

  return (
    <section className='grid max-w-screen-md grid-cols-1 gap-6 px-5 mx-auto md:grid-cols-2'>
      {mappedCards}
    </section>
  )
}
