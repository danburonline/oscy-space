export type CardProps = {
  title: string
  description: string
  link?: string
  isNotDone?: boolean
}

export default function Card(props: CardProps) {
  return (
    <a
      className={
        'tw-justify-center tw-align-center tw-flex-col tw-self-center tw-justify-self-center tw-border border-grey-600 tw-rounded-md tw-p-8 tw-min-w-full tw-h-full hover:tw-border-blue-600 hover:tw-text-blue-600 tw-flex'
      }
      href={props.isNotDone ? '' : props.link}>
      <h2 className='tw-text-xl tw-font-bold'>{props.title} &rarr;</h2>
      <p className='tw-text-gray-800'>{props.description}</p>
    </a>
  )
}
