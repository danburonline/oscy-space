export type HeaderProps = {
  title: string
  linkText: string
  linkUrl: string
  subTitle: string
}

export default function Header(props: HeaderProps) {
  return (
    <header className='tw-mb-14'>
      <h1 className='tw-w-full tw-text-center tw-font-bold tw-text-5xl tw-px-10 md:tw-text-6xl'>
        {props.title}{' '}
        <a
          target='_blank'
          className='hover:tw-underline tw-text-blue-600'
          href={props.linkUrl}>
          {props.linkText}
        </a>
      </h1>
      <h2 className='tw-text-center tw-text-2xl md:tw-text-2xl tw-px-10 tw-mt-4 md:tw-font-semibold'>
        {props.subTitle}
      </h2>
    </header>
  )
}
