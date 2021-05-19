export type CardProps = {
  title: string
  description: string
  link: string
}

export default function Card(props: CardProps) {
  return (
    <a className='tw-shadow-lg' href={props.link}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.description}</p>
    </a>
  )
}
